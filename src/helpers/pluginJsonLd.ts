import type { PluginData } from "@/data/plugins";

interface Args {
  plugin: PluginData;
  lang: "en" | "pt";
  description: string;
  url: string;
}

/**
 * Structured data for a plugin page, shared by the Portuguese and English
 * routes so the two cannot drift apart.
 *
 * Two graph nodes: SoftwareApplication, which is what makes the page eligible
 * for the software rich result rather than reading as a portfolio entry, and
 * FAQPage when the plugin has questions authored. The FAQ copy existed for
 * every plugin but never rendered — the section was guarded on a field that
 * does not exist on PluginData — so this is the first time those 17 questions
 * reach a page at all, let alone the search result.
 */
export function pluginJsonLd({ plugin, lang, description, url }: Args) {
  const content = plugin[lang];
  const image = `https://ps.w.org/${plugin.slug}/assets/banner-772x250.png`;

  const software = {
    "@type": "SoftwareApplication",
    name: plugin.name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "WordPress",
    image,
    sameAs: plugin.link,
    inLanguage: lang === "pt" ? "pt-BR" : "en",
    author: {
      "@type": "Person",
      name: "Airton Vancin",
      url: "https://airtonvancin.com/sobre/",
    },
    /*
      No aggregateRating: inventing one is a structured-data violation, and the
      real ratings live on wordpress.org, which `sameAs` points at.

      The zero-price Offer is emitted only for plugins with no paid tier. A
      freemium plugin is free to install but has a Stripe subscription behind
      it, so asserting price "0" for the product as a whole would be false —
      and a wrong price is what gets rich results pulled. Absent an Offer,
      Google simply skips the price row.
    */
    ...(content.premium
      ? {}
      : {
          isAccessibleForFree: true,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }),
  };

  const faq = content.faq ?? [];
  if (faq.length === 0) {
    return { "@context": "https://schema.org", ...software };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      software,
      {
        "@type": "FAQPage",
        /*
          Bound to a fragment of this page rather than the page itself: the
          page's primary entity is the software, and two nodes both claiming
          the bare URL as their @id is the ambiguity that makes Google pick
          one and discard the other.
        */
        "@id": `${url}#faq`,
        inLanguage: lang === "pt" ? "pt-BR" : "en",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
