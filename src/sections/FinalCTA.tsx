import RadialGradientBg from "../components/RadialGradientBg";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="pink" />
      <ScrollReveal
        variant="scale-in"
        className="relative mx-auto"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 64px)",
          paddingBottom: "clamp(40px, 4vw, 64px)",
        }}
      >
        <div
          className="relative w-full overflow-hidden rounded-[32px]"
          style={{ minHeight: "clamp(280px, 22vw, 360px)" }}
        >
          <RadialGradientBg variant="navy" />
          <div
            className="relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center"
            style={{
              padding: "clamp(40px, 4vw, 64px) clamp(20px, 3vw, 48px)",
              gap: "clamp(14px, 1.4vw, 20px)",
              minHeight: "clamp(280px, 22vw, 360px)",
            }}
          >
            <h2
              className="font-bold text-white [text-wrap:balance]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
              }}
            >
              Start Your Free 7-Day Trial
            </h2>
            <p
              className="text-white/85"
              style={{
                fontSize: "clamp(13px, 1.05vw, 16px)",
                lineHeight: 1.55,
                maxWidth: "60ch",
              }}
            >
              No credit card required. Join 10,000+ doctors who are saving hours every week with TatvaPractice.
            </p>
            <div
              className="mt-2 flex items-center justify-center"
              style={{ gap: "clamp(12px, 1.2vw, 18px)" }}
            >
              <a
                href="#"
                className="cta-outline flex items-center justify-center rounded-[14px] border border-white/40 font-semibold text-white"
                style={{
                  height: "clamp(46px, 3.4vw, 56px)",
                  padding: "0 clamp(20px, 1.8vw, 28px)",
                  fontSize: "clamp(13px, 1vw, 16px)",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                }}
              >
                Book Demo
              </a>
              <a
                href="#"
                className="cta-shimmer flex items-center justify-center rounded-[14px] font-semibold text-[#1f1f1f]"
                style={{
                  height: "clamp(46px, 3.4vw, 56px)",
                  padding: "0 clamp(20px, 1.8vw, 28px)",
                  fontSize: "clamp(13px, 1vw, 16px)",
                  backgroundImage:
                    "linear-gradient(180deg, #ffffff 0%, #ECEAFF 100%)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                }}
              >
                <span className="relative z-[1]">Start Free Trial</span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
