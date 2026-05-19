import React from "react";
import ScrollReveal from "../../../components/ScrollReveal";
import BackButton from "../back-button/DivRelative";
import PmFlipBackPanel from "../PmFlipBackPanel";
import { PM_FLIP_BACK } from "../pmFlipContent";
import { Tooltip } from "./Tooltips";
import { TOOLTIPS } from "../data/tooltips";

const CANVAS_W = 862;

export function PmFlipCard({
  activeCard,
  handleFlip,
  handleBack,
}: {
  activeCard: number | null;
  handleFlip: (n: number) => void;
  handleBack: () => void;
}) {
  const isFlipped = activeCard !== null;

  return (
    <ScrollReveal
      variant="scale-in"
      delay={120}
      className="relative hidden w-full sm:block sm:aspect-[862/386]"
      style={{ maxWidth: `clamp(600px, 90vw, ${CANVAS_W}px)`, perspective: "1000px" }}
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
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: isFlipped ? "none" : "auto",
            background: "linear-gradient(135deg, #1A1A4D 0%, #2A1F5A 50%, #1A1A4D 100%)",
          }}
        >
          <picture className="pointer-events-none absolute inset-0">
            <source media="(max-width: 640px)" srcSet="/Assets/Practice-management/mobile.png" />
            <img
              src="/Assets/Practice-management/desktop.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
            />
          </picture>

          {/* Tooltip card (static) + floating dot below it. */}
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
            pointerEvents: isFlipped ? "auto" : "none",
            background:
              "radial-gradient(99.09% 59.99% at 50% 55.44%, rgba(70,40,108,0.90) 0%, rgba(37,17,62,0.90) 39.08%, rgba(55,33,83,0.90) 78.16%, rgba(108,79,144,0.90) 100%), #393890",
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
              background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
            }}
          />
          <div className="absolute left-[clamp(12px,2vw,20px)] top-[clamp(12px,2vw,20px)] z-20">
            <BackButton onClick={handleBack} />
          </div>
          {activeCard === 1 ? <PmFlipBackPanel key="1" {...PM_FLIP_BACK[1]} /> : null}
          {activeCard === 2 ? <PmFlipBackPanel key="2" {...PM_FLIP_BACK[2]} /> : null}
        </div>
      </div>
    </ScrollReveal>
  );
}
