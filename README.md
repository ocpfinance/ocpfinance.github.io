# Groupe OCP — site statique une page

Copie statique de [groupeocp.com](https://groupeocp.com) sans WordPress : une seule page
(`index.html`) qui regroupe l’accueil, l’immobilier (avec la carte des implantations),
l’innovation, le cinéma et les mentions légales.

## Structure

```
index.html                 page unique (navigation par ancres)
assets/css/style.css       styles (Montserrat, palette du site d’origine)
assets/js/main.js          menu, sliders, chiffres animés, carte, fenêtre implantations
assets/images/             toutes les images du site (~46 Mo)
assets/vendor/leaflet/     Leaflet 1.9.4 (carte), hébergé localement
_old/                      ancienne version multi-pages, conservée pour référence
```

## Dépendances externes au chargement

- Google Fonts (Montserrat)
- Tuiles de carte OpenStreetMap (`tile.openstreetmap.org`), affichées en niveaux de gris

Aucun cookie, aucun script de mesure d’audience.

## Mise à jour des implantations

La liste (nom, coordonnées GPS, photos) est dans le tableau `IMPLANTATIONS` en tête de
`assets/js/main.js`. Les photos sont à déposer dans `assets/images/`.

## Déploiement

Hébergé sur GitHub Pages (dépôt `ocpfinance/ocpfinance.github.io`, branche `main`) :
chaque push sur `main` publie le site. `_old/` n’est pas versionné.
Test local : `python3 -m http.server 8000` puis http://localhost:8000/.
