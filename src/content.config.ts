import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    /*
      Posts are Portuguese unless they say otherwise. A few target English
      search demand no Portuguese post can reach, and those have to carry the
      right tag — see the `lang` prop on Layout.astro for why it matters.
    */
    lang: z.string().default("pt-BR"),
  }),
});

export const collections = { blog };
