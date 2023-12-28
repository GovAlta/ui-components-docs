import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAChip, GoAChipProps, GoATab, GoATabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import ICONS from "./icons.json";

// == Page props ==

const componentName = "Chip";
const description = "An overlay that appears in front of the main page content.";
const category = Category.FEEDBACK_AND_ALERTS;
type ComponentPropsType = GoAChipProps;

type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function ChipPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    content: "Chip text",
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Deletable",
      type: "boolean",
      name: "deletable",
      value: false,
    },
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Chip text",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "leadingicon",
      type: "GoAIconType",
      description: "Show an icon to the left of the text",
      lang: "angular",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      description: "Show an icon to the left of the text",
      lang: "react",
    },
    {
      name: "error",
      type: "boolean",
      description: "Show an error state",
    },
    {
      name: "deletable",
      type: "boolean",
      description: "Show a delete icon button on the right of the text label",
    },
    {
      name: "content",
      type: "string",
      required: true,
      description: "Text label of the chip",
    },
    {
      name: "_click",
      type: "CustomEvent",
      description: "Callback when deletable and delete icon is clicked",
      lang: "angular",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked",
      lang: "react",
    },
    // ...
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={componentBindings} onChange={onSandboxChange}>
            <GoAChip {...componentProps} />
          </Sandbox>
          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        ></GoATab>
      </GoATabs>
    </>
  );
}
