import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import { GoABadge, GoATab, GoATabs, GoACalloutProps } from "@abgov/react-components";

// == Page props ==

const componentName = "Temporary notification";
const description = "A temporary notification showing a process started or completed.";
type ComponentPropsType = GoACalloutProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function TEMPLATE_Page() {
  const [_componentProps, setComponentProps] = useState<ComponentPropsType>({});

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["basic"],
      value: "basic",
    },
    // ...
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "basic",
      description: "",
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
            {/* <GoABadge {...componentProps} /> */}
          </Sandbox>
          <ComponentProperties properties={componentProperties} />
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
