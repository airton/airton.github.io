"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

export default async function Page() {
  const params = useParams();
  const DynamicComponentMdx = dynamic(
    () =>
      import(`../../posts/${params.slug}.mdx`).then((mod) => {
        console.log(mod);
        return mod.default;
      }),
    {
      loading: () => <p>Loading...</p>,
      // ssr: false
    }
  );

  return (
    <article className="w-full bg-slate-50 dark:bg-slate-800 flex flex-wrap justify-center">
      <DynamicComponentMdx />
    </article>
  );
}
