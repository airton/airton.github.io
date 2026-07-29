// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
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
export default defineConfig({
  site: "https://airtonvancin.com",
  integrations: [mdx(), sitemap(), react()],

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
