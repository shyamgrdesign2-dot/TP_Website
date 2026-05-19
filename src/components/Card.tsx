import type { CSSProperties, ReactNode } from "react";
import CornerVector from "./CornerVector";
import RadialGradientBg from "./RadialGradientBg";

// Reusable surface used by content sections that sit inside a coloured
// card on top of the page's lavender wash. Composes the three existing
// primitives (RadialGradientBg fill + CornerVector decorations + a
// padded inner content slot) into a single, scalable component:
//
//   <Card variant="navy" padY="xl" withCornerVectors>
//     <h2>...</h2>
//     <FlipCard />
//   </Card>
//
// Use this anywhere a section needs a navy / eggplant / light "inner
// card" wrapper, keeps the radius, padding, and decoration set
// consistent across PracticeManagement, BuiltInAI, EmrStreamlines,
// or any future surfaces. The card never bleeds past its parent so the
// rounded corners are always visible end-to-end.

export type CardVariant = "navy" | "eggplant" | "light";

export type CardPad = "sm" | "md" | "lg" | "xl" | "none";

// Padding tokens scale smoothly with the viewport. Each step roughly
// 1.5× the previous so the spacing rhythm reads as a deliberate scale.
const PAD: Record<Exclude<CardPad, "none">, string> = {
  sm: "clamp(16px, 1.8vw, 28px)",
  md: "clamp(24px, 2.6vw, 40px)",
  lg: "clamp(36px, 3.6vw, 56px)",
  // "xl" is generous enough that the rounded card corners always sit
  // visibly clear of the content + the headline never reads as cropped
  // even when the section is scrolled close to the fixed navbar.
  xl: "clamp(60px, 5.8vw, 104px)",
};

type Props = {
  children: ReactNode;
  /** Surface variant. `light` = white frosted glass; the others are
   *  dark radial fills with their matching noise overlay. */
  variant?: CardVariant;
  /** Border radius. Number = px; string = any CSS length (incl. clamps). */
  radius?: number | string;
  /** Vertical padding token. Defaults to "lg". */
  padY?: CardPad;
  /** Horizontal padding token. Defaults to "lg". */
  padX?: CardPad;
  /** Render the four decorative corner vectors. Defaults to false. */
  withCornerVectors?: boolean;
  /** Corner vector size in px (each one peeks halfway into the card). */
  cornerSize?: number;
  /** ClassName merged onto the outer card surface. */
  className?: string;
  /** ClassName on the inner content slot (padding wrapper). */
  contentClassName?: string;
  /** Inline style merged onto the outer card surface. */
  style?: CSSProperties;
};

export default function Card({
  children,
  variant = "navy",
  radius = "clamp(20px, 2.4vw, 32px)",
  padY = "lg",
  padX = "lg",
  withCornerVectors = false,
  cornerSize = 280,
  className = "",
  contentClassName = "",
  style,
}: Props) {
  // Light variant ships a frosted-glass surface instead of a radial
  // gradient, handy for content cards on coloured page sections.
  const lightSurface =
    variant === "light"
      ? {
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",
          backdropFilter: "blur(12px) saturate(140%)",
          WebkitBackdropFilter: "blur(12px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.55)",
        }
      : undefined;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        borderRadius: typeof radius === "number" ? `${radius}px` : radius,
        // Subtle inner top sheen so the rounded corner stays legible on
        // dark fills; harmless on the light variant.
        boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset",
        ...lightSurface,
        ...style,
      }}
    >
      {/* Variant fill (dark variants only, light surface lives on
          the outer div via the style above). */}
      {variant !== "light" ? <RadialGradientBg variant={variant} /> : null}

      {/* Optional decorative corner clusters. Each one is clipped by
          this card's overflow-hidden so the cluster reads as "peeking
          in" from each corner. */}
      {withCornerVectors ? (
        <>
          <CornerVector variant="tl" size={cornerSize} />
          <CornerVector variant="tr" size={cornerSize} />
          <CornerVector variant="bl" size={cornerSize} />
          <CornerVector variant="br" size={cornerSize} />
        </>
      ) : null}

      {/* Content slot. `z-10` lifts the children above the fill +
          corner overlays. Padding keeps content well inside the
          rounded corners so the radius is always visible. */}
      <div
        className={`relative z-10 ${contentClassName}`.trim()}
        style={{
          ...(padY !== "none"
            ? { paddingTop: PAD[padY], paddingBottom: PAD[padY] }
            : {}),
          ...(padX !== "none"
            ? { paddingLeft: PAD[padX], paddingRight: PAD[padX] }
            : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
}
