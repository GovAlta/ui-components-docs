import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoATab, GoATabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { GoABadgeType } from "@abgov/react-components/lib/badge/badge";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

export default function BadgePage() {
  const [badgeProps, setBadgeProps] = useState({
    type: "information" as GoABadgeType,
    content: "Information",
  });
  const [badgeBindings, setBadgeBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "dark", "midtone", "light"],
      value: "information",
    },
    {
      label: "Icon",
      type: "boolean",
      name: "icon",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Information",
    },
    {
      label: "AriaLabel",
      type: "string",
      name: "ariaLabel",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency | dark | midtone | light",
      description: "Define the context and colour of the badge",
      required: true,
    },
    {
      name: "icon",
      type: "boolean",
      description: "Include an icon in the badge",
      defaultValue: "false",
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the badge",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Accessible label",
      lang: "react",
    },
    {
      name: "arialabel",
      type: "string",
      description: "Accessible label",
      lang: "angular",
    },
  ];

  function onSandboxChange(badgeBindings: ComponentBinding[], props: Record<string, unknown>) {
    setBadgeBindings(badgeBindings);
    setBadgeProps(props as { type: GoABadgeType; content: string; [key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Badge"
        category={Category.FEEDBACK_AND_ALERTS}
        description="Small labels which hold small amounts of information, system feedback, or states."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Badge sandbox*/}
          <Sandbox properties={badgeBindings} onChange={onSandboxChange}>
            <GoABadge {...badgeProps} />
          </Sandbox>
          {/*Badge table properties*/}
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
