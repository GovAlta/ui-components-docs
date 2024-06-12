import { GoAIcon } from "@abgov/react-components";
import "./DoDont.css";
import { ReactNode } from "react";

type DoDont = "do" | "dont" | "generic";
interface Props {
  type: DoDont;
  children?: ReactNode;
  description?: string;
  figmaLink?: string;
}

export function DoDont({ type, children, description, figmaLink }: Props) {
  return (
    <div>
      <div className="do-container">
        {figmaLink ? (
          <a href={figmaLink} target="_blank" rel="noopener noreferrer">
            <div className="figma-preview">
              <img
                src={`https://www.figma.com/embed?embed_host=share&url=${figmaLink}`}
                alt="Figma Preview"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </a>
        ) : (
          children
        )}
      </div>
      {(type === "do" || type === "dont") && (
        <div className="do-content" data-positive={type}>
          {type === "do" ? <GoAIcon type="checkmark-circle" /> : <GoAIcon type="close-circle" />}
          <div className="content-label">{type === "do" ? "Do" : "Dont"}</div>
        </div>
      )}
      <div className={`description type-${type}`}>{description}</div>
    </div>
  );
}
