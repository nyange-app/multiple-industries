# Direction 8: Big Index

A stark Swiss-poster system: huge condensed type, one strict asymmetric grid, paper and ink, and a single signal colour. The site reads like the contents page of a catalogue. The six categories are a numbered index (01–06) that a trade buyer can scan and tap in seconds on a phone, and each category page opens with its number set as a poster.
Palette: paper `#F4F3EE`, ink `#111111`, vermilion signal `#C8360F` (darkened from the concept's `#D63A12` so body text passes AA at 4.7:1), muted `#55534D` (6.9:1), tint `#E4E2DA`, stone `#8A877F` (rules only). Ink on vermilion is used only for large display type.
Fonts: **Archivo Variable** with the width axis (`wdth.css`, condensed display at 62–72%) for headlines and numerals, and **Inter Tight Variable** for body and UI. Both are self-hosted via @fontsource-variable.
Layout: a 3/9 label-and-content split on desktop, with lettered section labels (A. Contents, B. About…). There are no cards, radii, shadows or photos. Hairline rules, one full-bleed vermilion quality band and one ink contact band carry the page.
Signature: **expanding index rows**. On hover or focus a vermilion block sweeps across the row, the number and text flip to paper, the name widens along the width axis (72% to 84%), and the arrow turns. All of it is CSS and is turned off under `prefers-reduced-motion`.
How it differs from P2/P5/P7: no blue SaaS cards, no colour per category, no wayfinding signage, and no paper-slip, stamp or datasheet metaphors. It is typographic and single-accent.
Logo: a **text wordmark** (a vermilion "MI" square and Archivo "Multiple Industries"). The supplied purple raster logo clashes with the single-accent system, so it is not used. The UNBS/ISO badge raster is used at its original colours, downscaled to an 18 KB WebP.

Pages: Home, `/products/`, `/products/[slug]/` (6 categories from `src/data/categories.ts`, each with quote mailto links and a sticky mobile call bar), About, Contact (mailto topic shortcuts, both offices), 404. Zero client JS; the mobile menu is `<details>`.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- Confirm the product lines in `src/data/categories.ts` (indicative placeholders) and the brand list in `src/config.ts`; replace the text brand tiles with mono logos. "Gutters", "Batteries" and "Trailers" were left out as they read as product lines.
- Supply an SVG logo (ideally a one-colour version) to replace the text wordmark if wanted.
- Confirm the map pins (currently Google Maps searches) and the `236021/2` hotline split.
- Add the Certificates, CSR Activities and Achievements pages; add photography if it becomes available.
- Full-page screenshots show the product page's fixed mobile call bar placed statically at the bottom (a capture setting).
