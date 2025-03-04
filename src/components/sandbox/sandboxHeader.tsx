import { GoAIconButton, GoATooltip } from "@abgov/react-components";
import { useState, useEffect, useRef } from "react";
import "./sandboxHeader.css";

export interface Props {
  exampleTitle: string;
  figmaExample?: string;
}

export function SandboxHeader(props: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const [anchorId, setAnchorId] = useState("");

  // Generate a unique anchor ID based on the heading text
  useEffect(() => {
    if (headingRef.current) {
      const generatedId = props.exampleTitle
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/[^a-z0-9-]/g, ""); // Remove special characters
      setAnchorId(generatedId);
    }
  }, [props.exampleTitle]);

  function copyAnchorLink() {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;

    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset tooltip text after 2s
    });
  }

  return (
    <div className="sandbox-header">
        {/* Heading with an ID for linking */}
        <div className="header-container">
          {/* Heading + Copy Button (Grouped Together) */}
          <div className="heading-group">
          <h3 id={anchorId} ref={headingRef}>
          {props.exampleTitle}
        </h3>

        {/* Copy link icon (consistent with CodeSnippet.tsx) */}
        <GoATooltip content={isCopied ? "Copied!" : "Copy link"}>
          <GoAIconButton icon="copy" onClick={copyAnchorLink} />
        </GoATooltip>
          </div>


          {/* Figma link tooltip */}
          {props.figmaExample && (
            <GoATooltip content="View in Figma">
          <a href={props.figmaExample} className="icon-link no-external-icon" target="_blank" rel="noopener noreferrer">
            {/* Default SVG (Shown by default) */}
            <svg className="icon-default" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C5 5.92826 5.36875 6.8185 6.02513 7.47487C6.6815 8.13125 7.57174 8.5 8.5 8.5H12V1.5H8.5C7.57174 1.5 6.6815 1.86875 6.02513 2.52513C5.36875 3.1815 5 4.07174 5 5Z" stroke="black" stroke-width="1.28947"/>
              <path d="M12.0001 1.5V8.5H15.5001C16.4284 8.5 17.3186 8.13125 17.975 7.47487C18.6314 6.8185 19.0001 5.92826 19.0001 5C19.0001 4.07174 18.6314 3.1815 17.975 2.52513C17.3186 1.86875 16.4284 1.5 15.5001 1.5L12.0001 1.5Z" stroke="black" stroke-width="1.28947"/>
              <path d="M5 12C5 12.9283 5.36875 13.8185 6.02513 14.4749C6.6815 15.1313 7.57174 15.5 8.5 15.5H12V8.5H8.5C7.57174 8.5 6.6815 8.86875 6.02513 9.52513C5.36875 10.1815 5 11.0717 5 12Z" stroke="black" stroke-width="1.28947"/>
              <path d="M12.0001 12C12.0001 11.0717 12.3689 10.1815 13.0252 9.52513C13.6816 8.86875 14.5719 8.5 15.5001 8.5C16.4284 8.5 17.3186 8.86875 17.975 9.52513C18.6314 10.1815 19.0001 11.0717 19.0001 12C19.0001 12.9283 18.6314 13.8185 17.975 14.4749C17.3186 15.1313 16.4284 15.5 15.5001 15.5C14.5719 15.5 13.6816 15.1313 13.0252 14.4749C12.3689 13.8185 12.0001 12.9283 12.0001 12V12Z" stroke="black" stroke-width="1.28947"/>
              <path d="M5 19C5 18.0717 5.36875 17.1815 6.02513 16.5251C6.6815 15.8687 7.57174 15.5 8.5 15.5H12V19C12 19.9283 11.6313 20.8185 10.9749 21.4749C10.3185 22.1313 9.42826 22.5 8.5 22.5C7.57174 22.5 6.6815 22.1313 6.02513 21.4749C5.36875 20.8185 5 19.9283 5 19Z" stroke="black" stroke-width="1.28947"/>
            </svg>
            {/* Hover SVG */}
            <svg className="icon-hover" width="24" height="24" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z" fill="#24CB71"/>
              <path d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z" fill="#FF7237"/>
              <path d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z" fill="#00B6FF"/>
              <path d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z" fill="#FF3737"/>
              <path d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z" fill="#874FFF"/>
            </svg>
          </a>
        </GoATooltip>
            )}
        </div>
    </div>
  );
}