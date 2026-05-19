export type TooltipDef = {
  card: number;
  text: string;
  emoji: string;
  // Tooltip body box in the 862×386 PNG canvas
  tx: number; ty: number; tw: number; th: number;
  // X-offset of the tail's center in % of the tooltip width (0 = left, 100 = right)
  tailAt: number;
};

export const TOOLTIPS: TooltipDef[] = [
  {
    card: 1,
    text: "Consultations just\nbecame smarter & faster",
    emoji: "🚀",
    tx: 18,  ty: 22,  tw: 196, th: 100, tailAt: 38,
  },
  {
    card: 2,
    text: "The front desk, fully\nunder control",
    emoji: "🛠️",
    tx: 298, ty: 40, tw: 196, th: 100, tailAt: 50,
  },
  {
    card: 3,
    text: "Patient's visit begins\nbefore he walk-in",
    emoji: "⚡",
    tx: 660, ty: 50, tw: 196, th: 100, tailAt: 48,
  },
];

export const MOBILE_TIPS = [
  { label: "Consultations just\nbecame smarter & faster", emoji: "🚀", topPct: 6 },
  { label: "The front desk, fully\nunder control", emoji: "🛠️", topPct: 40 },
  { label: "Patient's visit begins\nbefore he walk-in", emoji: "⚡", topPct: 72 },
];
