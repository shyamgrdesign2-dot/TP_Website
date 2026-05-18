import type { Metadata } from "next";
import FeaturePage from "../_shared/_sections/FeaturePage";
import { DOCTOR_AGENT_CONTENT } from "../_shared/content/doctor-agent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: DOCTOR_AGENT_CONTENT.metaTitle,
  description: DOCTOR_AGENT_CONTENT.metaDescription,
  path: `/features/${DOCTOR_AGENT_CONTENT.slug}`,
});

export default function DoctorAgentPage() {
  return <FeaturePage content={DOCTOR_AGENT_CONTENT} />;
}
