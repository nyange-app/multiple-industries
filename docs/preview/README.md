# Direction 4: Dark Modern

**Rationale.** An engineering-forward dark theme: near-black slate surfaces (bg `#070a0f`, surface `#0d131b`, line `#263243`) with an electric cyan to emerald gradient accent (`#22d3ee` to `#34d399`) used for headings, CTAs and glows. A CSS-only blueprint grid sits behind heroes, cards are glass-like and bordered, and the six categories form a bento grid. Type is Space Grotesk Variable (tight display headings) with Inter Variable for body, both self-hosted via @fontsource-variable. Scroll reveals use CSS `animation-timeline: view()` only and are disabled under `prefers-reduced-motion`. Text/muted/accent colours all exceed WCAG AA on the dark background (muted `#9fb0c3` about 8:1; dark `#031512` text on gradient buttons).

**Run.** `pnpm install && pnpm dev` (or `pnpm build && pnpm preview`). Zero client JS; mobile nav uses `<details>`.

**Screenshots.** home-mobile/desktop, product-mobile/desktop PNGs in this folder.

**TODO.**
- Confirm brand/partner list and replace text tiles with approved logos.
- Replace placeholder product lists, specs and photography.
- Logo has a purple background; supply a transparent/white variant for the dark theme.
- Add Certificates, CSR and Achievements pages; replace /og.png with a designed share image.
- Contact form is mailto-based; swap for a static form service if needed.
