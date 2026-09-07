/*
  The controlled tag vocabulary.

  Tags used to be free text, and every one-off spelling minted a permanent
  indexable URL: 31 tag pages for 19 posts, 20 of them holding a single article,
  plus case variants (`wordpress` / `WordPress`) and one genuine duplicate
  (`front-end` alongside `frontend`). Declaring the list here and validating
  frontmatter against it means a typo fails the build instead of shipping a URL.

  Adding a tag is deliberate: add it here first, and only if at least a couple
  of posts will carry it. A tag with one post is an archive page with nothing in
  it, which is why `TAG_INDEX_MIN_POSTS` keeps those out of the index.
*/
export const TAGS = [
  "AngularJS",
  "Architecture",
  "Astro",
  "AWS",
  "Career",
  "Cloud",
  "CSS",
  "Database",
  "DevOps",
  "Frontend",
  "FullStack",
  "GitHubActions",
  "JavaScript",
  "Lando",
  "Lighthouse",
  "Migration",
  "Nextcloud",
  "Pantheon",
  "Performance",
  "Quality",
  "React",
  "Security",
  "Seniority",
  "SSO",
  "Supabase",
  "TailwindCSS",
  "TypeScript",
  "WebDev",
  "WordPress",
  "Zustand",
] as const;

export type Tag = (typeof TAGS)[number];

/**
 * Below this many posts, a tag archive is navigation with a heading — roughly
 * 140 words, most of it the nav — so it is served `noindex, follow` and kept
 * out of the sitemap. It stays crawlable and useful to readers; it just stops
 * competing for crawl budget with the posts that can actually rank.
 */
export const TAG_INDEX_MIN_POSTS = 3;
