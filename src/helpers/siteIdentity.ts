/*
  The site's identity graph — one Person and one WebSite, defined once here and
  referenced everywhere else by `@id`.

  Why an `@id` reference rather than repeating the literal: every page that
  described the author was writing its own copy of the same Person, so the
  engines saw a dozen unrelated people who happened to share a name rather than
  one entity with a dozen mentions. A single node with a stable `@id`, pointed
  at from each page, is what collapses those into one.

  The `sameAs` list is the part that actually does the work. "Airton Vancin" is
  not a unique string — a search for it surfaces several other engineers with
  competing profiles — so the name alone cannot resolve to a person. The
  profile URLs can, because each one is already an established identity that
  links back here.
*/

/** Fragment ids are stable across deploys; external nodes reference these. */
export const PERSON_ID = "#person";
export const WEBSITE_ID = "#website";

/**
 * Verified profile URLs. Every entry must be a live page that identifies the
 * same person — an unreachable or wrong `sameAs` weakens the claim instead of
 * supporting it, so nothing speculative belongs in this list.
 */
const PROFILES = [
  "https://github.com/airton",
  "https://linkedin.com/in/airtonvancin",
  "https://profiles.wordpress.org/airtonvancin/",
];

export function personNode(site: URL) {
  return {
    "@type": "Person",
    "@id": new URL(PERSON_ID, site).toString(),
    name: "Airton Vancin Junior",
    alternateName: "Airton Vancin",
    url: new URL("/sobre/", site).toString(),
    jobTitle: "Software Engineer",
    description:
      "Software engineer with 15+ years of experience across WordPress and modern JavaScript, publishing from practice rather than theory.",
    knowsAbout: [
      "WordPress",
      "Astro",
      "React",
      "TypeScript",
      "Node.js",
      "Software architecture",
      "Web performance",
    ],
    sameAs: PROFILES,
  };
}

export function webSiteNode(site: URL) {
  return {
    "@type": "WebSite",
    "@id": new URL(WEBSITE_ID, site).toString(),
    url: site.toString(),
    name: "Airton Vancin",
    inLanguage: "pt-BR",
    // The site is one person's, so publisher and author are the same entity.
    publisher: { "@id": new URL(PERSON_ID, site).toString() },
  };
}

/**
 * Emitted once per page from Layout. Carrying both nodes on every page is
 * deliberate: a crawler that only ever fetches one article still gets the full
 * identity, rather than having to have seen the home page first.
 */
export function siteIdentityJsonLd(site: URL) {
  return {
    "@context": "https://schema.org",
    "@graph": [webSiteNode(site), personNode(site)],
  };
}

export interface Crumb {
  name: string;
  /** Site-absolute path, with the trailing slash the site actually serves. */
  path: string;
}

/**
 * BreadcrumbList for a page whose trail already exists visually.
 *
 * The last crumb keeps its `item` rather than omitting it — Google accepts
 * both, and keeping it means the node stays valid if the page is ever
 * referenced from elsewhere in the graph.
 */
export function breadcrumbJsonLd(crumbs: Crumb[], site: URL, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, site).toString(),
    })),
  };
}
