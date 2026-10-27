# Architecture (brouillon)

- HTML statique, une page = un fichier autonome (CSS et JS intégrés dans la page).
- Pages : index, ecran-enfant, mascotte-enfant, mascotte-parents,
  havre-parent-mockups, havrepro, securite.
- Kit gratuit : kit.html (formulaire e-mail Netlify Forms « kit ») → merci.html
  (téléchargement de assets/kit/kit-havre-maison.pdf).
  - Source du PDF : kit-source/kit-havre-maison.html.
  - Regénérer le PDF : `node kit-source/build-pdf.js` (nécessite Playwright).
  - Les aperçus assets/kit/apercu-*.jpg et kit-partage.jpg sont à refaire
    si le contenu du kit change.
- Images : assets/img/logo-havre.png (logo + image de partage réseaux sociaux).
- Données de prototype (pas encore branchées aux pages) : havre-config.json,
  assets/data/emotions.json, assets/data/missions.json.
- Hébergement Netlify ; redirections dans _redirects.
