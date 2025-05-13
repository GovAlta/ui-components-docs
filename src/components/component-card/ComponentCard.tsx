import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from "../../utils";
import { GoabBadge, GoabText } from "@abgov/react-components";
import { useState, useEffect } from "react";

export type ComponentStatus = "Published" | "Not Published" | "In Progress";

// Define allowed group options as a union type
export type Group =
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
  tags?: string[];
  status: ComponentStatus;
  githubLink?: string;
  openIssues?: number;
  isNew?: boolean; // if true, show a badge on the component card to let users know the component is available in the latest version
  designSystemUrl?: string;
  designComponentFigmaUrl?: string;
  designContributionFigmaUrl?: string;
}

function dasherize(value: string): string {
  return value.toLowerCase().split(" ").join("-");
}

export function ComponentCard(props: Props) {
  console.log("Rendering card for:", props.name);
  const [imageUrl, setImageUrl] = useState(`/images/${dasherize(props.name)}.png`);

  useEffect(() => {
    const testImage = new Image();
    testImage.src = imageUrl;
    testImage.onerror = () => setImageUrl("/images/not-yet-available.png");
  }, [imageUrl]);

  const getBadgeType = (status: ComponentStatus) => {
    switch (status) {
      case "Published":
        return null; // No badge for "Published"
      case "Not Published":
        return "information";
      case "In Progress":
        return "important";
      default:
        return "information"; // Fallback for unknown status
    }
  };
  getBadgeType(props.status);
  const {language} = useContext(LanguageVersionContext);
  return (

    <div className="card">
      {props.status === "Published" ? (
        <Link to={toKebabCase(props.name)} tabIndex={-1}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </Link>
      ) : (
        <div
          className="card-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
      <div className="card-content">
        {props.isNew && (
          <GoabBadge
            type="important"
            mt="l"
            content={
              "Available in " +
              (language === "angular"
                ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
                : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase())
            }
          />
        )}

        <h3 style={{ marginTop: 0, marginBottom: 12 }}>
          {props.status === "Published" ? (
            <Link to={toKebabCase(props.name)}>{props.name}</Link>
          ) : (
            props.name
          )}
        </h3>

        <GoabText size="body-m">
          {props.description}
        </GoabText>

        {props.status !== "Published" && (
          <GoabBadge
            mt="xs"
            type={
              props.status === "In Progress"
                ? "important"
                : "information"
            }
            content={props.status}
          />
        )}

        {props.status !== "Published" && props.githubLink && (
          <GoabText tag="div" mt="s" size="body-s">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View open issues
              {props.openIssues !== undefined ? ` (${props.openIssues})` : ""}
            </a>
          </GoabText>
        )}


      </div>
    </div>
  );
}
