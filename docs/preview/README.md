# Direction 1: Industrial Bold

**Rationale.** A confident manufacturer-of-pipes look: deep navy (#050f1f / #0a1c36 / #102a4d) with safety orange (#ff6a13) and hazard yellow (#ffc400) accents, high contrast throughout. Orange is used on navy only; on white, the AA-safe #b94700 is used for text. Type is Barlow Condensed 700/800 uppercase for display, with Archivo Variable for body, both self-hosted via @fontsource. The layout leans on thick rules, hazard-stripe bars, a huge outlined "SINCE 1991" numeral, big milestone numerals (1991/2013/2019), numbered category tiles and pipe cross-section SVG motifs (concentric rings). The full-bleed dark hero carries six category quick-links. Zero client JS: the mobile nav uses `<details>`.

**Run.** `pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`). Screenshots in this folder.

**TODO**
- Logo is purple/yellow and clashes slightly with navy/orange; consider a navy/white logo variant.
- Confirm brand/partner list and supply logos (placeholder tiles).
- Real product lists, sizes and specs (placeholders in `src/data/categories.ts`).
- Product photography; a proper OG image.
- Confirm the mailto enquiry form is wanted.
