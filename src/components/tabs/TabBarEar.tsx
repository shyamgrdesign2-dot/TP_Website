/** Figma tab-strip ear, gradient tick flanking the frosted bar (nodes 2429:9088 / 2429:8993). */
export default function TabBarEar({ side }: { side: "left" | "right" }) {
  const isRight = side === "right";

  return (
    <div
      aria-hidden
      className={`mt-0 shrink-0 rounded-tl-[10.301px] bg-gradient-to-t from-[#f6effb] to-[#696969] ${
        isRight
          ? "h-[8.928px] w-[4.807px] -scale-y-100 rotate-180 lg:h-[10.782px] lg:w-[5.806px]"
          : "h-[8.928px] w-[5.494px] lg:h-[10.782px] lg:w-[6.635px]"
      }`}
    />
  );
}
