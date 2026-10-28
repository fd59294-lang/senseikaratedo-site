# Site du club Sensei Karaté Do (Haussy, Nord)

Site statique publié sur Cloudflare Pages (domaine senseikaratedo.fr). Chaque push sur `main` est mis en ligne automatiquement.

- `index.html` : la page du site
- `mentions-legales.html` : mentions légales et données personnelles
- `contenu.js` : tout le contenu évolutif (voir ci-dessous)
- `docs/` : documents d'inscription (règlement, licence, santé), à ne pas modifier sans Fred
- `medias/` : photos et vidéos du club (enfants de dos ou avec accord des parents, jamais de nom)
- `partage.png` : image d'aperçu quand le lien est partagé (1200×630)
- `hymne.mp3` : l'hymne du club

## contenu.js

| Bloc | Rôle | Mis à jour par |
|---|---|---|
| `annonce` | Bandeau éphémère en haut, masqué seul à partir de `finLe` | Fred, à la demande |
| `galerie` | Photos et vidéos (fichiers dans `medias/` ou liens YouTube) | Fred, à la demande |
| `passSport` | Encart Pass'Sport dans les tarifs, masqué seul à partir de `finLe` | Chaque saison |
| `actu` | « Cette semaine au dojo », même thème que le post du lundi | Tâche du lundi |
| `competition` | Classement de Julie, palmarès, calendrier kata | Tâche du lundi |
| `ceintureDuMois` | Ceinture étudiée, 4 semaines | Fred (programme), affiché seul |
| `lexique`, `kihon`, `katas`, `nunchaku` | Fiches de la rubrique Apprendre | Tâche du lundi (une fiche par semaine) |

Vérifier après chaque modification :

    node -e "global.window={};require('./contenu.js');if(!window.CONTENU.competition||!window.CONTENU.ceintureDuMois)process.exit(1)"
