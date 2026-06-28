# Wroughtery — studio site + Orbital product page

The Wroughtery studio identity (the forge "umbrella") and the **Orbital** product
page (a bridge page that lives inside the forge shell but wears Orbital's own
phosphor teal in its content area). Built per the handoff in `../README.md`.

## Stack
- **Angular 22**, standalone components, signals, functional router.
- **SSR + static prerender** (`@angular/ssr`). All three routes are prerendered
  to static HTML — the build output in `dist/wroughtery/browser/` is a static
  site, ready for Netlify / Cloudflare Pages / Firebase Hosting (per the spec).
- **SCSS** with design tokens as CSS custom properties (`src/styles.scss`).
- **Self-hosted fonts** via `@fontsource` (no Google Fonts hotlink): IBM Plex
  Sans, IBM Plex Mono, and the Bricolage Grotesque variable font. Registered in
  `angular.json` → `styles`.

## Run
```bash
npm install
npm start                 # dev server → http://localhost:4200
npm run build             # production build + prerender → dist/wroughtery
node dist/wroughtery/server/server.mjs   # optional SSR/node server (PORT=4000)
```
The static deploy target is `dist/wroughtery/browser/`. The optional node SSR
server enforces `security.allowedHosts` (set in `angular.json`) — add your
production hostname there before serving the dynamic path from a new domain.

## Routes
- `/` — studio home (forge identity, hero, the signal system, the shipped-tool bridge cards)
- `/tools` — portfolio grid; hot/cold anvils rendered straight from tool data
- `/orbital` — Orbital bridge page (forge shell + contained **teal** content area)
- `/lagsync` — LagSync bridge page (forge shell + contained **cyan** content area).
  LagSync is a live, shipped browser extension (lagsync.com); this page links out
  to the site and the five real store listings. Assets in `public/assets/lagsync/`
  are copied from the LagSync site; its Space Mono is reconciled to IBM Plex Mono.

## The endorsed model, in code
Three layers, enforced structurally — not by per-product re-theming:

| Layer | Where | Rule |
|---|---|---|
| Forge shell | `app.ts`, `shared/header`, `shared/footer` | Pure forge, shared by every route. Never re-themed per product. |
| Orbital content | `pages/orbital` | Teal is **scoped** under `.orbital` (see `orbital.scss`); the shell stays forge. The single CTA stays **ember**. |
| Signal system | `core/tools.ts` + `shared/anvil-mark` | `signal: 'hot' \| 'cold'` is data. `AnvilMark` renders the ember billet for `hot` (AI/active) and a bare anvil for `cold` (ordinary/sensor). Orbital is sensor-driven → **cold** on the grid. |

The ember glow filter + fade gradient are defined **once** globally
(`shared/ember-defs`, rendered in the app shell); every hot mark references
`url(#emberGlow)` / `url(#emberFade)` so many marks share one filter with no id
collisions. The anvil path geometry + glow are copied verbatim from the canonical
`../assets/wroughtery-*.svg`.

## Tokens
Forge palette (final, match exactly) lives in `src/styles.scss`:
`--iron #211E1B · --steel #45525A · --ember #C24E2A · --ash #8C857B · --bone
#EFEAE0 · --paper #E9E8E3`, plus the two hairline rules and the type stacks.

### Orbital tokens — PROVISIONAL ⚠️
The Orbital app repo was **not present** in this workspace, so the spec's
"fill from the Orbital app project" values could not be sourced. The ink / teal
values in `pages/orbital/orbital.scss` are **chosen to fit the described
instrument** and are flagged `TODO` inline. Reconcile against the real app:
- `--ink #0E1417`, `--ink-raised #141C20` (Orbital's near-black base)
- `--teal #34E3C4` (phosphor signature, on dark) / `--teal-deep #0FA890` (on paper)
- level point `--amber #C24E2A` (**== Ember**, deliberately reconciled to the family)

Type was reconciled per spec: readouts → IBM Plex Mono, body → IBM Plex Sans.
