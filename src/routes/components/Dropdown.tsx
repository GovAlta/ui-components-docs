import { useContext, useState } from "react";
import {
  GoabBadge,
  GoabDropdown,
  GoabDropdownItem,
  GoabDropdownProps,
  GoabFormItem,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import ICONS from "./icons.json";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DropdownExamples } from "@examples/dropdown/DropdownExamples";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  MarginProperty,
} from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=105-42";

// == Page props ==
const componentName = "Dropdown";
const description = "Present a list of options to the user to select from.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/checkbox", name: "Checkbox" },
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/popover", name: "Popover" },
  { link: "/components/radio", name: "Radio" },
];
type ComponentPropsType = GoabDropdownProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (event: GoabDropdownOnChangeDetail) => void;
};

export default function DropdownPage() {
  const { version } = useContext(LanguageVersionContext);
  const [dropdownProps, setDropdownProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    onChange: onChange,
  });
  const [dropdownBindings, setDropdownBindings] = useState<ComponentBinding[]>([
    {
      label: "Placeholder",
      type: "string",
      name: "placeholder",
      value: "",
    },
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Max height",
      type: "string",
      name: "maxHeight",
      value: "",
    },
    {
      label: "Width",
      type: "string",
      name: "width",
      value: "",
    },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
    { label: "Error", type: "boolean", name: "error", value: false },
    { label: "Native", type: "boolean", name: "native", value: false },
    { label: "Filterable", type: "boolean", name: "filterable", value: false },
    { label: "ARIA label", type: "string", name: "ariaLabel", value: "" },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Basic dropdown",
  });

  const oldDropdownProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Identifier for the Dropdown. Should be unique.",
    },
    {
      name: "value",
      type: "string",
      description: "Stores the value of the item selected from the dropdown.",
    },
    {
      name: "leadingIcon",
      lang: "react",
      type: "GoAIconType",
      description: "Show an icon to the left of the dropdown option.",
    },
    {
      name: "leadingicon",
      lang: "angular",
      type: "GoAIconType",
      description: "Show an icon to the left of the dropdown option.",
    },
    {
      name: "maxHeight",
      lang: "react",
      type: "string",
      description: "Maximum height of the dropdown menu items popover. Non-native only.",
      defaultValue: "276px",
    },
    {
      name: "maxheight",
      lang: "angular",
      type: "string",
      description: "Maximum height of the dropdown menu items popover. Non-native only.",
      defaultValue: "276px",
    },
    {
      name: "placeholder",
      type: "string",
      description:
        "The text displayed for the dropdown before a selection is made. Non-native only.",
    },
    {
      name: "width",
      type: "string",
      description: "Overrides the autosized menu width. Non-native only.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disable this control.",
      defaultValue: "false",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css positive of relative.",
      defaultValue: "false",
    },
    {
      name: "error",
      type: "boolean",
      description: "Show an error state",
      defaultValue: "false",
    },
    {
      name: "ariaLabel",
      lang: "react",
      type: "string",
      description:
        "Defines how the selected value will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "arialabel",
      lang: "angular",
      type: "string",
      description:
        "Defines how the selected value will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element(or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "react",
    },
    {
      name: "arialabelledby",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element(or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "angular",
    },
    {
      name: "native",
      type: "boolean",
      defaultValue: "false",
      description: "When true will render the native <select> html element.",
    },
    {
      name: "filterable",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true the dropdown will have the ability to filter options by typing into the input field.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string[] | string | null) => void",
      required: true,
      description: "Callback function when dropdown value is changed",
    },
    {
      name: "_change",
      lang: "angular",
      type: "(name: string, value: string[] | string | null) => void",
      description: "Callback function when dropdown value is changed.",
    },
    LegacyMarginProperty,
  ];
  const dropdownProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Identifier for the Dropdown. Should be unique.",
    },
    {
      name: "value",
      type: "string",
      description: "Stores the value of the item selected from the dropdown.",
    },
    {
      name: "autoComplete",
      type: "string",
      description: "Specifies the autocomplete attribute for the dropdown input. Native only.",
    },

    {
      name: "leadingIcon",
      type: "GoAIconType",
      description: "Show an icon to the left of the dropdown option.",
    },
    {
      name: "maxHeight",
      type: "string",
      description: "Maximum height of the dropdown menu items popover. Non-native only.",
      defaultValue: "276px",
    },
    {
      name: "placeholder",
      type: "string",
      description:
        "The text displayed for the dropdown before a selection is made. Non-native only.",
    },
    {
      name: "width",
      type: "string",
      description: "Overrides the autosized menu width. Non-native only.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disable this control.",
      defaultValue: "false",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css positive of relative.",
      defaultValue: "false",
    },
    {
      name: "error",
      type: "boolean",
      description: "Show an error state",
      defaultValue: "false",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the selected value will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element(or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
    },
    {
      name: "native",
      type: "boolean",
      defaultValue: "false",
      description: "When true will render the native <select> html element.",
    },
    {
      name: "filterable",
      type: "boolean",
      defaultValue: "false",
      description:
        "When true the dropdown will have the ability to filter options by typing into the input field.",
    },
    {
      name: "onChange",
      type: "(event: GoabDropdownOnChangeDetail) => void",
      required: true,
      description: "Callback function when dropdown value is changed",
    },
    MarginProperty,
  ];

  const oldDropdownItemProperties: ComponentProperty[] = [
    {
      name: "value",
      type: "string",
      required: true,
      description: "The value of the item. This value will be contained within the onChange event",
    },
    {
      name: "label",
      type: "string",
      description:
        "The displayed value within the selection box. The value property is the fallback value.",
    },
    {
      name: "filter",
      type: "string",
      description:
        "In case of the filterable dropdown, this property is for us to set what we want to search the option with different keywords. The label or value property is the fallback value.",
    },
    {
      name: "mountType",
      lang: "react",
      type: "append | prepend | reset",
      description: "The mount type for the dropdown item.",
      defaultValue: "append",
    },
    {
      name: "mount",
      lang: "angular",
      type: "append | prepend | reset",
      description: "The mount type for the dropdown item.",
      defaultValue: "append",
    },
  ];
  const dropdownItemProperties: ComponentProperty[] = [
    {
      name: "value",
      type: "string",
      required: true,
      description: "The value of the item. This value will be contained within the onChange event",
    },
    {
      name: "label",
      type: "string",
      description:
        "The displayed value within the selection box. The value property is the fallback value.",
    },
    {
      name: "filter",
      type: "string",
      description:
        "In case of the filterable dropdown, this property is for us to set what we want to search the option with different keywords. The label or value property is the fallback value.",
    },
    {
      name: "mountType",
      type: "GoabDropdownItemMountType (append | prepend | reset)",
      description: "The mount type for the dropdown item.",
      defaultValue: "append",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDropdownBindings(bindings);
    setDropdownProps(props as CastingType);
  }

  // Demo
  const [color, setColor] = useState<string>("");

  function onChange(event: GoabDropdownOnChangeDetail) {
    setColor(event.value || "");
    setDropdownProps({ ...dropdownProps, value: event.value || "" } as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Dropdown"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={dropdownBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={version === "old" ? ["reactive"] : ["reactive", "template-driven", "event"]}>
              {/* Keep all existing CodeSnippets and form content as-is */}
              <GoabFormItem {...formItemProps}>
                <GoabDropdown name="item" value={color} {...dropdownProps}>
                  <GoabDropdownItem value="red" label="Red" />
                  <GoabDropdownItem value="green" label="Green" />
                  <GoabDropdownItem value="blue" label="Blue" />
                </GoabDropdown>
              </GoabFormItem>
            </Sandbox>

            <ComponentProperties
              properties={dropdownProperties}
              oldProperties={oldDropdownProperties}
            />

            <ComponentProperties
              heading="Dropdown item properties"
              properties={dropdownItemProperties}
              oldProperties={oldDropdownItemProperties}
            />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }>
            <DropdownExamples />
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
