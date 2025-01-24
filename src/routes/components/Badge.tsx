import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoATab, GoATabs, GoABadgeType, GoABadgeProps, } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { ExamplesEmpty } from "@components/examples-empty/ExamplesEmpty.tsx";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";
import BadgeExamples from "@examples/badge/BadgeExamples.tsx";

// == Page props ==
const componentName = "Badge";
const description =
  "Small labels which hold small amounts of information, system feedback, or states.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/chip", name: "Chip" },
  { link: "/components/Icons", name: "Icons" },
  { link: "/components/Table", name: "Table" }
];
const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=458-16984";


type ComponentPropsType = GoABadgeProps;
type CastingType = {
  // add any required props here
  type: GoABadgeType;
  content: string;
  [key: string]: unknown;
};

export default function BadgePage() {
  const [badgeProps, setBadgeProps] = useState<ComponentPropsType>({
    type: "important",
    content: "Badge"
  });

  const [badgeBindings, setBadgeBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "dark", "midtone", "light"],
      value: "important"
    },
    {
      label: "Icon",
      type: "boolean",
      name: "icon",
      value: false
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Badge"
    },
    {
      label: "AriaLabel",
      type: "string",
      name: "ariaLabel",
      value: ""
    }
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency | dark | midtone | light",
      description: "Define the context and colour of the badge",
      required: true
    },
    {
      name: "icon",
      type: "boolean",
      description: "Includes an icon in the badge.",
      defaultValue: "false"
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the badge."
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Accessible label.",
      lang: "react"
    },
    {
      name: "arialabel",
      type: "string",
      description: "Accessible label.",
      lang: "angular"
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests."
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests."
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component."
    }
  ];

  function onSandboxChange(badgeBindings: ComponentBinding[], props: Record<string, unknown>) {
    setBadgeBindings(badgeBindings);
    setBadgeProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName}
                       category={category}
                       description={description}
                       relatedComponents={relatedComponents}
                       githubLink={componentName}
                       figmaLink={FIGMA_LINK}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={badgeBindings} onChange={onSandboxChange}>
              <GoABadge {...badgeProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
            <BadgeExamples />

          </GoATab>

          <GoATab
            heading={
              <>
                Examples
                <GoABadge type="information" content="0" />
              </>
            }
          >
            <ExamplesEmpty/>
          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}
