import { GoABadge } from "@abgov/react-components";
import "./ComponentHeader.css";

interface Props {
  category?: string;
  name: string;
  description?: string;
  relatedComponents?: { link: string; name: string }[];
}

export enum Category {
  CONTENT_AND_LAYOUT = "Content and layout",
  FEEDBACK_AND_ALERTS = "Feedback and alerts",
  STRUCTURE_AND_NAVIGATION = "Structure and navigation",
  INPUTS_AND_ACTIONS = "Inputs and actions",
  UTILITIES = "Utilities",
}

export const ComponentHeader: React.FC<Props> = (props: Props) => {
  const category = () => {
    switch (props.category) {
      case Category.CONTENT_AND_LAYOUT:
        return "emergency";
      case Category.FEEDBACK_AND_ALERTS:
        return "important";
      case Category.STRUCTURE_AND_NAVIGATION:
        return "success";
      case Category.INPUTS_AND_ACTIONS:
        return "information";
      case Category.UTILITIES:
        return "midtone";
      default:
        return "information";
    }
  };

  return (
    <div className="component-header">
      <GoABadge type={category()} content={props.category} />
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>

      {props.relatedComponents?.length && (
        <>
          <span>Related components: </span>
          {props.relatedComponents.map((relatedComponent, index, array) => (
            <span key={index}>
              <a href={relatedComponent.link}>{relatedComponent.name}</a>
              {index < array.length - 1 && ", "}
            </span>
          ))}
        </>
      )}
    </div>
  );
};
