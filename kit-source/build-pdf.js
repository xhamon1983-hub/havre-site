// Génère les PDF du kit (français et anglais) à partir des sources HTML.
// Usage : node kit-source/build-pdf.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const KITS = [
  { src: 'kit-havre-maison.html', out: 'kit-havre-maison.pdf' },
  { src: 'havre-home-kit.html', out: 'havre-home-kit.pdf' },
];

(async () => {
  const outDir = path.join(__dirname, '..', 'assets', 'kit');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  for (const kit of KITS) {
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, kit.src));
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(outDir, kit.out),
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
    });
    await page.close();
    console.log('PDF généré : assets/kit/' + kit.out);
  }
  await browser.close();
})();
