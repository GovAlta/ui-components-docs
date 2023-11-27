import {useState} from "react";
import {ComponentBinding, Sandbox} from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import {Category, ComponentHeader} from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoABlock,
  GoAButton,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import ICONS from "./icons.json";
import {CodeSnippet} from "@components/code-snippet/CodeSnippet.tsx";

export default function TextFieldPage() {
  const [textFieldProps, setTextFieldProps] = useState({
    name: "item",
    value: "",
  });
  const [textFieldBindings, setTextFieldBindings] = useState<ComponentBinding[]>([
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
      label: "Auto Capitalization",
      type: "list",
      name: "autoCapitalize",
      options: ["", "on", "off", "none", "sentences", "words", "characters"],
      value: "",
    },
    {
      label: "ARIA label",
      type: "string",
      value: "",
      name: "ariaLabel",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "text | number | password | email | search | tel | date | datetime-locale | time | url | week",
      defaultValue: "text",
      description: "Sets the type of the input field",
    },
    {
      name: "name",
      type: "string",
      description: "Name of input value that is received in the _change event.",
    },
    {
      name: "value",
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
    setTextFieldBindings(bindings);
    setTextFieldProps(props as {name: string; value: string; [key: string]: unknown});
  }

  // For sandbox demo function
  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name="Text field"
        category={Category.INPUTS_AND_ACTIONS}
        description="Let user enters and input text for a single line of information."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Input sandbox*/}
          <Sandbox properties={textFieldBindings} onChange={onSandboxChange} flags={["reactive"]}>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
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

            <GoAFormItem label="Input label">
              <GoAInput {...textFieldProps} onChange={noop} />
            </GoAFormItem>
          </Sandbox>

          {/*Input component properties table*/}
          <ComponentProperties properties={componentProperties} />

          {/*Examples*/}
          <GoABlock gap="xs" direction="column" mt="2xl" mb="3xl">
            <a href="#ask-user-for-an-address">Ask a user for an address</a>
            <a href="#ask-user-for-birthday">Ask a user for their birthday</a>
            <a href="#search">Search</a>
            <a href="#phone">Phone number</a>
            <a href="#ask-for-costs">Ask a user for dollar amounts or costs</a>
            <a href="#registration-number">Ask a user for their indian registration number</a>
          </GoABlock>

          <h3 id="ask-user-for-an-address">Ask a user for an address </h3>
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

          <h3 id="ask-user-for-birthday">Ask a user for their birthday</h3>
          <Sandbox flags={["reactive"]}>
            <GoABlock gap="none" direction="column">
              <h3>When is your birthday?</h3>
              <GoABlock gap="m" direction="row">
                <GoAFormItem label="Day">
                  <GoAInput onChange={noop} value="" name="bandNo" type="number" width="60px" min={1} max={31} maxLength={2} />
                </GoAFormItem>
                <GoAFormItem label="Month">
                  <GoAInput onChange={noop} value="" name="family" type="number" width="60px" min={1} max={12} maxLength={2} />
                </GoAFormItem>
                <GoAFormItem label="Year">
                  <GoAInput onChange={noop} value="" name="position" type="number" width="88px" min={1900} max={2023} maxLength={4} />
                </GoAFormItem>
              </GoABlock>
            </GoABlock>
          </Sandbox>

          <h3 id="search">Search</h3>
          <Sandbox flags={["reactive"]}>
            <GoABlock gap="m" direction="row">
              <GoAInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
              <GoAButton type="primary" onClick={noop}>
                Search
              </GoAButton>
            </GoABlock>
          </Sandbox>

          <h3 id="phone">Phone number</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Phone number">
              <GoAInput onChange={noop} value="" name="phone" leadingContent={<span>+1</span>} />
            </GoAFormItem>
          </Sandbox>

          <h3 id="ask-for-costs">Ask a user for dollar amounts or costs</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Tuition">
              <GoAInput onChange={noop} value="" name="tuition" leadingContent={<span>$</span>} />
            </GoAFormItem>
            <GoAFormItem label="Books/Supplies/Instruments">
              <GoAInput onChange={noop} value="" name="book" leadingContent={<span>$</span>} />
            </GoAFormItem>
            <GoAFormItem label="Other costs">
              <GoAInput onChange={noop} value="" name="others" leadingContent={<span>$</span>} />
            </GoAFormItem>
          </Sandbox>

          <h3 id="registration-number">Ask a user for their indian registration number</h3>
          <Sandbox flags={["reactive"]}>
            <GoABlock gap="none" direction="column">
              <h3>Indian registration number</h3>
              <GoABlock gap="m" direction="row">
              <GoAFormItem label="Band #" helpText="3 digits">
                <GoAInput onChange={noop} value="" name="bandNo" max={999} maxLength={3} type="number" width="88px" />
              </GoAFormItem>
              <GoAFormItem label="Family" helpText="Up to 5 digits">
                <GoAInput onChange={noop} value="" name="family" max={99999} maxLength={5} type="number" width="105px" />
              </GoAFormItem>
              <GoAFormItem label="Position" helpText="2 digits">
                <GoAInput onChange={noop} value="" name="position" max={99} maxLength={2} type="number" width="71px" />
              </GoAFormItem>
              </GoABlock>
            </GoABlock>
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
