"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [MdxComponent, setMdxComponent] = useState<React.ComponentType | null>(
    null
  );

  useEffect(() => {
    // Carregue o componente MDX dinamicamente
    const loadMdx = async () => {
      try {
        const DynamicComponentMdx = await dynamic(
          () => import(`../../posts/${params.slug}.mdx`)
        );
        setMdxComponent(() => DynamicComponentMdx);
      } catch (error) {
        console.error("Erro ao carregar o MDX:", error);
      }
    };

    loadMdx();
  }, [params.slug]);

  if (!MdxComponent) {
    return <p>Carregando...</p>;
  }

  return (
    <article className="w-full bg-slate-50 dark:bg-slate-800 flex flex-wrap justify-center">
      <MdxComponent />
    </article>
  );
}