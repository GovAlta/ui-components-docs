import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabText, GoabTab, GoabTabs, GoabBadge } from "@abgov/react-components";

export default function TextPage() {
  const [textProps, setTextProps] = useState({});

  const [textBindings, setTextBindings] = useState<ComponentBinding[]>([
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "heading-xl", "heading-l", "heading-m", "heading-s", "heading-xs", "body-l", "body-m", "body-s", "body-xs"],
      value: "",
    },
    {
      label: "As",
      type: "list",
      name: "as",
      options: ["", "h1", "h2", "h3", "h4", "h5", "span", "div", "p" ],
      value: "",
    },
    {
      label: "Max width",
      type: "string",
      name: "maxWidth",
      value: ""
    },    
    {
      label: "Color",
      type: "list",
      name: "color",
      options: ["", "primary", "secondary"],
      value: ""
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
      name: "as",
      type: "h1 | h2 | h3 | h4 | h5 | span | div | p",
      description: "Sets the tag and text size.",
      defaultValue: "div"
    },
    {
      name: "size",
      type: "heading-xl | heading-l | heading-m | heading-s | heading-xs | body-l | body-m | body-s | body-xs",
      description: "Overrides the text size from the 'as' property."
    },
    {
     name: "maxWidth",
     type: "string",
     description: "Sets the max width.",
     defaultValue: "65ch"
    },
     {
      name: "color",
      type: "primary | secondary",
      description: "Sets the text colour.",
      defaultValue: "primary"
     },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setTextBindings(bindings);
    setTextProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Text"
        category={Category.CONTENT_AND_LAYOUT}
        description="Provides consistent sizing, spacing, and colour to written content."
      />

      <GoabTabs>
        <GoabTab heading="Code examples">
          <Sandbox properties={textBindings} onChange={onSandboxChange}>
            
            <GoabText {...textProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </GoabText>

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
