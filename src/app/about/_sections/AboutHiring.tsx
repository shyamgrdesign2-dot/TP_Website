import Link from "next/link";
import { Sms } from "tp_icon/bulk";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";

const RECRUITMENT_EMAIL = "recruitment@tatvacare.in";

// Violet/eggplant gradient card (distinct from the navy Story card and the
// white ecosystem cards) with a team photo panel on the right. Photo lives
// at /public/Assets/About/team.webp.
export default function AboutHiring() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 72px)",
          paddingBottom: "clamp(40px, 4vw, 72px)",
        }}
      >
        <ScrollReveal variant="fade-up" className="w-full">
          <div
            className="relative w-full overflow-hidden rounded-[clamp(20px,2.4vw,32px)]"
            style={{
              background:
                "radial-gradient(130% 150% at 0% 0%, #46286C 0%, #25113E 55%, #372153 100%)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.12) inset, 0 20px 50px rgba(33,32,119,0.24)",
            }}
          >
            <div
              className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12"
              style={{ padding: "clamp(36px, 3.6vw, 56px)" }}
            >
              <div className="flex flex-1 flex-col gap-4 text-white">
                <h3
                  className="font-bold [text-wrap:balance]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.6vw, 36px)",
                    lineHeight: 1.16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  We are hiring across product, engineering, and clinical.
                </h3>
                <p
                  className="text-white/85"
                  style={{
                    fontSize: "clamp(14px, 1.1vw, 17px)",
                    lineHeight: 1.65,
                    maxWidth: "52ch",
                  }}
                >
                  Help us build the EMR India deserves. Explore open roles, or
                  send us your profile and tell us what you want to work on.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2.5">
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] text-white"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.20)",
                    }}
                  >
                    <Sms width={18} height={18} />
                  </span>
                  <span
                    className="text-white/80"
                    style={{ fontSize: "clamp(14px, 1.05vw, 16px)" }}
                  >
                    Mail us:
                  </span>
                  <Link
                    href={`mailto:${RECRUITMENT_EMAIL}`}
                    className="font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                    style={{ fontSize: "clamp(14px, 1.05vw, 16px)" }}
                  >
                    {RECRUITMENT_EMAIL}
                  </Link>
                </div>
              </div>

              {/* Team photo panel, branded placeholder until /about/team.jpg
                  is added. */}
              <div
                className="relative w-full shrink-0 overflow-hidden rounded-[18px] md:w-[420px]"
                style={{
                  aspectRatio: "16 / 9",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                <div aria-hidden className="absolute inset-0 img-skeleton" />
                <div className="absolute inset-0 grid place-items-center">
                  <img
                    src="/tatvapractice-logo.svg"
                    alt=""
                    aria-hidden
                    className="w-[40%] opacity-25"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                {/* Real team photo fills in once /about/team.jpg exists. */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/Assets/About/team.webp')" }}
                  role="img"
                  aria-label="The TatvaPractice team"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
