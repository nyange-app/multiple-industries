# Direction 2: Clean Corporate Light

Airy white and mist-grey surfaces with one confident blue (#1d4ed8, hover #1e40af, tints #eff5ff/#dbe8ff) and teal secondary (#0f766e text, #14b8a6 accents). Ink #0f1b33, muted #4a5878, lines #e3e9f3.
Font: Plus Jakarta Sans Variable (self-hosted via @fontsource-variable). Rounded 20px cards with soft layered shadows, pill buttons, icon-chip category cards (inline SVG icon set), sticky slim blurred header, trust bar (ISO 9001:2015 + UNBS) directly under the hero, soft blurred gradient blobs instead of photography.
Zero client JS: mobile nav uses `<details>`. Feels like a calm, scannable SaaS-grade B2B brochure.

## Run
`pnpm install && pnpm build && pnpm preview` (dev: `pnpm dev`).

## TODO
- Confirm product lists (placeholders in `src/data/categories.ts`) and brand/partner list; supply logos.
- Add real product photography, og.png (1200x630), proper logo SVG.
- Contact form is mailto-only; connect a form service if wanted.
- Add Certificates, CSR, Achievements pages.
