type Props = {
  variant?: "lavender" | "pink" | "blue" | "none";
  // When `withGrid` is false, only the soft radial wash renders (no grid).
  withGrid?: boolean;
  // Intensity of the radial wash (0–1)
  intensity?: number;
  // Opacity of the grid lines (0–1). Defaults to 0.95.
  gridOpacity?: number;
};

// Per-section atmospheric backdrop: a soft radial pink/lavender wash
// centred inside the section + an optional grid pattern that fades at the
// section edges (so adjacent sections' grids don't visually collide).
//
// Each section that uses this gets its OWN self-contained ambience 
// scroll between two sections and you see the wash fade out at the edge
// of one and a fresh wash fade in for the next, instead of a global
// pattern that crosses section boundaries.
export default function SectionBg({
  variant = "lavender",
  withGrid = true,
  intensity = 1,
  gridOpacity = 0.95,
}: Props) {
  if (variant === "none") return null;

  // Variant tints, every section's wash is the same family of pinks +
  // lavenders, just shifted so that consecutive sections feel related
  // but not identical.
  const washes: Record<Exclude<Props["variant"], "none" | undefined>, string> = {
    lavender: `radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(196,75,255,${0.10 * intensity}) 0%,
        rgba(155,43,246,${0.06 * intensity}) 30%,
        rgba(255,180,220,${0.05 * intensity}) 60%,
        transparent 90%)`,
    pink: `radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(255,120,180,${0.09 * intensity}) 0%,
        rgba(220,80,200,${0.06 * intensity}) 35%,
        rgba(180,80,255,${0.04 * intensity}) 65%,
        transparent 92%)`,
    blue: `radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(75,74,213,${0.10 * intensity}) 0%,
        rgba(120,80,255,${0.06 * intensity}) 35%,
        rgba(255,150,210,${0.04 * intensity}) 65%,
        transparent 92%)`,
  };

  return (
    <>
      {/* Soft radial pink/lavender wash, centred, masked to fade out
          before the section's edge so it doesn't overflow into neighbors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundImage: washes[variant] }}
      />

      {withGrid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(75,74,213,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.06) 1px, transparent 1px)",
            backgroundSize:
              "clamp(40px, 4.5vw, 64px) clamp(40px, 4.5vw, 64px)",
            backgroundPosition: "center center",
            opacity: gridOpacity,
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 50%, black 35%, transparent 92%)",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 50%, black 35%, transparent 92%)",
          }}
        />
      )}

    </>
  );
}
