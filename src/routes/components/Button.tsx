import { useState } from "react";
import { GoABlock, GoAButton, GoAButtonGroup, GoADropdown, GoADropdownItem, GoAFormItem, GoAInput } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { GoAModal } from "@components/mock-modal/Modal"

export default function ButtonPage() {
  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    { label: "Type", type: "list", name: "type", options: ["", "primary", "secondary", "tertiary"], value: "", defaultValue: "primary" },
    { label: "Size", type: "list", name: "size", options: ["", "normal", "compact"], value: "" },
    { label: "Variant", type: "list", name: "variant", options: ["", "normal", "destructive"], value: "" },
    { label: "Leading Icon", type: "list", name: "leadingIcon", options: ["", "warning"], value: "" },
    { label: "Trailing Icon", type: "list", name: "trailingIcon", options: ["", "warning"], value: "" },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ])

  const noop = () => { }

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonBindings(bindings)
    setButtonProps(props)
  }

  return (
    <>
      <h1>Button</h1>
      <p>
        Buttons allow users to perform an action or to navigate to another page. They have multiple
        styles for various needs, and are ideal for calling attention to where a user needs to do
        something or so they can move forward in a flow.
      </p>
      <Sandbox
        properties={buttonBindings}
        onChange={onChange}
        note="Used to carry out the primary action. Don’t use more than one primary button in a section or screen."
      >
        <CodeSnippet lang="typescript" tags="angular" allowCopy={true} code={`
          export class SomeOtherComponent {
            onClick() {
              console.log('clicked');
            }
          }
        `}>
        </CodeSnippet>

        <GoAButton {...buttonProps} onClick={noop}>Click Me</GoAButton>
      </Sandbox>

      <h3>Ask a user for an address</h3>

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
        <GoABlock direction="row">
          <GoAFormItem label="Provice/territory">
            <GoADropdown onChange={noop} name="province" value="alberta">
              <GoADropdownItem label="Alberta" value="alberta" />
              <GoADropdownItem label="BC" value="bc" />
              <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
            </GoADropdown>
          </GoAFormItem>
          <GoAFormItem label="Postal Code">
            <GoAInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
          </GoAFormItem>
        </GoABlock>

        <GoAButtonGroup alignment="start" mt="l">
          <GoAButton type="primary" onClick={noop}>Submit and continue</GoAButton>
          <GoAButton type="secondary" onClick={noop}>Cancel</GoAButton>
        </GoAButtonGroup>
      </Sandbox>

      <h3>Confirm a destructive action</h3>

      <Sandbox>
        <GoAModal>
          <h3>Are you sure you want to delete this record?</h3>
          <p>You cannot undo this action.</p>
          <GoAButtonGroup alignment="end" mt="l">
            <GoAButton type="secondary" onClick={noop}>Cancel</GoAButton>
            <GoAButton type="primary" variant="destructive" onClick={noop}>Delete record</GoAButton>
          </GoAButtonGroup>
        </GoAModal>
      </Sandbox>

      <h3>Disabled button with a required field</h3>

      <Sandbox flags={["reactive"]}>
        <GoAFormItem label="Input">
          <GoAInput name="input" type="text" value="" onChange={noop} width="400px" />
        </GoAFormItem>
        <GoAButtonGroup alignment="start" mt="l">
          <GoAButton disabled={true} onClick={noop}>Confirm</GoAButton>
          <GoAButton type="secondary" onClick={noop}>Cancel</GoAButton>
        </GoAButtonGroup>
      </Sandbox>
    </>
  )

}
