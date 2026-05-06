"use client";

type ActiveStyle = "ai" | "emr";

type Props = {
  tabs: string[];
  active: number;
  onChange: (i: number) => void;
  variant?: ActiveStyle;
};

const ACTIVE_GRADIENTS: Record<ActiveStyle, string> = {
  // Built-In AI — magenta → indigo
  ai: "linear-gradient(90deg, rgb(180,91,197) 0%, rgb(26,25,148) 100%)",
  // EMR — indigo
  emr: "linear-gradient(90deg, rgb(39,39,111) 0%, rgb(92,91,214) 100%)",
};

export default function TabPills({
  tabs,
  active,
  onChange,
  variant = "ai",
}: Props) {
  const activeBg = ACTIVE_GRADIENTS[variant];
  return (
    <div
      className="glass-surface inline-flex items-center rounded-full p-1.5"
      style={{ gap: 4 }}
    >
      {tabs.map((label, i) => {
        const isActive = i === active;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(i)}
            className={[
              "rounded-full px-[clamp(14px,1.4vw,22px)] py-[clamp(6px,0.7vw,10px)]",
              "font-semibold transition",
              "whitespace-nowrap",
              isActive
                ? "text-white shadow-[0_2px_8px_rgba(50,40,140,0.25)]"
                : "text-[#454551] hover:text-[#1f1f1f]",
            ].join(" ")}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(12px, 1vw, 15px)",
              backgroundImage: isActive ? activeBg : undefined,
              border: isActive
                ? "1px solid rgba(255,255,255,0.5)"
                : "1px solid transparent",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
