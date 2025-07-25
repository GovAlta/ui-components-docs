import { GoabBadge, GoabContainer, GoabText } from "@abgov/react-components";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { useContext, useEffect, useState } from "react";

import css from "./ComponentProperties.module.css";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
export type ComponentProperty = {
  name: string;
  type?: string | string[];
  lang?: "react" | "angular";
  required?: boolean;
  description?: string;
  defaultValue?: string;
  badge?: { content: string; type: GoabBadgeType };
};

interface Props {
  properties: ComponentProperty[];
  oldProperties?: ComponentProperty[];
  heading?: string;
}

export const ComponentProperties = (props: Props) => {
  const { language, version } = useContext(LanguageVersionContext);

  const [filteredProperties, setFilteredProperties] = useState<ComponentProperty[]>([]);

  const filterBy = (properties: ComponentProperty[]) => {
    const result = properties.filter((child: ComponentProperty) => {
      return !child.lang || child.lang === language;
    });
    return result;
  };

  useEffect(() => {
    if (version === "old") {
      setFilteredProperties([...filterBy(props.oldProperties || props.properties)]); // If no old properties are provided, use the current properties
      return;
    }
    setFilteredProperties([...filterBy(props.properties)]);
  }, [language, version]);

  function dasherize(str: string): string {
    return str.replace(" ", "-").toLowerCase();
  }

  return (
    <>
      <h2
        id={props.heading ? `components-${dasherize(props.heading)}` : "component-properties"}
        className="hidden"
        aria-hidden="true">
        {props.heading || "Properties"}
      </h2>{" "}
      <GoabText size="heading-m" mb="l" mt="2xl">
        {props.heading || "Properties"}
      </GoabText>
      <GoabContainer type="interactive">
        <div>
          {filteredProperties.map((props, index) => (
            <ComponentProperty key={index} props={props} />
          ))}
        </div>
      </GoabContainer>
    </>
  );
};

interface ComponentPropertyProps {
  props: ComponentProperty;
}

export function ComponentProperty({ props }: ComponentPropertyProps) {
  return (
    <div className={css["component-props"]}>
      <div className={css.details}>
        <code className={`${css.code} ${css.name}`}>{props.name}</code>

        {props.required && <GoabBadge type="important" content="Required" />}
        {props.badge && <GoabBadge type={props.badge.type} content={props.badge.content} />}

        {props.type && (
          <code className={`${css.code} ${css.type}`}>
            {typeof props.type === "string" ? props.type : props.type.join(" | ")}
          </code>
        )}
      </div>

      <div className={css.description}>
        {props.description}
        {props.defaultValue && (
          <span>
            <br /> Defaults to <code className={css.code}>{props.defaultValue}</code>.
          </span>
        )}
      </div>
    </div>
  );
}
