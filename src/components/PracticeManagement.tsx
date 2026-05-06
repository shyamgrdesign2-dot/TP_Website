"use client";

import { useState } from "react";
import Image from "next/image";
import RadialGradientBg from "./_primitives/RadialGradientBg";
import CornerVector from "./_primitives/CornerVector";
import ScrollReveal from "./_primitives/ScrollReveal";
import SectionBg from "./_primitives/SectionBg";
import Detail1 from "./_pm/imports/Detail1/ImageAndIconsContainer";
import Detail2 from "./_pm/imports/Detail2/ImageAndIconsContainer-10-8378";
import Detail3 from "./_pm/imports/Detail3/ImageAndIconsContainer-10-8383";
import BackButton from "./_pm/imports/BackButton/DivRelative";

type LogoMark = {
  name: string;
  color: string;
  shape: "circle" | "square" | "diamond" | "triangle" | "hex" | "wave";
};

const PARTNER_LOGOS: LogoMark[] = [
  { name: "Nimbus", color: "#3B82F6", shape: "circle" },
  { name: "Velora", color: "#F59E0B", shape: "diamond" },
  { name: "Acmery", color: "#EF4444", shape: "wave" },
  { name: "Oasis",  color: "#10B981", shape: "square" },
  { name: "Pulse",  color: "#EC4899", shape: "triangle" },
  { name: "Quanta", color: "#A855F7", shape: "hex" },
];

