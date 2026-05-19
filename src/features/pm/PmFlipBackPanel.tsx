import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type PmFlipBullet = string | { lead: string; bold?: string; rest?: string };

export type PmFlipBackPanelProps = {
  title: ReactNode;
  bullets: PmFlipBullet[];
  image: StaticImageData | string;
  imageClassName?: string;
};

function BulletLine({ item }: { item: PmFlipBullet }) {
  if (typeof item === "string") {
    return (
      <p className="text-[clamp(12px,1.05vw,15px)] leading-[1.45] text-[rgba(227,227,255,0.88)]">
        <span className="mr-1.5 text-[rgba(255,255,255,0.9)]">•</span>
        {item}
      </p>
    );
  }
  return (
    <p className="text-[clamp(12px,1.05vw,15px)] leading-[1.45] text-[rgba(227,227,255,0.88)]">
      <span className="mr-1.5 text-[rgba(255,255,255,0.9)]">•</span>
      {item.lead}
      {item.bold ? <span className="font-semibold text-white">{item.bold}</span> : null}
      {item.rest ?? ""}
    </p>
  );
}

/** Responsive flip-card back, text + image fit inside the navy card at any width. */
export default function PmFlipBackPanel({
  title,
  bullets,
  image,
  imageClassName = "object-cover object-center",
}: PmFlipBackPanelProps) {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 overflow-hidden p-4 pt-14 sm:flex-row sm:items-center sm:gap-5 sm:p-5 sm:pt-16 md:gap-6 md:p-6 md:pt-[72px]">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-2.5 sm:gap-3">
        <h3
          className="font-bold text-white [text-wrap:balance]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(17px, 2.2vw, 24px)",
            lineHeight: 1.35,
          }}
        >
          {title}
        </h3>
        <div className="flex flex-col gap-1 sm:gap-1.5">
          {bullets.map((bullet, i) => (
            <BulletLine key={i} item={bullet} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto aspect-[294/291] w-full max-h-[38%] shrink-0 overflow-hidden rounded-[14px] sm:mx-0 sm:max-h-none sm:w-[min(42%,220px)] sm:rounded-[20px] md:w-[min(38%,260px)]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 80vw, 260px"
          className={imageClassName}
          draggable={false}
        />
      </div>
    </div>
  );
}
