import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bold text-2xl m-4">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="font-bold text-xl m-4">{children}</h4>,
    p: ({ children }) => (
      <p className="text-slate-900 font-medium text-md mb-4 lg:mb-6 break-words">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="text-slate-900 font-medium text-md !mb-4 !lg:mb-6 pb-4 block">
        {children}
      </ul>
    ),
    pre: ({ children }) => <pre className="w-full">{children}</pre>,
    code: ({ children }) => <code className="bg-slate-400">{children}</code>,
    table: ({ children }) => (
      <table className="table table-bordered table-striped table-hover w-full">
        {children}
      </table>
    ),
    img: (
      props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >
    ) => {
      return (
        <img
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...props}
          alt={props.alt || ""}
        />
      );
    },
    ...components,
  };
}
