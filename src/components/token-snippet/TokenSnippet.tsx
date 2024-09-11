import { FC, useContext, useState } from "react";

import "./TokenSnippet.css";
import { GoabIcon } from "@abgov/react-components";
import { DesignTokensLanguageContext } from "@components/sandbox";

interface Props {
  code: string;
}

export const TokenSnippet: FC<Props> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const lang = useContext(DesignTokensLanguageContext);

  function copyCode() {
    let codeToCopy = lang === "css" ? `--${code}` : `$${code}`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  }

  return (
    <div className="goa-token-snippet">
      <pre className="goa-token-snippet">
        <a onClick={copyCode}>
          <u>
            {lang === "css" ? "--" : "$"}
            {code}
          </u>
          <span style={{ marginTop: "5px", marginLeft: "10px" }}>
            <GoabIcon type="copy" />
          </span>
        </a>
      </pre>
      <span
        className="copy-feedback"
        style={isCopied ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        Copied
      </span>
    </div>
  );
};
