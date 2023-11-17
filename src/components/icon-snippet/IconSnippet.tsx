import {FC, useState} from "react";
import {GoABlock, GoAIcon, GoAIconType} from "@abgov/react-components";
import "./IconSnippet.css";

interface Props {
  type: GoAIconType;
}

export const IconSnippet: FC<Props> = ({type}) => {
  const [copied, setCopied] = useState(false);

  function copyIcon() {
    navigator.clipboard.writeText(type).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  }

  return (
    <>
      <div className="icon-snippet" style={{cursor: "pointer"}} role="button" onClick={copyIcon}>
        <GoABlock gap="m">
          <GoAIcon type={type} />
          <span>{type}</span>
        </GoABlock>
        <div
          className="copy-feedback"
          style={copied ? {visibility: "visible"} : {visibility: "hidden"}}>
          <span>{type}</span> copied to clipboard
        </div>
      </div>
    </>
  );
};
