"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavDropdown, { type NavDropdownItem } from "../components/NavDropdown";

type NavItem =
  | { label: string; href: string }
  | { label: string; items: NavDropdownItem[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solution",
    items: [
      { label: "For Clinics",   href: "/solutions/clinics" },
      { label: "For Hospitals", href: "/solutions/hospitals" },
    ],
  },
  {
    label: "Features",
    items: [
      { label: "Voice Rx",            href: "/features/voice-rx" },
      { label: "SmartSync",           href: "/features/smart-sync" },
      { label: "SnapRx",              href: "/features/snap-rx" },
      { label: "Doctor Agent",        href: "/features/doctor-agent" },
      { label: "Receptionist Agent",  href: "/features/receptionist-agent" },
    ],
  },
  { label: "Pricing",  href: "/#pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact",  href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="TatvaPractice">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/tatvapractice-logo.svg"
        alt="TatvaPractice"
        width={145}
        height={32}
        className="h-8 w-auto"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Which mobile dropdown is currently expanded (single-open accordion).
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  // Solid = past the hero, switch to a denser glass + stronger shadow.
  const [solid, setSolid] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Track scroll only to thicken the glass once we're past the top — the
  // navbar itself stays sticky so the CTAs are always reachable.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setOpenMobile(null);
  };

  return (
    <nav
      className={[
        "fixed left-1/2 top-3 z-30 -translate-x-1/2 transition-all duration-300 ease-out sm:top-5",
        "w-[min(1360px,calc(100%-16px))] sm:w-[min(1360px,calc(100%-28px))]",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex items-center justify-between gap-2 overflow-visible rounded-[20px] border border-white/50 px-3 py-2 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 sm:px-[22px] sm:py-3",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.30) 50%, rgba(255,255,255,0.45) 100%)",
          boxShadow: solid
            ? [
                // Top sheen
                "0 1px 0 rgba(255,255,255,0.95) inset",
                // Bottom shade for "lifted" feel
                "0 -1px 0 rgba(75,74,213,0.10) inset",
                // Soft corners glow
                "0 0 0 1px rgba(255,255,255,0.20) inset",
                // Drop shadow — bigger when solid
                "0 14px 44px rgba(33,32,119,0.22)",
                "0 4px 14px rgba(33,32,119,0.12)",
              ].join(", ")
            : [
                "0 1px 0 rgba(255,255,255,0.85) inset",
                "0 -1px 0 rgba(75,74,213,0.06) inset",
                "0 0 0 1px rgba(255,255,255,0.18) inset",
                "0 8px 28px rgba(33,32,119,0.16)",
              ].join(", "),
        }}
      >
        {/* Inner gloss highlights — give every corner a soft sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[20px]"
          style={{
            background:
              "radial-gradient(120% 90% at 0% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%), radial-gradient(120% 90% at 100% 0%, rgba(196,75,255,0.18) 0%, rgba(255,255,255,0) 40%), radial-gradient(120% 90% at 100% 100%, rgba(75,74,213,0.10) 0%, rgba(255,255,255,0) 45%), radial-gradient(120% 90% at 0% 100%, rgba(255,180,220,0.18) 0%, rgba(255,255,255,0) 45%)",
          }}
        />
        {/* Subtle moving shimmer along the top edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div className="relative z-[1]">
          <Logo />
        </div>
        <ul className="relative z-[1] hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {"items" in item ? (
                <NavDropdown
                  variant="desktop"
                  label={item.label}
                  items={item.items}
                />
              ) : (
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-sm capitalize text-black tracking-wide transition hover:bg-white/50"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="relative z-[1] flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="cta-outline hidden h-[42px] items-center whitespace-nowrap rounded-[14px] border border-[#4B4AD5] bg-white/40 px-[20px] text-sm font-semibold leading-7 text-[#4B4AD5] sm:inline-flex"
          >
            Book Demo
          </a>
          <a
            href="#"
            className="cta-shimmer hidden h-[42px] items-center justify-center whitespace-nowrap rounded-[14px] px-[20px] text-sm font-semibold leading-7 text-white sm:inline-flex sm:min-w-[148px]"
            style={{
              backgroundImage:
                "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
            }}
          >
            <span className="relative z-[1]">Start Free Trial</span>
          </a>
          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() =>
              setOpen((v) => {
                if (v) setOpenMobile(null);
                return !v;
              })
            }
            className="inline-flex h-10 w-10 items-center justify-center text-[#1F1F1F] sm:hidden"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div
          className="mt-2 overflow-y-auto rounded-[18px] border border-white/40 backdrop-blur-xl backdrop-saturate-150 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.4) 100%)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.65) inset, 0 8px 32px rgba(33,32,119,0.18)",
            maxHeight: "calc(100dvh - 120px)",
          }}
        >
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {"items" in item ? (
                  <NavDropdown
                    variant="mobile"
                    label={item.label}
                    items={item.items}
                    isOpen={openMobile === item.label}
                    onToggle={() =>
                      setOpenMobile((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    onItemClick={closeMobile}
                  />
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block px-5 py-3 text-base font-medium text-[#1F1F1F] hover:bg-white/40"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-white/40 p-4">
            <a
              href="#"
              className="flex h-[48px] items-center justify-center rounded-[14px] border border-[#4B4AD5] bg-white/40 text-sm font-semibold text-[#4B4AD5]"
            >
              Book Demo
            </a>
            <a
              href="#"
              className="flex h-[48px] items-center justify-center rounded-[14px] text-sm font-semibold text-white"
              style={{
                backgroundImage:
                  "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
              }}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
