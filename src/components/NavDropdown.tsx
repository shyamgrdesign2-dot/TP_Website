"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useNavbar } from "./ui/navbar";

export type NavDropdownItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

type DesktopProps = {
  variant: "desktop";
  label: string;
  items: NavDropdownItem[];
};

type MobileProps = {
  variant: "mobile";
  label: string;
  items: NavDropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
};

type Props = DesktopProps | MobileProps;

const OPEN_DELAY = 120;
const CLOSE_DELAY = 150;

// Solid white panel so the menu reads as a crisp, opaque surface rather
// than a see-through glass sheet that competes with the page behind it.
const PANEL_BG = "#ffffff";
const PANEL_SHADOW = [
  "0 1px 0 rgba(255,255,255,0.8) inset",
  "0 0 0 1px rgba(75,74,213,0.06) inset",
  "0 20px 52px rgba(33,32,119,0.22)",
].join(", ");

export default function NavDropdown(props: Props) {
  if (props.variant === "desktop") return <DesktopDropdown {...props} />;
  return <MobileDropdown {...props} />;
}

function DesktopDropdown({ label, items }: DesktopProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();
  const pathname = usePathname();
  const { onDark } = useNavbar();

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = useCallback(() => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, []);

  useEffect(() => () => clearTimers(), []);

  // Close on pathname change so navigating from a dropdown item
  // doesn't leave the panel hanging open. Skip the initial render
  // so we don't synchronously set state in the mount effect.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  // Outside pointerdown + Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          clearTimers();
          setOpen((v) => !v);
        }}
        onFocus={() => {
          clearTimers();
          setOpen(true);
        }}
        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium capitalize tracking-wide transition lg:px-4 lg:text-sm ${
          onDark
            ? "text-white/90 hover:bg-white/15"
            : "text-[#1F1F1F]/90 hover:bg-white/55"
        }`}
      >
        <span>{label}</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          aria-hidden
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
          }}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Invisible hover bridge so the cursor can leave the trigger and
          enter the panel without dropping into the gap between them. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0"
        style={{ top: "100%", height: 10 }}
      />

      {/*
        Centering note: we anchor the panel with `left:50%` then translate
        it `-50%` of its OWN width. We deliberately do NOT use Tailwind's
        `-translate-x-1/2` class here, Tailwind v4 emits the new CSS
        `translate` property, and combining that with our inline
        `transform: translate(-50%, …)` for the open/close anim would
        STACK both translations and shift the panel a second time
        (panel ends up offset by a full panel-width to the left).
        Single inline transform = single, correct translation.
      */}
      <div
        id={panelId}
        ref={panelRef}
        role="menu"
        aria-label={label}
        className="absolute rounded-[18px] border border-white/55 backdrop-blur-[34px] backdrop-saturate-[190%]"
        style={{
          top: "calc(100% + 10px)",
          left: "50%",
          minWidth: 220,
          background: PANEL_BG,
          boxShadow: PANEL_SHADOW,
          opacity: open ? 1 : 0,
          transform: open ? "translate(-50%, 0)" : "translate(-50%, -6px)",
          pointerEvents: open ? "auto" : "none",
          transition:
            "opacity 180ms ease, transform 180ms cubic-bezier(0.22,1,0.36,1)",
          padding: 8,
          zIndex: 30,
        }}
        onMouseEnter={() => clearTimers()}
        onMouseLeave={scheduleClose}
      >
        <ul className="flex flex-col">
          {items.map((it) => (
            <li key={it.label}>
              {it.disabled ? (
                <span
                  role="menuitem"
                  aria-disabled="true"
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-[#7a7a82]"
                >
                  <span>{it.label}</span>
                  <SoonPill />
                </span>
              ) : (
                <Link
                  href={it.href}
                  role="menuitem"
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-[#1F1F1F] transition hover:bg-[#F3F0FB]"
                  onClick={() => setOpen(false)}
                >
                  <span>{it.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onItemClick,
}: MobileProps) {
  const panelId = useId();
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between px-5 py-3 text-base font-medium text-[#1F1F1F]"
      >
        <span>{label}</span>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          aria-hidden
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 220ms ease",
          }}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        role="menu"
        aria-label={label}
        style={{
          maxHeight: isOpen ? 60 * items.length + 16 : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 280ms ease, opacity 220ms ease",
        }}
      >
        <ul className="flex flex-col pb-2">
          {items.map((it) => (
            <li key={it.label}>
              {it.disabled ? (
                <span
                  role="menuitem"
                  aria-disabled="true"
                  className="flex items-center justify-between gap-3 px-8 py-2.5 text-sm text-[#7a7a82]"
                >
                  <span>{it.label}</span>
                  <SoonPill />
                </span>
              ) : (
                <Link
                  href={it.href}
                  role="menuitem"
                  onClick={onItemClick}
                  className="flex items-center justify-between gap-3 px-8 py-2.5 text-sm text-[#1F1F1F] hover:bg-white/40"
                >
                  <span>{it.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SoonPill() {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
      style={{
        color: "#4B4AD5",
        background: "rgba(75,74,213,0.10)",
        border: "1px solid rgba(75,74,213,0.20)",
        letterSpacing: "0.06em",
      }}
    >
      Soon
    </span>
  );
}
