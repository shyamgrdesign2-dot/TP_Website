import CtaButton from "@/components/ui/CtaButton";
import type { CtaSize } from "@/components/ui/cta-tokens";

type Variant = "light" | "dark";

type Props = {
  learnMoreHref: string;
  bookDemoHref?: string;
  variant?: Variant;
  align?: "start" | "center";
  className?: string;
  /** CTA height tier, default matches content cards (40px / 10px radius). */
  size?: CtaSize;
};

const pairBtn = "w-full sm:w-auto sm:flex-1 sm:basis-0 sm:min-w-0";

export default function CardCtaPair({
  learnMoreHref,
  bookDemoHref = "#book-demo",
  variant = "light",
  align = "start",
  className = "",
  size = "md",
}: Props) {
  const wrap = [
    "flex w-full flex-col items-stretch gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-1",
    align === "center" ? "justify-center" : "justify-start",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const secondaryVariant = variant === "dark" ? "outlineOnDark" : "outline";
  const primaryVariant = variant === "dark" ? "primaryOnDark" : "primary";

  return (
    <div className={wrap}>
      <CtaButton
        href={learnMoreHref}
        variant={secondaryVariant}
        size={size}
        className={pairBtn}
      >
        Learn More
      </CtaButton>
      <CtaButton
        href={bookDemoHref}
        variant={primaryVariant}
        size={size}
        className={pairBtn}
      >
        Book Demo
      </CtaButton>
    </div>
  );
}
