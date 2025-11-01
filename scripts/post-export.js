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
const candidateHtml = [
  path.join(localeDir, 'index.html'),
  path.join(outDir, `${defaultLocale}.html`)
];
const candidateTxt = [
  path.join(localeDir, 'index.txt'),
  path.join(outDir, `${defaultLocale}.txt`)
];
const rootIndex = path.join(outDir, 'index.html');
const rootIndexTxt = path.join(outDir, 'index.txt');

const resolvedHtml = candidateHtml.find((filePath) => fs.existsSync(filePath));
if (!resolvedHtml) {
  console.error(
    `[post-export] Expected one of ${candidateHtml
      .map((filePath) => path.relative(projectRoot, filePath))
      .join(', ')} to exist. Cannot create root index.`
  );
  process.exit(1);
}

fs.copyFileSync(resolvedHtml, rootIndex);
console.log(
  `[post-export] Copied ${path.relative(projectRoot, resolvedHtml)} -> ${path.relative(projectRoot, rootIndex)}`
);

const resolvedTxt = candidateTxt.find((filePath) => fs.existsSync(filePath));
if (resolvedTxt) {
  fs.copyFileSync(resolvedTxt, rootIndexTxt);
  console.log(
    `[post-export] Copied ${path.relative(projectRoot, resolvedTxt)} -> ${path.relative(projectRoot, rootIndexTxt)}`
  );
}

console.log('[post-export] Root index ready for static hosting.');
