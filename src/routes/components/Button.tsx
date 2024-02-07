import { useState } from "react";
import {
  GoABadge,
  GoABlock,
  GoAButton,
  GoAButtonGroup,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { GoAModal } from "@components/mock-modal/Modal";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import ICONS from "@routes/components/icons.json";

export default function ButtonPage() {
  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["primary", "submit", "secondary", "tertiary", "start"],
      value: "",
      defaultValue: "primary",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "normal", "compact"],
      value: "",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "destructive"],
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
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "primary | submit | secondary | tertiary | start",
      description: "Define the type of button",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "normal | compact",
      defaultValue: "normal",
      description: "Set the size of button [to compact]",
    },
    {
      name: "variant",
      type: "normal | destructive",
      defaultValue: "normal",
      description: "Style this button to show a destructive action",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disable this button",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Show an icon to the left of the text",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Show an icon to the left of the text",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Show an icon to the right of the text",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Show an icon to the right of the text",
    },
    {
      name: "_click",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when button is clicked",
    },
    {
      name: "onClick",
      lang: "react",
      type: "(e: any) => void",
      description: "Callback function when button is clicked",
    },
  ];
  const noop = () => {};

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonBindings(bindings);
    setButtonProps(props);
  }
  return (
    <>
      <ComponentHeader
        name="Button"
        category={Category.INPUTS_AND_ACTIONS}
        description="Carry out an important action or to navigate to another page."
        relatedComponents={[
          { link: "/components/buttonGroup", name: "Button group" },
          { link: "/components/icon-button", name: "Icon button" },
        ]}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Button Sandbox*/}
          <Sandbox properties={buttonBindings} onChange={SandboxOnChange}>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
          export class SomeOtherComponent {
            onClick(event: Event) {
              console.log('clicked ', event);
            }
          }
        `}
            />
            <GoAButton {...buttonProps} onClick={noop}>
              Primary Button
            </GoAButton>
          </Sandbox>

          {/*Button Table Properties*/}
          <ComponentProperties properties={componentProperties} />

          {/*Button Examples*/}
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>
          

          {/*Button Example 1*/}
          <h3 id="example-ask-address">Ask a user for an address</h3>
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

            <GoAButtonGroup alignment="start" mt="l">
              <GoAButton type="primary" onClick={noop}>
                Submit and continue
              </GoAButton>
              <GoAButton type="secondary" onClick={noop}>
                Cancel
              </GoAButton>
            </GoAButtonGroup>
          </Sandbox>

          {/*Button example 2*/}
          <h3 id="example-confirm-action">Confirm a destructive action</h3>
          <Sandbox flags={["reactive"]}>
            <GoAModal>
              <h3>Are you sure you want to delete this record?</h3>
              <p>You cannot undo this action.</p>

              <GoAButtonGroup alignment="end" mt="l">
                <GoAButton type="secondary" onClick={noop}>
                  Cancel
                </GoAButton>
                <GoAButton type="primary" variant="destructive" onClick={noop}>
                  Delete record
                </GoAButton>
              </GoAButtonGroup>
            </GoAModal>
          </Sandbox>

          {/*Button example 3*/}
          <h3 id="example-disabled-button">Disabled button with a required field</h3>
          <Sandbox flags={["reactive"]}>
            <GoAFormItem label="Input">
              <GoAInput name="input" type="text" value="" onChange={noop} width="400px" />
            </GoAFormItem>

            <GoAButtonGroup alignment="start" mt="l">
              <GoAButton disabled={true} onClick={noop}>
                Confirm
              </GoAButton>
              <GoAButton type="secondary" onClick={noop}>
                Cancel
              </GoAButton>
            </GoAButtonGroup>
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
