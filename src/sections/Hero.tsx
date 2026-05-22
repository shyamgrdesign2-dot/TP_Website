import CtaButton from "@/components/ui/CtaButton";
import SubpageHeroBg from "@/components/SubpageHeroBg";
import TrustBadges from "./TrustBadges";
import ScrollArrow from "./ScrollArrow";

export default function Hero() {
  return (
    <section
      className="relative grid min-h-[640px] w-full overflow-hidden"
      style={{
        minHeight: "100dvh",
        gridTemplateRows:
          "var(--hero-nav-offset) 1fr var(--hero-scroll-offset)",
      }}
      aria-label="TatvaPractice, AI-first EMR for Indian clinics"
    >
      {/* Same dome + animated-grid backdrop the subpage heroes use, so the
          homepage hero reads consistently with /about, /pricing, /contact. */}
      <SubpageHeroBg />

      {/* Content row, box grid centered here only */}
      <div className="relative row-start-2 min-h-0">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full max-w-[min(1400px,100vw)] -translate-x-1/2 -translate-y-1/2"
          style={{
            height: "clamp(580px, 76vh, 880px)",
            backgroundImage:
              "linear-gradient(to right, rgba(75,74,213,0.085) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.085) 1px, transparent 1px)",
            backgroundSize:
              "clamp(44px, 5.2vw, 80px) clamp(44px, 5.2vw, 80px)",
            backgroundPosition: "center center",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 82% at 50% 50%, black 0%, black 20%, rgba(0,0,0,0.5) 46%, rgba(0,0,0,0.2) 62%, transparent 84%)",
            maskImage:
              "radial-gradient(ellipse 90% 82% at 50% 50%, black 0%, black 20%, rgba(0,0,0,0.5) 46%, rgba(0,0,0,0.2) 62%, transparent 84%)",
          }}
        />

        <div className="relative z-10 flex min-h-full items-center justify-center">
          <div className="mx-auto flex w-full max-w-[var(--section-w)] flex-col items-center gap-4 text-center sm:gap-6">
            <div
              className="load-rise relative overflow-hidden rounded-full border border-[#E8E0F0] bg-white/80"
              style={{
                animationDelay: "120ms",
                padding: "clamp(7px, 0.8vw, 12px) clamp(16px, 1.6vw, 26px)",
                boxShadow: "0 2px 12px rgba(33,32,119,0.06)",
              }}
            >
              <span
                className="bg-clip-text font-medium tracking-[0.5px] whitespace-nowrap text-transparent"
                style={{
                  fontSize: "clamp(13px, 1.15vw, 20px)",
                  backgroundImage:
                    "linear-gradient(90deg, #4B4AD5 0%, #733BE5 28%, #9B2BF6 65%, #4B4AD5 100%)",
                }}
              >
                Trusted AI-First EMR Platform
              </span>
            </div>

            <div className="flex flex-col items-center gap-3.5">
              <h1
                className="load-rise max-w-[min(100%,22rem)] font-extrabold leading-[1.06] tracking-[-1px] text-[#1F1F1F] [text-wrap:balance] sm:max-w-[min(1280px,92vw)] sm:tracking-[-2px]"
                style={{
                  animationDelay: "240ms",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 6.2vw, 88px)",
                }}
              >
                Everything you need to run a{" "}
                <span className="text-shimmer">faster practice.</span>
              </h1>
              <p
                className="load-rise text-[#3D3D3D]"
                style={{
                  animationDelay: "420ms",
                  maxWidth: "clamp(300px, 60vw, 960px)",
                  fontSize: "clamp(15px, 1.3vw, 18px)",
                  lineHeight: 1.6,
                }}
              >
                TatvaPractice automates your clinical workflow so you can focus
                on delivering better patient care.
              </p>
            </div>

            <div
              className="load-rise hero-cta-row mt-2 flex w-full flex-col justify-center gap-3 px-[clamp(24px,7vw,32px)] sm:flex-row sm:gap-5 sm:px-0"
              style={{
                animationDelay: "560ms",
                maxWidth: "clamp(480px, 54vw, 860px)",
                width: "100%",
              }}
            >
              <CtaButton
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full min-w-0 sm:min-w-[200px] sm:flex-1 sm:basis-0"
              >
                Book Demo
              </CtaButton>
              <CtaButton
                href="/pricing"
                variant="primary"
                size="lg"
                className="w-full min-w-0 sm:min-w-[200px] sm:flex-1 sm:basis-0"
                style={{
                  backgroundImage:
                    "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
                }}
              >
                Start Free Trial
              </CtaButton>
            </div>

            <div
              className="load-rise flex w-full justify-center"
              style={{
                animationDelay: "700ms",
                paddingTop: "clamp(28px, 3vw, 52px)",
                paddingBottom: "clamp(12px, 1.5vw, 24px)",
              }}
            >
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 row-start-3 flex items-center justify-center">
        <div className="opacity-70">
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}
