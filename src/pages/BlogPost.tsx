import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { importArticle, ArticleWithSlug } from "../helpers/articles";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { ArticleLayout } from "../components/ArticleLayout";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<{
    Component: React.ComponentType;
    frontmatter: ArticleWithSlug;
  } | null>(null);
  const mdxComponents = useMDXComponents();

  useEffect(() => {
    if (slug) {
      importArticle(slug).then(setArticle);
    }
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>; // Or a more elaborate loading state
  }

  return (
    <ArticleLayout article={article.frontmatter}>
      <MDXProvider components={mdxComponents}>
        <article.Component />
      </MDXProvider>
    </ArticleLayout>
  );
}