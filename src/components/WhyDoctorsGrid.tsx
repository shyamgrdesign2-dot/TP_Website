import type { WhyDoctorsCard } from "@/app/features/_shared/_imports/Frame2147239996/Frame2147239996";
import svgPaths from "@/features/practice-size/svg-cazyfuvy64";

const PLAQUE_BG =
  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 243.33 87\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%25\\' width=\\'100%25\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.394 -3.2627 15.046 6.7369 121.67 48.235)\\'><stop stop-color=\\'rgba(70,40,108,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,28,85,1)\\' offset=\\'0.19541\\'/><stop stop-color=\\'rgba(37,17,62,1)\\' offset=\\'0.39081\\'/><stop stop-color=\\'rgba(55,33,83,1)\\' offset=\\'0.78163\\'/><stop stop-color=\\'rgba(81,56,113,1)\\' offset=\\'0.89081\\'/><stop stop-color=\\'rgba(108,79,144,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)";

function TitlePlaque({ card }: { card: WhyDoctorsCard }) {
  return (
    <div
      className="relative w-full min-h-[52px] shrink-0 overflow-hidden rounded-[12px] sm:min-h-[64px]"
      style={{ backgroundImage: PLAQUE_BG }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-28px] right-[-18px] h-[122px] w-[102px] opacity-75"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 134.939 162.543"
        >
          <g>
            <path d={svgPaths.p3aeb9340} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p18487670} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p2783da00} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p1b2a2872} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p396c3680} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.pc2cc240} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p32948170} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p23e88100} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p26919600} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.p3b614f70} fill="white" fillOpacity="0.18" />
            <path d={svgPaths.pda4e980} fill="white" fillOpacity="0.18" />
          </g>
        </svg>
      </div>
      <div className="flex h-full items-center px-3 py-2.5 sm:px-5 sm:py-3.5">
        <p
          className="min-w-0 flex-1 bg-clip-text font-bold leading-[1.15] text-[clamp(13px,3.2vw,17px)] text-transparent"
          style={{
            fontFamily: "var(--font-display), Mulish, sans-serif",
            backgroundImage:
              "linear-gradient(101.863deg, rgb(255, 255, 255) 0.55117%, rgba(255, 255, 255, 0.9) 41.377%, rgb(255, 255, 255) 83.306%)",
          }}
        >
          {card.titleLines ? (
            <>
              {card.titleLines[0]}
              <br />
              {card.titleLines[1]}
            </>
          ) : (
            card.title
          )}
        </p>
      </div>
    </div>
  );
}

function WhyCard({ card }: { card: WhyDoctorsCard }) {
  return (
    <article className="glass-surface flex h-full min-h-0 min-w-0 flex-col rounded-[16px]">
      <div className="flex h-full min-h-0 flex-col gap-2.5 px-3 pb-3.5 pt-3 sm:gap-4 sm:px-3.5 sm:pb-4 sm:pt-3.5">
        <TitlePlaque card={card} />
        <p
          className="min-w-0 flex-1 text-[clamp(12px,2.6vw,14px)] leading-[1.5] text-[#454551]"
          style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
        >
          {card.body}
        </p>
      </div>
    </article>
  );
}

/** Six-card “why doctors” grid, same rhythm as homepage Our Scale (2×3 mobile, 3×2 desktop). */
export default function WhyDoctorsGrid({ cards }: { cards: WhyDoctorsCard[] }) {
  return (
    <div className="why-doctors-grid grid w-full grid-cols-1 gap-[clamp(12px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <WhyCard key={i} card={card} />
      ))}
    </div>
  );
}
