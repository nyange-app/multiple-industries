# Direction 5: Colourful & Friendly

Each of the six product categories owns a colour on a warm cream base (#fffaf2): water blue #0b63c5, outdoor/plumbing green #0d7a43, bathroom purple #7a3ccf, building amber #f4a316, plasticware coral #d4313a, automotive graphite #343a46. Each has a tint and a deep text shade, all AA-checked, set via `.cat-*` scopes in `src/styles/global.css`.
Font: Nunito Variable (self-hosted, single family, weights 800/900 for chunky headings).
Layout: big rounded blobs (inline SVG `Blob.astro`), pill buttons with a tactile press shadow, asymmetric colour tiles in the hero, 2.5rem-radius cards.
Mobile-first: sticky bottom action bar (Call / WhatsApp / Directions), details-based menu with no JS, 48px+ tap targets. Zero client JS.

Run: `pnpm install && pnpm dev` (build: `pnpm build`, which includes astro check).
Screenshots: home-mobile/desktop, product-mobile/desktop in this folder (full-page shots show the fixed bottom bar mid-page; that is a capture artefact).

TODO: confirm WhatsApp number (currently 0752 914 900 placeholder) and Maps link; confirm brand list and replace text tiles with logos; real product lists, specs and photography; Products index page; OG image.
