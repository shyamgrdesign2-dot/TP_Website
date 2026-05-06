import FooterSection from "./_landingref/FooterRaw";

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
      <div className="relative z-10 mx-auto flex justify-center">
        <FooterSection />
      </div>
    </div>
  );
}
