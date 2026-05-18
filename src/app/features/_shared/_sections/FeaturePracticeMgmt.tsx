import type { CSSProperties } from "react";
import SectionBg from "@/components/SectionBg";
import ScrollReveal from "@/components/ScrollReveal";
import PracticeMgmtFigmaFrame from "../_imports/Frame2147240002/Frame2147240002";

// "Complete AI-First Practice Management in One System" section.
//
// The section itself spans the same `min(1320px, 94vw)` content width
// as every homepage section, so the page rhythm matches. The Figma
// card inside is wrapped in a SECOND `max-w` clamp pinned just slightly
// above its design size (862 → ~960 px max), which means `.tab-widget-fit`
// never up-scales the card beyond ~1.1× design. The result reads at the
// same visual weight as the homepage's content cards (Our Scale, Built
// In AI, etc.) instead of the previous 1.5× upscale that made type +
// padding feel zoomed-in on subpages.
//
// Design size: heading (~95) + 24 gap + 403 eggplant card = ~522. We set
// `--design-h: 530` (above the natural total) so the rounded bottom edge
// of the eggplant card always reads as the section's true bottom — never
// clipped by the inner `aspect-ratio` box like it was at the old 485.
export default function FeaturePracticeMgmt() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      {/* Single canonical content width — same `var(--section-w)` every
          other section uses, so the page gutter is consistent. */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(28px, 2.8vw, 52px)",
          paddingBottom: "clamp(36px, 3.8vw, 60px)",
        }}
      >
        <ScrollReveal variant="fade-up" once className="w-full">
          {/* The card fills the full section content width (same as the
              FinalCTA card pattern). The `tab-widget-fit` shell scales
              the Figma frame uniformly with the section width, so the
              heading + eggplant card grow proportionally on wider
              viewports — same behaviour as FinalCTA's navy card. */}
          <div
            className="tab-widget-fit w-full"
            style={{ "--design-w": 862, "--design-h": 530 } as CSSProperties}
          >
            <div className="tab-widget-fit-inner">
              <PracticeMgmtFigmaFrame />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
