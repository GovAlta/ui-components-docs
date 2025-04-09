import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from "../../utils";
import { GoabBadge, GoabText } from "@abgov/react-components";
import { useState, useEffect } from "react";

// Define allowed group options as a union type
type Group =
  | "Content layout"
  | "Feedback and alerts"
  | "Inputs and actions"
  | "Structure and navigation"
  | "Utilities";

export interface Props {
  name: string;
  description: string;
  groups: Group[]; // Use the Group type here
  tags?: string[];
  status: "Published" | "Not Published" | "In Progress";
  githubLink?: string;
  openIssues?: number;
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

  const getBadgeType = (status: string) => {
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

  const badgeType = getBadgeType(props.status);

  return (
    <div className="card">
      {props.status === "Published" ? (
        <Link to={toKebabCase(props.name)}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </Link>
      ) : (
        <div
          className="card-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <div className="card-content">
        <div className="card-title-with-badge">
          {badgeType && <GoabBadge mt="none" mb="m" type={badgeType} content={props.status} />}

          {props.status === "Published" ? (

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
        {props.status !== "Published" && props.githubLink && (
          <GoabText size="body-s">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
             View issues{typeof props.openIssues === 'number' && ` (${props.openIssues})`}
            </a>
          </GoabText>
        )}
      </div>
    </div>
  );
}