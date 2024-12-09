import { FC, ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react";

import "./CodeSnippet.css";
import { GoabButton, GoabIconButton, GoabTooltip } from "@abgov/react-components";
import { renderToString } from "react-dom/server";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

import "highlight.js/styles/github.css";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

type Language = "typescript" | "javascript" | "tsx" | "jsx" | "html" | "css" | string;

interface Props {
  lang: Language;
  allowCopy?: boolean;
  children?: ReactNode;
  code?: string;

  // not rendered used for filtering in Sandbox
  tags?: string[] | string;
}

export const CodeSnippet: FC<Props> = ({ lang, allowCopy, code, children, tags }) => {
  const {language} = useContext(LanguageVersionContext);
  const [output, setOutput] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const codeSnippetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!codeSnippetRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const showMore = codeSnippetRef.current ? codeSnippetRef.current?.scrollHeight > 350 : false; // 400px = 25rem and some padding
      setShowMore(showMore);
    });
    resizeObserver.observe(codeSnippetRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

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
        return padLeft(line.trim(), (indents[index] - indentCorr) * tabSize);
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
    hljs.registerLanguage("css", css);
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
    tags?.includes(language) && (
      <div
        ref={codeSnippetRef}
        className={`goa-code-snippet ${showMore ? "overflow" : ""}`}
        style={isExpanded ? { maxHeight: "none" } : {}}
      >
      <pre>
        <code className={`highlight-${lang}`}>{output}</code>
      </pre>
        {showMore && !isExpanded && <div className={"gradient"}></div>}
        {showMore && (
          <div className={"goa-code-snippet-actions--show-more"}>
            <GoabButton
              type="tertiary"
              size="compact"
              trailingIcon={isExpanded ? "chevron-up" : "chevron-down"}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Show {isExpanded ? "less" : "more"}
            </GoabButton>
          </div>
        )}

        {allowCopy && (
          <div className="goa-code-snippet-actions--copy">
            <GoabTooltip content={isCopied ? `Copied` : `Copy?`} position="left">
              <GoabIconButton icon="copy" onClick={copyCode} />
            </GoabTooltip>
          </div>
        )}
      </div>
    )
  );
};
