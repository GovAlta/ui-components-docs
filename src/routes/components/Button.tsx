import { useState } from "react";
import { GoABlock, GoAButton, GoADropdown, GoADropdownItem, GoAFormItem, GoAInput } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

export default function DropdownPage() {

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

      <Sandbox
        flags={["reactive"]}
        onChange={onChange}
        note="Used to carry out the primary action. Don’t use more than one primary button in a section or screen."
      >

        <GoABlock direction="column">
          <GoAFormItem label="Street Address">
            <GoAInput name="address" type="text" value="" onChange={noop} width="400px" />
          </GoAFormItem>
          <GoAFormItem label="Suite or unit #">
            <GoAInput name="suite" type="text" value="" onChange={noop} width="400px" />
          </GoAFormItem>
          <GoAFormItem label="City/town">
            <GoAInput name="city" type="text" value="" onChange={noop} width="400px" />
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
              <GoAInput name="postalCode" type="text" value="" onChange={noop} width="190px" />
            </GoAFormItem>
          </GoABlock>
        </GoABlock>

      </Sandbox>
    </>
  )

}