function LogoGlyph({ shape, color }: { shape: LogoMark["shape"]; color: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24" } as const;
  switch (shape) {
    case "circle":   return (<svg {...common} aria-hidden><circle cx="12" cy="12" r="9" fill={color} /><circle cx="12" cy="12" r="3.5" fill="#fff" /></svg>);
    case "square":   return (<svg {...common} aria-hidden><rect x="3" y="3" width="18" height="18" rx="4" fill={color} /><rect x="8" y="8" width="8" height="8" rx="1.5" fill="#fff" /></svg>);
    case "diamond":  return (<svg {...common} aria-hidden><path d="M12 2 L22 12 L12 22 L2 12 Z" fill={color} /><path d="M12 7 L17 12 L12 17 L7 12 Z" fill="#fff" /></svg>);
    case "triangle": return (<svg {...common} aria-hidden><path d="M12 3 L22 21 L2 21 Z" fill={color} /><circle cx="12" cy="16" r="2.5" fill="#fff" /></svg>);
    case "hex":      return (<svg {...common} aria-hidden><path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" fill={color} /><path d="M12 8 L16 10.5 L16 15.5 L12 18 L8 15.5 L8 10.5 Z" fill="#fff" /></svg>);
    case "wave":     return (<svg {...common} aria-hidden><rect x="2" y="4" width="20" height="16" rx="3" fill={color} /><path d="M5 14 Q8 10 11 14 T17 14 T19 14" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>);
  }
}

// One tooltip per card. Tooltip is sized to fully cover the baked-in
// speech bubble in the PNG (so we never see two stacked) and gently
// float-animates as a single unit. A CSS-triangle tail at the bottom
// points down to where the original dot was. Click to flip.
type TooltipDef = {
  card: number;
  text: string;
  emoji: string;
  // Tooltip body box in the 862×386 PNG canvas
  tx: number; ty: number; tw: number; th: number;
  // X-offset of the tail's center in % of the tooltip width (0 = left, 100 = right)
  tailAt: number;
};

const TOOLTIPS: TooltipDef[] = [
  {
    card: 1,
    text: "Consultations just\nbecame smarter & faster",
    emoji: "🚀",
    tx: 18,  ty: 22,  tw: 196, th: 100, tailAt: 38,
  },
  {
    card: 2,
    text: "The front desk, fully\nunder control",
    emoji: "🛠️",
    tx: 298, ty: 40, tw: 196, th: 100, tailAt: 50,
  },
  {
    card: 3,
    text: "Patient's visit begins\nbefore he walk-in",
    emoji: "⚡",
    tx: 660, ty: 50, tw: 196, th: 100, tailAt: 48,
  },
];

const CANVAS_W = 862;
const CANVAS_H = 386.346;

// Single self-contained tooltip per card: opaque white glass body + an
// integrated CSS-triangle tail at the bottom-center pointing down. The
// whole unit gently float-animates so the user notices it. Sized large
// enough to fully cover the baked-in speech bubble in the PNG.
function Tooltip({
  def,
  onClick,
  delayIndex,
}: {
  def: typeof TOOLTIPS[number];
  onClick: () => void;
  delayIndex: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open detail — ${def.text.replace(/\n/g, " ")}`}
      className="group absolute z-[6] flex cursor-pointer flex-col items-center justify-center gap-1.5 text-center"
      style={{
        left: `${(def.tx / CANVAS_W) * 100}%`,
        top: `${(def.ty / CANVAS_H) * 100}%`,
        width: `${(def.tw / CANVAS_W) * 100}%`,
        height: `${(def.th / CANVAS_H) * 100}%`,
        padding: "10px 12px 12px",
        borderRadius: 16,
        // Liquid-glass surface: translucent white with backdrop-blur so the
        // navy gradient + corner vectors behind the tooltip refract through.
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(251,247,255,0.62) 100%)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.55)",
        // Layered shadow + inset highlights = the "lifted glass" feel
        boxShadow: [
          "0 1px 0 rgba(255,255,255,0.95) inset",
          "0 -1px 0 rgba(75,74,213,0.06) inset",
          "0 0 0 1px rgba(255,255,255,0.20) inset",
          "0 18px 38px rgba(35,21,90,0.32)",
          "0 6px 16px rgba(35,21,90,0.18)",
        ].join(", "),
        animation: `float-soft ${3.6 + delayIndex * 0.4}s ease-in-out infinite`,
        animationDelay: `${delayIndex * 0.6}s`,
        transition: "box-shadow 220ms ease, transform 220ms ease",
      }}
    >
      {/* Diagonal sheen — adds the slight glassy gloss across the tooltip */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[16px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
      <span
        className="relative z-[1] block whitespace-pre-line font-semibold"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(10px, 0.95vw, 12.5px)",
          lineHeight: 1.25,
          color: "#1F1F1F",
        }}
      >
        {def.text} <span aria-hidden>{def.emoji}</span>
      </span>
      <span
        className="relative z-[1] inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-1.5 font-semibold text-white transition-transform group-hover:translate-x-0.5"
        style={{
          fontSize: "clamp(10px, 0.95vw, 13px)",
          background: "linear-gradient(135deg, #6F2FE0 0%, #4B4AD5 100%)",
          boxShadow:
            "0 6px 14px rgba(75,74,213,0.40), 0 1px 0 rgba(255,255,255,0.4) inset",
        }}
      >
        See How <span aria-hidden>→</span>
      </span>

      {/* Triangle tail — bottom-center, pointing down. Two stacked triangles
          (border + fill) give the tail a clean 1px outline matching the body. */}
      <span
        aria-hidden
        className="absolute"
        style={{
          left: `${def.tailAt}%`,
          bottom: -8,
          marginLeft: -8,
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "8px solid rgba(255,255,255,0.95)",
          filter: "drop-shadow(0 6px 6px rgba(35,21,90,0.18))",
        }}
      />
      <span
        aria-hidden
        className="absolute"
        style={{
          left: `${def.tailAt}%`,
          bottom: -7,
          marginLeft: -7,
          width: 0,
          height: 0,
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent",
          borderTop: "7px solid #FBF7FF",
        }}
      />

      {/* Dot below the tooltip — sits just under the tail, with a continuous
          pulsing/wavy ring. Inherits the tooltip's float-soft via parent. */}
      <span
        aria-hidden
        className="absolute flex items-center justify-center"
        style={{
          left: `${def.tailAt}%`,
          bottom: -28,
          marginLeft: -7,
          width: 14,
          height: 14,
        }}
      >
        <span
          className="hotspot-pulse block h-full w-full rounded-full"
          style={{
            background: "radial-gradient(circle, #A41BF0 0%, #6F2FE0 100%)",
            border: "2px solid rgba(255,255,255,0.9)",
            animationDelay: `${delayIndex * 0.5}s`,
          }}
        />
      </span>
    </button>
  );
}

export default function PracticeManagement() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isFlipped = activeCard !== null;

  const handleFlip = (n: number) => setActiveCard(n);
  const handleBack = () => setActiveCard(null);

  const renderBack = () => {
    switch (activeCard) {
      case 1: return <Detail1 />;
      case 2: return <Detail2 />;
      case 3: return <Detail3 />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />
      <div
        className="relative z-10 mx-auto"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 64px)",
          paddingBottom: "clamp(40px, 4vw, 64px)",
        }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            borderRadius: "clamp(20px, 2.4vw, 32px)",
            boxShadow:
              "0 24px 60px rgba(16, 16, 86, 0.25), 0 1px 0 rgba(255,255,255,0.08) inset",
          }}
        >
          <RadialGradientBg variant="navy" />

          <CornerVector variant="tl" size={280} />
          <CornerVector variant="tr" size={280} />
          <CornerVector variant="bl" size={280} />
          <CornerVector variant="br" size={280} />

          <div
            className="relative z-10 mx-auto flex w-full flex-col items-center"
            style={{
              paddingTop: "clamp(48px, 5vw, 80px)",
              paddingBottom: "clamp(40px, 4vw, 64px)",
              paddingInline: "clamp(24px, 3.5vw, 56px)",
              gap: "clamp(24px, 2.6vw, 40px)",
            }}
          >
            <ScrollReveal variant="fade-up">
              <h2
                className="bg-clip-text text-center font-bold text-transparent [text-wrap:balance]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.6vw, 48px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  backgroundImage:
                    "linear-gradient(98deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)",
                  maxWidth: "min(900px, 90vw)",
                }}
              >
                Complete AI-First
                <br />
                Practice Management in One System
              </h2>
            </ScrollReveal>

            {/* Flip card — verbatim mechanism from Complete Landing Page_2.zip */}
            <ScrollReveal
              variant="scale-in"
              delay={120}
              className="relative w-full"
              style={{ maxWidth: CANVAS_W, aspectRatio: `${CANVAS_W} / ${CANVAS_H}`, perspective: "1000px" }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                data-name="Flip Animation"
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-[24px]"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/figma/practice-mgmt-hero.png"
                    alt="TatvaPractice — AI-first practice management interface"
                    fill
                    sizes="(max-width: 768px) 90vw, 880px"
                    className="object-cover select-none"
                    draggable={false}
                  />

                  {/* Tooltip card (static) + floating dot below it.
                      Tooltip overlays the baked-in speech bubble in the PNG. */}
                  {TOOLTIPS.map((t, i) => (
                    <Tooltip
                      key={t.card}
                      def={t}
                      onClick={() => handleFlip(t.card)}
                      delayIndex={i}
                    />
                  ))}
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-[24px]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background:
                      "radial-gradient(99.09% 59.99% at 50% 55.44%, rgba(70,40,108,0.90) 0%, rgba(37,17,62,0.90) 39.08%, rgba(55,33,83,0.90) 78.16%, rgba(108,79,144,0.90) 100%), #393890",
                    // Glossy stroke + multi-layer inset highlights so the
                    // panel edge feels like polished glass rather than flat.
                    boxShadow: [
                      "0 0 0 1px rgba(255,255,255,0.18) inset",
                      "0 1px 0 rgba(255,255,255,0.45) inset",
                      "0 -1px 0 rgba(0,0,0,0.30) inset",
                      "0 24px 60px rgba(16,16,86,0.35)",
                      "0 0 0 1px rgba(164,27,240,0.22)",
                    ].join(", "),
                  }}
                >
                  {/* Top-edge gloss highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[60%] rounded-[24px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleBack}
                    className="group absolute left-[20px] top-[20px] z-20 cursor-pointer"
                    aria-label="Back"
                  >
                    <BackButton />
                  </button>
                  {renderBack()}
                </div>
              </div>
            </ScrollReveal>

            {/* Trusted by + carousel */}
            <div
              className="flex w-full flex-col items-center"
              style={{
                gap: "clamp(12px, 1.4vw, 20px)",
                maxWidth: "var(--section-w)",
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
                style={{ height: 56 }}
              >
                <div className="logo-carousel-track flex h-full items-center">
                  {[0, 1].map((cycle) => (
                    <div key={cycle} className="flex shrink-0 items-center">
                      {PARTNER_LOGOS.map((logo, i) => (
                        <div
                          key={`${cycle}-${i}`}
                          className="flex h-full items-center justify-center gap-2 px-[clamp(20px,2.2vw,40px)]"
                        >
                          <LogoGlyph shape={logo.shape} color={logo.color} />
                          <span
                            className="font-semibold tracking-[0.04em] text-white/90 whitespace-nowrap"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "clamp(13px, 1.05vw, 16px)",
                            }}
                          >
                            {logo.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
