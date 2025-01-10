import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from "../../utils/index";
import { GoABadge, GoAText } from "@abgov/react-components";

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
}

function dasherize(value: string): string {
  return value.split(" ").join("-");
}

export function ComponentCard(props: Props) {
  const getBadgeType = (status: string) => {
    switch (status) {
      case "Published":
        return null; // No badge for "Published"
      case "Not Published":
        return "information";
      case "In Progress":
        return "important";
      default:
        return "default"; // Fallback for unknown status
    }
  };

  const badgeType = getBadgeType(props.status);

  return (
    <div className="card">
      {props.status === "Published" ? (
        <Link to={toKebabCase(props.name)}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(/images/${dasherize(props.name)}.png)` }}
          />
        </Link>
      ) : (
        <div
          className="card-image"
          style={{ backgroundImage: `url(/images/${dasherize(props.name)}.png)` }}
        />
      )}
      <div className="card-content">
        {props.status === "Published" ? (
          <Link to={toKebabCase(props.name)}>
            {`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}
          </Link>
        ) : (
          <GoAText size="body-l" mt="none" mb="m">{`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}</GoAText>
        )}
        <GoAText size="body-m" mt="none" mb="none">
          {props.description}
        </GoAText>
        {/* Conditionally render the badge */}
        {badgeType && <GoABadge mt="m" type={badgeType} content={props.status} />}
      </div>
    </div>
  );
}