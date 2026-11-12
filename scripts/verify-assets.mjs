#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');

// 1. Determine Expected Base Path
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const expectedBasePath =
  envBasePath !== undefined
    ? envBasePath
    : process.env.NODE_ENV === 'production'
    ? '/landing-next'
    : '/landing-next';

console.log('🔍 Running static asset verification...');
console.log(`📁 Target directory: ${outDir}`);
console.log(`🌐 Expected base path prefix: "${expectedBasePath || '/'}"\n`);

if (!fs.existsSync(outDir)) {
  console.error(`❌ Error: Export output directory "${outDir}" does not exist. Run "next build" first.`);
  process.exit(1);
}

const errors = [];
let checkedAssetsCount = 0;

// Helper to recursively find files matching an extension
function findFiles(dir, extensions) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

// -------------------------------------------------------------
// CHECK 1: Verify all HTML pages in out/
// -------------------------------------------------------------
const htmlFiles = findFiles(outDir, ['.html']);

for (const htmlFile of htmlFiles) {
  const relHtml = path.relative(outDir, htmlFile);
  const content = fs.readFileSync(htmlFile, 'utf8');

  // Match src="..." and fallbackSrc="..." for images and static assets, as well as href="..." for icons/manifests
  const assetRegex = /(?:src|fallbackSrc|href)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|ico|gif|json|webmanifest)(?:\?[^"']*)?)["']/gi;
  let match;

  while ((match = assetRegex.exec(content)) !== null) {
    const assetUrl = match[1];

    // Ignore remote / data URLs
    if (
      assetUrl.startsWith('http://') ||
      assetUrl.startsWith('https://') ||
      assetUrl.startsWith('data:') ||
      assetUrl.startsWith('blob:')
    ) {
      continue;
    }

    checkedAssetsCount++;

    // Strip query strings or hashes
    const cleanUrl = assetUrl.split('?')[0].split('#')[0];

    // Check for missing base path
    if (expectedBasePath && expectedBasePath !== '') {
      if (
        cleanUrl.startsWith('/img/') ||
        cleanUrl.startsWith('/assets/') ||
        cleanUrl === '/logo.svg' ||
        cleanUrl === '/logo.png' ||
        cleanUrl === '/favicon.ico' ||
        cleanUrl === '/apple-icon.png' ||
        cleanUrl === '/icon.png' ||
        cleanUrl === '/icon-192.png' ||
        cleanUrl === '/icon-512.png' ||
        cleanUrl === '/manifest.json'
      ) {
        errors.push({
          file: relHtml,
          asset: cleanUrl,
          reason: `Missing base path prefix: expected path to start with "${expectedBasePath}". Got "${cleanUrl}". This will 404 on GitHub Pages!`,
        });
        continue;
      }
    }

    // Check file existence on disk
    let localFilePath = cleanUrl;
    if (expectedBasePath && localFilePath.startsWith(expectedBasePath)) {
      localFilePath = localFilePath.slice(expectedBasePath.length);
    }
    if (localFilePath.startsWith('/')) {
      localFilePath = localFilePath.slice(1);
    }

    const diskPath = path.join(outDir, localFilePath);
    if (!fs.existsSync(diskPath)) {
      errors.push({
        file: relHtml,
        asset: cleanUrl,
        reason: `Asset does not exist on disk: checked "${diskPath}".`,
      });
    }
  }
}

// -------------------------------------------------------------
// CHECK 2: Source Code Guardrail (components, features, app)
// Catches raw unwrapped JSX like <Image src="/img/..." /> at build time
// -------------------------------------------------------------
const srcDirs = ['features', 'components', 'app'].map((d) => path.join(rootDir, d));
for (const dir of srcDirs) {
  if (!fs.existsSync(dir)) continue;
  const sourceFiles = findFiles(dir, ['.tsx', '.ts']);
  for (const srcFile of sourceFiles) {
    const relSrc = path.relative(rootDir, srcFile);
    const lines = fs.readFileSync(srcFile, 'utf8').split('\n');
    lines.forEach((line, lineIdx) => {
      // Look for src="/img/..." or fallbackSrc="/img/..." without getAssetPath
      const unwrappedMatch = /(?:src|fallbackSrc)=["'](\/(?:img|assets)\/[^"']+)["']/.exec(line);
      if (unwrappedMatch) {
        errors.push({
          file: `${relSrc}:${lineIdx + 1}`,
          asset: unwrappedMatch[1],
          reason: `Unwrapped static asset in JSX: "${unwrappedMatch[1]}". Wrap with getAssetPath("${unwrappedMatch[1]}") from "@/lib/basePath".`,
        });
      }
    });
  }
}

// -------------------------------------------------------------
// REPORT RESULTS
// -------------------------------------------------------------
if (errors.length > 0) {
  console.error('\n❌ ASSET VERIFICATION FAILED!\n');
  console.error(`Found ${errors.length} issue(s) that could cause broken images on GitHub Pages:\n`);
  errors.forEach((err, idx) => {
    console.error(`  ${idx + 1}. [${err.file}]`);
    console.error(`     Asset:  ${err.asset}`);
    console.error(`     Issue:  ${err.reason}\n`);
  });
  process.exit(1);
}

console.log(`✅ ASSET VERIFICATION PASSED!`);
console.log(`   Validated ${checkedAssetsCount} asset references in static output.`);
console.log(`   0 missing files, 0 broken paths, 0 un-prefixed GitHub Pages assets.\n`);
process.exit(0);
