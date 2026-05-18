import type { CSSProperties } from "react";
import SectionBg from "@/components/SectionBg";
import TrustBadges from "@/sections/TrustBadges";
import ScrollArrow from "@/sections/ScrollArrow";
import HeroFigmaFrame, {
  type HeroFrameContent,
} from "../_imports/Frame2147240061/Frame2147240061";

// Hero section for every Feature subpage. Mirrors the homepage Hero
// atmosphere (top-glow + header-lines + soft white wash + CSS grid),
// fills the viewport (`h-screen min-h-[640px]`) so the initial fold
// shows only the navy product card + trust markers + scroll arrow, and
// animates everything in with the existing `.load-rise` keyframe so the
// page transition feels intentional.
export default function FeatureHero({
  content,
}: {
  content: HeroFrameContent;
}) {
  // Visually-hidden semantic <h1> so each feature page has a proper
  // primary heading for screen readers and search crawlers. The Figma
  // frame renders the headline visually as <p> (we're importing the
  // export verbatim), so this <h1> sits behind it and announces the
  // same text without affecting layout.
  const semanticHeadline = `${content.headlineLines[0]} ${content.headlineLines[1]}`.trim();

  return (
    <section className="relative flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-white">
      {/* Screen-reader-only primary heading. `sr-only` is the Tailwind
          equivalent of WebAIM's visually-hidden pattern — keeps the
          element accessible to crawlers + a11y while keeping the
          Figma frame's visual layout untouched. */}
      <h1 className="sr-only">{semanticHeadline}</h1>

      {/* Same lavender atmospheric wash the homepage uses. Grid is
          rendered separately below (the homepage hero has its own grid
          styling to draw inside the frosted glass). */}
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

      {/* Top semicircle glow (sits behind the navbar, scales with both
          width and height). */}
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

      {/* Soft white radial wash behind the card so the grid doesn't
          fight the hero card for legibility. */}
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

      {/* Hero card + trust strip as a single centred vertical group.
          Trust badges sit directly below the card with a small gap
          (no more pinning to the viewport's bottom edge). The whole
          group floats in the middle of the available height between
          the navbar and the scroll arrow. The Figma frame scales
          uniformly via `.tab-widget-fit`, so all child elements
          (typography, the floating Voice Rx pop-up illustration,
          padding) scale together. */}
      {/* Centred hero group. The `var(--section-w)` constraint on the
          card maxWidth is the SAME width every other section uses
          (FinalCTA, Practice Mgmt, Why Doctors, Specialties, OurScale,
          BuiltInAI, etc.) — so the left/right gutter is consistent
          everywhere on every viewport. The Figma frame inside is
          additionally bounded by the viewport HEIGHT term so the card
          can never grow tall enough to push the trust badges + scroll
          arrow off-screen on short laptops. */}
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
            // `var(--section-w)` is the canonical content width that
            // every other section uses; the second arg keeps very
            // short viewports from blowing the card height past the
            // visible area (1040/420 ≈ 2.476).
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
              <HeroFigmaFrame {...content} />
            </div>
          </div>
        </div>

        {/* Trust badges sit just below the card — part of the same
            centred group, not a viewport-pinned strip. */}
        <div
          className="load-rise flex w-full justify-center"
          style={{ animationDelay: "320ms" }}
        >
          <TrustBadges />
        </div>
      </div>

      {/* Scroll arrow stays pinned to the bottom of the viewport so it
          always reads as a "more below" affordance. */}
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
