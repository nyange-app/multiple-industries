# Direction 7: Showroom Aisles

The site works like walking into the 8th Street showroom: each of the six categories is a numbered **aisle** with overhead wayfinding signage, so trade buyers, contractors and households find what they need in seconds on a phone.
Palette: plum `#3B1F5C` (deep `#26133D`, tint `#ECE6F3`; picks up the purple logo), signal yellow `#FFC72C`, paper `#F6F4EF`, ink `#17131D`, muted `#554E60`, exit/"go" green `#0A7F4F` (deep `#075C39`), steel `#6F6879`. All text pairings are AA-checked.
Fonts: **Overpass Variable** (highway-sign lettering) for headings, labels and numerals; **Atkinson Hyperlegible** for body text. Both are self-hosted via @fontsource.
Motifs (CSS/SVG only): hanging aisle signs on steel brackets and cables that swing on hover or focus (`.hang`, disabled under reduced motion); a hero "showroom directory" board; a "You are here" marker; dashed yellow floor-tape dividers; product **shelf-edge label** cards with bay codes (01-A…) and a barcode; green exit-style "Visit us" panels; a street fingerpost on Contact.
How it differs from P2 and P5: no blue SaaS card grid and no colour per category. It uses one signage system (plum, yellow and green), sharp sign plates, and navigation built on wayfinding.
Logo: the yellow emblem tile is cropped from the supplied raster (`src/assets/emblem.png`) and paired with a text wordmark in Overpass. Zero client JS: the mobile menu uses `<details>`.

Pages: Home, `/products/` directory, `/products/[slug]/` (6 aisles from `src/data/aisles.ts`, with a sticky yellow aisle bar and prev/next arrows), About, Contact (with a mailto enquiry form), 404 ("Aisle 404"). SEO covers per-page meta, OG and Twitter tags, canonical URLs, Organization + LocalBusiness JSON-LD, BreadcrumbList, sitemap, robots.txt and `public/og.png`.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- Confirm the product lists in `src/data/aisles.ts` (indicative placeholders) and the brand/partner list; replace the text tiles with logos.
- Confirm map links (currently Google Maps searches) and the hotline numbering (`236021/2` is split into two numbers).
- Add the Certificates, CSR Activities and Achievements pages; add real product photography when available.
- Supply an SVG logo; the current one is a raster emblem crop.
