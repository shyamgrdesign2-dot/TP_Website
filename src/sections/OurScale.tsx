import OurScaleSection from "../components/_landingref/OurScaleRaw";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

export default function OurScale() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto flex flex-col items-center justify-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(80px, 8vw, 140px)",
          paddingBottom: "clamp(80px, 8vw, 140px)",
          minHeight: "clamp(520px, 48vw, 720px)",
        }}
      >
        <OurScaleSection />
      </ScrollReveal>
    </section>
  );
}
