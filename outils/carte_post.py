#!/usr/bin/env python3
"""Fabrique le visuel carré (1080x1080, JPEG) d'un post quand Fred n'a pas fourni de photo.
Usage : python3 outils/carte_post.py "Titre" "Sous-titre court" posts/img/AAAA-MM-JJ.jpg
Style du site : fond blanc, soleil rouge du logo, encre noire."""
import pathlib, sys
from PIL import Image, ImageDraw, ImageFont

RACINE = pathlib.Path(__file__).resolve().parent.parent
ROUGE, NOIR, GRIS = (232, 57, 46), (0, 0, 0), (85, 83, 79)
POLICES_TITRE = ["/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"]
POLICES_TEXTE = ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"]


def police(liste, taille):
    for chemin in liste:
        if pathlib.Path(chemin).exists():
            return ImageFont.truetype(chemin, taille)
    return ImageFont.load_default(taille)


def carte(titre, sous_titre, sortie):
    W = 1080
    img = Image.new("RGB", (W, W), "white")
    d = ImageDraw.Draw(img)
    d.ellipse((W - 520, -160, W + 260, 620), fill=ROUGE)  # soleil
    logo = Image.open(RACINE / "logo.png").convert("RGBA").resize((300, 300))
    img.paste(logo, (W - 360, 70), logo)
    def couper(texte, f, largeur):
        lignes, cur = [], ""
        for mot in texte.split():
            essai = (cur + " " + mot).strip()
            if d.textlength(essai, font=f) <= largeur or not cur:
                cur = essai
            else:
                lignes.append(cur); cur = mot
        return lignes + ([cur] if cur else [])

    f_txt = police(POLICES_TEXTE, 38)
    sous = couper(sous_titre, f_txt, W - 160)[:3]
    bas_sous = W - 190                      # le sous-titre finit au-dessus du pied de page
    haut_sous = bas_sous - 52 * len(sous)
    taille = 104
    while True:                              # le titre doit tenir entre y=440 et le sous-titre
        f_titre = police(POLICES_TITRE, taille)
        lignes = couper(titre, f_titre, W - 160)
        hauteur = int(taille * 1.12) * len(lignes)
        if haut_sous - 30 - hauteur >= 440 or taille <= 48:
            break
        taille -= 6
    y = haut_sous - 30 - hauteur
    for l in lignes:
        d.text((80, y), l, font=f_titre, fill=NOIR)
        y += int(taille * 1.12)
    y = haut_sous
    for l in sous:
        d.text((80, y), l, font=f_txt, fill=GRIS)
        y += 52
    d.rectangle((80, W - 150, 200, W - 144), fill=ROUGE)
    d.text((80, W - 120), "Sensei Karaté Do · Haussy · senseikaratedo.fr", font=police(POLICES_TEXTE, 34), fill=NOIR)
    pathlib.Path(sortie).parent.mkdir(parents=True, exist_ok=True)
    img.save(sortie, "JPEG", quality=88)
    print(sortie)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    carte(sys.argv[1], sys.argv[2], sys.argv[3])
