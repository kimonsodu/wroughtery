# Wroughtery

Studio site for **Wroughtery** — a tools forge. _"Wrought, not bought."_

The site is the **forge "umbrella"**: a dark, precise, spec-sheet identity (Iron +
Ember, Bricolage Grotesque + IBM Plex, the anvil mark) that houses several tools.
Each shipped tool gets a **bridge page** — it lives inside the forge shell but may
wear its own accent color in its content area.

## Stack

- **Angular 22** — standalone components, signals, functional router, `OnPush`.
- **SSR + static prerender** (`@angular/ssr`). Every route is prerendered to static
  HTML; `dist/wroughtery/browser/` is a ready-to-deploy static site. An optional
  Express SSR server (`src/server.ts`) serves the dynamic path.
- **SCSS** with design tokens as CSS custom properties (`src/styles.scss`).
- **Self-hosted fonts** via `@fontsource` (no Google Fonts hotlink): IBM Plex Sans,
  IBM Plex Mono, Bricolage Grotesque variable. Registered in `angular.json` → `styles`.

## Run

```bash
npm install
npm start            # dev server → http://localhost:4200
npm run build        # production build + prerender → dist/wroughtery
npm test             # unit tests (vitest)

# optional: serve the SSR/node build
node dist/wroughtery/server/server.mjs   # PORT defaults to 4000
```

Static deploy target: `dist/wroughtery/browser/`. The SSR server enforces
`security.allowedHosts` in `angular.json` (`localhost`, `127.0.0.1`, `wroughtery.com`)
— add new production hostnames there before serving.

## Routes

| Path | Page |
|---|---|
| `/` | Studio home — forge identity, hero, signal system, shipped-tool bridge cards |
| `/tools` | Portfolio grid — hot/cold anvils rendered straight from tool data |
| `/orbital` | **Orbital** bridge page — forge shell + contained **teal** content. A true level, read off phone motion sensors |
| `/lagsync` | **LagSync** bridge page — forge shell + contained **cyan** content. Live browser extension (lagsync.com); links to the site + store listings |

Unknown paths redirect to `/`.

## The endorsed model (read before re-theming)

Don't repaint the umbrella, and don't force every tool into one skin. Three layers,
enforced structurally — not by per-product re-theming:

| Layer | Where | Rule |
|---|---|---|
| Forge shell | `app.ts`, `shared/header`, `shared/footer` | Pure forge, shared by every route. Never re-themed per product. |
| Tool content | `pages/<tool>` | A tool's accent is **scoped** under its own class (e.g. teal under `.orbital`). The shell stays forge; the single CTA stays **ember**. |
| Signal system | `core/tools.ts` + `shared/anvil-mark` | `signal: 'hot' \| 'cold'` is **data**, not decoration. `AnvilMark` renders the ember billet for `hot` (AI / active) and a bare anvil for `cold` (ordinary / sensor-driven). |

The ember glow filter + fade gradient are defined **once** globally (`shared/ember-defs`,
rendered in the app shell); every hot mark references `url(#emberGlow)` / `url(#emberFade)`,
so many marks share one filter with no id collisions.

## Tokens

Forge palette (final — match exactly), in `src/styles.scss`:

| Token | Value | Use |
|---|---|---|
| `--iron` | `#211E1B` | default ink, dark surfaces |
| `--steel` | `#45525A` | secondary text, muted UI |
| `--ember` | `#C24E2A` | the hot iron — billet, the one CTA, AI marks |
| `--ash` | `#8C857B` | mono labels, meta, hex, captions |
| `--bone` | `#EFEAE0` | light ink on dark surfaces |
| `--paper` | `#E9E8E3` | page background — cool off-white, never cream |

A tool's interior accent (e.g. Orbital's teal) is scoped in that page's SCSS, kept off the
shell, and reconciled to the family — Orbital's level point `--amber` deliberately equals `--ember`.

## Layout

```
src/
  app/
    app.ts, app.routes.ts        # shell + functional router
    core/tools.ts                # tool roster + hot/cold signal data
    pages/                       # home, tools, orbital, lagsync
    shared/                      # header, footer, anvil-mark, ember-defs, section-head
  styles.scss                    # design tokens + base
  server.ts                      # optional Express SSR entry
public/                          # favicon + static assets (copied verbatim into the build)
```
