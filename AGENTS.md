# AGENTS.md

Personal CV / portfolio site: one static page per language, Astro 7 + Tailwind CSS v4, no
client framework, no tests. Git repo on `main`, tracking `origin`
(https://github.com/NeRo0128/NeRo0128.io).

## Commands

- `npm run build` — the only real verification step. Builds `/` (ES) and `/en/` into `dist/`.
- `npx astro dev --background` — start the dev server detached, then `npx astro dev status`,
  `npx astro dev logs`, `npx astro dev stop`. `astro` is not on PATH, and plain `npm run dev`
  runs in the foreground and blocks the session.
- `npm run preview` — serve the built `dist/`.
- There is no `test`, `lint`, or `typecheck` script. `npx astro check` fails until
  `@astrojs/check` and `typescript` are added as dev deps.

## Where things live

- `src/pages/index.astro` (ES → `/`) and `src/pages/en/index.astro` (EN → `/en/`) are
  hand-duplicated, not generated: same component tree, different `const lang`. Every page or
  route change must be applied to both files.
- `src/i18n/ui.ts` holds all UI strings. `UIKey` is derived from the `es` object, so a new key
  must be added to both `es` and `en` or types break.
- Section content (services, case studies, timeline) lives in `src/data/*.ts` as
  `Record<Lang, …>`. Edit copy there, not inside the components.
- `Header.astro` is the one component that derives `lang` itself (via `getLangFromUrl(Astro.url)`);
  `Hero`, `Services`, `CaseStudies`, `Timeline`, `ContactForm`, `Footer` all take a `lang` prop
  from the page. Keep that split when adding components.
- `src/styles/global.css` is the Tailwind v4 config: `@theme` design tokens
  (`bg-surface-card`, `text-brand-orange`, `border-border-medium`, `font-mono`, …) plus custom
  classes (`reveal-item`, `bg-tech-grid`, `glow-*`, `case-card-overlay`). There is no
  `tailwind.config.js` at the root — add tokens here, not in a config file.
- The site is dark-only by design: `<html class="scroll-smooth dark">`, matching
  `@custom-variant dark` in `global.css`.
- Fonts are self-hosted through `@fontsource/*` imports in `src/layouts/Layout.astro`; icons
  are Material Symbols ligatures via `src/components/ui/Icon.astro` (`<Icon name="bolt" />`).
  Don't add Google Fonts or CDN links.

## Gotchas

- The contact form is a stub. Its submit handler only fakes success after a `setTimeout`
  (see the `TODO` in `src/components/ContactForm.astro`); no backend exists. Don't "fix" it
  unless wiring a real endpoint is explicitly requested.
- `bak/` is a previous Tailwind v3 + `build.js` version of the same site, kept for reference.
  It is not part of the Astro build: don't edit it, don't run its npm scripts, and don't copy
  its `tailwind.config.js` / `postcss.config.js` into the root.
- `.venv/` belongs to another project (its `pyvenv.cfg` points at `../porfolio`), and `.astro/`
  is generated. Ignore both.
- Deployment target is Vercel from the `main` branch. The Astro preset is auto-detected
  (build `npm run build`, static output `dist/`); there is no Astro adapter, no `vercel.json`
  and no env vars, and none are needed while the site stays static. Vercel only offers Node
  22.x/24.x majors, so `engines.node` `>=22.23.4` resolves to its default 24.x there.
- `.gitignore` deliberately excludes `dist/`, `.astro/`, `.venv/` and `bak/`.
- Requires Node >= 22.23.4 (`engines`).
