import type { CSSProperties, ReactNode } from "react";
import { ctaSizeStyle, type CtaSize } from "./cta-tokens";

export type CtaVariant =
  | "primary"
  | "outline"
  | "primaryOnDark"
  | "outlineOnDark"
  | "primaryOnGradient"
  | "outlineOnGradient";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  /** Defaults to anchor; use `button` for forms. */
  as?: "a" | "button";
  type?: "button" | "submit";
};

const PRIMARY_GRADIENT = {
  backgroundImage: "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
} as const;

function variantClasses(variant: CtaVariant): string {
  switch (variant) {
    case "outline":
      return "cta-outline border border-[#4B4AD5] bg-white/40 text-[#4B4AD5]";
    case "primaryOnDark":
      return "cta-shimmer bg-white text-[#310766]";
    case "outlineOnDark":
      return "cta-outline border border-white/85 bg-white/10 text-white backdrop-blur-sm";
    case "primaryOnGradient":
      return "cta-shimmer text-[#1f1f1f]";
    case "outlineOnGradient":
      return "cta-outline border border-white/45 font-semibold text-white transition hover:bg-white/15";
    case "primary":
    default:
      return "cta-shimmer text-white";
  }
}

function variantStyle(variant: CtaVariant): CSSProperties | undefined {
  switch (variant) {
    case "primary":
      return PRIMARY_GRADIENT;
    case "primaryOnGradient":
      return {
        backgroundImage: "linear-gradient(180deg, #ffffff 0%, #ECEAFF 100%)",
        boxShadow: "0 8px 22px rgba(0,0,0,0.28)",
      };
    case "outlineOnGradient":
      return {
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
      };
    default:
      return undefined;
  }
}

/** Site-wide CTA anchor, fixed height + radius per size token. */
export default function CtaButton({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  className = "",
  style,
  onClick,
  as = "a",
  type = "button",
}: Props) {
  const base =
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap px-4 font-semibold sm:px-5";

  const mergedStyle: CSSProperties = {
    ...ctaSizeStyle(size),
    ...variantStyle(variant),
    ...style,
  };

  const classNames = `${base} ${variantClasses(variant)} ${className}`.trim();

  const label =
    variant === "primary" ||
    variant === "primaryOnGradient" ||
    variant === "primaryOnDark" ? (
      <span className="relative z-[1]">{children}</span>
    ) : (
      children
    );

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={classNames}
        style={mergedStyle}
      >
        {label}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classNames} style={mergedStyle}>
      {label}
    </a>
  );
}
