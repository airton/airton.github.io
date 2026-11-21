// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

import { defineConfig } from "astro/config";
import { ADSENSE_CLIENT, IN_ARTICLE_SLOT } from "./src/data/ads.ts";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

/**
 * Wraps every article table in a horizontally scrollable, focusable region.
 * Without this a wide table is simply clipped on mobile with no way to reach
 * the rest of it. `tabindex="0"` makes the scroll container keyboard-reachable
 * (WCAG 2.1.1); the wrapper keeps the `<table>` semantics intact, which setting
 * `display: block` on the table itself would not.
 */
function rehypeScrollableTables() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type !== "element" || child.tagName !== "table") return child;
        return {
          type: "element",
          tagName: "div",
          properties: {
            className: ["table-scroll"],
            tabindex: "0",
            role: "region",
            "aria-label": "Tabela — role horizontalmente para ver tudo",
          },
          children: [child],
        };
      });
    };
    walk(tree);
  };
}

/*
  One in-article ad in the middle of each blog post. It goes right before the
  <h2> closest to the halfway point of the post's top-level blocks, so it never
  splits a heading from its own text. Posts without at least two <h2>s fall
  back to the middle paragraph; very short posts (under 6 blocks) get none.
*/
function rehypeMidPostAd() {
  return (tree) => {
    if (!IN_ARTICLE_SLOT) return;
    const blocks = tree.children.filter((n) => n.type === "element");
    if (blocks.length < 6) return;
    const mid = blocks.length / 2;
    const h2s = blocks.filter((n) => n.tagName === "h2");
    let anchor;
    if (h2s.length >= 2) {
      // Never before the first h2: that would put the ad above most of the post.
      anchor = h2s.slice(1).reduce((best, n) =>
        Math.abs(blocks.indexOf(n) - mid) < Math.abs(blocks.indexOf(best) - mid) ? n : best,
      );
    } else {
      const ps = blocks.filter((n) => n.tagName === "p");
      if (ps.length < 4) return;
      const after = ps[Math.floor(ps.length / 2)];
      anchor = blocks[blocks.indexOf(after) + 1];
      if (!anchor) return;
    }
    tree.children.splice(tree.children.indexOf(anchor), 0, {
      type: "element",
      tagName: "aside",
      properties: { className: ["ad-slot"], ariaLabel: "Publicidade" },
      children: [
        {
          type: "element",
          tagName: "span",
          properties: { className: ["ad-slot-label"] },
          children: [{ type: "text", value: "Publicidade" }],
        },
        {
          type: "element",
          tagName: "ins",
          properties: {
            className: ["adsbygoogle"],
            style: "display:block; text-align:center;",
            dataAdLayout: "in-article",
            dataAdFormat: "fluid",
            dataAdClient: ADSENSE_CLIENT,
            dataAdSlot: IN_ARTICLE_SLOT,
          },
          children: [],
        },
      ],
    });
  };
}

// https://astro.build/config
/*
  Tag archives holding fewer than TAG_INDEX_MIN_POSTS posts are served
  `noindex, follow` (see pages/blog/tag/[tag].astro). Listing a noindexed URL in
  the sitemap is a contradictory signal — the sitemap says "index this", the
  page says "don't" — so the same threshold is applied here.

  Frontmatter is read directly rather than through the content collection: the
  sitemap integration is configured before Astro's content layer is available,
  and a tag count is a cheap enough thing to derive from the files.
*/
const TAG_INDEX_MIN_POSTS = 3;

function thinTagSlugs() {
  const dir = new URL("./src/content/blog/", import.meta.url);
  const counts = new Map();
  for (const file of readdirSync(dir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const body = readFileSync(new URL(file, dir), "utf8");
    const fm = body.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) continue;
    const tagLine = fm[1].match(/^tags:\s*\[(.*?)\]/m);
    if (!tagLine) continue;
    for (const raw of tagLine[1].split(",")) {
      const tag = raw.trim().replace(/^["']|["']$/g, "");
      if (!tag) continue;
      const slug = tag
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }
  return new Set(
    [...counts.entries()]
      .filter(([, n]) => n < TAG_INDEX_MIN_POSTS)
      .map(([slug]) => `/blog/tag/${slug}/`),
  );
}

const THIN_TAG_URLS = thinTagSlugs();

export default defineConfig({
  site: "https://airtonvancin.com",
  integrations: [
    mdx(),
    sitemap({
      /*
        `lastmod` gives Google a recrawl signal it otherwise has to guess at.
        Without it an updated post looks identical to an untouched one.
      */
      lastmod: new Date(),
      filter: (page) => !THIN_TAG_URLS.has(new URL(page).pathname),
    }),
    react(),
  ],

  /*
    `front-end` and `frontend` were two archives for one concept. The tags are
    merged now, so the old URL 301s rather than 404ing — it is in the current
    sitemap and may be indexed.
  */
  redirects: {
    "/blog/tag/front-end": "/blog/tag/frontend/",
    // The old bio-link hub, replaced by the minimalist home. Kept as a redirect
    // because the URL lives in social profile bios.
    "/links": "/",
    // Terms were folded into the privacy policy.
    "/termos": "/politicas/",
  },

  markdown: {
    rehypePlugins: [rehypeScrollableTables, rehypeMidPostAd],
  },

  image: {
    layout: "constrained",
    responsiveStyles: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
