import type { CSSProperties, ReactNode } from "react";

type Props = {
  designWidth: number;
  designHeight: number;
  minDesignHeight?: number;
  className?: string;
  children: ReactNode;
};

export default function ScaledCanvas({
  designWidth,
  designHeight,
  minDesignHeight,
  className = "",
  children,
}: Props) {
  const vars = {
    "--design-w": designWidth,
    "--design-h": designHeight,
    ...(minDesignHeight !== undefined
      ? { "--fit-min-h": `${minDesignHeight}px` }
      : {}),
  } as CSSProperties;

  return (
    <div className={`scaled-canvas w-full ${className}`.trim()} style={vars}>
      <div className="scaled-canvas-inner">{children}</div>
    </div>
  );
}
