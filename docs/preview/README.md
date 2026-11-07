# Direction 8: Murram & Ink (heritage editorial)

The site reads like a confident magazine about a Ugandan company that has been building since 1991. The palette takes the earth of murram roads: murram #9A3F1C (text-safe; #C2603A decorative), ink #1B1A17, parchment #F5EEE3 / paper #FBF7F0, clay #E7D3BD and papyrus green #3F5B3A. Every text pairing is WCAG AA.
Type: Fraunces Variable for display (its SOFT/WONK axes give the italic "wonk" accents and folio numerals) with Instrument Sans Variable for UI and body text. Both are self-hosted via @fontsource-variable.
Layout: the six categories are a numbered type index (large 01–06 rows, not cards). On hover or focus a line glyph slides in and a murram rule draws underneath. History is shown as a "core sample" of earth layers (1991 / 2013 / 2019 / Today) that is horizontal on phones and a drilled core on desktop. Sections are divided by soil-strata SVG bands. Product pages are set like a feature article: a giant italic folio, standfirst, sticky chapter index on desktop or a sticky chip bar on mobile, § headed typographic range tables, and an enquiry panel.
Different from P2 (corporate light, blue SaaS cards) and P5 (rounded blobs, per-category colours): sharp, warm, print-like, with no cards or blobs. The purple raster logo is not used. Instead there is a text wordmark with a murram "Mi" monogram that is also used as the favicon. Zero client JS: the mobile nav is `<details>`.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). The build includes `astro check`.

## TODO
- Product lists in `src/data/categories.ts` are placeholders. Confirm items, sizes and pressure classes.
- Confirm the brand/partner list (`BRANDS` in `src/config.ts`) and supply logos.
- Add Certificates, CSR Activities and Achievements pages. Add real photography when available.
- The contact form is mailto-only. Connect a form service if wanted, and confirm the Maps pins.
