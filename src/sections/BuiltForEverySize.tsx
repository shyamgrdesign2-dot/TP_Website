import PracticeSizeRaw from "../features/size/PracticeSizeRaw";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

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
