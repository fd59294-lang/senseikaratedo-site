/* Sensei Karaté Do — envoi des formulaires (cours d'essai, boutique) par e-mail.
   POST /envoi -> e-mail à senseikaratedo59@gmail.com via Cloudflare Email Routing.
   Tout le reste : fichiers du site (ASSETS). Remplace Formspree (compte bloqué le 9/11/2026). */
import { EmailMessage } from 'cloudflare:email';

const EXPEDITEUR = 'site@senseikaratedo.fr';
const DESTINATAIRE = 'senseikaratedo59@gmail.com';
const MAX = 20000; // caractères au total

const b64 = s => {
  const o = new TextEncoder().encode(s);
  let bin = ''; for (const c of o) bin += String.fromCharCode(c);
  return btoa(bin);
};
const enTete = s => '=?UTF-8?B?' + b64(s) + '?=';
const propre = s => String(s || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 200);
const json = (o, status = 200) => new Response(JSON.stringify(o), {
  status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
});

async function envoi(request, env) {
  const origine = request.headers.get('origin') || '';
  if (origine && !/^https:\/\/(www\.)?senseikaratedo\.fr$|^https:\/\/senseikaratedo-site\.[a-z0-9-]+\.workers\.dev$|^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origine))
    return json({ ok: false, erreur: 'origine' }, 403);

  let data;
  try { data = await request.formData(); } catch (_) { return json({ ok: false, erreur: 'format' }, 400); }

  if (data.get('site_web')) return json({ ok: true }); // piège à robots : on fait semblant

  const champs = [];
  let taille = 0;
  for (const [k, v] of data.entries()) {
    if (k.startsWith('_') || k === 'site_web' || typeof v !== 'string') continue;
    taille += k.length + v.length;
    if (taille > MAX) return json({ ok: false, erreur: 'taille' }, 413);
    champs.push([k, v.trim()]);
  }
  const val = k => (champs.find(c => c[0] === k) || [])[1] || '';
  if (!val('nom') || !val('telephone')) return json({ ok: false, erreur: 'champs' }, 400);

  // Filtre 1 : téléphone français (06 12 34 56 78, +33…) ou belge (+32…)
  const tel = val('telephone').replace(/[\s.\-()]/g, '');
  if (!/^0[1-9]\d{8}$|^(\+|00)33[1-9]\d{8}$|^(\+|00)32\d{8,9}$/.test(tel))
    return json({ ok: false, erreur: 'telephone' }, 400);

  // Filtre 2 : un lien dans le message = démarchage. Jeté sans prévenir l'expéditeur.
  if (champs.some(([k, v]) => k !== 'email' && /https?:\/\/|www\.|\.(com|net|io|ai)\b/i.test(v)))
    return json({ ok: true });

  const sujet = propre(data.get('_subject')) || `Demande de cours d'essai – ${propre(val('nom'))}`;
  const email = propre(val('email'));
  const corps = champs.map(([k, v]) => `${k.replace(/_/g, ' ').toUpperCase()} :\n${v}`).join('\n\n')
    + `\n\n--\nEnvoyé depuis senseikaratedo.fr le ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}`;

  const lignes = [
    `From: ${enTete('Site Sensei Karaté Do')} <${EXPEDITEUR}>`,
    `To: <${DESTINATAIRE}>`,
    /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? `Reply-To: <${email}>` : null,
    `Subject: ${enTete(sujet)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@senseikaratedo.fr>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64(corps).replace(/.{76}/g, '$&\r\n')
  ].filter(l => l !== null);

  try {
    await env.MAIL.send(new EmailMessage(EXPEDITEUR, DESTINATAIRE, lignes.join('\r\n')));
  } catch (e) {
    console.error('envoi', e && e.message);
    return json({ ok: false, erreur: 'envoi' }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/envoi') {
      if (request.method !== 'POST') return json({ ok: false, erreur: 'methode' }, 405);
      return envoi(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};
