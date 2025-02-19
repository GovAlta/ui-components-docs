import { FC, useState } from "react";
import { GoabIcon } from "@abgov/react-components";
import "./IconSnippet.css";
import { GoabIconType } from "@abgov/ui-components-common";

interface Props {
  type: GoabIconType;
}

export const IconSnippet: FC<Props> = ({ type }) => {
  const [copied, setCopied] = useState(false);

  function copyIcon() {
    navigator.clipboard.writeText(type).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  }

  return (
    <>
      <div className="icon-snippet" role="button" onClick={copyIcon}>
        <GoabIcon type={type} />
        <span>{type}</span>
        <div
          className="copy-feedback"
          style={copied ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <span>{type}</span> copied to clipboard
        </div>
      </div>
    </>
  );
};
