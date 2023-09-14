import { BooleanBinding, ComponentBinding, Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { useContext, useEffect, useState } from "react";
import { GoAModal } from "@components/mock-modal/Modal";

import {
  GoABlock,
  GoAButton,
  GoAButtonGroup,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
} from "@abgov/react-components";
import ComponentProperties from "@components/component-properties/ComponentProperties";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { AnchorLinks } from "@components/anchor-links/AnchorLinks.tsx";

export default function ButtonCodeExample() {
  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["primary", "submit", "secondary", "tertiary", "start"],
      value: "primary",
      defaultValue: "primary",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["normal", "compact"],
      value: "normal",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["normal", "destructive"],
      value: "normal",
    },
    {
      label: "Leading Icon",
      type: "boolean",
      name: "leadingIcon",
      value: false,
      checkboxValue: "airplane",
    },
    {
      label: "Trailing Icon",
      type: "boolean",
      name: "trailingIcon",
      value: false,
      checkboxValue: "airplane",
    },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);

  useEffect(() => {
    setButtonProps(mapToButtonProps({}));
  }, []);

  const noop = () => {};

  function onChange(
    bindings: ComponentBinding[],
    props: Record<string, unknown>
  ) {
    setButtonBindings(bindings);
    setButtonProps(mapToButtonProps(props));
  }

  function mapToButtonProps(
    props: Record<string, unknown>
  ): Record<string, unknown> {
    const output: Record<string, unknown> = { ...props };

    for (const [key, value] of Object.entries(props)) {
      const binding = buttonBindings.find(
        (b) => b.name === key && b.type === "boolean"
      ) as BooleanBinding;

      if (binding) {
        if (value === true) {
          output[key] = binding.checkboxValue || binding.value;
        } else if (value === false) {
          delete output[key];
        }
      }
    }

    return output;
  }

  const { isMobile } = useContext(DeviceWidthContext);

  return (
    <>
      <Sandbox properties={buttonBindings} onChange={onChange}>
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          export class SomeOtherComponent {
            onClick() {
              console.log('clicked');
            }
          }
        `}
        />
        <GoAButton {...buttonProps} onClick={noop}>
          Primary Button
        </GoAButton>
      </Sandbox>

      <ComponentProperties
        properties={[
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
        ]}
      />
      <AnchorLinks vertical>
        <a href="#ask-address">Ask a user for an address</a>
        <a href="#confirm-action">Confirm a destructive action</a>
        <a href="#disabled-button">Disabled button in a form</a>
      </AnchorLinks>

      <h3 id="ask-address">Ask a user for an address</h3>
      <Sandbox>
        <GoAFormItem label="Street Address">
          <GoAInput
            name="address"
            type="text"
            value=""
            onChange={noop}
            width="100%"
          />
        </GoAFormItem>
        <GoAFormItem label="Suite or unit #">
          <GoAInput
            name="suite"
            type="text"
            value=""
            onChange={noop}
            width="100%"
          />
        </GoAFormItem>
        <GoAFormItem label="City/town">
          <GoAInput
            name="city"
            type="text"
            value=""
            onChange={noop}
            width="100%"
          />
        </GoAFormItem>

        <GoABlock direction={isMobile ? "column" : "row"}>
          <GoAFormItem label="Provice/territory">
            <GoADropdown onChange={noop} name="province" value="alberta">
              <GoADropdownItem label="Alberta" value="alberta" />
              <GoADropdownItem label="BC" value="bc" />
              <GoADropdownItem label="Manitoba" value="manitoba" />
              <GoADropdownItem label="New Brunswick" value="new-brunswick" />
              <GoADropdownItem
                label="Newfoundland and Labrador"
                value="newfoundland"
              />
              <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
              <GoADropdownItem label="Ontario" value="ontario" />
              <GoADropdownItem
                label="Prince Edward Island"
                value="prince-edward-island"
              />
              <GoADropdownItem label="Quebec" value="quebec" />
              <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
            </GoADropdown>
          </GoAFormItem>

          <GoAFormItem label="Postal Code">
            <GoAInput
              name="postalCode"
              type="text"
              value=""
              onChange={noop}
              width="100%"
            />
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

      <h3 id="confirm-action">Confirm a destructive action</h3>
      <Sandbox>
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

      <h3 id="disabled-button">Disabled button with a required field</h3>
      <Sandbox>
        <GoAFormItem label="Input">
          <GoAInput
            name="input"
            type="text"
            value=""
            onChange={noop}
            width="400px"
          />
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
    </>
  );
}
