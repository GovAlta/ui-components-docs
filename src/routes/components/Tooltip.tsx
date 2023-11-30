import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoAIcon,
  GoABadge,
  GoATab,
  GoATabs,
  GoATooltip,
  GoATooltipProps,
} from "@abgov/react-components";

// == Page props ==

const componentName = "Tooltip";
const description = "More information displayed in a popover when a user hovers over an element.";
type ComponentPropsType = GoATooltipProps;
type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function TEMPLATE_Page() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    content: "Tooltip",
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Tooltip",
    },
    {
      label: "Position",
      type: "radio",
      name: "position",
      options: ["top", "bottom", "left", "right"],
      value: "",
    },
    {
      label: "Horizontal alignment",
      type: "radio",
      name: "hAlign",
      options: ["left", "center", "right"],
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "content",
      type: "string",
      description: "The content of the tooltip",
    },
    {
      name: "position",
      type: "top | bottom | left | right",
      description: "Position wrt the child element",
      defaultValue: "top",
    },
    {
      name: "hAlign",
      type: "left | center | right",
      description: "Horizontal alignment to the child element",
      defaultValue: "center",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={Category.FEEDBACK_AND_ALERTS}
        description={description}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={componentBindings} onChange={onSandboxChange}>
            <GoATooltip {...componentProps}>
              <GoAIcon type="information-circle" />
            </GoATooltip>
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
