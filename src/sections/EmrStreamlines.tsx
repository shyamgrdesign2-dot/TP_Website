import SectionHeading, { GradientSpan } from "../components/SectionHeading";
import EmrTabbedInterface from "../features/emr/EmrTabbedInterface";
import MobileEmrTabs from "../features/emr/MobileEmrTabs";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

export default function EmrStreamlines() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="pink" />

      <div
        className="relative mx-auto flex w-full flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(28px, 2.8vw, 40px)",
          paddingBottom: "clamp(36px, 3.8vw, 60px)",
          gap: "clamp(20px, 3vw, 44px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>
            An EMR that
            <br />
            <GradientSpan>streamlines all your needs</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        {/* Desktop layout (≥ sm) — Figma tab interface. */}
        <ScrollReveal
          variant="scale-in"
          delay={120}
          className="hidden w-full sm:block"
        >
          <div className="tab-widget-fit w-full">
            <div className="tab-widget-fit-inner">
              <EmrTabbedInterface />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile layout (< sm) — matches Figma artboard 2116-9393.
            Tab pills, title, 3 icon bullets, illustration at bottom.
            Pulls from `emrTabsData.tsx` so adding/editing tabs only
            touches one file. */}
        <MobileEmrTabs />
      </div>
    </section>
  );
}
