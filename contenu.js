/* =========================================================
   CONTENU DE LA RUBRIQUE « APPRENDRE » — Sensei Karaté Do
   Pour ajouter une fiche : copier une ligne { ... }, la coller
   dans la bonne liste, changer le texte. Rien d'autre à toucher.
   ========================================================= */
window.CONTENU = {

  /* CEINTURE DU MOIS
     debut = lundi de la semaine 1 (AAAA-MM-JJ). Le site affiche la semaine en cours tout seul.
     Pour passer à la ceinture suivante : remplacer ce bloc. */
  ceintureDuMois: {
    ceinture: "Blanche",
    couleur: "#FFFFFF",
    debut: "2026-11-02",
    intro: "La plus belle, car on découvre le karaté avec ses rêves et ses envies. On découvre le respect, le salut, les partenaires, le premier déplacement et le premier coup de poing.",
    semaines: [
      { titre: "Le salut", texte: "Tout commence et tout finit par le salut : en entrant au dojo, au début et à la fin du cours, devant chaque partenaire.",
        points: ["Debout (ritsu-rei) : talons joints, mains le long des cuisses, on s'incline sans quitter l'autre des yeux.",
                 "À genoux (za-rei) : depuis seiza, les mains se posent devant soi, on s'incline, dos droit.",
                 "On salue avec sérieux, jamais à la va-vite."] },
      { titre: "Le partenaire", texte: "Sans partenaire, pas de progrès. On travaille avec lui, pas contre lui.",
        points: ["On salue avant et après chaque exercice.",
                 "On contrôle ses techniques : on ne cherche pas à faire mal.",
                 "On aide celui qui débute, comme on a été aidé."] },
      { titre: "Le premier déplacement", texte: "On apprend à avancer en zenkutsu-dachi, la position avant.",
        points: ["Genou avant au-dessus du pied, jambe arrière tendue.",
                 "Les hanches restent à la même hauteur pendant le déplacement.",
                 "Le pied qui avance passe près du pied d'appui avant de se reposer."] },
      { titre: "Le premier coup de poing", texte: "Choku-zuki, le coup de poing direct, sur place, en heiko-dachi.",
        points: ["Poing bien fermé : les doigts repliés, le pouce par-dessus.",
                 "L'autre main revient à la hanche (hikite) en même temps.",
                 "Le poing tourne à la toute fin, épaules basses, on expire."] }
    ]
  },

  /* Mots du dojo : jp = mot japonais, dire = prononciation, sens = traduction */
  lexique: [
    { jp: "Rei",         dire: "rèï",          sens: "Salut. On salue en entrant et en sortant du dojo." },
    { jp: "Oss",         dire: "oss",          sens: "J'ai compris, je suis prêt. Marque l'engagement." },
    { jp: "Sensei",      dire: "sèn-sèï",      sens: "Professeur, celui qui est né avant." },
    { jp: "Senpai",      dire: "sèn-païe",     sens: "Élève plus ancien, qui montre l'exemple." },
    { jp: "Dojo",        dire: "do-djo",       sens: "Lieu où l'on étudie la voie." },
    { jp: "Karategi",    dire: "ka-ra-té-gui", sens: "La tenue de karaté (on dit souvent kimono)." },
    { jp: "Obi",         dire: "o-bi",         sens: "La ceinture." },
    { jp: "Seiza",       dire: "sèï-za",       sens: "Position assise à genoux." },
    { jp: "Mokuso",      dire: "mo-kou-so",    sens: "Yeux fermés, on se concentre en silence." },
    { jp: "Yoi",         dire: "yoï",          sens: "Prêt ! Position d'attente." },
    { jp: "Hajime",      dire: "ha-dji-mé",    sens: "Commencez !" },
    { jp: "Yame",        dire: "ya-mé",        sens: "Stop !" },
    { jp: "Kiai",        dire: "ki-aï",        sens: "Le cri qui concentre l'énergie." },
    { jp: "Kime",        dire: "ki-mé",        sens: "La décision : toute la force au point d'impact." },
    { jp: "Zanshin",     dire: "zan-chine",    sens: "Rester vigilant après la technique." },
    { jp: "Kihon",       dire: "ki-onne",      sens: "Les techniques de base." },
    { jp: "Kata",        dire: "ka-ta",        sens: "Enchaînement codifié contre des adversaires imaginaires." },
    { jp: "Kumite",      dire: "kou-mi-té",    sens: "Le combat, avec un partenaire." },
    { jp: "Ichi, ni, san", dire: "i-tchi, ni, sanne", sens: "Un, deux, trois." },
    { jp: "Shi, go, roku", dire: "chi, go, ro-kou",  sens: "Quatre, cinq, six." },
    { jp: "Shichi, hachi", dire: "chi-tchi, ha-tchi", sens: "Sept, huit." },
    { jp: "Ku, ju",      dire: "kou, djou",    sens: "Neuf, dix." }
  ],

  /* Techniques de base : groupe = Positions / Coups de poing / Blocages / Coups de pied */
  kihon: [
    { groupe: "Positions", jp: "Heiko-dachi",    sens: "Position naturelle, pieds parallèles écartés largeur d'épaules." },
    { groupe: "Positions", jp: "Zenkutsu-dachi", sens: "Position avant : genou avant fléchi, jambe arrière tendue." },
    { groupe: "Positions", jp: "Kokutsu-dachi",  sens: "Position arrière : le poids surtout sur la jambe arrière." },
    { groupe: "Positions", jp: "Kiba-dachi",     sens: "Position du cavalier : pieds parallèles, genoux poussés vers l'extérieur." },
    { groupe: "Coups de poing", jp: "Oi-zuki",     sens: "Coup de poing en avançant, du même côté que la jambe avant." },
    { groupe: "Coups de poing", jp: "Gyaku-zuki",  sens: "Coup de poing du bras opposé à la jambe avant, avec rotation des hanches." },
    { groupe: "Coups de poing", jp: "Kizami-zuki", sens: "Coup de poing rapide du bras avant." },
    { groupe: "Blocages", jp: "Gedan-barai", sens: "Balayage vers le bas, protège le ventre et les jambes." },
    { groupe: "Blocages", jp: "Age-uke",     sens: "Blocage montant, protège le visage." },
    { groupe: "Blocages", jp: "Soto-uke",    sens: "Blocage de l'extérieur vers l'intérieur, niveau moyen." },
    { groupe: "Blocages", jp: "Uchi-uke",    sens: "Blocage de l'intérieur vers l'extérieur, niveau moyen." },
    { groupe: "Blocages", jp: "Shuto-uke",   sens: "Blocage avec le tranchant de la main, souvent en kokutsu-dachi." },
    { groupe: "Coups de pied", jp: "Mae-geri",      sens: "Coup de pied de face." },
    { groupe: "Coups de pied", jp: "Mawashi-geri",  sens: "Coup de pied circulaire." },
    { groupe: "Coups de pied", jp: "Yoko-geri",     sens: "Coup de pied de côté (keage : fouetté, kekomi : pénétrant)." },
    { groupe: "Coups de pied", jp: "Ushiro-geri",   sens: "Coup de pied arrière." }
  ],

  /* Katas Shotokan : mouv = nombre de mouvements */
  katas: [
    { nom: "Heian Shodan", sens: "Esprit paisible, 1er niveau", mouv: 21, note: "Le premier kata : gedan-barai, oi-zuki, age-uke, shuto-uke." },
    { nom: "Heian Nidan",  sens: "Esprit paisible, 2e niveau", mouv: 26, note: "Apparition de mae-geri et yoko-geri." },
    { nom: "Heian Sandan", sens: "Esprit paisible, 3e niveau", mouv: 20, note: "Travail en kiba-dachi et blocages combinés." },
    { nom: "Heian Yondan", sens: "Esprit paisible, 4e niveau", mouv: 27, note: "Plus de rythme et d'équilibre." },
    { nom: "Heian Godan",  sens: "Esprit paisible, 5e niveau", mouv: 23, note: "Se termine par un saut." },
    { nom: "Tekki Shodan", sens: "Cavalier de fer, 1er niveau", mouv: 29, note: "Entièrement en kiba-dachi, déplacements latéraux." },
    { nom: "Bassai Dai",   sens: "Prendre la forteresse", mouv: 42, note: "Kata de ceinture marron et noire, puissant." },
    { nom: "Kanku Dai",    sens: "Regarder le ciel", mouv: 65, note: "Le plus long des katas de base." },
    { nom: "Jion",         sens: "Nom d'un temple", mouv: 47, note: "Kata solide et ancré." },
    { nom: "Empi",         sens: "Vol de l'hirondelle", mouv: 37, note: "Changements de hauteur rapides." }
  ],

  /* Nunchaku : rubrique en construction, on ajoute au fur et à mesure */
  nunchaku: [
    { titre: "On commence en mousse", texte: "Toujours un nunchaku en mousse pour débuter : on apprend les gestes sans risque de se blesser." },
    { titre: "Bien le tenir", texte: "On le tient par le haut d'une branche, sans serrer, pour garder le contrôle." },
    { titre: "Les premiers balancements", texte: "Lents et réguliers, d'un côté puis de l'autre, avant de chercher la vitesse." }
  ]
};
