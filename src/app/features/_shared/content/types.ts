// Per-feature content. The page structure (hero card → practice-mgmt
// callout → why doctors grid → specialty card → testimonials → final
// CTA → footer) is identical across all five Features subpages — only
// these strings change per route.

export type FeatureCard = {
  /** Title rendered in the eggplant plaque header of each "Why Doctors" card. */
  title: string;
  /**
   * Optional 2-line breakdown for the title (the reference splits e.g.
   * "Save 3+ / Hours Daily"). When supplied, the renderer puts a <br>
   * between the two lines.
   */
  titleLines?: [string, string];
  /** Body paragraph rendered below the plaque. */
  body: string;
};

export type FeatureContent = {
  /** Routing slug under /features/. */
  slug: string;
  /** Human label used in the navbar dropdown. */
  navLabel: string;
  /** <title> + <meta description> for the route. */
  metaTitle: string;
  metaDescription: string;

  hero: {
    /**
     * Glass eyebrow chip rendered above the headline. Defaults to
     * "Flagship Feature" when omitted (used by Feature pages).
     * Solutions / About pages override e.g. to "For Clinics" or "About Us".
     */
    eyebrowLabel?: string;
    /**
     * The headline as rendered in the Figma frame — two lines with a
     * <br> between them.
     */
    headlineLines: [string, string];
    /** Subhead paragraph below the headline. */
    subhead: string;
    /**
     * Optional override for the big product illustration on the right
     * of the hero card. Falls back to the Voice Rx Rx-Pad image.
     */
    mainImage?: { src: string; alt: string };
    /**
     * Optional override for the small floating overlay card. Pass
     * `null` to hide the overlay (single-illustration heros). Omit to
     * keep the default Voice Rx "Hi Doctor" popup.
     */
    overlayImage?: { src: string; alt: string } | null;
  };

  whyDoctors: {
    /** Section heading above the 2×3 card grid. */
    heading: string;
    /** Exactly 6 cards (rendered as 2 rows × 3 columns on desktop). */
    cards: [
      FeatureCard,
      FeatureCard,
      FeatureCard,
      FeatureCard,
      FeatureCard,
      FeatureCard,
    ];
  };
};
