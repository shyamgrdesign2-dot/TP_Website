import AnimatedGrid from "@/components/AnimatedGrid";

/**
 * Hero backdrop for /contact, /about, /pricing pages. Mirrors the
 * homepage hero treatment, a soft purple semicircle dome at the top
 * with the AnimatedGrid drifting across it, radially masked so the
 * grid lines fade out into the page wash.
 *
 * Designed to slot inside a `<section className="relative …
 * overflow-hidden">`, the dome + grid are absolutely positioned
 * behind whatever the section's foreground content is.
 */
export default function SubpageHeroBg() {
  return (
    <>
      {/* Purple gradient dome, hugs the top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0"
        style={{
          top: "clamp(-360px, -28vh, -120px)",
          width: "max(880px, 150vw)",
          height: "clamp(380px, 60vh, 720px)",
        }}
      >
        { }
        <img
          src="/hero-gradient.svg"
          alt=""
          className="h-full w-full"
          style={{ objectFit: "fill" }}
        />
      </div>

      {/* Animated grid drift, radially masked so the edges feather */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-[1] -translate-x-1/2 w-[700px] h-[520px] sm:w-[1100px] sm:h-[760px]"
        style={{
          top: "clamp(-280px, -22vh, -80px)",
          opacity: 0.75,
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, black 25%, transparent 68%)",
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, black 25%, transparent 68%)",
        }}
      >
        <AnimatedGrid className="h-full w-full" />
      </div>

      {/* Bottom fade, the dome blends into the page's lavender base
          (var(--background)) so the section below opens on the same
          tint instead of a stark white seam. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
        style={{
          height: "clamp(180px, 28vh, 320px)",
          background:
            "linear-gradient(to bottom, rgba(250,246,255,0) 0%, rgba(250,246,255,0.6) 50%, var(--background) 100%)",
        }}
      />
    </>
  );
}
