import fs from 'node:fs';
import path from 'node:path';
import { resolveDsComponentsLibRoot } from './resolve-ds-lib-root.mjs';

function readIconSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => /^icon-.*\.svg$/i.test(f))
    .map((f) => f.replace(/^icon-/i, '').replace(/\.svg$/i, ''))
    .sort((a, b) => a.localeCompare(b));
}

const docRoot = path.resolve(import.meta.dirname, '..');
const libRoot = resolveDsComponentsLibRoot();
const distDir = path.join(libRoot, 'dist', 'assets', 'icon');

const iconNames = readIconSlugs(distDir);

const outDir = path.join(docRoot, 'public');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'icon-names.json');

fs.writeFileSync(outPath, JSON.stringify({ iconNames }, null, 2), 'utf8');
console.log(`[storybook] wrote ${iconNames.length} icons → ${path.relative(docRoot, outPath)}`);
