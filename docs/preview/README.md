# Direction 8: Spec Sheet

A trade-catalogue / engineering-datasheet language for a manufacturer whose buyers are contractors, plumbers and traders.

- **Palette** taken from the logo itself: uncoated paper `#f4f1ea` / sheet `#fffdf8`, ink `#17151a` (muted `#48434d`), logo plum `#8f177d` (deep `#3a0a33` for dark bands), emblem yellow `#ffc30e` used only behind ink or on dark, logo blue `#0584bc` as a decorative accent only. All text pairs are WCAG AA (plum on paper 7.2:1).
- **Type**: Archivo Variable using its width axis — condensed 72% uppercase for display, 82% for headlines — plus IBM Plex Mono for spec labels, refs and breadcrumbs. Both self-hosted via @fontsource.
- **Layout**: square corners, 2px ink rules and shared-border grids, numbered "Sheet 01…05" sections, a drafting-grid background, a hazard-tape rule above the footer, offset ink-shadow buttons. Hero art is an inline-SVG technical drawing of nested UPVC/HDPE/PP-R pipe sections with leaders, a dimension line and a title block. Product pages read as a numbered product schedule (ref 01.01…) with per-row "Quote" mailto links.
- **Different from 2 and 5**: no rounded cards, blobs, gradients or per-category colours — it is a monochrome-ink document with two brand colours, built to feel like a manufacturer's spec sheet rather than a SaaS brochure or a friendly retail site.
- **Logo**: the supplied purple raster is used as-is (it reads as a stamp/plate on the paper), optimised to WebP via astro:assets. Footer uses a text wordmark.
- Zero client JS: mobile nav is a `<details>` panel; contact form is a `mailto:` form.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). Build runs `astro check`.

## TODO
- Product rows in `src/data/categories.ts` are placeholders — confirm catalogue, sizes, pressure classes.
- Confirm the brands/partners list and replace text tiles with supplied logos.
- Certificates, CSR Activities and Achievements pages; Inland Freight Services detail.
- Real product photography; an SVG version of the logo.
- Optional form service instead of the mailto form.
