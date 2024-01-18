import { useState } from "react";
import {
  GoABadge,
  GoADropdown,
  GoADropdownItem, GoADropdownProps,
  GoAFormItem,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import ICONS from "./icons.json";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";

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
type ComponentPropsType = GoADropdownProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (name: string, values: string[] | string) => void;
}

export default function DropdownPage() {
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
  const {formItemBindings, formItemProps, onFormItemChange} = useSandboxFormItem({label: "Basic dropdown"});

  const dropdownProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Must be unique in the rendered view and must match the children's name",
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
      description: "Overrides the autosized menu width.",
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
      lang: "react",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element(or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
    },
    {
      name: "arialabelledby",
      lang: "angular",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element(or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
    },
    {
      name: "id",
      type: "string",
      defaultValue: "Name of the dropdown",
      description:
        "Set an id for the dropdown component, should be unique, to associate with form's label 'for' attribute.",
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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDropdownBindings(bindings);
    setDropdownProps(props as CastingType);
  }

  // Demo
  const [ color, setColor ] = useState<string>("");

  function onChange(_name: string, value: string | string[]) {
    if (typeof value === "string") {
      setColor(value);
    }
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents}/>
      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox
            properties={dropdownBindings}
            formItemProperties={formItemBindings}
            onChange={onSandboxChange}
            onChangeFormItemBindings={onFormItemChange}
            fullWidth
            flags={["reactive"]}>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                // non-reactive code
                export class MyComponent {
                  onChange(event: Event) {
                    // handle change
                    console.log((event as CustomEvent).detail.value);
                  }
                }  
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags={["angular", "reactive"]}
              allowCopy={true}
              code={`
                // reactive code
                import { FormControl } from "@angular/forms";
                export class MyComponent {
                  reactiveFormCtrl = new FormControl("");
                }  
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                const [value, setValue] = useState("");
                function onChange(name: string, value: string | string[]) {
                  setValue(value);
                }
              `}
            />

            <GoAFormItem {...formItemProps}>
              <GoADropdown name="colors" value={color} {...dropdownProps}>
                <GoADropdownItem value="red" label="Red" />
                <GoADropdownItem value="green" label="Green" />
                <GoADropdownItem value="blue" label="Blue" />
              </GoADropdown>
            </GoAFormItem>
          </Sandbox>

          <ComponentProperties properties={dropdownProperties} />

          <ComponentProperties
            heading="Dropdown item properties"
            properties={dropdownItemProperties}
          />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        >
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
