type Variant = "tl" | "tr" | "bl" | "br";

const ROTATION: Record<Variant, string> = {
  tl: "rotate(0deg)",
  tr: "rotate(90deg)",
  br: "rotate(180deg)",
  bl: "rotate(270deg)",
};

// Decorative geometric pattern overlaid at each corner of the navy card —
// captures the look of the Figma "Background Vectors" line cluster without
// pulling in the 30+ radial-gradient paths from the original export.
export default function CornerPattern({
  variant,
  size = 240,
  className = "",
}: {
  variant: Variant;
  size?: number;
  className?: string;
}) {
  const offset: Record<Variant, React.CSSProperties> = {
    tl: { top: 0, left: 0 },
    tr: { top: 0, right: 0 },
    bl: { bottom: 0, left: 0 },
    br: { bottom: 0, right: 0 },
  };
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        transform: ROTATION[variant],
        transformOrigin: "center",
        opacity: 0.45,
        ...offset[variant],
      }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none">
        <defs>
          <radialGradient id={`cp-glow-${variant}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) scale(120)">
            <stop offset="0" stopColor="#E3E3FF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#E3E3FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Grid lattice — orthogonal lines fading outward */}
        <g stroke="url(#cp-glow-${variant})" strokeWidth="0.6">
          {[20, 50, 80, 110, 140].map((y) => (
            <line key={`h${y}`} x1="20" y1={y} x2="180" y2={y} stroke="rgba(227,227,255,0.35)" />
          ))}
          {[20, 50, 80, 110, 140].map((x) => (
            <line key={`v${x}`} x1={x} y1="20" x2={x} y2="180" stroke="rgba(227,227,255,0.35)" />
          ))}
        </g>
        {/* Diagonal accents */}
        <g stroke="rgba(227,227,255,0.45)" strokeWidth="0.8" strokeLinecap="round">
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="50" y1="20" x2="20" y2="50" />
          <line x1="80" y1="20" x2="20" y2="80" />
          <line x1="110" y1="20" x2="20" y2="110" />
          <line x1="140" y1="20" x2="20" y2="140" />
        </g>
        {/* Dots at intersections */}
        <g fill="rgba(227,227,255,0.85)">
          {[20, 50, 80, 110].flatMap((x) =>
            [20, 50, 80, 110].map((y) => (
              <circle key={`d${x}-${y}`} cx={x} cy={y} r="1.2" />
            ))
          )}
        </g>
        {/* Inner soft-glow */}
        <rect x="0" y="0" width="200" height="200" fill={`url(#cp-glow-${variant})`} />
      </svg>
    </div>
  );
}
