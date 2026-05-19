import SectionBg from "@/components/SectionBg";
import SubpageHeroCard from "@/components/SubpageHeroCard";
import TrustBadges from "@/sections/TrustBadges";
import ScrollArrow from "@/sections/ScrollArrow";
import type { HeroFrameContent } from "../_imports/Frame2147240061/Frame2147240061";

// Hero section for every Feature subpage. Mirrors the homepage Hero
// atmosphere (top-glow + header-lines + soft white wash + CSS grid),
// fills the viewport (`h-screen min-h-[640px]`) so the initial fold
// shows only the navy product card + trust markers + scroll arrow.
export default function FeatureHero({
  content,
}: {
  content: HeroFrameContent;
}) {
  const semanticHeadline = `${content.headlineLines[0]} ${content.headlineLines[1]}`.trim();

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-white md:h-screen md:min-h-[640px]">
      <h1 className="sr-only">{semanticHeadline}</h1>

      <SectionBg variant="lavender" withGrid={false} intensity={1.2} />

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

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-0 -translate-x-1/2"
        style={{
          top: "clamp(-220px, -12vw, -80px)",
          width: "min(160vw, 2200px)",
          height: "clamp(420px, 65vh, 1100px)",
          backgroundImage: "url('/top-glow.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100% 100%",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[120vw] max-w-[1600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 45% 38% at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 35%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(75,74,213,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.10) 1px, transparent 1px)",
          backgroundSize:
            "clamp(40px, 4.5vw, 64px) clamp(40px, 4.5vw, 64px)",
          backgroundPosition: "center center",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 60% 55% at center, black 35%, transparent 95%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[140px] left-1/2 z-0 h-[170px] w-[min(1133px,90vw)] -translate-x-1/2 rounded-full opacity-40 blur-[51px]"
        style={{
          background:
            "radial-gradient(ellipse 800px 120px at center, rgba(164,26,240,0.55), rgba(120,50,227,0.35) 35%, rgba(75,74,213,0) 70%)",
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center gap-6 md:flex-1 md:justify-center md:gap-[clamp(20px,2.4vw,36px)]"
        style={{
          paddingTop: "clamp(88px, 12svh, 126px)",
          paddingBottom: "clamp(24px, 3vh, 40px)",
        }}
      >
        <div
          className="load-rise mx-auto w-full max-w-[var(--section-w)]"
          style={{ animationDelay: "120ms" }}
        >
          <SubpageHeroCard
            layout="feature"
            eyebrowLabel={content.eyebrowLabel}
            headlineLines={content.headlineLines}
            subhead={content.subhead}
            mainImage={content.mainImage}
            overlayImage={content.overlayImage}
          />
        </div>

        <div
          className="load-rise flex w-full justify-center"
          style={{
            animationDelay: "320ms",
            paddingTop: "clamp(12px, 1.5vw, 28px)",
            paddingBottom: "clamp(8px, 1vw, 16px)",
          }}
        >
          <TrustBadges />
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full flex-shrink-0 flex-col items-center pb-4 sm:pb-6 md:flex">
        <div
          className="load-rise opacity-70"
          style={{ animationDelay: "480ms" }}
        >
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}
