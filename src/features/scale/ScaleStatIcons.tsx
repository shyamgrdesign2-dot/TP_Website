export type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

const ICONS = {
  patients: "/Assets/Our-scale/user.svg",
  clipboard: "/Assets/Our-scale/clipboard-text.svg",
  doctors: "/Assets/Our-scale/profile-2user.svg",
  language: "/Assets/Our-scale/global.svg",
  specialities: "/Assets/Our-scale/heart-beat.svg",
  cities: "/Assets/Our-scale/location.svg",
} as const;

// Renders the SVG as a CSS mask so the icon color is controlled by
// `background-color`. Lets us tint every stat icon the same violet
// without editing the SVG files. The 10% wash opacity is applied on
// `.scale-stat-icon-wrap` in globals.css.
function StatSvgIcon({
  src,
  color = "#4B4AD5",
  className,
}: IconProps & { src: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function PatientsServedIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.patients} {...props} />;
}

export function DigitalRxIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.clipboard} {...props} />;
}

export function DoctorsIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.doctors} {...props} />;
}

export function LanguageIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.language} {...props} />;
}

export function SpecialityIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.specialities} {...props} />;
}

export function LocationIcon(props: IconProps) {
  return <StatSvgIcon src={ICONS.cities} {...props} />;
}
