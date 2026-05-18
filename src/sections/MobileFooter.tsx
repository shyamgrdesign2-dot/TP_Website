// Mobile footer — vertical re-flow of FooterRaw.tsx. The desktop
// FooterRaw is a 1280 px Figma export and clips badly on phones, so
// rather than shoehorn responsive classes into the export we render
// a parallel component below the `sm` breakpoint. Same content (logo,
// description, social, four link groups, compliance badges, legal
// links, copyright) — just stacked / wrapped to fit a 375 px viewport.

import Link from "next/link";

const LINK_GROUPS: Array<{ heading: string; items: Array<{ label: string; href?: string }> }> = [
  {
    heading: "Solutions",
    items: [
      { label: "For Clinics", href: "/solutions/clinics" },
      { label: "For Hospitals", href: "/solutions/hospitals" },
      { label: "Pricing" },
    ],
  },
  {
    heading: "Features",
    items: [
      { label: "VoiceRx", href: "/features/voice-rx" },
      { label: "SmartSync" },
      { label: "SnapRx" },
      { label: "AI Assistant" },
      { label: "Integrations" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers" },
      { label: "Blog" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "hello@tatvacare.in", href: "mailto:hello@tatvacare.in" },
      { label: "+91-98765 43210", href: "tel:+919876543210" },
    ],
  },
];

const COMPLIANCE = ["HIPAA", "NHA Approved", "ABDM Ready", "ISO 27001", "GDPR"];
const LEGAL = ["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"];

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/25 text-white/75 transition hover:border-white/50 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function MobileFooter() {
  return (
    <div className="flex w-full flex-col gap-7 px-5 py-9 text-white sm:hidden">
      {/* Logo + description */}
      <div className="flex flex-col gap-4">
        <p
          className="text-[24px] tracking-[0.14px] text-white"
          style={{ fontFamily: "var(--font-display)", lineHeight: 1 }}
        >
          TatvaPractice
        </p>
        <p
          className="text-white/85"
          style={{ fontSize: "14px", lineHeight: 1.55 }}
        >
          AI-first EMR platform that transforms clinical workflows. Save hours, reduce burnout, and focus on what matters – your patients.
        </p>
        {/* Social row — horizontal under the description (vertical on desktop). */}
        <div className="flex items-center gap-3">
          <SocialIcon label="Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.358-7.012L4.5 22H1.244l8.04-9.187L1 2h6.961l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.06 4H5.06l11.984 16Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.18 8h4.66v14H.18V8Zm7.43 0h4.46v1.92h.06c.62-1.17 2.13-2.4 4.39-2.4 4.69 0 5.56 3.08 5.56 7.09V22h-4.66v-6.59c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.61V8Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </SocialIcon>
          <SocialIcon label="YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </SocialIcon>
        </div>
      </div>

      {/* 2 × 2 link grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-7">
        {LINK_GROUPS.map((group) => (
          <div key={group.heading} className="flex flex-col gap-3">
            <p
              className="font-bold text-white"
              style={{ fontFamily: "var(--font-sans)", fontSize: "15px" }}
            >
              {group.heading}
            </p>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white"
                      style={{ fontSize: "13px", lineHeight: 1.4 }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="text-white/80"
                      style={{ fontSize: "13px", lineHeight: 1.4 }}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hairline divider */}
      <div className="h-px w-full bg-white/15" />

      {/* Compliance badges — wrapped row */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {COMPLIANCE.map((label) => (
          <span
            key={label}
            className="rounded-[10px] bg-white/15 px-3 py-1.5 font-semibold text-white/85"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Legal links — wrapped row */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {LEGAL.map((label) => (
          <span
            key={label}
            className="text-white/75"
            style={{ fontSize: "12px" }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <p
        className="text-center text-white/60"
        style={{ fontSize: "11px" }}
      >
        © 2026 All Rights Reserved
      </p>
    </div>
  );
}
