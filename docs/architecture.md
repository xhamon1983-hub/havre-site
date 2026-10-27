# Architecture (brouillon)

- Site statique HTML, hébergé sur Netlify, en français et en anglais :
  - index.html / en/index.html : le kit gratuit (présentation + formulaire).
  - projet.html / en/project.html : la vision de l'app HAVRE.
  - merci.html / en/thanks.html : téléchargement du kit après inscription.
- Formulaire Netlify Forms « kit », identique dans les deux langues. Le champ
  caché `langue` (fr / en) indique la version utilisée. Les choix des listes
  envoient les mêmes valeurs dans les deux langues.
- Styles : tout est dans assets/css/havre.css (base commune, puis une section
  par page). Les pages FR et EN partagent les mêmes classes.
- Menu et pied de page recopiés dans les 6 pages : penser à les modifier partout.
- Kits PDF : assets/kit/kit-havre-maison.pdf (FR) et havre-home-kit.pdf (EN).
  - Sources : kit-source/kit-havre-maison.html et kit-source/havre-home-kit.html.
  - Regénérer les deux : `node kit-source/build-pdf.js` (nécessite Playwright).
  - Aperçus (apercu-*.jpg, preview-en-*.jpg) et images de partage
    (kit-partage.jpg, kit-share-en.jpg) à refaire si le contenu change.
- Anciennes pages de l'app : archivées dans archive/maquettes-app-2025/
  (non liées, non indexées via _headers). Leurs anciennes adresses redirigent
  vers projet.html (voir _redirects).
- Données de prototype (pas encore branchées) : havre-config.json,
  assets/data/emotions.json, assets/data/missions.json.
