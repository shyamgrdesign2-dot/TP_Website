import type { Metadata } from "next";
import FeaturePage from "../../features/_shared/_sections/FeaturePage";
import { HOSPITALS_CONTENT } from "../../features/_shared/content/hospitals";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: HOSPITALS_CONTENT.metaTitle,
  description: HOSPITALS_CONTENT.metaDescription,
  path: `/solutions/${HOSPITALS_CONTENT.slug}`,
});

export default function HospitalsPage() {
  return <FeaturePage content={HOSPITALS_CONTENT} section="solutions" />;
}
