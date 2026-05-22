import Image from "next/image";
import FramedProductImage from "@/components/tabs/FramedProductImage";
import CtaButton from "@/components/ui/CtaButton";
import { TRIAL_URL } from "@/lib/site";

export type SubpageHeroImage = {
  src: string;
  alt: string;
};

export type SubpageHeroContent = {
  eyebrowLabel?: string;
  headlineLines: [string, string];
  subhead: string;
  mainImage?: SubpageHeroImage;
  /** Pass `null` to hide the floating overlay (solutions / single-image heroes). */
  overlayImage?: SubpageHeroImage | null;
};

type Layout = "solutions" | "feature";

/**
 * Navy gradient hero card for feature + solution subpages.
 * Replaces the tab-widget-fit + absolute Figma export stack so the
 * background always fills the card and copy / art stack cleanly on mobile.
 */
export default function SubpageHeroCard({
  eyebrowLabel = "Flagship Feature",
  headlineLines,
  subhead,
  mainImage,
  overlayImage,
  layout = "feature",
}: SubpageHeroContent & { layout?: Layout }) {
  const isSolutions = layout === "solutions";
  const cardClassName = isSolutions
    ? "subpage-hero-card relative h-fit w-full overflow-hidden rounded-[24px] md:rounded-[32px]"
    : "subpage-hero-card relative w-full overflow-hidden rounded-[24px] md:rounded-[32px] md:aspect-[1040/420] md:min-h-[356px]";

  return (
    <article className={cardClassName}>
      {/* Full-card gradient + subtle grid (matches Figma 1040×420 hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[32px]"
        style={{
          background:
            "radial-gradient(ellipse 115% 100% at 50% 52%, #4443BA 0%, #101056 39%, #252578 78%, #4443BA 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[32px] opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "clamp(28px, 3.2vw, 48px) clamp(28px, 3.2vw, 48px)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 18% 22%, black 0%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 18% 22%, black 0%, transparent 72%)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-[42px] px-6 py-6 text-center sm:px-7 sm:py-7 md:flex-row md:items-center md:justify-between md:gap-[42px] md:px-8 md:py-8 md:text-left lg:min-h-[356px]">
        {/* Copy column */}
        <div className="flex w-full flex-col items-center gap-8 md:w-full md:max-w-[540px] md:items-start md:gap-8">
          <div className="flex w-full flex-col items-center gap-3.5 md:items-start md:gap-3">
            <EyebrowPill label={eyebrowLabel} />

            <h2
              className="w-full bg-clip-text font-extrabold text-[clamp(1.7rem,7vw,2.625rem)] leading-[1.14] tracking-[-0.02em] text-transparent [text-wrap:balance] md:font-bold"
              style={{
                fontFamily: "var(--font-display), Mulish, sans-serif",
                backgroundImage:
                  "linear-gradient(95.5deg, #ffffff 0.85%, rgba(255,255,255,0.8) 100%)",
              }}
            >
              <span className="block">{headlineLines[0]}</span>
              <span className="block">{headlineLines[1]}</span>
            </h2>

            <p
              className="max-w-[33rem] bg-clip-text text-[13px] font-medium leading-[1.6] text-transparent md:max-w-[495px] md:text-[16px] md:leading-7"
              style={{
                fontFamily: "var(--font-sans), Inter, sans-serif",
                backgroundImage:
                  "linear-gradient(100.34deg, #ffffff 0.85%, rgba(255,255,255,0.8) 100%)",
              }}
            >
              {subhead}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3.5 md:w-[506px] md:flex-row md:gap-6">
            <CtaButton
              href={TRIAL_URL}
              variant="primaryOnGradient"
              size="lg"
              className="w-full md:w-[241px]"
              style={{ height: 52, minHeight: 52, maxHeight: 52, borderRadius: 12, fontSize: 16 }}
            >
              Start Free Trial
            </CtaButton>
            <CtaButton
              href="/contact#contact"
              variant="outlineOnGradient"
              size="lg"
              className="w-full md:w-[241px]"
              style={{ height: 52, minHeight: 52, maxHeight: 52, borderRadius: 12, fontSize: 16 }}
            >
              Book Demo
            </CtaButton>
          </div>
        </div>

        {/* Product visual */}
        {mainImage ? (
          isSolutions ? (
            <SolutionsImagePanel image={mainImage} />
          ) : (
            <FeatureImagePanel
              mainImage={mainImage}
              overlayImage={overlayImage}
            />
          )
        ) : null}
      </div>
    </article>
  );
}

function EyebrowPill({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[21.271px] bg-gradient-to-r from-white/60 via-white/40 to-white/60 px-[12.647px] py-[6.323px] md:rounded-[26.911px] md:px-4 md:py-2">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <span
        className="relative bg-clip-text text-[12px] font-medium tracking-[0.033em] text-transparent md:text-[16px]"
        style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          backgroundImage:
            "linear-gradient(to right, #ffffff, rgba(255,255,255,0.9))",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SolutionsImagePanel({ image }: { image: SubpageHeroImage }) {
  return (
    <div className="relative h-[clamp(210px,52vw,260px)] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#060520] md:h-[356px] md:w-[324px] md:max-w-[360px] md:rounded-[28px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 324px"
        priority
      />
    </div>
  );
}

function FeatureImagePanel({
  mainImage,
  overlayImage,
}: {
  mainImage: SubpageHeroImage;
  overlayImage?: SubpageHeroImage | null;
}) {
  const showOverlay = overlayImage !== null && overlayImage !== undefined;
  const isDoctorAgent = mainImage.src.includes("Doctor-Agent");
  // Image is scaled larger than its container so the right + bottom
  // edges overflow off the card. Anchor the visible content to the
  // LEFT edge (object-left-top) so the cropping happens only on the
  // overflow side and the leftmost screenshot content stays in view.
  const mainImageClassName = isDoctorAgent
    ? "feature-tab-card__main-img h-full w-full object-contain object-bottom md:object-cover md:object-left-bottom"
    : "feature-tab-card__main-img h-full w-full object-contain object-bottom md:object-cover md:object-left-top";

  // Keep the media visually flush to the column start (no left/top inset)
  // while still allowing the screenshot to overspill toward the right side.
  return (
    <div className="feature-tab-card__media relative h-[clamp(220px,56vw,320px)] w-full shrink-0 flex items-end justify-center md:h-[356px] md:w-[394px] md:min-w-[394px]">
      <div
        className="absolute left-0 top-0 h-[118%] w-[152%] max-w-none md:left-0 md:top-0 md:h-[126%] md:w-[174%]"
        style={{ background: "unset" }}
      >
        <FramedProductImage
          src={mainImage.src}
          alt={mainImage.alt}
          strokeWidth={0}
          radiusClass="rounded-[18px]"
          imgClassName={mainImageClassName}
          className="h-full w-full"
        />
      </div>

      {showOverlay && overlayImage ? (
        <div className="feature-tab-card__overlay-img absolute bottom-[8%] left-[3.8%] z-10 w-[36.5%] max-w-[158px] md:bottom-[10.5%] md:left-[3.75%] md:max-w-[190px]">
          <FramedProductImage
            src={overlayImage.src}
            alt={overlayImage.alt}
            strokeWidth={0}
            radiusClass="rounded-[12px]"
            imgClassName="aspect-[190/152] w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}
