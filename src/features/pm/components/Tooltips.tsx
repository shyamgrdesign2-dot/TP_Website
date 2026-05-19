import React from "react";
import Lottie from "lottie-react";
import arrowAnim from "../../../../public/arrow-animated.json";
import { TooltipDef } from "../data/tooltips";

const CANVAS_W = 862;
const CANVAS_H = 386.346;

export function Tooltip({
  def,
  onClick,
  delayIndex,
}: {
  def: TooltipDef;
  onClick: () => void;
  delayIndex: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open detail, ${def.text.replace(/\n/g, " ")}`}
      className="group absolute z-[6] flex cursor-pointer flex-col items-center justify-center text-center"
      style={{
        left: `${(def.tx / CANVAS_W) * 100}%`,
        top: `${(def.ty / CANVAS_H) * 100}%`,
        width: `${(def.tw / CANVAS_W) * 100}%`,
        height: `${(def.th / CANVAS_H) * 100}%`,
        gap: "clamp(3px, 0.55vw, 6px)",
        padding:
          "clamp(6px, 0.75vw, 10px) clamp(8px, 1vw, 12px) clamp(8px, 1.1vw, 12px)",
        borderRadius: "clamp(10px, 1.25vw, 16px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(251,247,255,0.62) 100%)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.55)",
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
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: "inherit",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
      <span
        className="relative z-[1] block whitespace-pre-line font-semibold"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(8.5px, 0.78vw, 12.5px)",
          lineHeight: 1.25,
          color: "#1F1F1F",
        }}
      >
        {def.text} <span aria-hidden>{def.emoji}</span>
      </span>
      <span
        className="relative z-[1] inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[clamp(6px,0.8vw,10px)] font-semibold text-white transition-transform group-hover:translate-x-0.5"
        style={{
          fontSize: "clamp(8.5px, 0.78vw, 13px)",
          padding: "clamp(3px, 0.45vw, 6px) clamp(7px, 0.95vw, 14px)",
          background: "linear-gradient(135deg, #6F2FE0 0%, #4B4AD5 100%)",
          boxShadow:
            "0 6px 14px rgba(75,74,213,0.40), 0 1px 0 rgba(255,255,255,0.4) inset",
        }}
      >
        See How{" "}
        <span aria-hidden className="pointer-events-none" style={{ filter: "brightness(0) invert(1)" }}>
          <Lottie animationData={arrowAnim} loop style={{ width: "clamp(11px, 1.3vw, 18px)", height: "clamp(11px, 1.3vw, 18px)" }} />
        </span>
      </span>

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

export function MobileTooltip({ label, emoji }: { label: string; emoji: string }) {
  return (
    <div
      className="flex flex-col items-center gap-1.5 rounded-[12px] px-3 py-2 text-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(251,247,255,0.82) 100%)",
        backdropFilter: "blur(16px) saturate(160%)",
        WebkitBackdropFilter: "blur(16px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: [
          "0 1px 0 rgba(255,255,255,0.9) inset",
          "0 10px 24px rgba(35,21,90,0.32)",
          "0 4px 12px rgba(35,21,90,0.18)",
        ].join(", "),
        minWidth: 168,
      }}
    >
      <p
        className="whitespace-pre-line font-semibold text-[#1F1F1F]"
        style={{ fontFamily: "var(--font-sans)", fontSize: "11px", lineHeight: 1.25 }}
      >
        {label} <span aria-hidden>{emoji}</span>
      </p>
      <span
        className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold text-white"
        style={{
          fontSize: "10.5px",
          background: "linear-gradient(135deg, #6F2FE0 0%, #4B4AD5 100%)",
          boxShadow: "0 4px 10px rgba(75,74,213,0.40)",
        }}
      >
        See How
        <span
          aria-hidden
          className="pointer-events-none inline-block"
          style={{ filter: "brightness(0) invert(1)" }}
        >
          <Lottie animationData={arrowAnim} loop style={{ width: 12, height: 12 }} />
        </span>
      </span>
    </div>
  );
}
