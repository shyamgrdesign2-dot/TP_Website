import SectionHeading, { GradientSpan } from "../components/SectionHeading";
import EmrTabbedInterface from "../features/emr/EmrTabbedInterface";
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
          paddingTop: "clamp(64px, 6.5vw, 100px)",
          paddingBottom: "clamp(56px, 6vw, 96px)",
          gap: "clamp(28px, 3vw, 44px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>
            An EMR that
            <br />
            <GradientSpan>streamlines all your needs</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal
          variant="scale-in"
          delay={120}
          className="tab-widget-fit w-full"
        >
          <div className="tab-widget-fit-inner">
            <EmrTabbedInterface />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
