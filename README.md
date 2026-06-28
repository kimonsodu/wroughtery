# Handoff: Wroughtery brand system + Orbital product page

## Overview
This package carries everything needed to build, in a real codebase:

1. **The Wroughtery studio site** — the "umbrella" identity: a dark, precise, spec-sheet
   forge theme (Iron + Ember, Bricolage + IBM Plex, the anvil mark).
2. **The Orbital product page** — a *bridge* page that lives inside the Wroughtery shell
   but wears Orbital's own teal in its content area.

It encodes the design tokens, the anvil mark + signal system, and — importantly — the
**brand-architecture decision** (the "endorsed model") so that reasoning is not lost.

---

## About the design files
The HTML files in this bundle are **design references** — prototypes that show the intended
look, geometry, and behavior. They are **not** production code to ship as-is.

The task is to **recreate these designs in the target codebase's environment** (React, Next,
Astro, SwiftUI, etc.) using its established patterns. If no environment exists yet, choose an
appropriate framework (a static site / Astro / Next is a fine fit for a studio + product pages
site) and implement there.

The one exception: the **SVG assets** in `assets/` are clean, final, drop-in files generated
from the current mark geometry — use those directly. (The user's previously exported
`wroughtery-*.svg` files predate the rounded anvil and the fading billet and are **stale** —
ignore them; these regenerated assets are canonical.)

## Fidelity
**High-fidelity** for the Wroughtery identity (colors, type, mark geometry, hairline
chrome are final — match exactly). The **Orbital page** is specified at the structural +
token level (forge shell is hifi; Orbital's interior teal tokens are described and should be
reconciled against the actual Orbital app project — see "Orbital tokens" below).

---

## Brand architecture — the endorsed model (READ FIRST)

Do **not** repaint the umbrella, and do **not** force every tool into one skin. The model is
**endorsed**: the studio is a consistent frame; each tool keeps its own fitted identity inside
it. Three layers, three answers:

