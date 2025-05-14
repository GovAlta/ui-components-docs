import { GoAIcon } from "@abgov/react-components";
import "./DoDont.css";
import { ReactNode } from "react";

type DoDont = "do" | "dont" | "generic";
interface Props {
  type: DoDont;
  children: ReactNode;
  description?: string;
}

export function DoDont({ type, children, description }: Props) {
  return (
    <div>
      <div className="do-container">{children}</div>
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
