import type { Metadata } from "next";
import FeaturePage from "../_shared/_sections/FeaturePage";
import { RECEPTIONIST_AGENT_CONTENT } from "../_shared/content/receptionist-agent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: RECEPTIONIST_AGENT_CONTENT.metaTitle,
  description: RECEPTIONIST_AGENT_CONTENT.metaDescription,
  path: `/features/${RECEPTIONIST_AGENT_CONTENT.slug}`,
});

export default function ReceptionistAgentPage() {
  return <FeaturePage content={RECEPTIONIST_AGENT_CONTENT} />;
}
