/**
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import { GoABadge, GoATab, GoATabs, GoABadgeProps } from "@abgov/react-components";


// == Page props ==

const componentName = "[COMPONENT_NAME]";
const description = "";
type ComponentPropsType = GoABadgeProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};


export default function TEMPLATE_Page() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({ });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "dark", "midtone", "light"],
      value: "information",
    },
    // ...
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency | dark | midtone | light",
      required: true,
    },
    // ...
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={Category.FEEDBACK_AND_ALERTS}
        description={description}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={componentBindings} onChange={onSandboxChange}>
            
            <GoABadge {...componentProps} />

          </Sandbox>
          <ComponentProperties properties={componentProperties} />
          
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>

          <h3 id="example-1">
            Example 1
          </h3>
          <Sandbox>
            <GoABadge/>
          </Sandbox>
        </GoATab>
        
        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        ></GoATab>
      </GoATabs>
    </>
  );
}
*/
