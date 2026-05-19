import imgImage2309 from "./image.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[755px]">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#454551] text-[clamp(26px,4.1vw,48px)] text-center tracking-[-0.03em] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">
          {`Complete AI-First `}
          <br aria-hidden="true" />
          Practice Management in One System
        </p>
      </div>
    </div>
  );
}

function DivRelative() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#492b66] items-center justify-center left-[-5.25px] overflow-clip px-[16px] py-[8px] rounded-br-[26.911px] rounded-tr-[26.911px] to-[rgba(73,43,102,0.6)] top-[36px] via-1/2 via-[rgba(255,255,255,0.4)]" data-name="div.relative">
      <div className="-translate-x-1/2 absolute bg-gradient-to-r bottom-[1.45px] from-[rgba(255,255,255,0)] left-[calc(50%+0.79px)] to-[rgba(255,255,255,0)] top-[-0.22px] via-1/2 via-[rgba(255,255,255,0.24)] w-[271.118px]" data-name="span.absolute" />
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',sans-serif] font-medium from-white justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[transparent] text-center to-[27.737%] to-[rgba(255,255,255,0.9)] tracking-[0.4986px] whitespace-nowrap">
        <p className="leading-[normal]">Flagship Feature</p>
      </div>
    </div>
  );
}

// Glossy circular play button, clean div-based implementation that
// replaces the original verbatim Figma `foreignObject + backdrop-blur
// + circle stroke` block. Reads as a polished glass disk with a soft
// drop shadow and a crisp white play triangle. Clicking would open a
// YouTube modal, handler is wired through `onPlay` so the parent
// section can mount its own player.
function PlayButton({ onPlay }: { onPlay?: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label="Play Practice Management overview"
      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 group flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-[1.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      style={{
        width: "88px",
        height: "88px",
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: [
          "0 1px 0 rgba(255,255,255,0.45) inset",
          "0 -1px 0 rgba(255,255,255,0.10) inset",
          "0 10px 28px rgba(0,0,0,0.28)",
        ].join(", "),
      }}
    >
      {/* Subtle diagonal sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 55%)",
        }}
      />
      {/* Play triangle, translated 3px right so it visually centres in
          the circle (the triangle's optical centre sits left of its
          geometric centre). */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="relative z-[1]"
        style={{ transform: "translateX(3px)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
      >
        <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
      </svg>
    </button>
  );
}

function Frame1() {
  return (
    <div
      className="h-[402.952px] overflow-clip relative rounded-[32px] shrink-0 w-[862px]"
      style={{
        background: "radial-gradient(99.09% 59.99% at 50% 55.44%, #46286C 0%, #25113E 39.08%, #372153 78.16%, #6C4F90 100%)"
      }}
    >
      <DivRelative />
      <div className="-translate-y-1/2 absolute h-[326.25px] left-[604.38px] top-1/2 w-[540px]" data-name="image 2309">
        <div className="absolute inset-[-2.15%_-1.3%]">
          <img alt="TatvaPractice AI-first practice management workflow" className="block max-w-none size-full" height="340.25" src={imgImage2309.src} width="554" />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-clip-text flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] left-[32.78px] text-[clamp(26px,4.1vw,48px)] text-[transparent] top-[216.47px] tracking-[-0.03em] w-[483.43px]" style={{ backgroundImage: "linear-gradient(93.0076deg, rgb(255, 255, 255) 0.84936%, rgba(255, 255, 255, 0.8) 100%)" }}>
        <p className="leading-[normal] whitespace-pre-wrap">
          {`Complete AI-First `}
          <br aria-hidden="true" />
          Practice Management in One System
        </p>
      </div>
      {/* Glossy circular play button, centred on the card; the
          parent's onPlay handler (passed through props) opens the
          YouTube modal. */}
      <PlayButton />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}
