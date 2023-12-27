import { FC, ReactElement, ReactNode, useEffect, useState } from "react";

import "./CodeSnippet.css";
import { GoAButton } from "@abgov/react-components";
import { renderToString } from "react-dom/server";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/github.css";

type Language = "typescript" | "javascript" | "tsx" | "jsx" | "html" | string;

interface Props {
  lang: Language;
  allowCopy?: boolean;
  children?: ReactNode;
  code?: string;

  // not rendered used for filtering in Sandbox
  tags?: string[] | string;
}

export const CodeSnippet: FC<Props> = ({ lang, allowCopy, code, children }) => {
  const [output, setOutput] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);

  const cleanTabs = (code = "", tabSize: number): string => {
    const lines = code.trim().split("\n");
    const indents = lines.map(line => (line.length - line.trimStart().length) / tabSize);

    if (lines.length === 1) {
      return code.trim();
    }

    // first and last have no additional spacing
    if (indents[0] === 0 && indents[indents.length - 1] === 0) {
      return code;      
    }

    // use the last line as the amount of indent correction needed
    const indentCorr = indents[indents.length - 1];

    // join the lines with the indent correction
    return lines
      .map((line, index) => {
        return padLeft(line.trim(), (indents[index] - indentCorr) * tabSize)
      })
      .join("\n")
      .trim();
  };

  function padLeft(str: string, padding: number): string {
    padding = padding < 0 ? 0 : padding;
    const spaces = new Array(padding + 1).join(" ");
    return spaces + str;
  }

  function copyCode() {
    navigator.clipboard.writeText(output);

    setIsCopied(true);
    // Reset the "copied" message after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  useEffect(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("html", html);
  }, []);

  useEffect(() => {
    if (!code) return;
    setOutput(render());
    setTimeout(hljs.highlightAll, 1);
  }, [code, children]);

  function render(): string {
    if (code) {
      return cleanTabs(code, 2);
    }
    if (typeof children !== "string") {
      return renderToString(children as ReactElement);
    }
    return children;
  }

  return (
    <div className="goa-code-snippet">
      <pre>
        <code className={`highlight-${lang}`}>{output}</code>
      </pre>
      {allowCopy && (
        <div className="goa-code-snippet-actions">
          <GoAButton type="tertiary" size="compact" leadingIcon="copy" onClick={copyCode}>
            Copy code
          </GoAButton>
          <span
            className="copy-feedback"
            style={isCopied ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Copied!
          </span>
        </div>
      )}
    </div>
  );
};
