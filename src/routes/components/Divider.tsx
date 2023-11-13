import {useState} from "react";
import {ComponentBinding} from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import {Category, ComponentHeader} from "@components/component-header/ComponentHeader.tsx";
import {GoABadge, GoADivider, GoATab, GoATabs} from "@abgov/react-components";
import Sandbox from "@components/sandbox/Sandbox.tsx";
import "./AllComponents.css";

export default function DividerPage() {
  const [dividerProps, setDividerProps] = useState({});
  const [dividerBindings, setDividerBindings] = useState<ComponentBinding[]>([
    {
      label: "Top Margin",
      type: "list",
      name: "mt",
      options: ["none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "none",
    },
    {
      label: "Bottom Margin",
      type: "list",
      name: "mb",
      options: ["none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "none",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "mt",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Top margin",
      defaultValue: "none",
    },
    {
      name: "mr",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Right margin",
      defaultValue: "none",
    },
    {
      name: "mb",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Bottom margin",
      defaultValue: "none",
    },
    {
      name: "ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Left margin",
      defaultValue: "none",
    },
  ];

  function onSandboxChange(utilityBindings: ComponentBinding[], props: Record<string, unknown>) {
    setDividerBindings(utilityBindings);
    setDividerProps(props);
  }

  return (
    <div className="divider-page">
      <ComponentHeader
        name="Divider"
        category={Category.UTILITIES}
        description="Dividers are used to indicate a sepearation of layout, or to distinguish large chunks of information on a page."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={dividerBindings} onChange={onSandboxChange} fullWidth>
            <GoADivider {...dividerProps} />
          </Sandbox>

          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }></GoATab>
      </GoATabs>
    </div>
  );
}
