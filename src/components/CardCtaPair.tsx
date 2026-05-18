// Shared CTA pair used inside content cards across the site:
// outline secondary ("Learn More") + primary ("Book Demo").
//
// Matches the navbar's Book Demo / Start Free Trial pattern so the
// whole site reads as one button system. The `variant` prop adjusts
// the colours so the same component works on light backgrounds
// (white frosted cards, like PracticeSize) and on dark backgrounds
// (the navy / eggplant AI tab cards).

type Variant = "light" | "dark";

type Props = {
  /** Where "Learn More" navigates. The deep page for the card. */
  learnMoreHref: string;
  /** Where "Book Demo" navigates. Defaults to the global demo stub. */
  bookDemoHref?: string;
  /**
   * "light" = card sits on a white/lavender surface (navbar-style CTAs).
   * "dark" = card sits on a navy/eggplant surface (inverted CTAs).
   */
  variant?: Variant;
  /**
   * Horizontal alignment of the pair within its parent. Defaults to
   * "start" (left-aligned) — matches the navbar grouping.
   */
  align?: "start" | "center";
  /** Optional class merged onto the wrapping flex container. */
  className?: string;
};

export default function CardCtaPair({
  learnMoreHref,
  bookDemoHref = "#book-demo",
  variant = "light",
  align = "start",
  className = "",
}: Props) {
  // Both CTAs share the card width 50/50 with a fluid gap so they
  // scale with whatever container the pair lives in (light frosted
  // PracticeSize card, dark AI tab card, etc.). Each button gets
  // `flex-1` + `basis-0` so any difference in label length doesn't
  // tip the balance.
  // Mobile: stack vertically + extra top padding so there's clear
  // breathing room between the content list and the action pair.
  // ≥ sm: side-by-side 50/50 row as before.
  const wrap = [
    "flex w-full flex-col items-stretch gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-1",
    align === "center" ? "justify-center" : "justify-start",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Light-surface palette: dark-purple outline, gradient-fill primary.
  // Mirrors the homepage navbar exactly so a viewer's eye recognises
  // the pair on the first glance.
  const lightSecondary =
    "border border-[#4B4AD5] bg-white/40 text-[#4B4AD5]";
  const lightPrimaryStyle = {
    backgroundImage: "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
  } as const;

  // Dark-surface palette: white-on-translucent outline + solid white
  // primary with deep-purple text — the same pattern the in-card
  // feature hero CTAs use.
  const darkSecondary =
    "border border-white/85 bg-white/10 text-white backdrop-blur-sm";
  const darkPrimaryClass = "bg-white text-[#310766]";

  const secondary = variant === "dark" ? darkSecondary : lightSecondary;
  const primaryClass =
    variant === "dark"
      ? `cta-shimmer ${darkPrimaryClass}`
      : "cta-shimmer text-white";
  const primaryStyle = variant === "dark" ? undefined : lightPrimaryStyle;

  // `flex-1 basis-0` makes each CTA take exactly half the row at any
  // width; `min-w-0` lets them shrink below the natural label width
  // when the container is narrow (mobile cards). The button height
  // clamps with the viewport so the pair scales together with the
  // surrounding card type-sizes instead of locking at 42px.
  const ctaBase =
    "w-full sm:w-auto sm:flex-1 sm:basis-0 sm:min-w-0 inline-flex items-center justify-center whitespace-nowrap rounded-[14px] px-4 text-sm font-semibold";
  const ctaHeight = { height: "clamp(42px, 3.6vw, 56px)" } as const;

  return (
    <div className={wrap}>
      <a
        href={learnMoreHref}
        className={`cta-outline ${ctaBase} ${secondary}`}
        style={ctaHeight}
      >
        Learn More
      </a>
      <a
        href={bookDemoHref}
        className={`${ctaBase} ${primaryClass}`}
        style={{ ...ctaHeight, ...(primaryStyle ?? {}) }}
      >
        <span className="relative z-[1]">Book Demo</span>
      </a>
    </div>
  );
}
