import { GoABadge, GoABlock } from "@abgov/react-components";
import "./ComponentHeader.css";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { useEffect, useState } from "react";

interface Props {
  category?: Category;
  name: string;
  description?: string;
  relatedComponents?: { link: string; name: string }[];
  githubLink?: string;
}

export enum Category {
  CONTENT_AND_LAYOUT = "Content and layout",
  FEEDBACK_AND_ALERTS = "Feedback and alerts",
  STRUCTURE_AND_NAVIGATION = "Structure and navigation",
  INPUTS_AND_ACTIONS = "Inputs and actions",
  UTILITIES = "Utilities",
}

export const ComponentHeader: React.FC<Props> = (props: Props) => {
  const GITHUB_BASE = "https://github.com/GovAlta/ui-components-docs/blob/main/src/";
  const [lastUpdateTime, setLastUpdateTime] = useState<Date | null>(null);
  useEffect(() => {
    if (props.githubLink) {
      const fetchLastUpdateTime = async () => {
        try {
          const url = `https://api.github.com/repos/GovAlta/ui-components-docs/commits?path=src/${props.githubLink}`;
          const response = await fetch(url);
          if (!response.ok) {
            return;
          }
          const commits = await response.json();
          if (commits.length === 0) {
            return;
          }
          const lastCommit = commits[0];
          const lastUpdateTime = new Date(lastCommit.commit.committer.date);
          setLastUpdateTime(lastUpdateTime);
        } catch (error) {
          console.error((error as Error).message);
        }
      };

      fetchLastUpdateTime();
    }
  }, [props.githubLink]);

  return (
    <div className="component-header">
      <GoABadge type="information" content={props.category} />
      <h1>{props.name}</h1>
      <h2 id="component" className="hidden" aria-hidden="true">
        Component
      </h2>
      <h3 dangerouslySetInnerHTML={{ __html: props.description || "" }}></h3>

      {props.relatedComponents?.length && (
        <GoABlock mb={"l"} gap={"xs"}>
          <span className="small">Related: </span>
          {props.relatedComponents.map((relatedComponent, index, array) => (
            <span className="small" key={index}>
              <Link to={relatedComponent.link}>{relatedComponent.name}</Link>
              {index < array.length - 1 && ", "}
            </span>
          ))}
        </GoABlock>
      )}
      {props.githubLink && (
        <GoABlock gap="xs">
          {lastUpdateTime && <span className={"x-small greyscale"}>Last updated on {format(lastUpdateTime, 'MMM dd, yyyy')}</span>}
          <a href={`${GITHUB_BASE}${props.githubLink}`} target="_blank">
            Edit this page
          </a>
        </GoABlock>
      )}
    </div>
  );
};
