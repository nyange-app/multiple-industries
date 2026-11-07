# Direction 8: The Cutaway House

The home page is one big illustrated house, cut open in daylight. Each part of it leads to a product range: (1) the tank and garden for Water Management, (2) the pipes under the floor for Plumbing, (3) the kitchen and bathroom, (4) the roof, Light Gauge Steel trusses and gutters for Building Materials, (5) the store room shelves for Domestic Plasticware, and (6) the truck in the yard for Automotive. Households and contractors shop by "what do I need for this part of the build", and the house also shows the "one stop" promise at a glance.

- **Palette:** sky `#D7ECF4`, deep leaf `#0F4C3A`, sun `#F2B705`, ink `#14213D`, white. Supporting colours are muted `#42506B`, sun-soft `#FDF0C4`, leaf-soft `#DCEBE4` and water `#2B7FB8`. Text is ink or muted on sky/white, or white on leaf; sun is only used behind ink (all AA).
- **Fonts:** Outfit Variable for headings and Source Sans 3 Variable for body, both self-hosted via @fontsource-variable.
- **Signature (`src/components/House.astro`):** a single inline SVG in an 800x960 coordinate space with six numbered, pulsing hotspots. The zones are real links. Hovering or focusing a zone lights its numbered legend card and the reverse, using CSS `:has()` with no JS. The drip irrigation animates. All motion is off under `prefers-reduced-motion`.
- **Category pages** reuse the same illustration as a zoomed vignette (each category has its own viewBox crop, with its zone lit). The "Where it goes" mini-map (`MiniMap.astro`) links to the other zones. "Works with the rest of the house" pairs each range with related ones, and every product has a prefilled mailto "Ask about this" link.
- **Other details:** a grass-and-dots "groundline" divider, sun-yellow badges and buttons with ink borders and a hard offset shadow. Zero client JS: the mobile nav uses `<details>`.
- **Logo:** the supplied purple raster, downscaled to WebP and used whole as a nameplate in the header.

Data lives in `src/data/categories.ts`: six ranges, each with a zone label, hit path, hotspot, crop and placeholder products.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- Confirm product lists (indicative placeholders), brands per range and the brand/partner list; replace text tiles with logos.
- Confirm Maps links (currently Google Maps searches) and the hotline split (`236021/2` shown as two numbers).
- Add Certificates, CSR Activities and Achievements pages. Supply an SVG logo and, later, product photography.
- The contact form is mailto-based; connect a form service if wanted.
