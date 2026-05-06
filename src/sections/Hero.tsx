import TrustBadges from "./TrustBadges";
import ScrollArrow from "./ScrollArrow";
import SectionBg from "../components/SectionBg";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-white"
    >
      {/* Same lavender atmospheric wash used by every section below — keeps
          the hero family-coherent with PracticeManagement so there's no hard
          colour cut at the section seam. Grid is rendered separately below
          (Hero has its own grid styling already). */}
      <SectionBg variant="lavender" withGrid={false} intensity={1.2} />

      {/* Geometric line tracery — sits stuck to the navbar; the upper half
          is hidden behind the navbar's frosted background, the lower half
          fans out into the hero. Rendered ABOVE the purple semicircle glow
          so the white lines stay visible against the gradient backdrop. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "clamp(54px, 7vh, 90px)",
          width: "min(960px, 96vw)",
          aspectRatio: "947 / 508",
          backgroundImage: "url('/figma/header-lines.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Top semicircle glow (sits behind navbar, scales with width AND height) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-0 -translate-x-1/2"
        style={{
          top: "clamp(-220px, -12vw, -80px)",
          width: "min(160vw, 2200px)",
          height: "clamp(420px, 65vh, 1100px)",
          backgroundImage: "url('/figma/top-glow.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Soft white radial wash behind the content so the grid doesn't
          fight with the headline / subtext for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[120vw] max-w-[1600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 45% 38% at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 35%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* CSS grid — fills the entire section, fades on all four sides */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(75,74,213,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.10) 1px, transparent 1px)",
          backgroundSize: "clamp(40px, 4.5vw, 64px) clamp(40px, 4.5vw, 64px)",
          backgroundPosition: "center center",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
        }}
      />


      {/* Soft purple glow above the trust strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[140px] left-1/2 z-0 h-[170px] w-[min(1133px,90vw)] -translate-x-1/2 rounded-full opacity-40 blur-[51px]"
        style={{
          background:
            "radial-gradient(ellipse 800px 120px at center, rgba(164,26,240,0.55), rgba(120,50,227,0.35) 35%, rgba(75,74,213,0) 70%)",
        }}
      />

      {/* Vertically-centered hero content — top padding equals the navbar's
          top offset + height so the content centers within the visible
          gap between the navbar and the trust strip, not the full section. */}
      <div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: "clamp(72px, 8vh, 110px)" }}
      >
        <div
          className="flex w-full flex-col items-center gap-5 sm:gap-7"
          style={{ maxWidth: "min(1320px, 92vw)" }}
        >
          {/* Pill — glossy glass effect matching the navbar */}
          <div
            className="load-rise relative overflow-hidden rounded-full border border-white/50 backdrop-blur-xl backdrop-saturate-150"
            style={{
              animationDelay: "120ms",
              padding: "clamp(7px, 0.8vw, 12px) clamp(16px, 1.6vw, 26px)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.6) 100%)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.7) inset, 0 6px 20px rgba(33,32,119,0.12)",
            }}
          >
            <span
              aria-hidden
              className="absolute left-1/2 top-0 h-[1px] w-[80%] -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
            <span
              className="bg-clip-text text-transparent font-medium tracking-[0.5px] whitespace-nowrap"
              style={{
                fontSize: "clamp(13px, 1.15vw, 20px)",
                backgroundImage:
                  "linear-gradient(90deg, #4B4AD5 0%, #733BE5 28%, #9B2BF6 65%, #4B4AD5 100%)",
              }}
            >
              Trusted AI-First EMR Platform
            </span>
          </div>

          {/* Headline + subhead */}
          <div className="flex flex-col items-center gap-3.5">
            <h1
              className="load-rise font-extrabold leading-[1.06] tracking-[-1px] text-[#1F1F1F] [text-wrap:balance] sm:tracking-[-2px]"
              style={{
                animationDelay: "240ms",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4.8vw, 88px)",
                maxWidth: "min(1280px, 92vw)",
              }}
            >
              Everything you need to run a{" "}
              <span className="text-shimmer">faster practice.</span>
            </h1>
            <p
              className="load-rise text-[#3D3D3D]"
              style={{
                animationDelay: "420ms",
                maxWidth: "clamp(420px, 60vw, 960px)",
                fontSize: "clamp(14px, 1.15vw, 20px)",
                lineHeight: 1.65,
              }}
            >
              TatvaPractice automates your clinical workflow so you can focus
              on delivering better patient care.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="load-rise mt-2 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            style={{ animationDelay: "560ms", maxWidth: "clamp(420px, 42vw, 720px)" }}
          >
            <a
              href="#"
              className="cta-outline flex w-full items-center justify-center rounded-[16px] border border-[#4B4AD5] font-semibold text-[#4B4AD5] sm:w-1/2"
              style={{
                height: "clamp(48px, 4vw, 68px)",
                fontSize: "clamp(14px, 1.2vw, 20px)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))",
              }}
            >
              Book Demo
            </a>
            <a
              href="#"
              className="cta-shimmer flex w-full items-center justify-center rounded-[16px] font-semibold text-white sm:w-1/2"
              style={{
                height: "clamp(48px, 4vw, 68px)",
                fontSize: "clamp(14px, 1.2vw, 20px)",
                backgroundImage:
                  "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
              }}
            >
              <span className="relative z-[1]">Start Free Trial</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust strip — pinned to bottom of the hero viewport */}
      <div className="relative z-10 mx-auto flex w-full flex-shrink-0 flex-col items-center pb-4 sm:pb-6">
        <div className="flex w-full justify-center px-4">
          <TrustBadges />
        </div>
        <div className="mt-2 opacity-70">
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}
