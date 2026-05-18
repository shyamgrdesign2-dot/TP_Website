import type { Metadata } from "next";
import FeaturePage from "../_shared/_sections/FeaturePage";
import { VOICE_RX_CONTENT } from "../_shared/content/voice-rx";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: VOICE_RX_CONTENT.metaTitle,
  description: VOICE_RX_CONTENT.metaDescription,
  path: `/features/${VOICE_RX_CONTENT.slug}`,
});

export default function VoiceRxPage() {
  return <FeaturePage content={VOICE_RX_CONTENT} />;
}
