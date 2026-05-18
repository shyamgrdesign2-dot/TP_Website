import type { CSSProperties } from "react";
import OurScaleSection from "../components/_landingref/OurScaleRaw";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";
import MobileOurScale from "./MobileOurScale";

// "Our Scale" — the underlying Figma export has a hardcoded
// `w-[862px]` content canvas (heading + 2×3 stat cards). Without
// a scaling shell that fixed width leaves a lot of empty gutter on
// wider viewports + bleeds on narrower ones. We wrap the design
// canvas in `tab-widget-fit` so it scales uniformly to fill the
// section content width — same pattern Testimonials + the Feature
// subpage sections use.
//
// Design canvas: heading (~58 px) + 24 px gap + 2 × 106 px rows
// + 25 px row gap ≈ 320 px tall, 862 px wide.
export default function OurScale() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto flex flex-col items-center justify-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4.4vw, 72px)",
          paddingBottom: "clamp(40px, 4.4vw, 72px)",
          paddingInline: "16px",
        }}
      >
        {/* Desktop: 3-col × 2-row Figma frame (≥ sm). The `hidden` lives
            on this OUTER wrapper because `.tab-widget-fit` sets
            `display: flex`, which would otherwise beat Tailwind's
            `.hidden` and leak the desktop frame onto mobile. Same fix
            documented in Testimonials.tsx. */}
        <div className="hidden w-full sm:block">
          <div
            className="tab-widget-fit w-full"
            style={
              {
                "--design-w": 862,
                "--design-h": 320,
                "--fit-min-h": "0px",
              } as CSSProperties
            }
          >
            <div className="tab-widget-fit-inner">
              <OurScaleSection />
            </div>
          </div>
        </div>

        {/* Mobile: 2-col × 3-row compact stat grid — Figma 2116-9308. */}
        <MobileOurScale />
      </ScrollReveal>
    </section>
  );
}
