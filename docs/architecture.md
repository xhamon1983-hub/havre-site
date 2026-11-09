# Architecture (brouillon)

- Site statique HTML, hébergé sur Netlify, en français et en anglais :
  - index.html / en/index.html : le kit gratuit (présentation + formulaire « kit »).
  - projet.html / en/project.html : la vision de l'app, écrans maquettés en HTML/CSS,
    formulaire « participer » (famille pilote, professionnel, autre).
  - merci.html / en/thanks.html : page de remerciement. Par défaut, téléchargement du
    kit ; avec `?participer` (FR) ou `?participate` (EN), remerciement pour le
    formulaire « participer ».
  - confidentialite.html / en/privacy.html : politique de confidentialité.
  - 404.html : page d'erreur (chemins absolus, servie à n'importe quelle profondeur).
- Formulaires Netlify Forms : `kit` et `participer`, identiques dans les deux langues.
  Le champ caché `langue` (fr / en) indique la version utilisée ; les valeurs des
  listes sont les mêmes en FR et en EN pour faciliter le tri.
- Mesure d'audience : GoatCounter (sans cookies), code de site `havre-site`.
  Le compte doit être créé sur goatcounter.com avec ce code exact, sinon les
  visites ne sont simplement pas comptées (aucune erreur visible).
- Styles : tout est dans assets/css/havre.css (base commune, puis une section
  par page). Les pages FR et EN partagent les mêmes classes.
- Menu et pied de page recopiés dans chaque page : penser à les modifier partout.
- Kits PDF : assets/kit/kit-havre-maison.pdf (FR) et havre-home-kit.pdf (EN).
  - Sources : kit-source/kit-havre-maison.html et kit-source/havre-home-kit.html.
  - Regénérer les deux : `node kit-source/build-pdf.js` (nécessite Playwright).
  - Aperçus (apercu-*.jpg, preview-en-*.jpg) et images de partage
    (kit-partage.jpg, kit-share-en.jpg) à refaire si le contenu change.
- SEO : robots.txt (archive et pages de remerciement exclues), sitemap.xml,
  balises canonical et hreflang sur chaque page.
- Anciennes pages de l'app : archivées dans archive/maquettes-app-2025/
  (non liées, non indexées via _headers). Leurs anciennes adresses redirigent
  vers projet.html (voir _redirects).
- Documents de travail dans docs/ : e-mail du 7e jour, messages de lancement,
  tableau de suivi des familles (CSV), roadmap, notes.
- Données de prototype (pas encore branchées) : havre-config.json,
  assets/data/emotions.json, assets/data/missions.json.
