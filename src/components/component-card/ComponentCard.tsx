import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from "../../utils";
import { GoabBadge, GoabText } from "@abgov/react-components";
import { useState, useEffect } from "react";
import { NEW_COMPONENTS } from "../../global-constants";
export type ComponentStatus = "Available" | "Legacy" | "Not Published" | "In Progress";

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

export interface ComponentCardProps {
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
  imageFolder?: "component-thumbnails" | "example-thumbnails";
}

function dasherize(value: string): string {
  return value.toLowerCase().split(" ").join("-");
}

function isRelativeUrl(url?: string): boolean {
  return url !== undefined && !/^https?:\/\//i.test(url);
}

export function ComponentCard(props: ComponentCardProps) {
  const folder = props.imageFolder ?? "components";
  const [imageUrl, setImageUrl] = useState(`/images/${folder}/${dasherize(props.name)}.png`);

  useEffect(() => {
    const testImage = new Image();
    testImage.src = imageUrl;
    testImage.onerror = () => setImageUrl("/images/component-thumbnails/not-yet-available.png");
  }, [imageUrl]);

  const getBadgeType = (status: ComponentStatus) => {
    switch (status) {
      case "Available": //Published replaced with Available
        return null; // No badge for "Available"
      case "Not Published":
        return "light";
      case "In Progress":
        return "important";
      default:
        return "information"; // Fallback for Legacy and unknown status
    }
  };
  getBadgeType(props.status);
  const { language, version } = useContext(LanguageVersionContext);
  return (

    <div className="card">
      {props.status === "Available" || props.status === "Legacy" ? (
        <Link to={isRelativeUrl(props.designSystemUrl) ? props.designSystemUrl! : toKebabCase(props.name)}
              tabIndex={-1}>
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
        {props.status !== "Available" && (
          <GoabBadge
            mb="m"
            type={getBadgeType(props.status) || "information"}
            content={props.status}
          />
        )}
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>
          {props.status === "Available" ? (
            <Link
              to={isRelativeUrl(props.designSystemUrl) ? props.designSystemUrl! : toKebabCase(props.name)}>{props.name}</Link>
          ) : (
            props.name
          )}
        </h3>
        <GoabText size="body-m" mb="s">
          {props.description}
        </GoabText>


        {props.status !== "Available" && props.githubLink && (
          <GoabText tag="div" mt="m" size="body-s">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.imageFolder === "example-thumbnails" ? "View issue" : "View open issues"}
              {props.imageFolder === "example-thumbnails" ? "" : props.openIssues !== undefined ? ` (${props.openIssues})` : ""}
            </a>
          </GoabText>
        )}

        {NEW_COMPONENTS.includes(props.name) && (
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
