import { PARTNER_LOGOS } from "../data/partnerLogos";

export function PartnerLogosCarousel() {
  return (
    <div
      className="flex w-full flex-col items-center"
      style={{
        gap: "clamp(14px, 1.6vw, 24px)",
        maxWidth: "var(--section-w)",
        paddingTop: "clamp(6px, 0.8vw, 12px)",
        paddingBottom: "clamp(8px, 1vw, 16px)",
      }}
    >
      <p
        className="font-semibold capitalize text-white/95"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "14px",
          letterSpacing: "0.02em",
        }}
      >
        Trusted by
      </p>
      <div
        className="logo-carousel-mask relative w-full overflow-hidden"
        style={{ minHeight: "clamp(52px, 5vw, 72px)" }}
      >
        <div className="logo-carousel-track flex h-full items-center">
          {[0, 1].map((cycle) => (
            <div key={cycle} className="flex shrink-0 items-center">
              {PARTNER_LOGOS.map((logo, i) => (
                <div
                  key={`${cycle}-${i}`}
                  className="flex h-full items-center justify-center px-[clamp(20px,2.2vw,40px)]"
                >
                  { }
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-[clamp(32px,3.4vw,50px)] w-auto object-contain opacity-90"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
