import SubpageHeroBg from "@/components/SubpageHeroBg";

export default function PricingHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Pricing"
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
        <div
          className="load-rise relative overflow-hidden rounded-full border border-[#E8E0F0] bg-white/80"
          style={{
            padding: "clamp(7px, 0.8vw, 12px) clamp(16px, 1.6vw, 26px)",
            boxShadow: "0 2px 12px rgba(33,32,119,0.06)",
          }}
        >
          <span
            className="bg-clip-text text-transparent font-medium tracking-[0.5px] whitespace-nowrap"
            style={{
              fontSize: "clamp(13px, 1.15vw, 20px)",
              backgroundImage:
                "linear-gradient(90deg, #4B4AD5 0%, #733BE5 28%, #9B2BF6 65%, #4B4AD5 100%)",
            }}
          >
            Pricing
          </span>
        </div>

        <h1
          className="font-extrabold leading-[1.06] tracking-[-1px] text-[#1F1F1F] [text-wrap:balance] sm:tracking-[-2px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(32px, 4.8vw, 64px)",
            maxWidth: "min(820px, 92vw)",
          }}
        >
          Simple pricing.{" "}
          <span className="text-shimmer">Indian-priced.</span>
        </h1>

        <p
          className="text-[#3D3D3D]"
          style={{
            maxWidth: "min(640px, 90vw)",
            fontSize: "clamp(14px, 1.15vw, 20px)",
            lineHeight: 1.6,
          }}
        >
          Pay monthly or annually. Start with a 7-day free trial. No credit
          card required.
        </p>

        <div
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#E8E0F0] bg-white p-1.5"
          style={{
            boxShadow: "0 2px 12px rgba(33,32,119,0.06)",
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          <span
            className="rounded-full px-4 py-2 text-white"
            style={{
              backgroundImage:
                "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
            }}
          >
            Monthly
          </span>
          <span className="px-4 py-2 text-[#454551]">
            Annual{" "}
            <span className="font-bold text-[#27276F]">· save 2 months</span>
          </span>
        </div>
      </div>
    </section>
  );
}
