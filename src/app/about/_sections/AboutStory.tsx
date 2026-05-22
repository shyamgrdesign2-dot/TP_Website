import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";

// Two matching light cards with a full-height image panel:
//  - "Our Story" has the image on the right, copy on the left.
//  - "About TatvaCare" has the image on the left, copy on the right.
//
// Photos live at /public/Assets/About/{our-story,tatvacare}.webp; each
// falls back to a branded placeholder + shimmer until it paints.

function LightEyebrow({ children }: { children: string }) {
  return (
    <span
      className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4B4AD5]"
      style={{
        background: "rgba(75,74,213,0.10)",
        border: "1px solid rgba(75,74,213,0.20)",
      }}
    >
      {children}
    </span>
  );
}

export default function AboutStory() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        className="relative z-10 mx-auto flex flex-col items-stretch"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 72px)",
          paddingBottom: "clamp(40px, 4vw, 72px)",
          gap: "clamp(20px, 2.4vw, 36px)",
        }}
      >
        {/* Our Story, light card with a full-height image on the right and
            the copy on the left. */}
        <ScrollReveal variant="fade-up" className="w-full">
          <div
            className="relative w-full overflow-hidden rounded-[clamp(20px,2.4vw,32px)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.85) inset",
            }}
          >
            <div className="grid md:grid-cols-[1fr_minmax(0,42%)]">
              {/* Copy, on the left */}
              <div
                className="order-2 flex flex-col gap-5 md:order-1"
                style={{ padding: "clamp(28px, 3.2vw, 52px)" }}
              >
                <LightEyebrow>Our story</LightEyebrow>
                <h3
                  className="font-bold text-[#1F1F38] [text-wrap:balance]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.6vw, 34px)",
                    lineHeight: 1.14,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Indian doctors do not have time for tools that do not respect
                  their time.
                </h3>
                <div className="flex flex-col gap-4 text-[#4A4A66]">
                  <p style={{ fontSize: "clamp(14px, 1.1vw, 17px)", lineHeight: 1.7 }}>
                    TatvaPractice started inside the OPD floor. Our founders
                    spent months sitting next to consultants in Ahmedabad,
                    Mumbai, and Bengaluru, watching what actually happens between
                    a patient walking in and a prescription being printed.
                  </p>
                  <p style={{ fontSize: "clamp(14px, 1.1vw, 17px)", lineHeight: 1.7 }}>
                    We built TatvaPractice to close the gap between how
                    international EMRs are built and how Indian medicine is
                    practised. Indian languages, Indian abbreviations, Indian
                    compliance, Indian pricing. The EMR India deserves, built by
                    people who watched the OPD with their own eyes.
                  </p>
                </div>
              </div>

              {/* Image, full card height on the right */}
              <div
                className="relative order-1 min-h-[240px] overflow-hidden md:order-2 md:min-h-full"
                style={{
                  background:
                    "radial-gradient(120% 120% at 100% 0%, #2A2466 0%, #14123A 60%, #0B0A26 100%)",
                }}
              >
                <div aria-hidden className="absolute inset-0 img-skeleton" />
                <div className="absolute inset-0 grid place-items-center">
                  <img
                    src="/tatvapractice-logo.svg"
                    alt=""
                    aria-hidden
                    className="w-[55%] opacity-25"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/Assets/About/our-story.webp')" }}
                  role="img"
                  aria-label="Inside the OPD with TatvaPractice"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* About TatvaCare, light card with a full-height image on the left
            and the copy on the right. */}
        <ScrollReveal variant="fade-up" delay={120} className="w-full">
          <div
            className="relative w-full overflow-hidden rounded-[clamp(20px,2.4vw,32px)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.85) inset",
            }}
          >
            <div className="grid md:grid-cols-[minmax(0,42%)_1fr]">
              {/* Image, full card height on the left */}
              <div
                className="relative min-h-[240px] overflow-hidden md:min-h-full"
                style={{
                  background:
                    "radial-gradient(120% 120% at 0% 0%, #2A2466 0%, #14123A 60%, #0B0A26 100%)",
                }}
              >
                <div aria-hidden className="absolute inset-0 img-skeleton" />
                <div className="absolute inset-0 grid place-items-center">
                  <img
                    src="/tatvapractice-logo.svg"
                    alt=""
                    aria-hidden
                    className="w-[55%] opacity-25"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/Assets/About/tatvacare.webp')" }}
                  role="img"
                  aria-label="The TatvaCare team"
                />
              </div>

              {/* Copy, on the right */}
              <div
                className="flex flex-col gap-5"
                style={{ padding: "clamp(28px, 3.2vw, 52px)" }}
              >
                <LightEyebrow>About TatvaCare</LightEyebrow>
                <h3
                  className="font-bold text-[#1F1F38] [text-wrap:balance]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.6vw, 34px)",
                    lineHeight: 1.14,
                    letterSpacing: "-0.01em",
                  }}
                >
                  TatvaPractice is a TatvaCare product.
                </h3>
                <p
                  className="text-[#4A4A66]"
                  style={{ fontSize: "clamp(14px, 1.1vw, 17px)", lineHeight: 1.7 }}
                >
                  TatvaCare is a healthcare technology company building
                  end-to-end solutions for Indian healthcare delivery. From
                  clinical software to chronic disease management and research
                  infrastructure, TatvaCare operates across the full care
                  journey. TatvaPractice is TatvaCare&rsquo;s clinical
                  operations product, purpose-built for Indian OPD workflows,
                  and the broader platform serves tens of thousands of
                  healthcare professionals across India.
                </p>
                <Link
                  href="https://www.tatvacare.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 font-semibold text-[#4B4AD5] underline decoration-[#4B4AD5]/30 underline-offset-4 transition hover:decoration-[#4B4AD5]"
                  style={{ fontSize: "clamp(14px, 1.05vw, 16px)" }}
                >
                  Learn more about TatvaCare
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
