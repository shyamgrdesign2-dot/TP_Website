import PracticeSizeRaw from "./_size/PracticeSizeRaw";
import ScrollReveal from "./_primitives/ScrollReveal";
import SectionBg from "./_primitives/SectionBg";

export default function BuiltForEverySize() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />
      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(56px, 5.5vw, 88px)",
          paddingBottom: "clamp(56px, 6vw, 88px)",
        }}
      >
        <PracticeSizeRaw />
      </ScrollReveal>
    </section>
  );
}
