# TatvaPractice Website — Structure & Responsiveness Guide

## Page Architecture

Every page follows the same vertical composition:

```
<main>
  <Navbar />           ← fixed/sticky top navigation
  <Hero />             ← full-bleed hero (viewport height on desktop)
  <Section />          ← content sections, each in SectionShell
  ...
  <FinalCTA />         ← navy gradient call-to-action card
  <Footer />           ← dark footer with links & compliance badges
  <MobileStickyCTA />  ← sticky bottom CTA bar, hidden on sm+
</main>
```

The `<main>` wrapper carries `pb-[88px] sm:pb-0` to reserve space for
the mobile sticky CTA at the bottom of the viewport.

## Routes

| Route                     | Page Component           | Hero Variant     |
|---------------------------|--------------------------|------------------|
| `/`                       | `app/page.tsx`           | Homepage Hero    |
| `/features/voice-rx`      | `app/features/voice-rx`  | FeatureHero      |
| `/features/ai-assistant`  | `app/features/ai-assist` | FeatureHero      |
| `/features/emr`           | `app/features/emr`       | FeatureHero      |
| `/solutions/clinics`      | `app/solutions/clinics`  | SolutionHero     |
| `/solutions/hospitals`    | `app/solutions/hospitals`| SolutionHero     |
| `/about`                  | `app/about/page.tsx`     | SolutionHero     |
| `/contact`                | `app/contact/page.tsx`   | Custom hero      |

Feature and Solution subpages share a common shell
(`FeaturePage.tsx`) that renders the appropriate hero variant, then
shared content sections (Practice Management, Why Doctors, Specialties,
Testimonials, FinalCTA, Footer).

## Layout System

### CSS Variables (defined in `globals.css`)

| Variable              | Value                              | Purpose                          |
|-----------------------|------------------------------------|----------------------------------|
| `--section-w`         | `min(1136px, 92vw)`               | Max content width for all sections |
| `--hero-nav-offset`   | `clamp(72px, 9vh, 110px)`         | Space for fixed navbar in hero grid |
| `--hero-scroll-offset`| `clamp(48px, 6vh, 80px)`          | Space for scroll arrow in hero grid |

### SectionShell + SectionContent

Every content section uses this two-layer pattern:

- **`SectionShell`** — full-bleed `<section>` with optional atmospheric
  background (`SectionBg`). Handles the visual "canvas".
- **`SectionContent`** — centred `<div>` constrained to `--section-w`
  with padding presets (`default`, `tight`, `loose`, `none`).

```
<SectionShell bg="lavender">
  <SectionContent padding="default">
    {/* content here */}
  </SectionContent>
</SectionShell>
```

Padding presets:
- `default`: `clamp(40px, 4vw, 72px)` top/bottom
- `tight`: `clamp(28px, 2.8vw, 48px)` top/bottom
- `loose`: `clamp(56px, 5.5vw, 96px)` top/bottom
- `none`: `0` top/bottom

### ScrollReveal

Wraps content in a `<div>` that fades/slides into view on scroll.
Variants: `fade-up`, `scale-in`, `slide-left`, `slide-right`. Uses
IntersectionObserver — no JS animation libraries.

## Responsive Design Principles

### Mobile-First, Content-Driven Heights

All containers use content-driven height on mobile. Fixed heights, aspect
ratios, and viewport-filling behaviour only activate at the `md` (768px)
breakpoint or above.

**Key rule**: On mobile (< 768px), no element should have a fixed height
that could cause content clipping. Use `h-auto`, `h-fit`, or no explicit
height. Desktop can use `h-screen`, `min-h-[640px]`, and aspect ratios.

### Hero Section Pattern

```
Mobile (< md):
  section     → natural height (content-driven)
  content div → flex flex-col, gap-6, no flex-1, no justify-between
  hero card   → fit-content (no aspect ratio, no min-height)
  trust badges→ natural flow below card with padding

Desktop (≥ md):
  section     → h-screen min-h-[640px] (fills viewport)
  content div → flex-1 justify-center (vertically centres content)
  hero card   → md:aspect-[1040/420] md:min-h-[356px]
  scroll arrow→ visible at bottom
```

### Breakpoints (Tailwind defaults)

| Prefix | Min-width | Usage                                    |
|--------|-----------|------------------------------------------|
| (none) | 0px       | Mobile-first base styles                 |
| `sm`   | 640px     | Small tablets, hide mobile-only elements |
| `md`   | 768px     | Tablets — hero fills viewport, side-by-side layouts |
| `lg`   | 1024px    | Desktop — full feature tab layouts       |
| `xl`   | 1280px    | Wide desktop                             |

### Fluid Sizing with `clamp()`

All spacing, font sizes, and dimensions use `clamp(min, preferred, max)`
for smooth scaling without breakpoint jumps:

```css
font-size: clamp(14px, 1.15vw, 20px);
padding: clamp(40px, 4vw, 72px);
gap: clamp(10px, 1.4vw, 24px);
```

The `preferred` value (middle argument) uses `vw` for viewport-relative
scaling. The `min` and `max` values set hard floors and ceilings.

## Component Patterns

### SubpageHeroCard

Navy gradient card used in feature + solution hero sections. Two layout
variants:

- `"feature"` — wide image panel with optional overlay thumbnail
- `"solutions"` — narrower inset image panel inside the card

The card is always content-driven on mobile (no fixed height). On
desktop (`md:`), it uses `aspect-[1040/420]` with `min-h-[356px]`.

### TrustBadges

Compliance badge strip (HIPAA, NHA, ABDM, ISO 27001, GDPR). On mobile,
badges render in a 3+2 stacked layout. On `sm+`, they flow in a single
row. The badge container aligns to `--section-w` via its parent.

### FloatingTabShowcase

Tabbed product showcase with floating card body. On mobile, the card
body is `relative` (inline flow). On `lg+`, the card body is `absolute`
positioned below the tab strip for the "floating" visual effect.

### FinalCTA

Full-width navy gradient CTA card. Uses `SectionContent padding="default"`
to provide spacing between it and adjacent sections (especially Footer).

## Typography

| Token              | Font Family                    | Usage           |
|--------------------|--------------------------------|-----------------|
| `--font-display`   | Mulish (variable)              | Headlines, hero |
| `--font-sans`      | Inter (variable)               | Body, UI        |

All text sizes use `clamp()` for fluid scaling. Headlines typically range
from `~1.5rem` (mobile) to `~2.6rem` (desktop).

## Colour System

| Token / Value       | Usage                                    |
|---------------------|------------------------------------------|
| `#1F1F1F`           | Primary text                             |
| `#3D3D3D`           | Secondary text                           |
| `#4B4AD5`           | Brand indigo (CTAs, gradients)           |
| `#9B2BF6`           | Brand violet (accent gradients)          |
| `#0B0A6F`           | Deep navy (trust badges text)            |
| `#101056` – `#4443BA` | Navy gradient range (hero cards)       |
| `white/80`, `white/60` | Transparency variants on dark surfaces |

## Section Spacing

Sections inside `LandingProductBand` (homepage) get automatic spacing
via `gap: clamp(80px, 10vw, 140px)`. Standalone sections (subpages)
rely on each `SectionContent` padding preset to create vertical rhythm.

Between `FinalCTA` and `Footer`, the CTA section uses `padding="default"`
which provides `clamp(40px, 4vw, 72px)` of spacing on both top and bottom.
