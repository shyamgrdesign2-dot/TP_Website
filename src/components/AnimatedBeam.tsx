type Props = {
  side: "left" | "right";
  className?: string;
};

// Side beams that originate at the outer screen edge and CONVERGE to a
// single anchor point near the centered card cluster — like field lines
// attaching to the OurScale stat cards.
//
// The SVG spans the section's full inline width on its side, with the
// anchor at the inner edge (toward the cards) and beam tails fanning out
// to various Y positions along the outer screen edge.
export default function AnimatedBeam({ side, className = "" }: Props) {
  const W = 1000;   // SVG canvas width (will scale via preserveAspectRatio)
  const H = 720;    // matches the section's min-height
  // Anchor where all beams meet. For left-side: right edge of SVG.
  // For right-side: left edge of SVG. Vertically centered.
  const anchorX = side === "left" ? W : 0;
  const anchorY = H / 2;

  // Each beam starts at a different y on the outer edge so they fan out.
  const tails = [
    { y: 80,  dur: 7.0, delay: 0.0 },
    { y: 200, dur: 5.5, delay: 0.8 },
    { y: 360, dur: 6.5, delay: 0.3 },
    { y: 520, dur: 5.0, delay: 1.4 },
    { y: 640, dur: 7.5, delay: 0.6 },
  ];
  // Outer edge for tails — opposite of anchor.
  const tailX = side === "left" ? 0 : W;

  // The cards cluster is 862px wide and centred in the section. Anchor
  // each SVG so its inner edge lands EXACTLY on the cards' outer edge —
  // not behind them. We do this by pinning the SVG's inner edge to
  // `calc(50% ± 431px)` and letting the outer edge run to the screen edge.
  const CARD_HALF = 431; // 862 / 2
  const positioning =
    side === "left"
      ? { left: 0, right: `calc(50% + ${CARD_HALF}px)` }
      : { left: `calc(50% + ${CARD_HALF}px)`, right: 0 };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 z-0 h-full ${className}`}
      style={positioning as React.CSSProperties}
    >
      <svg
        className="block size-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {tails.map((_, i) => (
            <linearGradient
              key={i}
              id={`beam-${side}-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={tailX}
              y1="0"
              x2={anchorX}
              y2="0"
            >
              <stop offset="0%" stopColor="#A41BF0" stopOpacity="0" />
              <stop offset="55%" stopColor="#6F2FE0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4B4AD5" stopOpacity="0" />
            </linearGradient>
          ))}
          {/* Glow at the anchor where beams converge */}
          <radialGradient id={`anchor-${side}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A41BF0" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#4B4AD5" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#4B4AD5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {tails.map((t, i) => {
          // Quadratic Bezier — control point near the anchor side, pulled
          // up/down to give each beam a unique curve.
          const cx = side === "left" ? anchorX - 200 : anchorX + 200;
          const cy = anchorY + (t.y - anchorY) * 0.25;
          const path = `M ${tailX} ${t.y} Q ${cx} ${cy} ${anchorX} ${anchorY}`;
          return (
            <g key={i}>
              {/* Soft baseline */}
              <path
                d={path}
                stroke="rgba(75,74,213,0.10)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Animated bright sweep — a short dash travels along the path */}
              <path
                d={path}
                stroke={`url(#beam-${side}-${i})`}
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "120 1400",
                  animation: `beam-sweep-${side} ${t.dur}s ease-in-out ${t.delay}s infinite`,
                }}
              />
            </g>
          );
        })}

        {/* Anchor glow where everything converges */}
        <circle
          cx={anchorX}
          cy={anchorY}
          r="60"
          fill={`url(#anchor-${side})`}
        />
        <circle
          cx={anchorX}
          cy={anchorY}
          r="3"
          fill="#6F2FE0"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
