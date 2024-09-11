import { useState } from "react";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabTab,
  GoabTabs,
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
import { ComponentContent } from "@components/component-content/ComponentContent";

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
    {label: "Width", type: "string", name: "width", value: ""},
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "primary | submit | secondary | tertiary | start",
      description: "Sets the type of button.",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "normal | compact",
      defaultValue: "normal",
      description: "Sets the size of button.",
    },
    {
      name: "variant",
      type: "normal | destructive",
      defaultValue: "normal",
      description: "Styles the button to show a destructive action.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the button.",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "width",
      type: "string",
      description: "Sets the width of the button.",
    },
    {
      name: "_click",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when button is clicked.",
    },
    {
      name: "onClick",
      lang: "react",
      type: "(e: any) => void",
      description: "Callback function when button is clicked.",
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
  const noop = () => { };

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

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Button Sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
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
              <GoabButton {...buttonProps} onClick={noop}>
                Primary Button
              </GoabButton>
            </Sandbox>

            {/*Button Table Properties*/}
            <ComponentProperties properties={componentProperties} />

            {/*Button Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>


            {/*Button Example 1*/}
            <h3 id="component-example-ask-address">Ask a user for an address</h3>
            <Sandbox flags={["reactive"]}>
              
            <GoabBlock gap="xl" direction="column">
              <GoabFormItem label="Street Address">
                <GoabInput name="address" type="text" value="" onChange={noop} width="100%" />
              </GoabFormItem>
              <GoabFormItem label="Suite or unit #">
                <GoabInput name="suite" type="text" value="" onChange={noop} width="100%" />
              </GoabFormItem>
              <GoabFormItem label="City/town">
                <GoabInput name="city" type="text" value="" onChange={noop} width="100%" />
              </GoabFormItem>

              <GoabBlock direction={"row"}>
                <GoabFormItem label="Provice/territory">
                  <GoabDropdown onChange={noop} name="province" value="alberta">
                    <GoabDropdownItem label="Alberta" value="alberta" />
                    <GoabDropdownItem label="BC" value="bc" />
                    <GoabDropdownItem label="Manitoba" value="manitoba" />
                    <GoabDropdownItem label="New Brunswick" value="new-brunswick" />
                    <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland" />
                    <GoabDropdownItem label="Nova Scotia" value="nova-scotia" />
                    <GoabDropdownItem label="Ontario" value="ontario" />
                    <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island" />
                    <GoabDropdownItem label="Quebec" value="quebec" />
                    <GoabDropdownItem label="Saskatchewan" value="saskatchewan" />
                  </GoabDropdown>
                </GoabFormItem>

                <GoabFormItem label="Postal Code">
                  <GoabInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
                </GoabFormItem>
              </GoabBlock>
              
             </GoabBlock>
              
              <GoabButtonGroup alignment="start" mt="2xl">
                <GoabButton type="primary" onClick={noop}>
                  Submit and continue
                </GoabButton>
                <GoabButton type="secondary" onClick={noop}>
                  Cancel
                </GoabButton>
              </GoabButtonGroup>
            </Sandbox>

            {/*Button example 2*/}
            <h3 id="component-example-confirm-action">Confirm a destructive action</h3>
            <Sandbox flags={["reactive"]}>
              <GoAModal heading="Are you sure you want to delete this record?">
                <p>You cannot undo this action.</p>

                <GoabButtonGroup alignment="end" mt="l">
                  <GoabButton type="secondary" onClick={noop}>
                    Cancel
                  </GoabButton>
                  <GoabButton type="primary" variant="destructive" onClick={noop}>
                    Delete record
                  </GoabButton>
                </GoabButtonGroup>
              </GoAModal>
            </Sandbox>

            {/*Button example 3*/}
            <h3 id="component-example-disabled-button">Disabled button with a required field</h3>
            <Sandbox flags={["reactive"]}>
              <GoabFormItem label="Name" requirement="required">
                <GoabInput name="input" type="text" value="" onChange={noop} width="100%" />
              </GoabFormItem>

              <GoabButtonGroup alignment="start" mt="l">
                <GoabButton disabled={true} onClick={noop}>
                  Confirm
                </GoabButton>
                <GoabButton type="secondary" onClick={noop}>
                  Cancel
                </GoabButton>
              </GoabButtonGroup>
            </Sandbox>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
