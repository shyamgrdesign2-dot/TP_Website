"use client";

import { useEffect, useState } from "react";
import CtaButton from "@/components/ui/CtaButton";

// Mobile-only sticky CTA bar pinned to the bottom of the viewport on
// phones (hidden ≥ `sm`). Holds the same Book Demo / Start Free Trial
// pair the navbar uses on desktop, so a visitor scrolling anywhere on
// the page is always one tap away from converting.
//
// Auto-hides whenever the in-page "Start Your Free 7-Day Trial"
// (`FinalCTA`) section or the `Footer` is intersecting the viewport 
// at that point the page already has its own CTA / contact surface,
// so a second sticky bar would just compete with the primary
// conversion target and obstruct the footer links.
//
// The page itself adds `pb-[88px] sm:pb-0` on `<main>` to make sure
// no content sits under the bar while it's visible.
export default function MobileStickyCTA() {
  // `hidden` is true whenever a "conversion surface" (FinalCTA or
  // Footer) is in view. We detect that with a single
  // IntersectionObserver across all flagged targets; any one match
  // hides the bar.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide the bar whenever the page is already showing the same
    // Book Demo / Start Free Trial pair (so we don't compete with
    // the primary conversion target). Three surfaces qualify:
    //   1. Homepage Hero, has the same CTAs visible above the fold.
    //   2. FinalCTA "Start Your Free 7-Day Trial" card.
    //   3. Footer.
    const targets: HTMLElement[] = [];
    // Hero is the `<section>` with the headline H1 containing
    // "Everything you need to", i.e. the homepage hero.
    const heroHeading = Array.from(
      document.querySelectorAll("h1"),
    ).find((h) => h.textContent?.toLowerCase().includes("everything you need"));
    const heroSection = heroHeading?.closest("section");
    if (heroSection) targets.push(heroSection as HTMLElement);

    const subpageHero = document.querySelector(".subpage-hero-card");
    const subpageHeroSection = subpageHero?.closest("section");
    if (subpageHeroSection) targets.push(subpageHeroSection as HTMLElement);

    const finalCtaHeading = Array.from(
      document.querySelectorAll("h2"),
    ).find((h) => h.textContent?.includes("Start Your Free 7-Day Trial"));
    const finalCtaSection = finalCtaHeading?.closest("section");
    if (finalCtaSection) targets.push(finalCtaSection as HTMLElement);

    const footer = document.querySelector("footer, [class*='Footer']");
    const footerSection = footer?.closest("div, footer");
    if (footerSection && footerSection !== document.body)
      targets.push(footerSection as HTMLElement);

    if (targets.length === 0) return;

    // Track per-target intersection state, hide when ANY target is
    // visible. `rootMargin: -10%` adds a buffer so the bar hides a
    // beat BEFORE the FinalCTA reaches the bottom of the viewport,
    // not the instant its top edge crosses.
    const state = new Map<Element, boolean>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) state.set(e.target, e.isIntersecting);
        const anyVisible = Array.from(state.values()).some(Boolean);
        setHidden(anyVisible);
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      aria-label="Quick actions"
      aria-hidden={hidden}
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-white/55 px-[var(--page-gutter)] py-2.5 backdrop-blur-2xl backdrop-saturate-150 sm:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.72) 100%)",
        boxShadow:
          "0 -1px 0 rgba(255,255,255,0.85) inset, 0 -8px 24px rgba(33,32,119,0.10)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
        // Tuck the bar OFF-SCREEN downward when a conversion surface
        // is in view. The fade + slide takes 240 ms so it feels like
        // an intentional dismissal rather than a flicker.
        transform: hidden ? "translateY(110%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition:
          "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease",
      }}
    >
      <CtaButton
        href="/contact"
        variant="outline"
        size="md"
        className="flex-1 basis-0 bg-white/70"
      >
        Book Demo
      </CtaButton>
      <CtaButton
        href="/pricing"
        variant="primary"
        size="md"
        className="flex-1 basis-0"
        style={{ boxShadow: "0 8px 18px rgba(75,74,213,0.30)" }}
      >
        Start Free Trial
      </CtaButton>
    </div>
  );
}
