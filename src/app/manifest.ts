import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

// Web App Manifest, surfaced at /manifest.webmanifest. Gives crawlers
// + mobile browsers the canonical app name, theme colours, and icons
// so "Add to Home Screen" + lighthouse PWA checks both pass.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME}, ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8FF",
    theme_color: "#4B4AD5",
    icons: [
      {
        src: "/tatvapractice-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
