import type { ComponentType } from "react";

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

// Function to get all articles with their frontmatter
export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  const modules = import.meta.glob("../posts/*.mdx");
  const articles: ArticleWithSlug[] = [];

  for (const path in modules) {
    const slug = path.replace("../posts/", "").replace(".mdx", "");
    const module = (await modules[path]()) as {
      article: Article;
    };
    articles.push({ slug, ...module.article });
  }

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

// Function to import a single article's MDX component and its frontmatter
export async function importArticle(
  slug: string
): Promise<{ Component: ComponentType; article: ArticleWithSlug }> {
  const module = (await import(/* @vite-ignore */ `../posts/${slug}.mdx`)) as {
    default: ComponentType;
    article: Article;
  };

  return {
    Component: module.default,
    article: { slug, ...module.article },
  };
}