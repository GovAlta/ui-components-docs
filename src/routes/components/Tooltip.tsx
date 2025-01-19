import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoABadge,
  GoAIcon,
  GoATab,
  GoATabs,
  GoATooltip,
  GoATooltipProps,
  GoACallout,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=21932-557049";
const componentName = "Tooltip";
const description = "A small popover that displays more information about an item.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/form-item", name: "Helper text" },
  { link: "/components/icon-button", name: "Icon button" },
  { link: "/components/popover", name: "Popover" },
];

type ComponentPropsType = GoATooltipProps;
type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function TooltipPage() {
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
      description: "Position relative to the child element.",
      defaultValue: "top",
    },
    {
      name: "hAlign",
      type: "left | center | right",
      description: "Horizontal alignment to the child element",
      defaultValue: "center",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
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
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            {/* Tooltip Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoATooltip {...componentProps}>
                <GoAIcon type="information-circle" />
              </GoATooltip>
            </Sandbox>

            {/* Tooltip Properties */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Since there are 0 examples, the "Examples" tab is omitted */}

          <GoATab
            heading={
              <>
                Examples
                <GoABadge type="information" content="0" />
              </>
            }
          >
            <GoACallout heading="We are currently collecting design examples for this component" type="important" size="medium" maxWidth="540px">
              {" "}
              <a href="https://design.alberta.ca/get-started/support#:~:text=Raise%20an%20issue-,Talk%20to%20us,-Slack" target="_blank" rel="noreferrer">
                Talk to the design system team
              </a>{" "}
              to contribute examples from your service.
            </GoACallout>

          </GoATab>

          <GoATab heading="Design">
            <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

          <GoATab heading="Accessibility">

          <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
              Detailed accessibility documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}