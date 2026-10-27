// Génère assets/kit/kit-havre-maison.pdf à partir de kit-havre-maison.html.
// Usage : node kit-source/build-pdf.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const src = path.join(__dirname, 'kit-havre-maison.html');
  const outDir = path.join(__dirname, '..', 'assets', 'kit');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + src);
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(outDir, 'kit-havre-maison.pdf'),
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log('PDF généré : assets/kit/kit-havre-maison.pdf');
})();
