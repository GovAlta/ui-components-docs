import { FC, useContext, useState } from "react";

import "./TokenSnippet.css";
import { GoabIcon } from "@abgov/react-components";
import { DesignTokensLanguageContext } from "@contexts/DesignTokensLanguageContext";

interface Props {
  code: string;
  className?: string;
}

export const TokenSnippet: FC<Props> = ({ code, className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const lang = useContext(DesignTokensLanguageContext);

  function copyCode() {
    let codeToCopy = lang === "css" ? `--${code}` : `$${code}`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }

  return (
    <div className={`goa-token-snippet ${className || ""}`}>
        <a onClick={copyCode}>
          <u>
            {lang === "css" ? "--" : "$"}
            {code}
          </u>
            <GoabIcon ml="xs" mt="3xs" type="copy" />
        </a>
      <span
        className="copy-feedback"
        style={isCopied ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        Copied
      </span>
    </div>
  );
};
