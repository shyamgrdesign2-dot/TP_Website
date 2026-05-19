import type { SVGProps } from "react";
import { TP_BULK_ICONS, type TpBulkIconName } from "./tp-bulk-registry";

export type TpBulkIconProps = SVGProps<SVGSVGElement> & {
  name: TpBulkIconName;
  /** Shorthand for width & height when square */
  size?: number;
};

/** Renders a TatvaPractice / Iconsax bulk icon from `tp_icon`. */
export default function TpBulkIcon({
  name,
  size,
  width,
  height,
  className,
  ...rest
}: TpBulkIconProps) {
  const Icon = TP_BULK_ICONS[name];
  const w = width ?? size;
  const h = height ?? size ?? w;

  return (
    <Icon
      {...(w != null ? { width: w, height: h } : {})}
      className={className}
      aria-hidden={rest["aria-hidden"] ?? true}
      {...rest}
    />
  );
}
