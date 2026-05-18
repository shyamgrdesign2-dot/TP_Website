import FooterSection from "../components/_landingref/FooterRaw";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        // TP-Slate 700 — softer than pure black, matches the rest of the
        // page's dark-violet family rather than going jet-black.
        background:
          "linear-gradient(180deg, #2A2A4A 0%, #1F1F38 100%)",
      }}
    >
      {/* Desktop: hoist the `hidden` onto an outer flex wrapper so the
          1280 px Figma export only renders ≥ sm. Mobile gets its own
          vertical re-flow below. */}
      <div className="relative z-10 mx-auto hidden justify-center sm:flex">
        <FooterSection />
      </div>
      <MobileFooter />
    </div>
  );
}
