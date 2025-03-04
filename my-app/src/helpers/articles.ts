import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
export async function importArticle(
  articleFilename: string
): Promise<Record<string, string | number>> {
  let { article } = (await import(`../app/posts/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };
  return {
    slug: articleFilename.replace(/\.mdx$/, ""),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob("*.mdx", {
    cwd: "./src/app/posts",
  });
  let articles = await Promise.all(articleFilenames.map(importArticle));
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
