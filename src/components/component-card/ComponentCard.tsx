import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from "../../utils";
import { GoabBadge, GoabText } from "@abgov/react-components";
import { useState, useEffect } from "react";

export type ComponentStatus = "Published" | "Not Published" | "In Progress" | "Legacy" | "Available";

// Define allowed group options as a union type
type Group =
  | "Content layout"
  | "Feedback and alerts"
  | "Inputs and actions"
  | "Structure and navigation"
  | "Utilities";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";

export interface Props {
  name: string;
  description: string;
  groups: Group[]; // Use the Group type here
  tags?: string[];
  status: ComponentStatus;
  githubLink?: string;
  openIssues?: number;
  isNew?: boolean; // if true, show a badge on the component card to let users know the component is available in the latest version
}

function dasherize(value: string): string {
  return value.split(" ").join("-");
}

export function ComponentCard(props: Props) {
  const [imageUrl, setImageUrl] = useState(`/images/${dasherize(props.name)}.png`);

  useEffect(() => {
    const testImage = new Image();
    testImage.src = imageUrl;
    testImage.onerror = () => setImageUrl("/images/not-yet-available.png");
  }, [imageUrl]);

  //CARDS tab
  const getBadgeType = (status: ComponentStatus) => {
    switch (status) {
      case "Published":
        return null; // No badge for "Published"
      case "Available":
        return null; // No badge for "Available"
      case "Not Published":
        return "light";
      case "In Progress":
        return "important";
      case "Legacy":
        return "information";
      default:
        return "information"; // Fallback for unknown status
    }
  };

  const badgeType = getBadgeType(props.status);

  const { language, version } = useContext(LanguageVersionContext);
  return (
    <div className="card">
      {props.status === "Published" || props.status === "Available" ? (
        <Link to={toKebabCase(props.name)} tabIndex={-1}>
          <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        </Link>
      ) : (
        <div className="card-image" tabIndex={-1} style={{ backgroundImage: `url(${imageUrl})` }} />
      )}
      <div className="card-content">
        <div className="card-title-with-badge">
          {badgeType && <GoabBadge mt="none" mb="m" type={badgeType} content={props.status} />}

          {props.status === "Published" || props.status === "Available" ? (
            <Link to={toKebabCase(props.name)}>
              {`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}
            </Link>
          ) : (
            <GoabText size="body-l" mt="none" mb="none">
              {`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}
            </GoabText>
          )}
        </div>
        <GoabText size="body-m" mt="m" mb="none">
          {props.description}
        </GoabText>
        {props.status !== "Published" && props.status !== "Available" && props.githubLink && (
          <GoabText size="body-s">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link">
              View issues{typeof props.openIssues === "number" && ` (${props.openIssues})`}
            </a>
          </GoabText>
        )}
        {props.isNew && (
          <GoabBadge
            type={version === "new" ? "success" : "important"}
            mt="l"
            content={
              version === "new" 
                ? "New"
                : "Available in " +
                  (language === "angular"
                    ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
                    : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase())
            }
          />
        )}
      </div>
    </div>
  );
}
