# Direction 6: Datasheet

An industrial catalogue / engineering spec-sheet look: the site reads like a manufacturer's datasheet rather than a brochure.
Palette lifted straight from the logo plus site materials: graphite ink #15171b (surfaces #1f2228, rules #2c3038), concrete paper #f3f1ea / #e9e6dc, hairlines #cdc8ba, muted steel #535a65 (6.3:1 on paper), fog #a9b0ba (8:1 on ink), brand signal yellow #ffc30e (fills only, never text on paper) and brand plum #8f177d (links/accents, 7.6:1).
Type: Archivo Variable with the width axis — condensed 70% uppercase for display, normal width for body — and IBM Plex Mono for spec labels, codes and refs (all self-hosted via @fontsource).
Layout motifs: blueprint grid hero, safety-stripe rules, `§01` numbered section heads, square corners and hairline tables, corner registration ticks, an SVG "Fig. 1 — pipe ends" cross-section illustration (UPVC/HDPE/PP-R) instead of photography, and product pages as a referenced product schedule table (01.01, 01.02…) that collapses to stacked rows on mobile.
Different from #2 (light, rounded, blue SaaS) and #5 (cream, colourful blobs): dark/industrial, sharp, monochrome + two brand colours, data-dense.
Logo: the supplied purple raster is used as-is as a "nameplate" in the header (optimised to webp via astro:assets); the footer uses a text wordmark. Zero client JS (mobile menu is `<details>`).

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). Build runs `astro check`.

## Pages
`/`, `/products/`, `/products/[slug]/` (6 divisions from `src/data/categories.ts`), `/about/`, `/contact/` (mailto form + both offices), `/404`.

## TODO
- Confirm product lines, sizes and pressure classes (placeholders in `src/data/categories.ts`).
- Confirm brands/partners list and replace text tiles with approved logos.
- Vector (SVG) logo; real product/factory photography.
- Certificates, CSR Activities and Achievements pages; certificate scans.
- Verify Google Maps pins for both offices; consider a form service instead of mailto.
