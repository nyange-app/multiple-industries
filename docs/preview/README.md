# Direction 3: Editorial Catalogue

**Rationale.** Heritage-craft and premium, built around the "Since 1991" story. Warm paper (#F6F1E7) with ink-black text (#1B1814) and a terracotta/clay accent (#A63F22, hover #8A3219), plus a deeper paper (#ECE4D3) and a dark ink band for the ISO section. Fraunces Variable (serif display) is paired with Inter Variable, both self-hosted via @fontsource-variable. The layout is magazine-style and asymmetric, with 12-column offsets, large italic clay numerals (01-06) and hairline dividers. Products are spec-sheet index rows rather than cards. Zero client JS: the mobile nav is a `<details>` element.

**Run.** `pnpm install && pnpm dev` (or `pnpm build && pnpm preview`).

**Screenshots.** home-mobile/desktop.png, product-mobile/desktop.png in this folder.

**TODO**
- Replace placeholder product lines, materials and sizes (marked "TODO confirm").
- Confirm brand/partner list and add approved logos.
- Convert og.svg to a PNG/JPG for social scrapers.
- Build Certificates, CSR and Achievements pages.
- The mailto form is a stopgap; consider a form service.
- The logo is the supplied purple raster; consider a transparent or vector version.
