import type { CSSProperties } from "react";
import SectionBg from "@/components/SectionBg";
import ScrollReveal from "@/components/ScrollReveal";
import WhyDoctorsFigmaFrame, {
  type WhyDoctorsFrameContent,
} from "../_imports/Frame2147239996/Frame2147239996";

// "Why Doctors Choose <feature>" — heading + 2×3 grid of frosted glass
// cards with eggplant title plaques. Heading + the six cards come from
// props so the same shell powers every Feature subpage.
//
// Design height: heading (~58) + 24 gap + 280 row1 + 24 gap + 280
// row2 ≈ 666. Width: 800. Rows use min-h-[199px] (defined in the
// Figma frame) so they stretch when body copy wraps past three lines,
// and the design-h here is set with headroom for that growth.
export default function FeatureWhyDoctors({
  content,
}: {
  content: WhyDoctorsFrameContent;
}) {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      {/* Side padding is provided by the `94vw` term of `--section-w`
          — same pattern as the homepage's OurScale / BuiltInAI / etc.
          We deliberately drop the extra `px-6 sm:px-10 lg:px-12` that
          was previously here so the subpage content sections sit on
          the SAME left/right rhythm as the homepage instead of having
          a thicker gutter that made the cards feel narrower. */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(36px, 3.6vw, 56px)",
          paddingBottom: "clamp(36px, 3.8vw, 56px)",
        }}
      >
        <ScrollReveal variant="fade-up" once className="w-full">
          {/* The 6-card grid is allowed to expand to the FULL section
              content width (var(--section-w) — same as the homepage's
              "Built for Every Practice Size" grid). This is the user
              ask: the cards should grow with the viewport so the grid
              feels generous rather than a 900-px island floating in
              empty side-margin. The `tab-widget-fit` shell still
              scales the Figma frame uniformly, so heading, card body,
              padding all enlarge together — but at full section width
              that scale factor (~1.5× on desktop) is the natural
              rhythm of a hero-adjacent content grid, not a "zoom-in"
              artefact like it was on the narrower hero card. */}
          <div
            className="tab-widget-fit w-full"
            // `--fit-min-h: 0` opts this section OUT of the design-h
            // floor — its content is pure flex (no absolute children),
            // so the floor was leaving dead space below the bottom row.
            style={
              {
                "--design-w": 800,
                "--design-h": 680,
                "--fit-min-h": "0px",
              } as CSSProperties
            }
          >
            <div className="tab-widget-fit-inner">
              <WhyDoctorsFigmaFrame {...content} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
