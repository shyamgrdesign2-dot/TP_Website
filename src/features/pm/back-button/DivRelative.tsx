"use client";

import type { MouseEvent } from "react";

type Props = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

/** Liquid-glass back control for PM flip cards. */
export default function BackButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-4 py-2 transition-all"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 100%)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: [
          "0 1px 0 rgba(255,255,255,0.45) inset",
          "0 -1px 0 rgba(0,0,0,0.10) inset",
          "0 10px 24px rgba(0,0,0,0.22)",
        ].join(", "),
      }}
      aria-label="Back"
      data-name="Back Button"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
      <svg
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="none"
        className="relative z-[1] shrink-0 transition-transform group-hover:-translate-x-0.5"
        aria-hidden
      >
        <path
          d="M10 12L6 8l4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="relative z-[1] font-semibold text-white"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          letterSpacing: "0.02em",
        }}
      >
        Back
      </span>
    </button>
  );
}
