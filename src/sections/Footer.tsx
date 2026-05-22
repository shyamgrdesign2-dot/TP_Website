import Link from "next/link";
import TrustBadges from "./TrustBadges";

const LINK_GROUPS: Array<{
  heading: string;
  items: Array<{ label: string; href?: string }>;
}> = [
  {
    heading: "Solutions",
    items: [
      { label: "For Clinics", href: "/solutions/clinics" },
      { label: "For Hospitals", href: "/solutions/hospitals" },
    ],
  },
  {
    heading: "Features",
    items: [
      { label: "VoiceRx", href: "/features/voice-rx" },
      { label: "SmartSync", href: "/features/smart-sync" },
      { label: "SnapRx", href: "/features/snap-rx" },
      { label: "Doctor Agent", href: "/features/doctor-agent" },
      { label: "Receptionist Agent", href: "/features/receptionist-agent" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "https://www.tatvacare.in/careers/" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "support@tatvacare.in", href: "mailto:support@tatvacare.in" },
      { label: "+91 99740 42363", href: "tel:+919974042363" },
    ],
  },
];

const LEGAL = [
  "Privacy Policy",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "Site Map",
];

const SOCIALS = [
  {
    label: "Twitter",
    href: "https://x.com/Tatvacare_in",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.358-7.012L4.5 22H1.244l8.04-9.187L1 2h6.961l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.06 4H5.06l11.984 16Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tatvacare-in/posts/?feedView=all",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.18 8h4.66v14H.18V8Zm7.43 0h4.46v1.92h.06c.62-1.17 2.13-2.4 4.39-2.4 4.69 0 5.56 3.08 5.56 7.09V22h-4.66v-6.59c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.61V8Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tatvacare.in/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/TatvaCare",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    ),
  },
];

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/25 text-white/75 transition hover:border-white/50 hover:text-white"
    >
      {children}
    </a>
  );
}

function FooterLink({ item }: { item: { label: string; href?: string } }) {
  const cls = "text-white/80 hover:text-white transition";
  const style = { fontSize: "clamp(12px, 1vw, 14px)", lineHeight: 1.4 };
  if (!item.href) {
    return (
      <span className="text-white/80" style={style}>
        {item.label}
      </span>
    );
  }
  if (item.href.startsWith("http")) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        style={style}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cls} style={style}>
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #2A2A4A 0%, #1F1F38 100%)",
      }}
    >
      <div
        className="relative z-10 mx-auto flex flex-col text-white"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(36px, 4vw, 64px)",
          paddingBottom: "clamp(24px, 3vw, 48px)",
          paddingInline: "clamp(20px, 3vw, 48px)",
          gap: "clamp(28px, 3vw, 44px)",
        }}
      >
        {/* Top row: brand + links */}
        <div className="flex flex-col gap-7 sm:flex-row sm:gap-12">
          {/* Brand column */}
          <div
            className="flex shrink-0 flex-col gap-4 sm:max-w-[280px]"
          >
            <p
              className="text-[24px] tracking-[0.14px] text-white"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1 }}
            >
              TatvaPractice
            </p>
            <p
              className="text-white/85"
              style={{ fontSize: "clamp(13px, 1vw, 15px)", lineHeight: 1.55 }}
            >
              AI-first EMR platform that transforms clinical workflows. Save
              hours, reduce burnout, and focus on what matters – your patients.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <SocialIcon key={s.label} label={s.label} href={s.href}>
                  {s.icon}
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Link columns: 2×2 on mobile, 4-col on desktop */}
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-x-8">
            {LINK_GROUPS.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3">
                <p
                  className="font-bold text-white"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                  }}
                >
                  {group.heading}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <FooterLink item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/15" />

        {/* Compliance badges */}
        <div className="flex w-full justify-center">
          <TrustBadges theme="dark" />
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {LEGAL.map((label) => (
            <span
              key={label}
              className="text-white/75"
              style={{ fontSize: "clamp(11px, 0.85vw, 13px)" }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-center text-white/60"
          style={{ fontSize: "clamp(10px, 0.8vw, 12px)" }}
        >
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
