import SectionHeading, { GradientSpan } from "../components/SectionHeading";
import AiTabbedInterface from "../features/ai/AiTabbedInterface";
import MobileAiTabs from "../features/ai/MobileAiTabs";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

export default function BuiltInAI() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        className="relative z-10 mx-auto flex w-full flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(28px, 2.8vw, 40px)",
          paddingBottom: "clamp(36px, 3.8vw, 60px)",
          gap: "clamp(20px, 3vw, 44px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>
            Built-In AI to
            <br />
            <GradientSpan>Supercharge Your Workflow</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        {/* Desktop layout (≥ sm) — verbatim Figma tab interface. */}
        <ScrollReveal
          variant="scale-in"
          delay={120}
          className="hidden w-full sm:block"
        >
          <div className="tab-widget-fit w-full">
            <div className="tab-widget-fit-inner">
              <AiTabbedInterface />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile layout (< sm) — tab pills above a vertical card with
            text on top + illustration at the bottom. Matches Figma
            mobile artboard 2116-9359. Pulls from the same
            `aiTabsData.tsx` array the desktop interface will consume. */}
        <MobileAiTabs />
      </div>
    </section>
  );
}
