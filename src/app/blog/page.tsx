import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ZeroDowntimeCTA } from "@/components/ZeroDowntime";
import { getAllArticles } from "@/helpers/articles";
import { dateFormat } from "@/helpers/dateFormat";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedBlogPosts() {
  const articles = await getAllArticles();

  const articlesSlugs = [
    "modificando-a-consulta-usando-pre-get-posts",
    "angularjs-validacao-de-formulario",
    "desenvolvendo-com-angularjs-parte1",
  ];

  function getArticleBySlug(slug: string) {
    console.log(articles)
    return articles.find((article) => article.slug === slug) as Record<
      string,
      string | number
    >;
  }

  function getLastArticles() {
    return articles.filter((article) => {
      return !articlesSlugs.includes(article.slug as string);
    });
  }

  const articlesFeatured: Record<
    string,
    Record<string, string | number | undefined>
  > = {
    one: getArticleBySlug(articlesSlugs[0]),
    two: getArticleBySlug(articlesSlugs[1]),
    three: getArticleBySlug(articlesSlugs[2]),
  };

  const lastArticles = getLastArticles();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/80 flex justify-center flex-wrap gap-6">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Blog
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-foreground">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative aspect-video">
                  <Image
                    src={
                      "https://picsum.photos/id/180/600/380" 
                      // || articlesFeatured.one.image
                    }
                    alt={`${articlesFeatured.one.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {articlesFeatured.one.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {articlesFeatured.one.description}
                </p>
                <CardFooter className="px-0">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm text-muted-foreground">
                      {dateFormat(articlesFeatured.one.date as string)}
                    </span>
                    <Link href={`/blog/${articlesFeatured.one.slug}`} passHref>
                      <Button variant="default">
                        Veja mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </CardContent>
          </Card>

          {/* Other Posts (Right Side) */}
          <div className="space-y-6">
            {[articlesFeatured.two, articlesFeatured.three].map((post) => (
              <Card key={post.id} className="border-foreground">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="relative aspect-video">
                      <Image
                        src={
                          "https://picsum.photos/id/238/200/300" 
                          // || post.image
                        }
                        alt={`${post.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {dateFormat(post.date as string)}
                      </span>
                      <Link href={`/blog/${post.slug}`} passHref>
                        <Button variant="ghost">
                          veja mais
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-6 mt-6">
          {lastArticles.map((post) => (
            <Card key={post.id} className="lg:col-span-2 border-foreground">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-2xl font-bold">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <CardFooter className="px-0">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm text-muted-foreground">
                        {dateFormat(post.date as string)}
                      </span>
                      <Link href={`/blog/${post.slug}`} passHref>
                        <Button variant="ghost">
                          veja mais
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ZeroDowntimeCTA />
    </section>
  );
}
