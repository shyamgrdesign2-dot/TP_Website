// Page-wide grid pattern matching the Figma export's `GrindPattent()` —
// the same hero-section-bg.png tiled at original ~1317×720 size, top-left
// aligned, at 70% opacity. Sits behind every section.
export default function PagePattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: "url('/figma/landing-ref/hero-section-bg.png')",
        backgroundSize: "1316.65px 720.5px",
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
        opacity: 0.7,
      }}
    />
  );
}
