import type { CSSProperties } from "react";
import SectionBg from "@/components/SectionBg";
import ScrollReveal from "@/components/ScrollReveal";
import SpecialtiesFigmaFrame from "../_imports/Frame2147240000-1/Frame2147240000-1-229";

// "Designed for Every Specialty" — heading + 400px white frosted card
// with the Built-for-Your-Specialty copy (left) and the lavender
// decorative card with the doctor headshot (right). The decorative
// card uses absolute positioning at fixed pixel offsets, so we scale
// the entire composition through .tab-widget-fit.
//
// Total design height: heading (~58) + 24 gap + 400 = ~482. Width: 840.
export default function FeatureSpecialties() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      {/* Side gutter comes from the `94vw` term of `--section-w` so
          this section sits on the homepage's left/right rhythm. */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(36px, 3.6vw, 56px)",
          paddingBottom: "clamp(36px, 3.8vw, 56px)",
        }}
      >
        <ScrollReveal variant="fade-up" once className="w-full">
          {/* Card fills the section width — same width-handling pattern
              as FinalCTA + FeatureWhyDoctors. */}
          <div
            className="tab-widget-fit w-full"
            style={{ "--design-w": 840, "--design-h": 482 } as CSSProperties}
          >
            <div className="tab-widget-fit-inner">
              <SpecialtiesFigmaFrame />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
