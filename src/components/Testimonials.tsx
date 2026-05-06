import TestimonialsSection from "./_landingref/TestimonialsRaw";
import ScrollReveal from "./_primitives/ScrollReveal";
import SectionBg from "./_primitives/SectionBg";

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="pink" />
      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(48px, 5vw, 80px)",
          paddingBottom: "clamp(48px, 5vw, 80px)",
        }}
      >
        <TestimonialsSection />
      </ScrollReveal>
    </section>
  );
}
