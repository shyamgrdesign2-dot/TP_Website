const NAV_LINKS = ["Solution", "Features", "Pricing", "About Us", "Contact"];

function Logo() {
  return (
    <a href="#" className="flex items-center" aria-label="TatvaPractice">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/tatvapractice-logo.svg"
        alt="TatvaPractice"
        width={145}
        height={32}
        className="h-8 w-auto"
      />
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="absolute left-1/2 top-3 z-30 w-[min(1140px,calc(100%-24px))] -translate-x-1/2 sm:top-5 sm:w-[min(1140px,calc(100%-40px))]">
      <div
        className="flex items-center justify-between gap-2 rounded-[18px] border border-white/40 px-3 py-2 backdrop-blur-xl backdrop-saturate-150 sm:px-[18px] sm:py-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.45) 17%, rgba(255,255,255,0.22) 51%, rgba(255,255,255,0.45) 85%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.65) inset, 0 8px 32px rgba(33,32,119,0.18)",
        }}
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm capitalize text-black tracking-wide hover:bg-white/40"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            className="hidden h-[42px] items-center whitespace-nowrap rounded-[14px] border border-[#4B4AD5] bg-white/40 px-[18px] text-sm font-semibold leading-7 text-[#4B4AD5] sm:inline-flex"
          >
            Book Demo
          </a>
          <a
            href="#"
            className="inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-[14px] px-[14px] text-sm font-semibold leading-7 text-white sm:w-[136px] sm:px-[18px]"
            style={{
              backgroundImage:
                "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
            }}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}
