import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
};

// Renders the device-mockup PNG for a tab panel. When `src` is missing,
// shows a labelled placeholder so the slot is obviously empty.
export default function TabMockup({
  src,
  alt,
  label,
  width = 480,
  height = 320,
}: Props) {
  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-[18px]"
        style={{
          width: "100%",
          aspectRatio: `${width} / ${height}`,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
          border: "1px dashed rgba(255,255,255,0.35)",
          color: "rgba(255,255,255,0.7)",
          fontFamily: "var(--font-display)",
          fontSize: 14,
          letterSpacing: "0.02em",
        }}
      >
        [Mockup: {label}]
      </div>
    );
  }
  return (
    <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 60vw"
        className="rounded-[18px] object-contain"
      />
    </div>
  );
}
