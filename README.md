# Storybook (docs playground)

This folder runs Storybook **against the built Stencil output** in this repo.

## Prerequisites

- Node 18+
- Build the library at least once (so `dist/` and `loader/` exist):

```bash
npm run build
```

## Install

From the repo root:

```bash
cd doc
npm install
```

## Run Storybook

```bash
cd doc
npm run storybook
```

Storybook will:

- register Stencil components via `defineCustomElements()` (from `../loader`)
- load the global compiled CSS from `../dist/ds-components/ds-components.css`

## Build static docs

```bash
cd doc
npm run build
```

Output goes to `doc/storybook-static/` (default Storybook behavior).

## Notes

- If you change components/styles, re-run `npm run build` in the repo root so
  `dist/` updates.
- If you prefer a smoother workflow, run the library dev server in one terminal
  and Storybook in another.
