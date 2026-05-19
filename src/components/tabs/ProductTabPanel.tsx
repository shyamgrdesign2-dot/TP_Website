import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import type { AiTab } from "@/features/ai/aiTabsData";
import type { EmrTab } from "@/features/emr/emrTabsData";
import FramedProductImage from "./FramedProductImage";

type AiProps = { kind: "ai"; tab: AiTab };
type EmrProps = { kind: "emr"; tab: EmrTab };
type Props = AiProps | EmrProps;

/** Product mockups, Figma 2429:8963 desktop / 2429:9070 mobile proportions */
function TabMedia({
  mainImage,
  overlayImage,
}: {
  mainImage: { src: string; alt: string };
  overlayImage?: { src: string; alt: string };
}) {
  return (
    <div className="feature-tab-card__media relative h-[clamp(220px,52vw,340px)] w-full flex items-start justify-center p-0 text-transparent lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%] lg:pl-[46px] lg:pr-0 lg:pt-6 lg:pb-0">
      <img
        src={mainImage.src}
        alt={mainImage.alt}
        draggable={false}
        className="feature-tab-card__main-img absolute left-6 top-6 block h-[130%] w-full max-w-none scale-[1.1] rounded-[18px] object-contain object-top origin-top-left lg:left-0 lg:bottom-[-50px] lg:top-auto lg:h-[114%] lg:w-[154%] lg:scale-[1.08] lg:object-contain lg:object-bottom lg:origin-bottom-left"
        style={{ background: "unset" }}
      />

      {overlayImage ? (
        <div className="feature-tab-card__overlay-img absolute bottom-[8%] left-[3.8%] z-10 w-[36.5%] max-w-[158px] lg:bottom-[10.5%] lg:left-[3.75%] lg:max-w-[190px]">
          <FramedProductImage
            src={overlayImage.src}
            alt={overlayImage.alt}
            strokeWidth={5}
            radiusClass="rounded-[12px]"
            imgClassName="aspect-[190/152] w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}

function AiContent({ tab }: { tab: AiTab }) {
  return (
    <div className="feature-tab-card__text flex h-auto min-h-0 flex-col gap-3 px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[min(48%,430px)] lg:justify-center lg:gap-[10px] lg:px-6 lg:pl-8 xl:pl-10">
      <div className="flex items-center gap-3">
        <span className="feature-tab-card__title-icon shrink-0 [&_span]:!size-7 lg:[&_span]:!size-8">
          {tab.icon}
        </span>
        <h2
          className="feature-tab-card__heading text-[22px] font-bold leading-tight tracking-[-0.01em] text-white lg:text-[34px] lg:leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {tab.title}
        </h2>
      </div>

      <div
        className="feature-tab-card__description text-[14px] leading-[1.55] tracking-[-0.16px] text-white/85 lg:text-base lg:leading-7"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {tab.description}{" "}
        <Link
          href={tab.learnMoreHref}
          className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
        >
          Learn more
        </Link>
      </div>

      <TabCtaPair />
    </div>
  );
}

function EmrContent({ tab }: { tab: EmrTab }) {
  return (
    <div className="feature-tab-card__text flex min-h-0 flex-col gap-4 px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[min(48%,430px)] lg:justify-center lg:gap-[18px] lg:px-6 lg:pl-8 xl:pl-10">
      <h2
        className="feature-tab-card__heading text-[clamp(26px,7.2vw,29px)] font-bold leading-[1.1] text-white lg:text-[32px] lg:leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {tab.titleLines[0]}
        <br />
        {tab.titleLines[1]}
      </h2>

      <ul className="feature-tab-card__points flex flex-col gap-[21.86px] lg:gap-6">
        {tab.bullets.map((bullet, i) => (
          <li
            key={i}
            className="feature-tab-card__point flex items-center gap-[10.64px] text-[14.575px] leading-normal text-[#e3e3ff] lg:gap-[11.7px] lg:text-base lg:leading-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="feature-tab-card__point-icon shrink-0 [&_span]:!size-[23.68px] lg:[&_span]:!size-[26px]">
              {bullet.icon}
            </span>
            <span className="min-w-0 flex-1">{bullet.text}</span>
          </li>
        ))}
      </ul>

      <TabCtaPair />
    </div>
  );
}

/** Two-CTA pair used inside both AI + EMR tab cards. Mirrors the
 *  FinalCTA pattern: outline "Book Demo" + white-fill "Start Free Trial",
 *  both linking to the page-level destinations.
 */
function TabCtaPair() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-1">
      <CtaButton
        href="/contact"
        variant="outlineOnGradient"
        size="md"
        className="w-full sm:w-auto sm:min-w-[160px] sm:flex-1 sm:basis-0"
      >
        Book Demo
      </CtaButton>
      <CtaButton
        href="/pricing"
        variant="primaryOnGradient"
        size="md"
        className="w-full sm:w-auto sm:min-w-[160px] sm:flex-1 sm:basis-0"
      >
        Start Free Trial
      </CtaButton>
    </div>
  );
}

/** Inner content for feature tab card, mobile stack, desktop text + media (Figma EMR/Web). */
export default function ProductTabPanel(props: Props) {
  return (
    <div className="feature-tab-card__content relative flex flex-none flex-col pt-[62px] lg:flex-1 lg:block">
      {props.kind === "ai" ? <AiContent tab={props.tab} /> : <EmrContent tab={props.tab} />}
      <TabMedia
        mainImage={props.tab.mainImage}
        overlayImage={props.tab.overlayImage}
      />
    </div>
  );
}
