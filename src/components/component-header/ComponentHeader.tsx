import {GoABadge, GoABlock, GoAHeroBanner, GoAText, } from "@abgov/react-components";
import "./ComponentHeader.css";
import { Link } from "react-router-dom";

// If you have an enum for categories:
export enum Category {
    CONTENT_AND_LAYOUT = "Content and layout",
    FEEDBACK_AND_ALERTS = "Feedback and alerts",
    STRUCTURE_AND_NAVIGATION = "Structure and navigation",
    INPUTS_AND_ACTIONS = "Inputs and actions",
    UTILITIES = "Utilities",
}

interface Props {
    category?: Category;
    name: string;
    description?: string;
    relatedComponents?: { link: string; name: string }[];
    githubLink?: string;
    figmaLink?: string;
}

export const ComponentHeader: React.FC<Props> = (props) => {
    // Helper to transform "button" -> "Button" for GitHub label
    function toSentenceCase(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (

        <div className="component-header" >
            <GoABadge type="information" content={props.category} />

            <GoABlock gap="2xl" alignment="center">
                <GoAText size="heading-xl" mt="xs">
                    {props.name}
                </GoAText>
                {(props.githubLink || props.figmaLink) && (
                    <GoABlock gap="l" direction="row" mt="l">
                        {/* GitHub Issues link, if we have a "githubLink" */}
                        {props.githubLink && (
                            <a className="small"
                               href={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(
                                   toSentenceCase(props.githubLink)
                               )}`}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                GitHub issues
                            </a>
                        )}

                        {/* Figma link, if we have a "figmaLink" */}
                        {props.figmaLink && (
                            <a className="small"
                               href={props.figmaLink} target="_blank" rel="noopener noreferrer">
                                Figma
                            </a>
                        )}
                    </GoABlock>
                )}
            </GoABlock>

            <h2 id="component" className="hidden" aria-hidden="true">
                Component
            </h2>

            <h3 dangerouslySetInnerHTML={{ __html: props.description || "" }} />

            {props.relatedComponents?.length && (
                <GoABlock mt="m" mb="xl" gap="xs">
                    <span className="small">Related:</span>
                    {props.relatedComponents.map((rc, index, array) => (
                        <span className="small" key={index}>
              <Link to={rc.link}>{rc.name}</Link>
                            {index < array.length - 1 && ", "}
            </span>
                    ))}
                </GoABlock>
            )}


        </div>
    );
};