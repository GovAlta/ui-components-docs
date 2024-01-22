import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoABadge,
  GoAContainer, GoAContainerProps,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import ContainerExamples from "@examples/container/ContainerExamples.tsx";

// == Page props ==
const componentName = "Container";
const description = "Group information, create hierarchy, and show related information.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/accordion", name: "Accordion" },
  { link: "/components/details", name: "Details" },
  { link: "/components/divider", name: "Divider" }
];
type ComponentPropsType = GoAContainerProps;
type CastingType = {
  [key: string]: unknown;
};

export default function ContainerPage() {
  const [containerProps, setContainerProps] = useState<ComponentPropsType>({});

  const [containerBindings, setContainerBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["", "interactive", "info", "error", "success", "important", "non-interactive"],
      value: "",
      defaultValue: "interactive",
    },
    {
      label: "Accent",
      type: "radio",
      name: "accent",
      options: ["thick", "thin", "filled"],
      value: "filled",
      defaultValue: "filled",
    },
    {
      label: "Padding",
      type: "radio",
      name: "padding",
      options: ["relaxed", "compact"],
      value: "relaxed",
      defaultValue: "relaxed",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "interactive | info | error | success | important | non-interactive",
      description: "Choose the type of container the type of the accent bar",
      defaultValue: "interactive",
    },
    {
      name: "accent",
      type: "thick | thin | filled",
      defaultValue: "filled",
      description: "Sets the style of accent on the container",
    },
    {
      name: "padding",
      type: "relaxed | compact",
      defaultValue: "relaxed",
      description: "Sets the amount of white space in the container",
    },
    {
      name: "title",
      type: "slot",
      description:
        "Sets the content in the left of the accent bar. To only beused along with accent=thick.",
    },
    {
      name: "actions",
      type: "slot",
      description:
        "Sets the content in the right of the accent bar. To only be used along with accent=thick.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setContainerBindings(bindings);
    setContainerProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      <GoATabs>
        <GoATab heading={"Code examples"}>
          <Sandbox properties={containerBindings} onChange={onSandboxChange} fullWidth>
            <GoAContainer {...containerProps}>
              <h2>Detach to use</h2>
              <p>Add things inside me</p>
            </GoAContainer>
          </Sandbox>

          {/*Container Table Properties*/}
          <ComponentProperties properties={componentProperties} />
          <ContainerExamples/>

        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }>
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
