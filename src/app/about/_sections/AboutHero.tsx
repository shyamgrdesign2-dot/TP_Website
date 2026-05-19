import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import SubpageHeroBg from "@/components/SubpageHeroBg";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Compact hero for /about. Mirrors /contact + /pricing: dome +
 * animated grid backdrop, eyebrow pill, gradient hook line, and a
 * supporting paragraph. Team photos live in the AboutTeam section
 * below so the hero stays calm and the page identity reads as text.
 */
export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="About TatvaPractice"
    >
      <SubpageHeroBg />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(140px, 14vh, 200px)",
          paddingBottom: "clamp(40px, 4.4vw, 72px)",
          gap: "clamp(16px, 1.6vw, 24px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <div
            className="inline-flex items-center rounded-full border border-white/55 px-4 py-1.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.6) 100%)",
              backdropFilter: "blur(10px) saturate(150%)",
              WebkitBackdropFilter: "blur(10px) saturate(150%)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.85) inset, 0 6px 18px rgba(33,32,119,0.10)",
            }}
          >
            <span
              className="bg-clip-text text-transparent font-semibold tracking-[0.04em]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #4B4AD5 0%, #733BE5 50%, #9B2BF6 100%)",
                fontSize: "clamp(11px, 0.9vw, 13px)",
                letterSpacing: "0.4px",
              }}
            >
              About Us
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <SectionHeading>
            Transforming Healthcare,{" "}
            <GradientSpan>one practice at a time.</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={160}>
          <p
            className="text-[#4A4A66] [text-wrap:balance]"
            style={{
              fontSize: "clamp(14px, 1.15vw, 18px)",
              lineHeight: 1.6,
              maxWidth: "62ch",
            }}
          >
            TatvaCare was founded with a simple mission: give doctors their
            time back so they can focus on what matters most, their patients.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
