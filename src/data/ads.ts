/*
  AdSense, in one place. Two placements and nothing else:
  - a banner fixed to the bottom of the screen (components/StickyAd.astro),
    on every page that does not opt out with `noAds`;
  - one in-article unit in the middle of each blog post (rehypeMidPostAd in
    astro.config.mjs).
  Auto Ads must stay OFF in the AdSense panel, or it will inject its own
  placements (it used to put one inside the site header).

  STICKY_AD_SLOT is the display unit "Anúncio 1". It must be a *display* ad unit. While it is empty, the AdSense
  script is not loaded anywhere and the site shows no ads at all.
*/
export const ADSENSE_CLIENT = "ca-pub-3553535106347103";
export const STICKY_AD_SLOT = "5257772985";

/* "blog-in-article" — an In-article (fluid) unit. Empty = no mid-post ad. */
export const IN_ARTICLE_SLOT = "8719098193";
