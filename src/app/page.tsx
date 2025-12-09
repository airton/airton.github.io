import { FeaturedBlogPost } from "@/components/FeaturedBlogPost";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionWordPressPlugins } from "@/components/SectionWordPressPlugins";
import { ZeroDowntimeCTA } from "@/components/ZeroDowntime";

export default function Home() {
  return (
    <>
      <SectionAbout />
      <ZeroDowntimeCTA />
      <FeaturedBlogPost />
      <SectionProjects />
      <SectionWordPressPlugins />
    </>
  );
}
