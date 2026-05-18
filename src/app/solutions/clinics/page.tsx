import type { Metadata } from "next";
import FeaturePage from "../../features/_shared/_sections/FeaturePage";
import { CLINICS_CONTENT } from "../../features/_shared/content/clinics";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: CLINICS_CONTENT.metaTitle,
  description: CLINICS_CONTENT.metaDescription,
  path: `/solutions/${CLINICS_CONTENT.slug}`,
});

export default function ClinicsPage() {
  return <FeaturePage content={CLINICS_CONTENT} section="solutions" />;
}
