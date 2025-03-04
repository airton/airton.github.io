import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle
} from "@/components/ui/card";
import { dateFormat } from "@/helpers/dateFormat";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy data for blog posts
const featuredPost = {
  id: 1,
  slug: "modificando-a-consulta-usando-pre-get-posts",
  title: "10 dicas para atingir tempo de inatividade zero",
  excerpt:
    "Aprenda as melhores práticas para manter 100% de uptime em seus aplicativos. Descubra as principais estratégias, ferramentas e técnicas usadas por líderes do setor para garantir que seus serviços estejam sempre disponíveis, minimizando interrupções e maximizando a satisfação do cliente.",
  date: "2024-03-15",
  imageUrl: "https://picsum.photos/id/180/600/380?grayscale",
};

export function FeaturedBlogPost() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Blog Posts
        </h2>

        <Card className="lg:col-span-2 max-w-screen-md m-auto border-foreground">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <CardTitle className="text-2xl font-bold">
                {featuredPost.title}
              </CardTitle>
              <p className="text-muted-foreground">{featuredPost.excerpt}</p>
              <CardFooter className="px-0">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-muted-foreground">
                    {dateFormat(featuredPost.date as string)}
                  </span>
                  <Link href={`/blog/${featuredPost.slug}`} passHref>
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

        {/* View All Posts Button */}
        <div className="mt-10 text-center">
          <Link href="/blog" passHref>
            <Button variant="outline" size="lg">
              Veja todos os posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
