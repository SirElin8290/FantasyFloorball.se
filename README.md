# FantasyFloorball.se

Responsive Next.js 16 / React 19 / TypeScript landing page for the Herrar Division 2 Värmland 2026/27 pilot.

## Development

Use Node.js 22 and pnpm 11.19.0 (declared in package.json).

    pnpm install --frozen-lockfile
    pnpm dev
    pnpm build

The static site is exported to `out/`. On GitHub Actions, the base path is `/FantasyFloorball.se`. The Pages workflow installs locked dependencies, builds the export, and deploys `out/`.

## Approved visual reference

`public/approved-mockup.png` is the reference supplied by the site owner on 10 September 2026. No new imagery was generated. The Artwork component displays selected, unmodified areas of that image: photography, brush lettering, logo, icons, map, crests, avatars and news thumbnails. All navigation, copy, lists, cards, buttons and dialogs are HTML and adapt to mobile screens. Screen-reader text accompanies the decorative heading artwork.

The desktop composition follows the reference's 1024 × 1536 proportions. Below 760px, cards stack and navigation becomes a mobile menu. Fonts are served locally; their licenses are included in public/fonts.

## Preview content

Match dates, scores, manager names and news are demonstration content, not a verified schedule or live results. Registration, login and full articles are not implemented: the corresponding controls open explanatory dialogs. No accounts, analytics or personal data are collected by this landing page.

## Verification

- Production build and TypeScript validation.
- Visual comparison with the approved image, including a mobile full-page review.
- Browser geometry checks at 360, 390, 430, 768, 1024 and 1280px: no horizontal overflow.
- Mobile menu, account and points dialogs, and Escape-to-close behavior checked in the browser.
- GitHub Pages base-path export checked locally before publishing.
