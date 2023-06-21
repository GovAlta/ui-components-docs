import { useState } from "react";
import { GoACheckbox } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

export default function CheckboxPage() {

  const [checkboxProps, setCheckboxProps] = useState({});
  const [checkboxBindings, setCheckboxBindings] = useState<ComponentBinding[]>([ 
    { label: "Checked", type: "boolean", name: "checked", value: false, dynamic: true, hidden: true},
  ])

  const noop = () => {}

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setCheckboxBindings(bindings)
    setCheckboxProps(props)
  }

  return (
    <>
      <h1>Checkbox</h1>
      <p>
        Checkbox allows users to ...
      </p>
      <Sandbox 
        properties={checkboxBindings}
        onChange={onChange} 
        note=""
      >
        <CodeSnippet lang="typescript" tags="angular" allowCopy={true} code={`
          export class SomeOtherComponent {
            checked = false;
            onChange(event) {
              const {name, checked, value} = event.detail;
              // ..
            }
          }
        `}/>

        <CodeSnippet lang="typescript" tags={["angular", "reactive"]} allowCopy={true} code={`
          import { FormControl } from "@angular/forms";
          export class SomeOtherComponent {
            reactiveFormCtrl = new FormControl("red");
          }
        `}/>

        <CodeSnippet lang="tsx" tags="react" allowCopy={true} code={`
          // react code
        `}/>

        <GoACheckbox name="someName" checked={false} {...checkboxProps} onChange={noop}></GoACheckbox>
      </Sandbox>
    </>
  )
}
