import { GoabText, GoabContainer } from "@abgov/react-components";
import { ReactNode, useContext, useEffect, useState } from "react";

import { ComponentProperty as ComponentPropertyType, ComponentProperty } from "@components/component-properties/ComponentProperties.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

interface Props {
  properties: ComponentPropertyType[];
  oldProperties?: ComponentPropertyType[];
  heading?: string;
  subHeading?: ReactNode;
  codeSnippets?: {
    angular?: ReactNode;
    react?: ReactNode;
  };
}

export const FunctionProperties = (props: Props) => {
  const { language, version } = useContext(LanguageVersionContext);
  const [filteredProperties, setFilteredProperties] = useState<ComponentPropertyType[]>([]);

  const filterBy = (properties: ComponentPropertyType[]) => {
    const result = properties.filter((child: ComponentPropertyType) => {
      return !child.lang || child.lang === language;
    });
    return result;
  };

  useEffect(() => {
    if (version === "old") {
      setFilteredProperties([...filterBy(props.oldProperties || props.properties)]);
      return;
    }
    setFilteredProperties([...filterBy(props.properties)]);
  }, [language, version, props.properties, props.oldProperties]);

  function dasherize(str: string): string {
    return str.replace(" ", "-").toLowerCase();
  }

  return (
    <>
      <h2
        id={props.heading ? `components-${dasherize(props.heading)}` : "function-properties"}
        className="hidden"
        aria-hidden="true">
        {props.heading || "Function Properties"}
      </h2>
      <GoabText size="heading-m" mt="2xl">
        {props.heading || "Function Properties"}
      </GoabText>
      {props.subHeading && (
        <GoabText size="body-s" mb="l">
          {props.subHeading}
        </GoabText>
      )}
      
      {props.codeSnippets && (
        <div style={{ marginBottom: "1rem" }}>
          {props.codeSnippets.angular}
          {props.codeSnippets.react}
        </div>
      )}

      <GoabContainer type="interactive">
        <div>
          {filteredProperties.map((property, index) => (
            <ComponentProperty key={index} props={property} />
          ))}
        </div>
      </GoabContainer>
    </>
  );
};
