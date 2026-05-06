import SectionHeading, { GradientSpan } from "../components/SectionHeading";
import AiTabbedInterface from "../features/ai/AiTabbedInterface";
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
          paddingTop: "clamp(64px, 6.5vw, 100px)",
          paddingBottom: "clamp(56px, 6vw, 96px)",
          gap: "clamp(28px, 3vw, 44px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>
            Built-In AI to
            <br />
            <GradientSpan>Supercharge Your Workflow</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal
          variant="scale-in"
          delay={120}
          className="tab-widget-fit w-full"
        >
          <div className="tab-widget-fit-inner">
            <AiTabbedInterface />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
