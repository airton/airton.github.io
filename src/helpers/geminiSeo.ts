/**
 * SEO bits shared by the two language routes of the Gemini Flow downloader, so
 * the Portuguese and English pages cannot drift apart.
 */
const PT_PATH = "/gemini-flow-downloader/";
const EN_PATH = "/en/gemini-flow-downloader/";
const DOWNLOAD_PATH = "/downloads/gemini-flow-downloader.zip";

export const GEMINI_ALTERNATES = [
  { hreflang: "pt-BR", path: PT_PATH },
  { hreflang: "en", path: EN_PATH },
  { hreflang: "x-default", path: PT_PATH },
];

interface Args {
  lang: "en" | "pt";
  description: string;
  image: string;
  site: URL;
}

export function geminiJsonLd({ lang, description, image, site }: Args) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gemini Flow Bulk Image Downloader",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    description,
    image,
    url: new URL(lang === "pt" ? PT_PATH : EN_PATH, site).toString(),
    downloadUrl: new URL(DOWNLOAD_PATH, site).toString(),
    inLanguage: lang === "pt" ? "pt-BR" : "en",
    /* Genuinely free, with no paid tier — unlike the freemium plugins. */
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    author: { "@type": "Person", name: "Airton Vancin Junior" },
  };
}
