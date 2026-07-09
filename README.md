# ui-lib-doc (local docs)

This folder is the **[ui-lib-doc](https://repos.stc.com.sa/projects/NG-GENERAL/repos/ui-lib-doc/browse)** repository, cloned into `doc/` inside the library repo. It runs against the built Stencil output in the parent project.

**Live docs:** [ds-components-lib-doc](https://jamalnaserh.github.io/ds-components-lib-doc/?path=/docs/foundations-colors--docs)

## First-time setup

From the **library repo root** (if `doc/` is missing):

```bash
git clone https://repos.stc.com.sa/scm/ng-general/ui-lib-doc.git doc
cd doc && npm install
```

## Prerequisites

- Node 18+
- Build the library at least once (so `dist/` and `loader/` exist):

```bash
# from repo root
npm run build
```

## Run locally

```bash
cd doc
npm run storybook
```

This will:

- register Stencil components via `defineCustomElements()` (from `../loader`)
- load the global compiled CSS from `../dist/ds-components/ds-components.css`

Or from the repo root:

```bash
npm run storybook
```

## Build static docs

```bash
cd doc
npm run build
```

Output goes to `doc/storybook-static/`.

## Notes

- If you change components/styles, re-run `npm run build` in the repo root so `dist/` updates.
- For a smoother workflow, run the library dev server in one terminal and docs in another.

## Icons

Icons live in the library at `../src/assets/icon/`. After adding or updating icons in the lib repo, see **[HOW-TO-UPDATE-ICONS.md](../HOW-TO-UPDATE-ICONS.md)** in the repo root.

When a new **ds-components-lib** version is published:

```bash
# From repo root (or use lib:sync for full workflow)
npm run lib:sync
```

That bumps `doc/package.json`, runs `npm install`, and `npm run build` (includes `generate:icons` for the icon manifest).
