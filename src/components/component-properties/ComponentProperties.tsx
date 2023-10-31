import { GoAAccordion, GoABadge, GoATable } from "@abgov/react-components";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@components/sandbox";

export type ComponentProperty = {
  name: string;
  type?: string;
  lang?: string;
  required?: boolean;
  description?: string;
  defaultValue?: string;
};

interface Props {
  properties: ComponentProperty[];
}

export const ComponentProperties = (props: Props) => {
  const lang = useContext(LanguageContext);
  const [filteredProperties, setFilteredProperties] = useState<ComponentProperty[]>([]);

  const filterBy = (properties: ComponentProperty[]) => {
    const result = properties.filter((child: ComponentProperty) => {
      return !child.lang || child.lang === lang;
    });
    return result;
  };

  useEffect(() => {
    setFilteredProperties([...filterBy(props.properties)]);
  }, [lang]);

  const rows = (properties: ComponentProperty[]) => {
    return properties.map((property, index) => (
      <tr key={index}>
        <td className="token-name">
          {property.name}
          {property.required && <GoABadge type="midtone" content="Required" ml="xs"></GoABadge>}
        </td>
        <td>{property.type}</td>
        <td>{property.description}</td>
        <td>{property.defaultValue}</td>
      </tr>
    ));
  };

  return (
    <GoAAccordion heading="Components properties" mt="xl">
      <GoATable variant="relaxed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>{rows(filteredProperties)}</tbody>
      </GoATable>
    </GoAAccordion>
  );
};
