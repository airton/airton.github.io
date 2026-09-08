import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { TAGS } from "@/data/tags";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /*
        `title` is the editorial headline and owns the <h1>. `seoTitle` is the
        optional short variant for the <title> tag, for headlines that read well
        on the page but blow past the ~60 characters Google renders before
        truncating. Set it only when the full title doesn't fit.
      */
      seoTitle: z.string().optional(),
      // Transform string to Date object
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /*
        `image()` — not `z.string()`. A bare string path is a public/ URL that
        Astro cannot transform: it passes the original file straight through,
        silently ignores `format`/`quality` on <Image>, and emits a srcset whose
        width descriptors all resolve to the same full-size file. Declaring the
        field as `image()` resolves the frontmatter path to an imported asset,
        which is what puts covers through the optimizer. Paths are therefore
        relative to the .mdx file, not site-absolute.
      */
      image: image().optional(),
      /*
        Enum, not string: a free-text tag mints a permanent indexable URL, so a
        typo used to ship a thin archive page rather than fail. See data/tags.ts.
      */
      tags: z.array(z.enum(TAGS)).optional(),
      /*
        Posts are Portuguese unless they say otherwise. A few target English
        search demand no Portuguese post can reach, and those have to carry the
        right tag — see the `lang` prop on Layout.astro for why it matters.
      */
      lang: z.string().default("pt-BR"),
    }),
});

export const collections = { blog };
