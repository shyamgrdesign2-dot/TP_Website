import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";
import AiTabs from "@/features/ai/AiTabs";

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

        <ScrollReveal variant="scale-in" delay={120} className="w-full">
          <AiTabs />
        </ScrollReveal>
      </div>
    </section>
  );
}
