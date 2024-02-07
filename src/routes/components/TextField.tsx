import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoABlock,
  GoAButton,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoAInputProps,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import ICONS from "./icons.json";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";

// == Page props ==
const componentName = "Text field";
const description = "A single-line field where users can input and edit text.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/text-area", name: "Text area" }
];
type ComponentPropsType = GoAInputProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (name: string, value: string) => void;
};

export default function TextFieldPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    onChange: () => {},
  });
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: [
        "",
        "text",
        "number",
        "password",
        "email",
        "search",
        "tel",
        "date",
        "datetime-locale",
        "time",
        "url",
        "week",
      ],
      value: "",
      defaultValue: "text",
    },
    {
      label: "Placeholder",
      type: "string",
      name: "placeholder",
      value: "",
    },
    {
      label: "Leading Icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Width",
      type: "string",
      name: "width",
      value: "20ch",
    },
    {
      label: "Max length",
      type: "number",
      name: "maxLength",
      value: 20,
    },
    {
      label: "Disabled",
      type: "boolean",
      name: "disabled",
      value: false,
    },
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "ARIA label",
      type: "string",
      value: "",
      name: "ariaLabel",
    },
  ]);
  const {formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({label: "Basic"});
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "text | number | password | email | search | tel | date | datetime-locale | time | url | week",
      defaultValue: "text",
      description: "Sets the type of the input field",
    },
    {
      name: "name",
      lang: "react",
      type: "string",
      required: true,
      description: "Name of input value that is received in the _change event.",
    },
    {
      name: "name",
      lang: "angular",
      type: "string",
      description: "Name of input value that is received in the _change event.",
    },
    {
      name: "value",
      lang: "react",
      type: "string",
      required: true,
      description: "Bound to value",
    },
    {
      name: "value",
      lang: "angular",
      type: "string",
      description: "Bound to value",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text displayed within the input when no value is set",
    },
    {
      name: "leadingIcon",
      lang: "react",
      type: "GoAIconType",
      description: "Icon shown to the left of the text",
    },
    {
      name: "leadingicon",
      lang: "angular",
      type: "GoAIconType",
      description: "Icon shown to the left of the text",
    },
    {
      name: "trailingIcon",
      lang: "react",
      type: "GoAIconType",
      description: "Icon shown to the right of the text",
    },
    {
      name: "trailingicon",
      lang: "angular",
      type: "GoAIconType",
      description: "Icon shown to the right of the text",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables this input. The input will not receive focus or events. Use [attr.disabled] with [formControl]",
    },
    {
      name: "handleTrailingIconClick",
      type: "boolean",
      defaultValue: "false",
      description:
        "Flag that will result in an icon button component being rendered instead of an icon",
      lang: "react",
    },
    {
      name: "handletrailingiconclick",
      type: "boolean",
      defaultValue: "false",
      description:
        "Flag that will result in an icon button component being rendered instead of an icon",
      lang: "angular",
    },
    {
      name: "focused",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the cursor focus to the input",
    },
    {
      name: "readOnly",
      lang: "react",
      type: "boolean",
      description: "Makes the input readonly",
      defaultValue: "false",
    },
    {
      name: "readonly",
      lang: "angular",
      type: "boolean",
      description: "Makes the input readonly",
      defaultValue: "false",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to an error state",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "30ch",
      description: "Sets the width of the text input area",
    },
    {
      name: "min",
      type: "string|date",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type",
    },
    {
      name: "max",
      type: "string|date",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type",
    },
    {
      name: "step",
      type: "number",
      description: "How much a number or date should changed by",
    },
    {
      name: "arialabel",
      type: "string",
      description:
        "Defines how the input will be translated for the screen reader. If not specified it will fall back to the name. If both arialabel and arialabelledby are specified, arialabelledby will be used",
      lang: "angular",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the input will be translated for the screen reader. If not specified it will fall back to the name. If both arialabel and arialabelledby are specified, arialabelledby will be used",
      lang: "react",
    },
    {
      name: "arialabelledby",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element (or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "angular",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element (or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "react",
    },
    {
      name: "maxlength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
      lang: "angular",
    },
    {
      name: "maxLength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
      lang: "react",
    },
    {
      name: "autoCapitalize",
      lang: "react",
      type: "on | off | none | sentences | words | characters",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user.",
      defaultValue: "off",
    },
    {
      name: "autocapitalize",
      lang: "angular",
      type: "on | off | none | sentences | words | characters",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user.",
      defaultValue: "off",
    },
    {
      name: "_trailingIconClick",
      lang: "angular",
      type: "CustomEvent",
      description: "onclick function invoked when trailing icon is clicked",
    },
    {
      name: "onTrailingIconClick",
      lang: "react",
      type: "() => void",
      description: "onclick function invoked when trailing icon is clicked",
    },
    {
      name: "leadingcontent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the left of the input field",
    },
    {
      name: "leadingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the left of the input field",
    },
    {
      name: "trailingcontent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the right of the input field",
    },
    {
      name: "trailingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the right of the input field",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string[] | string | null) => void",
      required: true,
      description: "Callback function when input value is changed",
    },
    {
      name: "_focus",
      lang: "angular",
      type: "() => void",
      description: "Function invoked when an element receives focus",
    },
    {
      name: "onFocus",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      description: "Function invoked when an element receives focus",
    },
    {
      name: "_blur",
      lang: "angular",
      type: "() => void",
      description: "Function invoked when an element loses focus",
    },
    {
      name: "onBlur",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      description: "Function invoked when an element loses focus",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  // For sandbox demo function
  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Input sandbox*/}
          <Sandbox
            properties={componentBindings}
            formItemProperties={formItemBindings}
            onChange={onSandboxChange}
            onChangeFormItemBindings={onFormItemChange}
            flags={["reactive"]}>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                // non-reactive code
                export class SomeComponent {
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
                export class SomeComponent {
                  itemFormCtrl = new FormControl("");
                }
              `}
            />
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                const [value, setValue] = useState<string>("");
              
                onChange(name: string, value: string) {
                  setValue(value);
                }
              `}
            />

            <GoAFormItem {...formItemProps}>
              <GoAInput {...componentProps} onChange={noop} />
            </GoAFormItem>
          </Sandbox>

          {/*Input component properties table*/}
          <ComponentProperties properties={componentProperties} />

          {/*Examples*/}
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>
          
          <h3 id="example-ask-user-for-an-address">Ask a user for an address </h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Street Address">
              <GoAInput name="address" type="text" value="" onChange={noop} width="100%" />
            </GoAFormItem>
            <GoAFormItem label="Suite or unit #">
              <GoAInput name="suite" type="text" value="" onChange={noop} width="100%" />
            </GoAFormItem>
            <GoAFormItem label="City/town">
              <GoAInput name="city" type="text" value="" onChange={noop} width="100%" />
            </GoAFormItem>

            <GoABlock direction={"row"}>
              <GoAFormItem label="Provice/territory">
                <GoADropdown onChange={noop} name="province" value="alberta">
                  <GoADropdownItem label="Alberta" value="alberta" />
                  <GoADropdownItem label="BC" value="bc" />
                  <GoADropdownItem label="Manitoba" value="manitoba" />
                  <GoADropdownItem label="New Brunswick" value="new-brunswick" />
                  <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland" />
                  <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
                  <GoADropdownItem label="Ontario" value="ontario" />
                  <GoADropdownItem label="Prince Edward Island" value="prince-edward-island" />
                  <GoADropdownItem label="Quebec" value="quebec" />
                  <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
                </GoADropdown>
              </GoAFormItem>

              <GoAFormItem label="Postal Code">
                <GoAInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
              </GoAFormItem>
            </GoABlock>
          </Sandbox>

          <h3 id="example-ask-user-for-birthday">Ask a user for their birthday</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem
              label="When is your birthday?"
              labelSize="large"
              helpText={"For example, 27 11 2007"}>
              <GoABlock gap="m" direction="row">
                <GoAFormItem label="Day">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="bandNo"
                    type="number"
                    width="60px"
                    min={1}
                    max={31}
                  />
                </GoAFormItem>
                <GoAFormItem label="Month">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="family"
                    type="number"
                    width="60px"
                    min={1}
                    max={12}
                  />
                </GoAFormItem>
                <GoAFormItem label="Year">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="position"
                    type="number"
                    width="88px"
                    min={1900}
                    max={2023}
                  />
                </GoAFormItem>
              </GoABlock>
            </GoAFormItem>
          </Sandbox>

          <h3 id="example-search">Search</h3>
          <Sandbox flags={["reactive"]}>
            <GoABlock gap="m" direction="row">
              <GoAInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
              <GoAButton type="primary" onClick={noop}>
                Search
              </GoAButton>
            </GoABlock>
          </Sandbox>

          <h3 id="example-phone">Phone number</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Phone number">
              <GoAInput onChange={noop} value="" name="phone" leadingContent="+1" />
            </GoAFormItem>
          </Sandbox>

          <h3 id="example-ask-for-costs">Ask a user for dollar amounts or costs</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Tuition">
              <GoAInput onChange={noop} value="" name="tuition" leadingContent="$" />
            </GoAFormItem>
            <GoAFormItem label="Books/Supplies/Instruments">
              <GoAInput onChange={noop} value="" name="book" leadingContent="$" />
            </GoAFormItem>
            <GoAFormItem label="Other costs">
              <GoAInput onChange={noop} value="" name="others" leadingContent="$" />
            </GoAFormItem>
          </Sandbox>

          <h3 id="example-registration-number">Ask a user for their indian registration number</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Indian registration number" labelSize="large">
              <GoABlock gap="m" direction="row">
                <GoAFormItem label="Band #" helpText="3 digits">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="bandNo"
                    min={1}
                    max={999}
                    type="number"
                    width="88px"
                  />
                </GoAFormItem>
                <GoAFormItem label="Family" helpText="Up to 5 digits">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="family"
                    min={1}
                    max={99999}
                    type="number"
                    width="105px"
                  />
                </GoAFormItem>
                <GoAFormItem label="Position" helpText="2 digits">
                  <GoAInput
                    onChange={noop}
                    value=""
                    name="position"
                    min={1}
                    max={99}
                    type="number"
                    width="71px"
                  />
                </GoAFormItem>
              </GoABlock>
            </GoAFormItem>
          </Sandbox>
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }>
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
