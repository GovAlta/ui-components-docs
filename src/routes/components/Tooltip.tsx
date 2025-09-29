import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoabIcon,
  GoabBadge,
  GoabTab,
  GoabTabs,
  GoabTooltip,
  GoabTooltipProps,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty
} from "@components/component-properties/common-properties.ts";
import { TooltipExamples } from "@examples/tooltip/TooltipExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=21932-557049";
const componentName = "Tooltip";
const description = "A small popover that displays more information about an item.";
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/form-item", name: "Helper text" },
  { link: "/components/icon-button", name: "Icon button" },
  { link: "/components/popover", name: "Popover" }
];
type ComponentPropsType = GoabTooltipProps;
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

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "content",
      type: "string | slot",
      description: "The content of the tooltip",
      lang: "angular",
    },
    {
      name: "content",
      type: "string | ReactNode",
      description: "The content of the tooltip",
      lang: "react",
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
    LegacyMarginProperty,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "content",
      type: "string | TemplateRef<any>",
      description: "The content of the tooltip",
      lang: "angular",
    },
    {
      name: "content",
      type: "string | ReactNode",
      description: "The content of the tooltip",
      lang: "react",
    },
    {
      name: "position",
      type: "GoabTooltipPosition (top | bottom | left | right)",
      description: "Position wrt the child element",
      defaultValue: "top",
    },
    {
      name: "hAlign",
      type: "GoabTooltipHorizontalAlignment (left | center | right)",
      description: "Horizontal alignment to the child element",
      defaultValue: "center",
    },
    TestIdProperty,
    MarginProperty
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
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Tooltip"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoabTooltip {...componentProps}>
                <GoabIcon type="information-circle" />
              </GoabTooltip>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }
          >
            <TooltipExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