| Layer | Identity | Rule |
|---|---|---|
| **Wroughtery site** (and any product page's *frame*) | Full forge theme — Iron, Ember, Bricolage + Plex, anvil mark, nav/footer/spec-sheet chrome | Never re-theme the site per product. With 5+ tools that's unscalable. |
| **Orbital app itself** (in the Play Store) | Its own instrument theme — Ink, phosphor teal, amber level point | Standalone; must look like itself, not a blacksmith tool. |
| **Orbital page** (the bridge) | Wroughtery shell (header, type, hairlines, footer) **+** content area (hero, screenshots, app icon, one accent block) in Orbital's teal | Like a record label's site: every release page shares the structure but wears its own record's color. |

**The key realization:** what makes a forge parent and a calm-instrument child feel like
family is **not the accent color — it's the shared grammar.** Both brands are dark, precise,
restrained, built on **mono labels + hairline rules**. Wroughtery calls it "spec sheet,"
Orbital calls it "instrument" — same sensibility. Unify through what they share; let color be
the one licensed difference.

This is also the right hedge: starting Orbital as a page under the umbrella is the cheap MVP,
and because Orbital was **not** dissolved into Wroughtery, the day it takes off you can lift it
onto its own domain with its identity already intact. Endorsed = lean-now **and** scalable-later.

---

## Design tokens — Wroughtery

### Color
| Token | Hex | Role |
|---|---|---|
| Iron | `#211E1B` | Type and most dark surfaces; the default "ink" |
| Steel | `#45525A` | Secondary text, muted UI; keeps the palette off a warm default |
| Ember | `#C24E2A` | The hot iron — used **sparingly**: the billet, a single CTA, AI signal |
| Ash | `#8C857B` | Mono labels, meta, hex values, captions |
| Bone | `#EFEAE0` | Light ink on dark surfaces (the mark on iron) |
| Paper | `#E9E8E3` | Page background — a **cool** off-white, never cream |

Hairline rule color: `rgba(33,30,27,.13)` on light; `rgba(239,234,224,.16)` on dark.

Ember has 3 sanctioned "temperatures" (used by the identity doc's tweak): Forge `#C24E2A`
(default), Bright `#D6602F`, Deep `#A23C1E`. Ship **Forge** unless told otherwise.

### Typography
- **Display / wordmark** — Bricolage Grotesque **700**, letter-spacing **−0.022em**, tight
  line-height (~1.0). Used for the wordmark and section H2s.
- **Body** — IBM Plex Sans (400/500), line-height ~1.55.
- **Data / labels / hex / eyebrows** — IBM Plex Mono (400/500), letter-spacing ~.14–.18em,
  often UPPERCASE for eyebrows. This mono-label treatment is the core "spec sheet" tell.

Google Fonts import:
`Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700` · `IBM+Plex+Mono:wght@400;500` ·
`IBM+Plex+Sans:wght@400;500`

### Shape & chrome
- Card / panel radius: **12–14px**. App-icon tile radius: ~22% of size (`rx≈14` on a 64 tile).
- Surfaces are bordered with a single hairline (see rule colors), **not** drop shadows.
- Section pattern: mono eyebrow (`02` ember + `LABEL` ash) → Bricolage 700 H2 → Plex Sans intro,
  each section separated by a top hairline with ~62px margin.

---

## The mark & signal system

The mark is an **anvil with a glowing billet** (a hot bar of stock resting across the face).
Geometry is final — see `assets/`:

- `wroughtery-mark.svg` — **hot / AI** mark. Anvil + a long billet: a glowing hot working-end
  on the face that fades into a **cool length** (same metal as the anvil) running off the heel.
  Both the anvil and the cool length use `fill="currentColor"`, so the whole mark recolors with
  CSS `color`: **Iron on light, Bone on dark** — always legible. Only the hot end is Ember +
  glow. viewBox `0 8 132 52` (extra width holds the overhanging bar).
- `wroughtery-mark-cold.svg` — **cold / plain-tool** mark. Bare anvil, no billet. viewBox
  `0 8 108 52`.
- `wroughtery-favicon.svg` — app icon: bone anvil on an iron tile, **solid** ember bar + glow
  (no fade — solid reads cleaner at 32px). The ember bar matches the hot mark's glowy span.

**Signal system (wayfinding, use honestly):**
- **Ember / hot billet = AI-driven or active tool.**
- **Cold / bare anvil = a plain forged tool** (sensor-driven, everyday utility). Not a
  downgrade — accurate wayfinding. **Orbital is sensor-driven, so on the portfolio grid it gets
  the COLD anvil**, no ember.

The glow is a 3-layer SVG filter (wide faint heat `#B23311` → halo `#E8581C` → hot core
`#FFC06A`) merged over the source. It's embedded in each hot SVG; keep it intact.

---

## Orbital page — the bridge (build spec)

A single product page under the Wroughtery umbrella. Layout, top to bottom:

1. **Forge shell (unchanged Wroughtery):** same header (anvil mark + wordmark, mono nav),
   same hairline rules, same Plex/Bricolage type, same footer / spec-sheet chrome. The frame is
   pure forge — paper or iron background per the site's norm.
2. **Product hero (Orbital teal):** the content area carries Orbital's phosphor-teal accent —
   hero headline (Bricolage or Orbital's display, see below), the app icon, app screenshots,
   and **one** accent block. Teal is the *contained* signature, not a repaint of the shell.
3. **Spec row (mono):** IBM Plex Mono key/value rows — platform, sensors, price, version —
   the shared "instrument/spec-sheet" grammar that makes parent + child read as family.
4. **Download CTA:** Play Store button. This is the page's single warm/primary action; decide
   whether it stays Ember (umbrella CTA convention) or adopts Orbital teal — recommend Ember to
   keep "CTA = ember" consistent across the site.
5. **Wayfinding back to the grid:** Orbital appears on the Wroughtery portfolio/tools grid with
   the **cold** anvil (sensor-driven, not AI).

### Reconciling Orbital's tokens to the family
The cohesion comes from shared grammar, so adopt the Wroughtery type stack inside Orbital:
- **Swap Orbital's placeholder Space Mono → IBM Plex Mono** for all readouts/numerals.
- **Body → IBM Plex Sans.**
- Wordmark: inherit Bricolage 700, **or** give Orbital one softer display face for the wordmark
  only if it should feel a touch calmer than the forge. (Optional.)
- **Keep teal as Orbital's contained signature**, but **nudge Orbital's amber "level point"
  toward Ember `#C24E2A`** so the warm note belongs to the family.

### Orbital tokens — fill from the Orbital app project
These are described conceptually in the source material but exact values must come from the
Orbital app repo (do not invent):
- `Ink` — Orbital's near-black base (analogous to Iron). **TODO: exact hex.**
- `Phosphor teal` — Orbital's signature accent. **TODO: exact hex.**
- `Amber level point` — reconcile toward Ember `#C24E2A`. **TODO: confirm final.**

### Naming note (flag, not a blocker)
Wroughtery's sub-tools are forge-named (Bellows, Quench, Emberwright); **Orbital** is celestial
and breaks the pattern — a legitimate "one tool stands apart" choice. If portfolio cohesion
ever nags, forge words that fit a "settle & steady" sensor product: **Temper** (heat-treat for
resilience), **Anneal** (slow-cool to relieve stress), **True** (bring straight and level).
Not reopening — just recorded.

---

## Files in this bundle
- `Wroughtery Identity.dc.html` — the canonical identity reference (lockups, favicon sizing,
  color, type, sub-tool signal examples). Open in a browser to see the system live. The exact
  mark/filter/gradient source lives here too.
- `assets/wroughtery-mark.svg` — hot/AI mark (currentColor).
- `assets/wroughtery-mark-cold.svg` — cold/plain-tool mark (currentColor).
- `assets/wroughtery-favicon.svg` — app icon / favicon (iron tile).

## Recommended stack — Angular

Build this in **Angular** (TypeScript is built in). Concretely:

- **Angular (latest, standalone components)** + the Angular CLI. No NgModules — use standalone
  components and the functional Router.
- **Enable SSR / static prerendering** (`ng new --ssr`, Angular SSR). This is a marketing site,
  so server-render / prerender the pages for SEO and fast first paint — do **not** ship it as a
  plain client-only SPA.
- **Styling: Tailwind CSS** (via PostCSS) with the tokens preloaded in `tailwind.config`, **or**
  global **SCSS** with the tokens as CSS custom properties if the team prefers Sass (common in
  Swedish Angular shops). Either is fine — keep styling token-driven, not ad-hoc.
- **Fonts: self-host** Bricolage Grotesque + IBM Plex Sans/Mono via `@font-face` in
  `styles.scss` with `font-display: swap` (don't hotlink Google Fonts on a production site).
- **The mark as one component:** `AnvilMarkComponent` with an `@Input() variant: 'hot' | 'cold'`
  and `@Input() wordmark = false`. Inline the SVG in the template so it inherits `currentColor`;
  the `hot` variant includes the ember billet + glow defs, `cold` is the bare anvil. This is how
  the signal system is enforced in code (data decides hot vs cold, never hand-editing).
- **Routing:** `/` (studio/home), `/tools` (portfolio grid), `/orbital` (the bridge page).
- **Deploy:** static prerender output to Netlify / Cloudflare Pages / Firebase Hosting (all fine
  for Angular SSR/prerender).

### Tailwind token mapping (if using Tailwind)
```
colors: { iron:'#211E1B', steel:'#45525A', ember:'#C24E2A',
          ash:'#8C857B', bone:'#EFEAE0', paper:'#E9E8E3' }
fontFamily: { display:['"Bricolage Grotesque"'], sans:['"IBM Plex Sans"'],
              mono:['"IBM Plex Mono"'] }
borderColor (hairline): light 'rgba(33,30,27,.13)', dark 'rgba(239,234,224,.16)'
borderRadius: card '14px', tile '14px'
```

## Build order
1. `ng new` with SSR + routing; add Tailwind (or SCSS tokens); self-host the three fonts; define
   the 6 colors + two hairline rules as tokens / CSS variables.
2. Build the shared shell: `HeaderComponent` (AnvilMark + wordmark + mono nav), `FooterComponent`,
   and section primitives (mono eyebrow → Bricolage H2 → Plex body, hairline dividers). The shell
   is shared by every page — this is the "endorsed model" frame.
3. Build `AnvilMarkComponent` (hot/cold variants) and the studio/home + `/tools` portfolio grid,
   rendering hot vs cold anvils from tool data per the signal system.
4. Build `/orbital` inside the shell: forge frame unchanged, content area in Orbital teal, mono
   spec row, Play Store CTA.
5. Reconcile Orbital app tokens to the Plex stack (swap its mono/body to Plex, nudge amber→ember).
