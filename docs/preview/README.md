# Direction 6: Trade Counter Quote Pad

The site works like the carbon-copy order book on a Kampala hardware counter. Every product category is an **enquiry form**. Visitors tick items, write quantities, and send the finished slip to sales by WhatsApp or email, so a contractor or household can ask for a quote in about 30 seconds on a phone.
Palette: carbon-copy pink `#F3D3DA`, canary `#FAEC9C`, top-copy white `#FFFEFA`, carbon-blue ink `#22328A` (deep `#17225E`), stamp red `#C8202F`, on a cool counter-top grey `#E6E7EC`. Body text is `#1A1F3D` and muted text is `#4B5170`; all text pairings are AA on every paper colour.
Fonts (self-hosted via @fontsource): **Archivo Variable** (with the width axis) for printed form labels, headings and UI; **Courier Prime** for typed values such as product names, serial numbers, addresses and the breadcrumb "Ref:" line; **Caveat** for handwritten pen notes and quantities.
Motifs (CSS/SVG only): perforated top edges, torn zig-zag bottoms (CSS mask), offset pink and canary carbon copies behind the top slip, rubber stamps (ISO 9001:2015, UNBS, VOID) roughened with an SVG turbulence filter that thump into place on scroll (scroll-driven CSS, off under reduced motion), hand-drawn red pen ticks and circles, memo headers ("To: / Re:"), a company record card and a ledger timeline.
How it differs from P2, P5 and P7: P2 is a SaaS card grid, P5 gives each category its own colour, and P7 uses wayfinding signs. This direction is built on paperwork instead: one paper system of three colours, with a working enquiry slip as its main interaction.

## The enquiry slip
- `src/scripts/slip.ts` (41 lines, no dependencies) stores ticked items in localStorage across pages. It updates the sticky "Your slip" stub and every `data-slip-wa` / `data-slip-mail` link, and prefills the Contact page slip.
- Without JS, the tick boxes and quantity fields are hidden, and every row keeps its own **Ask** mailto link to sales@multipleindustries.com. The stub and the Contact form still work, as plain WhatsApp/mailto links and a `mailto:` GET form.
- The WhatsApp number is a single constant, `WHATSAPP_NUMBER` in `src/config.ts`.

Logo: the supplied purple raster is used unchanged as the printed letterhead in the header (optimised to webp at 1x/2x). The Organization JSON-LD uses `public/logo.png`.

Pages: Home, `/products/`, `/products/[slug]/` (6 forms from `src/data/categories.ts`), About, Contact, 404 ("This slip has been voided"). SEO covers per-page title, description, canonical, OG and Twitter tags, Organization + HomeAndConstructionBusiness JSON-LD on the home page, BreadcrumbList (plus an ItemList on product forms) on inner pages, the sitemap, `robots.txt` and `public/og.png` (1200x630).

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- **Confirm the WhatsApp number.** `WHATSAPP_NUMBER` is currently the 0752 914 900 hotline (`256752914900`), which may not be a WhatsApp account.
- Confirm the product lists, units and specs in `src/data/categories.ts` (they are indicative placeholders), and the brand/partner list (shown as text tiles; logos to follow).
- Confirm the map links (currently Google Maps searches) and the hotline split (`236021/2` is shown as 236021 and 236022).
- Add the Certificates, CSR Activities and Achievements pages, real product photography, and an SVG logo.
- Screenshots: the full-page captures place the fixed slip stub at the page bottom, use reduced motion so the stamps are shown in their final state, and were colour-quantised to keep the files small.
