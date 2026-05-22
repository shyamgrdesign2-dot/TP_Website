"use client";

import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNavToggle,
  MobileNavMenu,
  useNavbar,
} from "../components/ui/navbar";
import NavDropdown, { type NavDropdownItem } from "../components/NavDropdown";
import { TRIAL_URL } from "@/lib/site";

type NavItem =
  | { label: string; href: string }
  | { label: string; items: NavDropdownItem[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solution",
    items: [
      { label: "For Clinics", href: "/solutions/clinics" },
      { label: "For Hospitals", href: "/solutions/hospitals" },
    ],
  },
  {
    label: "Features",
    items: [
      { label: "Voice Rx", href: "/features/voice-rx" },
      { label: "SmartSync", href: "/features/smart-sync" },
      { label: "SnapRx", href: "/features/snap-rx" },
      { label: "Doctor Agent", href: "/features/doctor-agent" },
      { label: "Receptionist Agent", href: "/features/receptionist-agent" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const navLinkClass = (onDark: boolean) =>
  `block rounded-full px-3.5 py-2 text-[13px] font-medium capitalize tracking-wide transition hover:bg-white/55 lg:px-4 lg:text-sm ${
    onDark ? "text-white/90 hover:bg-white/15" : "text-[#1F1F1F]/90"
  }`;

export default function SiteNavbar() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <DesktopNavItems />

        <div className="relative z-[1] flex shrink-0 items-center justify-end gap-1.5 pr-1 sm:gap-2 sm:pr-2">
          <div className="hidden items-center gap-1.5 lg:flex lg:gap-2">
            <NavbarButton variant="outline" href="/contact#contact">
              Book Demo
            </NavbarButton>
            <NavbarButton variant="primary" href={TRIAL_URL}>
              Start Free Trial
            </NavbarButton>
          </div>
          <MobileNavToggle />
        </div>
      </NavBody>

      <MobileMenu />
    </Navbar>
  );
}

function DesktopNavItems() {
  const { onDark } = useNavbar();
  return (
    <NavItems>
      {NAV_ITEMS.map((item) => (
        <li key={item.label} className="shrink-0">
          {"items" in item ? (
            <NavDropdown
              variant="desktop"
              label={item.label}
              items={item.items}
            />
          ) : (
            <Link href={item.href} className={navLinkClass(onDark)}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </NavItems>
  );
}

function MobileMenu() {
  const { openDropdown, setOpenDropdown, closeMobile } = useNavbar();

  return (
    <MobileNavMenu>
      <ul className="flex flex-col py-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            {"items" in item ? (
              <NavDropdown
                variant="mobile"
                label={item.label}
                items={item.items}
                isOpen={openDropdown === item.label}
                onToggle={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
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
        <NavbarButton variant="outline" href="/contact#contact" className="w-full">
          Book Demo
        </NavbarButton>
        <NavbarButton variant="primary" href={TRIAL_URL} className="w-full">
          Start Free Trial
        </NavbarButton>
      </div>
    </MobileNavMenu>
  );
}
