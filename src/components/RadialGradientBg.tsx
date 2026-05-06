type Variant = "navy" | "eggplant";

type Props = {
  variant: Variant;
  className?: string;
  noiseOpacity?: number;
};

// Section background renderer: radial gradient + fractal-noise overlay.
// Both gradients are taken verbatim from the user-supplied Figma SVG specs.
export default function RadialGradientBg({
  variant,
  className = "",
  noiseOpacity = 0.06,
}: Props) {
  const cls = variant === "navy" ? "bg-navy-radial" : "bg-eggplant-radial";
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 ${cls} ${className}`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: noiseOpacity,
          backgroundImage: "var(--noise-svg)",
          backgroundSize: "220px 220px",
        }}
      />
    </>
  );
}
