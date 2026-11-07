# Direction 6: Showroom After Dark

The site works like a showroom after closing time: each of the six product categories is an "exhibit" on a plinth under a spotlight. The aim is to make Multiple Industries feel established and premium, not like a warehouse price list, while keeping calls and directions one tap away.
- **Palette:** charcoal #121314 page, night #0b0c0d bands, graphite #1e2023 surfaces, hairlines #2a2d31, porcelain #f3f0ea text (#c9c5bd dimmed), steel #8f959e muted text, brass #c9a227 accent (hover #e2c15a). All text pairs pass WCAG AA.
- **Type:** Instrument Serif (large display headings, italic brass emphasis) with Manrope Variable for body text and labels. Both are self-hosted via @fontsource.
- **Signature:** CSS-only spotlights (a blurred clip-path light cone plus a floor glow) over a plinth that is pure CSS, with an inline line-drawn SVG object for each category (tap, elbow, basin, roof truss, bucket and jerry can, tyre). Hover or focus raises the light and the object. Brass rules under headings draw in with scroll-driven CSS where supported and are static otherwise.
- **Layout:** On mobile the category cards sit in a horizontal scroll-snap rail that runs to the screen edge; on desktop they become a gallery grid. Product pages read as an exhibit: a hero on a plinth, a numbered "What's on the floor" list with a mailto enquiry on each item, a sticky showroom panel, and a "Continue the tour" rail. No light/earthy editorial styling and no wayfinding signs.
- **Logo:** The header uses a text wordmark (brass "M" monogram with the name in Instrument Serif). The supplied purple raster logo appears once, on its own purple plate in the footer.
- **JS:** None on the client. The mobile menu uses `<details>`. The contact form is a mailto form.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). Screenshots in this folder: home and product pages at 390px and 1280px.

## TODO
- Confirm product lists (`src/data/categories.ts` placeholders), sizes and specs; confirm the brand/partner list and replace the nameplates with logos.
- Add Certificates scans, CSR Activities and Achievements pages; add a Products index if wanted (the "Collection" nav item currently goes to the home page rail).
- Confirm the Google Maps links for both offices; add a WhatsApp number if one is used.
- Add product photography later: it can sit in the same spotlit stage in place of the SVG objects.
- Commission a vector logo; the wordmark here is a stand-in.
