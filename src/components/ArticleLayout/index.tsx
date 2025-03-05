"use client";
import { ArticleWithSlug } from "@/helpers/articles";
import { dateFormat } from "@/helpers/dateFormat";
import { Router } from "next/router";
import { useEffect } from "react";
import { Prose } from "../Prose";
import { ZeroDowntimeCTA } from "../ZeroDowntime";

export const ArticleLayout = ({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//airtonvancin.disqus.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [Router]);

  return (
    <>
      <div className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-100 to-slate-200 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 space-y-4 text-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-900">
                  {article.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-900 md:text-xl dark:text-slate-900">
                  {article.description}
                </p>
                <p className="mx-auto max-w-[700px] text-slate-900 md:text-sm dark:text-slate-900">
                  {dateFormat(article.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-6 py-4 md:py-6 lg:py-8 flex justify-center">
        <Prose data-mdx-content>{children}</Prose>
      </div>
      <ZeroDowntimeCTA />

      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="http://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>

      <div
        id="disqus_thread"
        className="container py-12 px-4 md:px-6 max-w-4xl"
      ></div>
    </>
  );
};
