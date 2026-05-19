/** Hero-matching static square grid for full-bleed section bands. */
export default function StaticSectionGrid({
  opacity = 0.55,
}: {
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        zIndex: 1,
        opacity,
        backgroundImage:
          "linear-gradient(to right, rgba(75,74,213,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,74,213,0.065) 1px, transparent 1px)",
        backgroundSize:
          "clamp(40px, 4.5vw, 64px) clamp(40px, 4.5vw, 64px)",
        backgroundPosition: "center center",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 75% at 50% 40%, black 0%, black 35%, rgba(0,0,0,0.4) 55%, transparent 78%)",
        maskImage:
          "radial-gradient(ellipse 90% 75% at 50% 40%, black 0%, black 35%, rgba(0,0,0,0.4) 55%, transparent 78%)",
      }}
    ></div>
  );
}
