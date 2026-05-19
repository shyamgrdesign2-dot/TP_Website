import SectionBg from "@/components/SectionBg";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { GradientSpan } from "@/components/SectionHeading";

export default function FeatureSpecialties() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      {/* Side gutter comes from the `94vw` term of `--section-w` so
          this section sits on the homepage's left/right rhythm. */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-6 sm:gap-8"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(36px, 3.6vw, 56px)",
          paddingBottom: "clamp(36px, 3.8vw, 56px)",
        }}
      >
        <ScrollReveal variant="fade-up" once className="w-full">
          <SectionHeading>
            Built for <GradientSpan>Every Specialty</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" once className="w-full">
          <div className="glass-surface flex w-full flex-col gap-6 rounded-[24px] p-4 sm:rounded-[28px] sm:p-6 md:grid md:grid-cols-[1.2fr_1fr] md:gap-8 md:p-8">
            <div className="flex flex-col gap-4 md:gap-6">
              <p
                className="text-[#454551]/90"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                  lineHeight: 1.6,
                }}
              >
                TatvaPractice adapts to how each specialty actually documents
                care, prescribes, and follows up. From quick OPD consults to
                multi-visit chronic care, every workflow is tuned to the
                language, templates, and decision points your specialty uses
                day to day, so you spend less time wrestling the EMR and more
                time with the patient in front of you. Start quickly with
                curated workflows and scale without rebuilding your process.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "General Practice",
                  "Pediatrics",
                  "Orthopedics",
                  "Gynecology",
                  "Dermatology",
                  "Ophthalmology",
                  "Diabetology",
                  "Cardiology",
                  "ENT",
                  "Dentistry",
                  "+20 more",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-2.5 py-1"
                    style={{
                      background:
                        "linear-gradient(130deg, rgba(235,240,255,0.95) 0%, rgba(214,224,253,0.85) 100%)",
                      color: "rgba(75,74,213,0.85)",
                      fontSize: "clamp(10px, 0.88vw, 12px)",
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#EFE2FF_0%,#D9BEFF_45%,#B884FF_100%)]">
              { }
              <img
                src="/Assets/Specialties/specialties-thumbnail.png"
                alt="Doctor portrait representing specialty-ready workflows"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
