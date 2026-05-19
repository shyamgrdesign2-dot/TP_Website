type Props = {
  src: string;
  alt: string;
  /** Outer stroke width in px, Figma uses 7 on main, 5 on overlay */
  strokeWidth?: 0 | 5 | 6 | 7;
  className?: string;
  imgClassName?: string;
  radiusClass?: string;
};

/** Product screenshot with Figma-style lavender device frame stroke. */
export default function FramedProductImage({
  src,
  alt,
  strokeWidth = 7,
  className = "",
  imgClassName = "",
  radiusClass = "rounded-[12px]",
}: Props) {
  const inset = -strokeWidth;
  const outerRadius =
    strokeWidth >= 7 ? "rounded-[25px]" : strokeWidth >= 6 ? "rounded-[24px]" : "rounded-[17px]";
  const showStroke = strokeWidth > 0;

  return (
    <div className={`relative ${className}`} style={{ background: "unset" }}>
      { }
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full object-cover ${radiusClass} ${imgClassName}`}
        draggable={false}
        style={{ background: "unset" }}
      />
      {showStroke ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute border-solid border-[rgba(187,182,193,0.4)] ${outerRadius}`}
          style={{ borderWidth: strokeWidth, inset }}
        />
      ) : null}
    </div>
  );
}
