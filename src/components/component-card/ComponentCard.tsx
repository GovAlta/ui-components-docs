import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from '../../utils/index';
import { GoabBadge } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";

export interface Props {
  name: string;
  description: string;
  groups: string[];
  tags?: string[];
  isNew?: boolean; // if true, show a badge on the component card to let users know the component is available in the latest version
}

function dasherize(value: string): string {
  return value.split(" ").join("-");
}

export function ComponentCard(props: Props) {
  const {language} = useContext(LanguageVersionContext);
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(/images/${dasherize(props.name)}.png)` }}
      />
      <div className="card-content">
        <Link to={toKebabCase(props.name)}>
          {`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}
        </Link>
        {props.description}
        {props.isNew && <GoabBadge type="important" mt="l" content={"Available in " + (language === "angular" ? ANGULAR_VERSIONS.NEW.label : REACT_VERSIONS.NEW.label)}/>}
      </div>
    </div>
  );
}
