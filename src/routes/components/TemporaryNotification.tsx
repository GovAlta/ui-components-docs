import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import { GoabBadge, GoabTab, GoabTabs, GoabCalloutProps } from "@abgov/react-components";

// == Page props ==

const componentName = "Temporary notification";
const description = "A temporary notification showing a process started or completed.";
const relatedComponents = [
  { link: "/components/callout", name: "Callout" },
  { link: "/components/notification-banner", name: "Notification banner" }
];
type ComponentPropsType = GoabCalloutProps;
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
        relatedComponents={relatedComponents}
      />

      <GoabTabs>
        <GoabTab heading="Code examples">
          <Sandbox properties={componentBindings} onChange={onSandboxChange}>
            <></>
            {/* <GoABadge {...componentProps} /> */}
          </Sandbox>
          <ComponentProperties properties={componentProperties} />
        </GoabTab>

        <GoabTab
          heading={
            <>
              Design guidelines
              <GoabBadge type="information" content="In progress" />
            </>
          }
        ></GoabTab>
      </GoabTabs>
    </>
  );
}
