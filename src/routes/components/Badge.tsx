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

// == Page props ==

const componentName = "Badge";
const description =
  "Small labels which hold small amounts of information, system feedback, or states.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  {
    link: "/components/chip", name: "Chip"
  },
  {
    link: "/components/Icons", name: "Icons"
  },
  {
    link: "/components/Table", name: "Table"
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
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={badgeBindings} onChange={onSandboxChange}>
              <GoabBadge {...badgeProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
            <BadgeExamples />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }
          ></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
