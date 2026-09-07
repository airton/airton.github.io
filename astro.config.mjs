// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

import { defineConfig } from "astro/config";

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
  },

  markdown: {
    rehypePlugins: [rehypeScrollableTables],
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
