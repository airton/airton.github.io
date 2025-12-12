import React from "react";
import type { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language?: string;
  children: ReactNode;
}

export function CodeBlock({
  language = "javascript",
  children,
}: CodeBlockProps) {
  const codeString = React.Children.toArray(children).join("");

  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
}
