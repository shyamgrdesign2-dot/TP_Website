import SectionBg from "@/components/SectionBg";
import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

// Compact hero for /contact. We don't use the full FeatureHero shell
// here (h-screen, trust badges, scroll arrow) because the page's
// star is the contact FORM directly below — pulling the user down to
// the form is more important than dominating the viewport with the
// hero. So the hero stays generous but short.
export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Contact TatvaPractice"
    >
      <SectionBg variant="lavender" />

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
              Get in Touch
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <SectionHeading>
            We&rsquo;d love to{" "}
            <GradientSpan>hear from you.</GradientSpan>
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
            Whether you want to book a demo, ask about pricing, or just say
            hi — drop us a note and we&rsquo;ll respond within one business
            day. Built by clinicians, supported by humans.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
