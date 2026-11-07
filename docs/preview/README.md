# Direction 7: Spec Sheet

The site reads like a manufacturer's datasheet. Pages sit on a warm paper background (#f4f2ed / #e8e4db, rules #cbc5b8) with near-black ink (#15161a, muted steel #4a4f5c). Both accents come from the logo: signal yellow #f2b705, always paired with ink text, and plate purple #7d1a70 (9:1 on paper) for codes and years. All text pairs pass WCAG AA.
Type: Archivo Variable with its width axis. Headings are set condensed (68–75%) in uppercase, and body copy uses normal width, so the whole site loads one variable font. JetBrains Mono Variable is used for datasheet labels, section numbers (§ 01…), product codes (MI-01, 01.03) and breadcrumbs.
Layout motifs: square corners, 1px ruled grids with gap-px instead of cards, a faint drafting-grid background, ruler tick marks under dark headers, and a hazard-stripe band before the contact section. The hero art is an inline SVG of drafted UPVC/HDPE/PP-R pipe cross-sections with material callouts, so no photos are needed. The product page is a real `<table>` that marks each line as Made (in Kampala) or Supplied, with a sticky "Request a quote" panel (prefilled mailto).
How it differs from 2 and 5: it is dark-and-paper industrial rather than airy SaaS blue or playful colour-per-category. Shapes are hard-edged rather than rounded, the typography is technical rather than friendly, and the colour comes from the brand itself.
Logo: the supplied purple raster is kept and shown as a "plate" on the ink header and footer. It is optimised to WebP by astro:assets/sharp, and the favicon is a simple SVG echo of it.
Zero client JS: the mobile menu is `<details>`, and the header has a one-tap Call button. The contact form is a mailto form.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). `public/og.png` (1200x630) is a static raster.

## TODO
- Confirm the product lists in `src/data/categories.ts`. They are placeholders taken from the About copy; sizes and specs are still missing.
- Confirm the brand/partner list (`BRANDS` in `src/config.ts`) and replace the text tiles with licensed logos.
- Add real product photography (the product page has dashed placeholder figures) and a vector logo.
- Confirm that hotline "+256 414 236021/2" means two numbers (…021 and …022).
- Add Certificates, CSR Activities and Achievements pages, plus a Transport/Inland Freight page.
