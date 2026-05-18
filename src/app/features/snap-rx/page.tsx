import type { Metadata } from "next";
import FeaturePage from "../_shared/_sections/FeaturePage";
import { SNAP_RX_CONTENT } from "../_shared/content/snap-rx";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SNAP_RX_CONTENT.metaTitle,
  description: SNAP_RX_CONTENT.metaDescription,
  path: `/features/${SNAP_RX_CONTENT.slug}`,
});

export default function SnapRxPage() {
  return <FeaturePage content={SNAP_RX_CONTENT} />;
}
