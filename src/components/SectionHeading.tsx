import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export default function SectionHeading({
  children,
  tone = "dark",
  align = "center",
}: Props) {
  return (
    <h2
      className={[
        "font-bold [text-wrap:balance]",
        align === "center" ? "text-center" : "text-left",
        tone === "dark" ? "text-[#1f1f1f]" : "text-white",
      ].join(" ")}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(24px, 3.5vw, 42px)",
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </h2>
  );
}

// Inline span with the brand purple gradient — wrap a portion of the heading.
export function GradientSpan({
  children,
  variant = "purple",
}: {
  children: ReactNode;
  variant?: "purple" | "white";
}) {
  const bg =
    variant === "purple"
      ? "linear-gradient(90deg, #A41BF0 0%, #0B0A6F 100%)"
      : "linear-gradient(98deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)";
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: bg }}
    >
      {children}
    </span>
  );
}
