import type { Metadata } from "next";
import FeaturePage from "../_shared/_sections/FeaturePage";
import { SMART_SYNC_CONTENT } from "../_shared/content/smart-sync";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SMART_SYNC_CONTENT.metaTitle,
  description: SMART_SYNC_CONTENT.metaDescription,
  path: `/features/${SMART_SYNC_CONTENT.slug}`,
});

export default function SmartSyncPage() {
  return <FeaturePage content={SMART_SYNC_CONTENT} />;
}
