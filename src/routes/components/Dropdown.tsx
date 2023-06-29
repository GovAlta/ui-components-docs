import { useState } from "react";
import { GoADropdown, GoADropdownItem } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding, Sandbox } from "@components/sandbox";

export default function DropdownPage() {

  const [dropdownProps, setDropdownProps] = useState({});
  const [dropdownBindings, setDropdownBindings] = useState<ComponentBinding[]>([
    { label: "Leading Icon", type: "list", name: "leadingIcon", options: ["", "warning"], value: "" },
    { label: "Native", type: "boolean", name: "native", value: false },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDropdownBindings(bindings)
    setDropdownProps(props)
  }

  return (
    <>
      <h1>Dropdown</h1>
      <p>
        Dropdowns hide a long list of options, arranged vertically. A single select menu list is 
        revealed upon interaction with this component.
      </p>
      <Sandbox 
        properties={dropdownBindings} 
        onChange={onChange} 
        flags={["reactive"]}
        note="When using a dropdown inside a modal where there is limited space for the menu items 
        to display, ensure the `native` property is set to `true` for the dropdown to function properly."
      >
        <CodeSnippet lang="typescript" tags="angular" allowCopy={true} code={`
          // non-reactive code
          export class MyComponent {
            onChange(event) {
              // handle change
            }
          }  
        `}/>

        <CodeSnippet lang="typescript" tags={["angular", "reactive"]} allowCopy={true} code={`
          // reactive code
          import { FormControl } from "@angular/forms";
          export class MyComponent {
            reactiveFormCtrl = new FormControl("red");
          }  
        `}/>

        <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
          const [value, setValue] = useState('green');
          function onChange(name: string, value: string | string[]) {
            setValue(value);
          }
        `}/>
      
        <GoADropdown name="colors" value="red" onChange={() => {}} {...dropdownProps}>
          <GoADropdownItem value="red" label="Red" />
          <GoADropdownItem value="green" label="Green" />
          <GoADropdownItem value="blue" label="Blue" />
        </GoADropdown>
      </Sandbox>
    </>
  )

}
