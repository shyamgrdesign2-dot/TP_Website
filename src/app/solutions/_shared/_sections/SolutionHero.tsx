import type { CSSProperties } from "react";
import SectionBg from "@/components/SectionBg";
import TrustBadges from "@/sections/TrustBadges";
import ScrollArrow from "@/sections/ScrollArrow";
import SolutionsHeroFrame, {
  type SolutionsHeroFrameContent,
} from "../_imports/Frame2147240057/Frame2147240057";

// Hero section for `/solutions/*` subpages (Clinics, Hospitals).
//
// Same atmospheric shell the Feature heroes use (lavender SectionBg,
// top-glow + header-lines + faded grid, trust badges below the card,
// scroll arrow pinned to the viewport bottom), but the INNER CARD
// itself comes from the Solutions-specific Figma frame
// (1040×420, white grain-radial backdrop, text column on the left,
// narrow 324×356 inset image card on the right).
//
// Visually different from the Feature hero in three ways the user
// called out explicitly:
//   1. The image lives INSIDE a contained 324 × 356 inset panel — it
//      never bleeds past the outer card boundary the way the Feature
//      hero's wide overlay does.
//   2. The eyebrow pill, headline, subhead AND CTAs are all wrapped
//      inside a single 976 × 356 content box (32 px inset from every
//      card edge), so nothing escapes the inner content area.
//   3. The card has generous top + bottom padding (32 px each plus
//      the centred flex column inside) so the whole thing reads as
//      spacious rather than cramped.
export default function SolutionHero({
  content,
}: {
  content: SolutionsHeroFrameContent;
}) {
  const headlineLines = content.headlineLines ?? ["", ""];
  const semanticHeadline = `${headlineLines[0]} ${headlineLines[1]}`.trim();

  return (
    <section
      className="relative flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-white"
      aria-label="TatvaPractice — solution overview"
    >
      {/* Visually-hidden primary heading so screen readers + crawlers
          get the headline as an <h1>. The Figma frame already renders
          the same copy as an <h1> visually; this is a safety net for
          any future content shape that swaps the visual heading. */}
      <h1 className="sr-only">{semanticHeadline || "TatvaPractice"}</h1>

      <SectionBg variant="lavender" withGrid={false} intensity={1.2} />

      {/* Geometric line tracery — sits glued to the navbar; upper half
          tucks behind the frosted nav, lower half fans into the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "clamp(54px, 7vh, 90px)",
          width: "min(960px, 96vw)",
          aspectRatio: "947 / 508",
          backgroundImage: "url('/figma/header-lines.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Top semicircle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-0 -translate-x-1/2"
        style={{
          top: "clamp(-220px, -12vw, -80px)",
          width: "min(160vw, 2200px)",
          height: "clamp(420px, 65vh, 1100px)",
          backgroundImage: "url('/figma/top-glow.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Soft white radial wash behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[120vw] max-w-[1600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 45% 38% at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 35%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* CSS grid — fills the section, fades on all four sides */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(75,74,213,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.10) 1px, transparent 1px)",
          backgroundSize:
            "clamp(40px, 4.5vw, 64px) clamp(40px, 4.5vw, 64px)",
          backgroundPosition: "center center",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
        }}
      />

      {/* Soft purple glow above the trust strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[140px] left-1/2 z-0 h-[170px] w-[min(1133px,90vw)] -translate-x-1/2 rounded-full opacity-40 blur-[51px]"
        style={{
          background:
            "radial-gradient(ellipse 800px 120px at center, rgba(164,26,240,0.55), rgba(120,50,227,0.35) 35%, rgba(75,74,213,0) 70%)",
        }}
      />

      {/* Centred hero group. Card maxWidth uses `var(--section-w)` —
          the same content width every other section uses — so the
          left/right gutter on the Solutions hero matches the rest of
          the page. */}
      <div
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-[clamp(20px,2.4vw,36px)]"
        style={{
          paddingTop: "clamp(120px, 11vh, 150px)",
          paddingBottom: "clamp(24px, 2vw, 40px)",
        }}
      >
        <div
          className="load-rise mx-auto"
          style={{
            animationDelay: "120ms",
            width: "100%",
            maxWidth: "min(var(--section-w), calc((100vh - 320px) * 2.476))",
          }}
        >
          <div
            className="tab-widget-fit w-full"
            style={
              { "--design-w": 1040, "--design-h": 420 } as CSSProperties
            }
          >
            <div className="tab-widget-fit-inner">
              <SolutionsHeroFrame {...content} />
            </div>
          </div>
        </div>

        {/* Trust badges sit just below the card — same approach as the
            Feature hero so the rhythm between the two hero types
            matches end-to-end. */}
        <div
          className="load-rise flex w-full justify-center"
          style={{ animationDelay: "320ms" }}
        >
          <TrustBadges />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-shrink-0 flex-col items-center pb-4 sm:pb-6">
        <div
          className="load-rise opacity-70"
          style={{ animationDelay: "480ms" }}
        >
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}
