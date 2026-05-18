"use client";

import Lottie from "lottie-react";
import arrowAnim from "../../public/figma/arrow-animated.json";

// Mobile layout for "Complete AI-First Practice Management in One System".
// Renders the full vertical mobile.png as a single composite image and
// overlays 3 glass tooltips ("Consultations…", "Front desk…", "Patient's
// visit…") positioned over each scene baked into the image.
//
// Desktop uses the original horizontal flip-card; this is the mobile-only
// stack rendered below the `sm` breakpoint.

type Tip = {
  label: string;
  emoji: string;
  // Vertical anchor as % of image height — sits this far from the top.
  topPct: number;
};

const TIPS: Tip[] = [
  { label: "Consultations just\nbecame smarter & faster", emoji: "🚀", topPct: 6 },
  { label: "The front desk, fully\nunder control", emoji: "🛠️", topPct: 40 },
  { label: "Patient's visit begins\nbefore he walk-in", emoji: "⚡", topPct: 72 },
];

function Tooltip({ label, emoji }: { label: string; emoji: string }) {
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
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          lineHeight: 1.25,
        }}
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

export default function MobilePracticeManagement() {
  return (
    <div className="flex w-full flex-col gap-4 sm:hidden">
      {/* Single composite image of the hospital scenes with tooltips
          overlaid at each scene's vertical anchor. Image natural ratio
          is 1346 × 2018 (≈ 2:3). Width is capped so the whole image
          fits without dominating the viewport. */}
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[18px]"
        style={{
          maxWidth: 260,
          aspectRatio: "1346 / 2018",
          background: "rgba(255,255,255,0.04)",
          boxShadow: "0 10px 30px rgba(16,16,86,0.25)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/figma/mobile.png"
          alt="TatvaPractice in use across a clinic — consultation, reception, and waiting area"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Tooltip overlays — anchored to scene positions in the
            composite image. */}
        {TIPS.map((t, i) => (
          <div
            key={i}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2"
            style={{ top: `${t.topPct}%` }}
          >
            <div className="pointer-events-auto">
              <Tooltip label={t.label} emoji={t.emoji} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
