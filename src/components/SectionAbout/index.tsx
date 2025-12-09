import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWordpress, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export function SectionAbout() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I'm Airton
            </h1>
            <p className="mx-auto max-w-[700px] text-stone-500 dark:text-stone-400 md:text-xl">
              Just a software developer with over 14 years of experience
              juggling various technologies.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="https://github.com/airton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <IconBrandGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/airtonvancin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <IconBrandLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://profiles.wordpress.org/airtonvancin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <IconBrandWordpress className="h-4 w-4" />
                <span className="sr-only">WordPress</span>
              </Button>
            </Link>
            <Link href="mailto:airtonvancin@gmail.com">
              <Button variant="outline" size="icon">
                <IconMail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
