"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import CtaButton from "./CtaButton";

// ─── Shared context ────────────────────────────────────────────────

type NavbarCtx = {
  isScrolled: boolean;
  isMobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  closeMobile: () => void;
};

const Ctx = createContext<NavbarCtx | null>(null);

export function useNavbar() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useNavbar must be used within <Navbar>");
  return ctx;
}

// ─── Navbar (root), floating pill shell ───────────────────────────

export function Navbar({ children }: { children: ReactNode }) {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <Ctx.Provider
      value={{
        isScrolled,
        isMobileOpen,
        setMobileOpen,
        openDropdown,
        setOpenDropdown,
        closeMobile,
      }}
    >
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center px-[var(--page-gutter)] pt-3 sm:pt-4">
        <nav
          className="pointer-events-auto w-full max-w-[var(--section-w)]"
          aria-label="Main"
        >
          {children}
        </nav>
      </header>
    </Ctx.Provider>
  );
}

// ─── NavBody, glass pill bar ──────────────────────────────────────

export function NavBody({ children }: { children: ReactNode }) {
  const { isScrolled } = useNavbar();

  return (
    <div
      className="relative grid min-h-[52px] w-full grid-cols-[auto_1fr_auto] items-center gap-2 rounded-[16px] border border-white/55 px-2 py-1.5 backdrop-blur-2xl backdrop-saturate-150 transition-[box-shadow,transform] duration-300 ease-out sm:min-h-[58px] sm:gap-3 sm:px-3 sm:py-2 lg:min-h-[60px] lg:px-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.32) 48%, rgba(255,255,255,0.48) 100%)",
        boxShadow: isScrolled
          ? [
              "0 1px 0 rgba(255,255,255,0.95) inset",
              "0 -1px 0 rgba(75,74,213,0.10) inset",
              "0 0 0 1px rgba(255,255,255,0.22) inset",
              "0 16px 48px rgba(33,32,119,0.20)",
              "0 4px 16px rgba(33,32,119,0.10)",
            ].join(", ")
          : [
              "0 1px 0 rgba(255,255,255,0.88) inset",
              "0 -1px 0 rgba(75,74,213,0.06) inset",
              "0 0 0 1px rgba(255,255,255,0.18) inset",
              "0 10px 32px rgba(33,32,119,0.14)",
            ].join(", "),
        transform: isScrolled ? "translateY(0)" : "translateY(0)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[16px]"
        style={{
          background: [
            "radial-gradient(90% 120% at 0% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 42%)",
            "radial-gradient(90% 120% at 100% 0%, rgba(196,75,255,0.16) 0%, rgba(255,255,255,0) 45%)",
            "radial-gradient(90% 120% at 100% 100%, rgba(75,74,213,0.08) 0%, rgba(255,255,255,0) 50%)",
          ].join(", "),
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px rounded-[16px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      {children}
    </div>
  );
}

// ─── NavItems, centred desktop links ──────────────────────────────

export function NavItems({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-[1] hidden min-w-0 justify-center lg:flex">
      <ul className="flex max-w-full items-center gap-0.5 px-1">
        {children}
      </ul>
    </div>
  );
}

// ─── NavbarLogo ────────────────────────────────────────────────────

export function NavbarLogo() {
  return (
    <div className="relative z-[1] flex min-w-0 items-center pl-1 sm:pl-2">
      <Link href="/" className="flex items-center" aria-label="TatvaPractice">
        { }
        <img
          src="/tatvapractice-logo.svg"
          alt="TatvaPractice"
          width={145}
          height={32}
          className="h-[26px] w-auto max-w-[min(132px,34vw)] sm:h-7 lg:h-8"
        />
      </Link>
    </div>
  );
}

// ─── MobileNavToggle ───────────────────────────────────────────────

export function MobileNavToggle() {
  const { isMobileOpen, setMobileOpen, setOpenDropdown } = useNavbar();

  return (
    <button
      type="button"
      aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMobileOpen}
      onClick={() =>
        setMobileOpen((v) => {
          if (v) setOpenDropdown(null);
          return !v;
        })
      }
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#1F1F1F] transition-opacity hover:opacity-70 lg:hidden"
    >
      {isMobileOpen ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 6l12 12M6 18L18 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

// ─── MobileNavMenu ─────────────────────────────────────────────────

export function MobileNavMenu({ children }: { children: ReactNode }) {
  const { isMobileOpen } = useNavbar();
  if (!isMobileOpen) return null;

  return (
    <div
      className="mt-2 overflow-y-auto rounded-[24px] border border-white/45 backdrop-blur-xl backdrop-saturate-150 lg:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.42) 100%)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.65) inset, 0 12px 36px rgba(33,32,119,0.16)",
        maxHeight: "calc(100dvh - 100px)",
      }}
    >
      {children}
    </div>
  );
}

// ─── NavbarButton, 42px height, 10px radius (nav token) ───────────────

export function NavbarButton({
  variant = "primary",
  href = "#",
  children,
  className = "",
  onClick,
}: {
  variant?: "outline" | "primary";
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <CtaButton
      href={href}
      onClick={onClick}
      variant={variant === "outline" ? "outline" : "primary"}
      size="nav"
      className={`sm:min-w-[140px] ${className}`}
    >
      {children}
    </CtaButton>
  );
}
