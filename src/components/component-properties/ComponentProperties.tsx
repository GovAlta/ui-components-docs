import { GoabAccordion, GoabBadge } from "@abgov/react-components";
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
};

interface Props {
  properties: ComponentProperty[];
  oldProperties?: ComponentProperty[];
  heading?: string;
}

export const ComponentProperties = (props: Props) => {
  const {language, version} = useContext(LanguageVersionContext);

  const [filteredProperties, setFilteredProperties] = useState<ComponentProperty[]>([]);

  const filterBy = (properties: ComponentProperty[]) => {
    const result = properties.filter((child: ComponentProperty) => {
      return !child.lang || child.lang === language;
    });
    console.log("filter by ", properties, " and lang ", language);
    return result;
  };

  useEffect(() => {
    console.log("ComponentProperties ---- ", language, " and version ", version);
    if (version === "old") {
      setFilteredProperties([...filterBy(props.oldProperties || props.properties)]); // If no old properties are provided, use the current properties
      return;
    }
    setFilteredProperties([...filterBy(props.properties)]);
  }, [language, version]);

  // useEffect(() => {
  //   console.log("useEffect under ComponentProperties ", localVersion, " and lang ", localLanguage);
  //   if (localVersion === "old") {
  //     setFilteredProperties([...filterBy(props.oldProperties || props.properties)]); // If no old properties are provided, use the current properties
  //     return;
  //   }
  //   setFilteredProperties([...filterBy(props.properties)]);
  // }, [localLanguage, localVersion]);


  function dasherize(str: string): string {
    return str.replace(" ", "-").toLowerCase();
  }

  return (
    <>
      <h3 
        id={props.heading ? `components-${dasherize(props.heading)}` : "component-properties"} 
        className="hidden" 
        aria-hidden="true"
      >
        {props.heading || "Properties"}
      </h3>
      <GoabAccordion heading={props.heading || "Properties"} mt="l" mb="none">
        <div>
          {filteredProperties.map((props, index) => (

            <ComponentProperty key={index} props={props} />
          ))}
        </div>
      </GoabAccordion>
    </>
  );
};

interface ComponentPropertyProps {
  props: ComponentProperty;
}

function ComponentProperty({ props }: ComponentPropertyProps) {
  return (
    <div className={css["component-props"]}>
      <div className={css.details}>
        <code className={`${css.code} ${css.name}`}>{props.name}</code>

        {props.required && <GoabBadge type="important" content="Required" />}

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
            {" "}
            Defaults to <code className={css.code}>{props.defaultValue}</code>.
          </span>
        )}
      </div>
    </div>
  );
}
