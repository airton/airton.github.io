import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconBrandWordpress } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";

const dataPlugins = [
  {
    id: 1,
    name: "Video Destacado",
    desc: "A plugin to set a featured video for posts.",
    image: "",
    link: "https://wordpress.org/plugins/video-destacado/",
  },
  {
    id: 2,
    name: "Manage User Roles",
    desc: "A plugin to manage user roles and capabilities.",
    image: "",
    link: "https://wordpress.org/plugins/manage-user-roles/",
  },
  {
    id: 3,
    name: "Nudge SEO AI",
    desc: "An AI-powered SEO plugin to help you with your content.",
    image: "",
    link: "https://wordpress.org/plugins/nudge-seo-ai/",
  },
  {
    id: 4,
    name: "JumpCloud SSO Connector",
    desc: "A plugin to connect your WordPress site with JumpCloud SSO.",
    image: "",
    link: "http://wordpress.org/plugins/search/jumpcloud-sso-connector/",
  },
];

export function SectionWordPressPlugins() {
  return (
    <section
      id="wp-plugins"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Meus Plugins WordPress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPlugins.map(({ name, desc, link, id }) => (
            <Card key={name} className="bg-white dark:bg-muted/70 border-foreground">
              <CardContent className="p-4 pb-20 h-full !relative">
                <IconBrandWordpress className="w-full h-[100px] text-gray-500" />
                <h3 className="text-xl font-bold mt-4 mb-2">{name}</h3>
                <p className="text-stone-500 dark:text-stone-300">{desc}</p>
                <Button className="mt-4 absolute bottom-4" variant="outline">
                  <Link href={link} target="_blank">Ver plugin</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
