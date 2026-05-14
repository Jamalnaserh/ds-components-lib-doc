import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Absolute path to the installed `ds-components-lib` package root.
 *
 * Walks upward from `ds-components-lib/loader` until `package.json` has
 * `"name": "ds-components-lib"`. A single `path.dirname/../` is unsafe because
 * the resolved loader file may live under `dist/` (re-exports), which produced
 * `node_modules/dist/assets` in CI.
 *
 * Use this anywhere the doc app needs paths into the package (dist, assets),
 * including doc-only checkouts with no monorepo parent.
 */
export function resolveDsComponentsLibRoot() {
  let resolvedFile;
  try {
    resolvedFile = fileURLToPath(import.meta.resolve('ds-components-lib/loader'));
    console.log('✓ Resolved loader file:', resolvedFile);
  } catch (e) {
    console.error('✗ Failed to resolve ds-components-lib/loader:', e);
    throw new Error(
      'Could not resolve "ds-components-lib/loader". Run `npm ci` in the doc package and ensure "ds-components-lib" is in dependencies.',
      { cause: e },
    );
  }

  let dir = path.dirname(resolvedFile);
  console.log('📍 Starting directory:', dir);
  
  for (let depth = 0; depth < 20; depth++) {
    const pkgPath = path.join(dir, 'package.json');
    console.log(`  [Depth ${depth}] Checking: ${pkgPath}`);
    
    if (fs.existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        console.log(`    → Found package.json with name: "${pkg.name}"`);
        
        if (pkg.name === 'ds-components-lib') {
          console.log('✓ Found ds-components-lib root at:', dir);
          return dir;
        }
      } catch (e) {
        console.warn(`    → Invalid JSON in ${pkgPath}:`, e.message);
      }
    }
    
    const parent = path.dirname(dir);
    if (parent === dir) {
      console.warn('⚠ Reached filesystem root without finding ds-components-lib');
      break;
    }
    dir = parent;
  }

  throw new Error(
    `Could not find ds-components-lib package.json above: ${resolvedFile}`,
  );
}
