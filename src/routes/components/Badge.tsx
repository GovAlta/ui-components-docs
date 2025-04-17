import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabTab, GoabTabs, GoabBadgeProps } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import BadgeExamples from "@examples/badge/BadgeExamples.tsx";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=458-16984";
const componentName = "Badge";
const description =
  "Small labels which hold small amounts of information, system feedback, or states.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  {
    link: "/components/filter-chip", name: "Filter Chip"
  },
  {
    link: "/components/icons", name: "Icons"
  },
  {
    link: "/components/table", name: "Table"
  }
];

type ComponentPropsType = GoabBadgeProps;
type CastingType = {
  // add any required props here
  type: GoabBadgeType;
  content: string;
  [key: string]: unknown;
};

export default function BadgePage() {
  const [badgeProps, setBadgeProps] = useState<ComponentPropsType>({
    type: "information",
    content: "Information",
  });

  const [badgeBindings, setBadgeBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "dark", "midtone", "light"],
      value: "information",
    },
    {
      label: "Icon",
      type: "boolean",
      name: "icon",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Information",
    },
    {
      label: "AriaLabel",
      type: "string",
      name: "ariaLabel",
      value: "",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency | dark | midtone | light",
      description: "Define the context and colour of the badge",
      required: true,
    },
    {
      name: "icon",
      type: "boolean",
      description: "Includes an icon in the badge.",
      defaultValue: "false",
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the badge.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Accessible label.",
      lang: "react",
    },
    {
      name: "arialabel",
      type: "string",
      description: "Accessible label.",
      lang: "angular",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabBadgeType(success | important | information | emergency | dark | midtone | light)",
      description: "Define the context and colour of the badge",
      required: true,
    },
    {
      name: "icon",
      type: "boolean",
      description: "Includes an icon in the badge.",
      defaultValue: "false",
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the badge.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Accessible label.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing(none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ]

  function onSandboxChange(badgeBindings: ComponentBinding[], props: Record<string, unknown>) {
    setBadgeBindings(badgeBindings);
    setBadgeProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Badge"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={badgeBindings} onChange={onSandboxChange}>
              <GoabBadge {...badgeProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }
          >
            <BadgeExamples />
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
