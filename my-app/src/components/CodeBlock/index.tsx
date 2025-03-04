import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ language = "javascript", children }) {
  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {children}
    </SyntaxHighlighter>
  );
}
