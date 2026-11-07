# Direction 6: Polymer (Moulded)

The site is made of the material Multiple Industries actually makes. Surfaces read as injection-moulded plastic and extruded pipe: raised panels with soft highlights, debossed wells, ejector-pin marks and mould parting lines. The hero headline is pressed into a pellet-textured slab.
Palette (the real pipe colours): PP-R green `#2E8B47` (text/white-on shade `#1F6B34`, tint `#E3F1E6`), uPVC grey `#7B848C`, HDPE black `#1B1D1F` with blue stripe `#1C6FD1` (links on black `#6FA8EE`), moulded white `#F3F5F2`/`#FCFDFB`/`#E4E8E2`, food-grade orange `#E8641B` for actions (ink text on it, 5.0:1; orange text `#B64A0E`). Muted text `#525A61`. All text pairings are AA-checked.
Fonts: **Bricolage Grotesque Variable** for headings, **Figtree Variable** for body text (both via @fontsource-variable).
Motifs (CSS/SVG only): an HDPE "extrusion" band under the header with a slowly running inkjet line marking; resin-identification triangles (HDPE 2, PVC 3, PP 5), used only on real pipe materials; rounded pipe-length swatches as material chips on every product; a mould date-stamp dial reading "91"; press-in pill buttons that click down; a pellet-granule texture; and nav as a slider in a debossed track.
How it differs from P2, P5 and P7: no SaaS blue, no colour per category, no wayfinding signage, and no illustrated scenes. The look comes from material surfaces only.
Logo: the supplied purple raster is set as a moulded nameplate insert (optimised to webp at 1x and 2x). The favicon is cropped from its emblem.

Pages: Home, `/products/`, `/products/[slug]/` (6 lines from `src/data/categories.ts`), About, Contact (mailto enquiry form), 404. SEO covers per-page meta, canonical URLs, OG and Twitter tags (`public/og.png` 1200x630), Organization + LocalBusiness JSON-LD (home), BreadcrumbList + ItemList (inner pages), sitemap and robots.txt. Zero client JS: the mobile menu uses `<details>`. Reduced motion stops the extrusion and lift effects.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- Confirm the indicative product lists, materials and brand names in `src/data/categories.ts` and `src/config.ts`; replace the brand text tiles with logos.
- Confirm the hotline split (`236021/2` is shown as two numbers) and the Google Maps links.
- Add the Certificates, CSR Activities and Achievements pages; add product photography when available; supply an SVG logo.
