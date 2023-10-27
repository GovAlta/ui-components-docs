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
    const lines = code.split("\n");

    if (lines.length === 1) {
      return code.trim();
    }

    const space0 = lines[0].length - lines[0].trimStart().length;
    const space1 = lines[1].length - lines[1].trimStart().length;
    const space = space0 < tabSize ? space1 : space0;

    return lines
      .map((line) => line.substring(space))
      .join("\n")
      .trim();
  };

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
