const fs = require('fs');
const path = require('path');

const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === 'true';

if (!isStaticExport) {
  console.log('[post-export] Skipping: NEXT_OUTPUT_EXPORT is not set to true.');
  process.exit(0);
}

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, 'out');
const defaultLocale = process.env.NEXT_DEFAULT_LOCALE ?? 'pt';

if (!fs.existsSync(outDir)) {
  console.error('[post-export] "out" directory not found. Ensure the export step ran before this script.');
  process.exit(1);
}

const localeDir = path.join(outDir, defaultLocale);
const localeIndex = path.join(localeDir, 'index.html');
const localeIndexTxt = path.join(localeDir, 'index.txt');
const rootIndex = path.join(outDir, 'index.html');
const rootIndexTxt = path.join(outDir, 'index.txt');

if (!fs.existsSync(localeIndex)) {
  console.error(`[post-export] Expected ${localeIndex} to exist. Cannot create root index.`);
  process.exit(1);
}

fs.copyFileSync(localeIndex, rootIndex);
console.log(`[post-export] Copied ${path.relative(projectRoot, localeIndex)} -> ${path.relative(projectRoot, rootIndex)}`);

if (fs.existsSync(localeIndexTxt)) {
  fs.copyFileSync(localeIndexTxt, rootIndexTxt);
  console.log(
    `[post-export] Copied ${path.relative(projectRoot, localeIndexTxt)} -> ${path.relative(projectRoot, rootIndexTxt)}`
  );
}

console.log('[post-export] Root index ready for static hosting.');
