import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoALinkButton, GoATab, GoATabs, GoABadge } from "@abgov/react-components";
import ICONS from "@routes/components/icons.json";

export default function LinkButtonPage() {
  const [linkButtonProps, setLinkButtonProps] = useState({});
  const noop = () => {};

  const [linkButtonBindings, setLinkButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
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
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the left of the link.",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the left of the link.",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the right of the link.",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the right of the link.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setLinkButtonBindings(bindings);
    setLinkButtonProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Link button"
        category={Category.UTILITIES}
        description="A button that looks like a link."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={linkButtonBindings} onChange={onSandboxChange}>

            <GoALinkButton {...linkButtonProps}>
              Link button
            </GoALinkButton>

          </Sandbox>
          <ComponentProperties properties={componentProperties} />

          {/*Link Examples*/}
          <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

          {/*Link Example 1*/}
          <h3 id="component-example-back">Return to a previous page</h3>

          <Sandbox>
            <GoALinkButton
              leadingIcon="chevron-back"
              mb="2xl"
              onClick={noop}
            >
              Back
            </GoALinkButton>
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
