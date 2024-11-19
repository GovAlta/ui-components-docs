import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabChip, GoabChipProps, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import ICONS from "./icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==

const componentName = "Chip";
const description = "Allow the user to enter information, filter content, and make selections.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/badge", name: "Badge" },
  { link: "/components/popover", name: "Popover" },
  { link: "/components/Table", name: "Table" }
];
type ComponentPropsType = GoabChipProps;

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
      label: "Icon Theme",
      type: "list",
      name: "iconTheme",
      options: ["", "outline", "filled"],
      defaultValue: "outline",
      value: ""
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

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "leadingicon",
      type: "GoAIconType",
      description: "Shows an icon to the left of the text.",
      lang: "angular",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      description: "Shows an icon to the left of the text.",
      lang: "react",
    },
    {
      name: "icontheme",
      type: "outline | filled",
      description: "The style of the leading icon",
      defaultValue: "outline",
      lang: "angular"
    },
    {
      name: "iconTheme",
      type: "outline | filled",
      description: "The style of the leading icon",
      defaultValue: "outline",
      lang: "react"
    },
    {
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
    },
    {
      name: "deletable",
      type: "boolean",
      description: "Shows a delete icon button on the right of the text label.",
    },
    {
      name: "content",
      type: "string",
      required: true,
      description: "Text label of the chip.",
    },
    {
      name: "_click",
      type: "CustomEvent",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "angular",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "react",
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
    // ...
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "leadingIcon",
      type: "GoabIconType",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
    },
    {
      name: "deletable",
      type: "boolean",
      description: "Shows a delete icon button on the right of the text label.",
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the chip.",
    },
    {
      name: "iconTheme",
      type: "GoabChipTheme (outline | filled)",
      description: "The style of the leading icon",
      defaultValue: "outline",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoabChip {...componentProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
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
