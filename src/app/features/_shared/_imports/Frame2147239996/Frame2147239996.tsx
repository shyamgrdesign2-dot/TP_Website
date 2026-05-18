import * as React from "react";
import svgPaths from "./svg-xtdwgleyj";

export type WhyDoctorsCard = {
  /** Plaque heading text — used when `titleLines` isn't provided. */
  title: string;
  /** Optional two-line title (renders with a <br> between lines). */
  titleLines?: [string, string];
  /** Body paragraph rendered below the plaque. */
  body: string;
};

export type WhyDoctorsFrameContent = {
  /** Section heading rendered above the 2×3 grid. */
  heading: string;
  /** Exactly six cards rendered as two rows of three on desktop. */
  cards: [
    WhyDoctorsCard,
    WhyDoctorsCard,
    WhyDoctorsCard,
    WhyDoctorsCard,
    WhyDoctorsCard,
    WhyDoctorsCard,
  ];
};

function HeadingBlock({ heading }: { heading: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[755px]">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#454551] text-[30px] text-center tracking-[-1px] w-[538.069px]">
        <p className="leading-[normal]">{heading}</p>
      </div>
    </div>
  );
}

/**
 * Title plaque — eggplant radial gradient bg, white-shimmer title text,
 * decorative 11-path tilted Vector watermark on the right. Verbatim
 * markup from the Figma reference; only the title text is dynamic.
 */
function TitlePlaque({ card }: { card: WhyDoctorsCard }) {
  return (
    <div
      className="min-h-[64px] relative rounded-[12px] shrink-0 w-full"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 243.33 87\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%25\\' width=\\'100%25\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.394 -3.2627 15.046 6.7369 121.67 48.235)\\'><stop stop-color=\\'rgba(70,40,108,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(53,28,85,1)\\' offset=\\'0.19541\\'/><stop stop-color=\\'rgba(37,17,62,1)\\' offset=\\'0.39081\\'/><stop stop-color=\\'rgba(55,33,83,1)\\' offset=\\'0.78163\\'/><stop stop-color=\\'rgba(81,56,113,1)\\' offset=\\'0.89081\\'/><stop stop-color=\\'rgba(108,79,144,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="content-stretch flex items-center overflow-clip px-[20px] py-[14px] relative rounded-[inherit] size-full">
        <div
          className="bg-clip-text flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[1.15] relative shrink-0 text-[17px] text-[transparent] w-[184.405px]"
          style={{
            backgroundImage:
              "linear-gradient(101.863deg, rgb(255, 255, 255) 0.55117%, rgba(255, 255, 255, 0.9) 41.377%, rgb(255, 255, 255) 83.306%)",
          }}
        >
          {card.titleLines ? (
            <p className="leading-[normal] whitespace-pre-wrap">
              {card.titleLines[0]}
              <br aria-hidden="true" />
              {card.titleLines[1]}
            </p>
          ) : (
            <p className="leading-[normal]">{card.title}</p>
          )}
        </div>
        <div
          className="absolute flex h-[96.059px] items-center justify-center left-[171.55px] top-[35.47px] w-[89.785px]"
          style={
            {
              "--transform-inner-width": "1200",
              "--transform-inner-height": "19",
            } as React.CSSProperties
          }
        >
          <div className="-rotate-4 flex-none">
            <div
              className="h-[90.442px] relative w-[83.68px]"
              data-name="Vector"
            >
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 83.6798 90.4417"
              >
                <g id="Vector">
                  <path d={svgPaths.p80e3e00} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p30439c80} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p310a0f00} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p1c8882b0} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p19eb1500} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p29fb9000} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p2e6fcc80} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p193cb00} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p3f97a300} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p16234600} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p1b1e2c80} fill="white" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Single card in the 2×3 grid — frosted glass wrapper + title plaque +
 * body paragraph. Verbatim wrapper markup; title + body come from props.
 */
function WhyCard({ card }: { card: WhyDoctorsCard }) {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.5)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[14px] px-[14px] relative size-full">
          <TitlePlaque card={card} />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454551] text-[14px] w-full">
            <p className="leading-[22px]">{card.body}</p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0.5px] border-[rgba(226,226,234,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function CardRow({ cards }: { cards: WhyDoctorsCard[] }) {
  // `min-h` instead of `h` so longer body copy never overflows the card.
  // Card wrappers use `self-stretch + h-full` so siblings in a row still
  // equalise to the tallest card.
  return (
    <div className="content-stretch flex gap-[24px] min-h-[199px] items-stretch relative shrink-0 w-full">
      {cards.map((card, i) => (
        <div
          key={i}
          className="flex flex-[1_0_0] flex-row items-stretch self-stretch"
        >
          <WhyCard card={card} />
        </div>
      ))}
    </div>
  );
}

function Grid({ cards }: { cards: WhyDoctorsFrameContent["cards"] }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <CardRow cards={cards.slice(0, 3)} />
      <CardRow cards={cards.slice(3, 6)} />
    </div>
  );
}

export default function Frame7({ heading, cards }: WhyDoctorsFrameContent) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative size-full">
      <HeadingBlock heading={heading} />
      <Grid cards={cards} />
    </div>
  );
}
