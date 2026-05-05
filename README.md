# TatvaPractice — Website 2.0

Marketing landing page for TatvaPractice (AI-First EMR platform), implemented from the [Figma design](https://www.figma.com/design/xkkDb0mnnsoLRVigTMWv5I/TP-Website-2.0).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **lottie-react**.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Available scripts

| Command            | What it does                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the local dev server (Turbopack).   |
| `npm run build`    | Produce a production build (`.next/`).    |
| `npm start`        | Run the production build.                 |
| `npm run lint`     | Lint source with ESLint.                  |
| `npm run typecheck`| Type-check without emitting.              |

## Project layout

```
.
├─ src/
│  ├─ app/                # App Router entry (layout, page, globals)
│  └─ components/         # Hero, Navbar, TrustBadges, ScrollArrow
├─ public/figma/          # Design assets (SVGs, hero PNG, Lottie JSON)
├─ docs/                  # Reference material (Figma screenshot)
├─ next.config.ts         # Next.js config
├─ tsconfig.json          # TypeScript config
├─ postcss.config.mjs     # Tailwind v4 / PostCSS
└─ eslint.config.mjs      # ESLint flat config
```

## Deployment

The app is a standard Next.js project at the repo root, so any Next.js host
works without extra configuration.

### Vercel (recommended)

1. Import the GitHub repo into Vercel.
2. Framework preset is auto-detected as **Next.js**.
3. Build command: `next build` &nbsp;·&nbsp; Output dir: `.next` &nbsp;·&nbsp; Install: `npm install`.
4. Deploy.

### Other Node hosts (Render, Railway, Fly, self-hosted)

```bash
npm ci
npm run build
npm start    # serves on $PORT (default 3000)
```

### Static export

This page has no dynamic server work, so a static export is also possible —
add `output: "export"` in `next.config.ts` and run `next build`. Output goes
to `out/`, which can be served by any static host.

## Environment

No environment variables are required for the current page. Add an
`.env.local` (git-ignored) when integrating analytics, forms, or APIs.

## Source highlights

- [src/app/layout.tsx](src/app/layout.tsx) — fonts (Inter + Mulish) and metadata.
- [src/components/Hero.tsx](src/components/Hero.tsx) — hero section: glow, geometric tracery, CSS grid, headline, CTAs, trust strip.
- [src/components/Navbar.tsx](src/components/Navbar.tsx) — glassy nav with mobile hamburger menu.
- [src/components/TrustBadges.tsx](src/components/TrustBadges.tsx) — HIPAA / NHA / ABDM / 27001 / GDPR badges with sparkles.
- [src/components/ScrollArrow.tsx](src/components/ScrollArrow.tsx) — animated Lottie scroll-down arrow.
