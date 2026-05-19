import type { ReactNode } from "react";
import StaticSectionGrid from "@/components/StaticSectionGrid";

/**
 * Continuous “About the Product” atmosphere from Figma, one gradient wash
 * and a soft grid texture. Section spacing is handled via gap between children.
 *
 * Background layers sit in an overflow-hidden shell; content column is
 * overflow-visible so sticky scroll sections (Practice Management) work.
 */
export default function LandingProductBand({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(-2.6deg, rgba(255,255,255,0.3) 0.52%, rgba(248,229,255,0.3) 8.82%, rgba(241,202,255,0.3) 52.38%, rgba(248,229,255,0.3) 85.5%, rgba(255,255,255,0.3) 99.48%), linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
        }}
      >
        <StaticSectionGrid opacity={0.5} />

        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-[1] h-[clamp(48px,6vw,80px)]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-[1] h-[clamp(64px,8vw,100px)]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 flex w-full flex-col items-center overflow-x-clip"
        style={{
          gap: "clamp(40px, 5vw, 80px)",
          paddingTop: "clamp(16px, 2vw, 32px)",
          paddingBottom: "clamp(16px, 2vw, 32px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
