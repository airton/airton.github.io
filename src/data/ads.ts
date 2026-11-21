/*
  AdSense, in one place. The site shows exactly one ad: a banner fixed to the
  bottom of the screen (components/StickyAd.astro), on every page that does
  not opt out with `noAds`. Nothing else — no in-article units, and Auto Ads
  must stay OFF in the AdSense panel, or it will inject its own placements
  (it used to put one inside the site header).

  STICKY_AD_SLOT is the display unit "Anúncio 1". It must be a *display* ad unit. While it is empty, the AdSense
  script is not loaded anywhere and the site shows no ads at all.
*/
export const ADSENSE_CLIENT = "ca-pub-3553535106347103";
export const STICKY_AD_SLOT = "5257772985";
