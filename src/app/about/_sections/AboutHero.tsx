import { GradientSpan } from "@/components/SectionHeading";
import SubpageHeroBg from "@/components/SubpageHeroBg";
import ScrollReveal from "@/components/ScrollReveal";
import TrustBadges from "@/sections/TrustBadges";

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
          <h1
            className="font-extrabold leading-[1.06] tracking-[-1px] text-[#1F1F1F] [text-wrap:balance] sm:tracking-[-2px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4.8vw, 64px)",
              maxWidth: "min(900px, 92vw)",
            }}
          >
            We are building the
            <br />
            <GradientSpan>EMR India deserves.</GradientSpan>
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={160}>
          <p
            className="text-[#3D3D3D] [text-wrap:balance]"
            style={{
              fontSize: "clamp(15px, 1.3vw, 21px)",
              lineHeight: 1.6,
              maxWidth: "min(680px, 90vw)",
            }}
          >
            TatvaPractice is part of TatvaCare, a healthcare technology company
            solving India&rsquo;s care-delivery gaps end to end.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={220} className="w-full">
          <div className="mt-2 flex w-full justify-center">
            <TrustBadges />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
