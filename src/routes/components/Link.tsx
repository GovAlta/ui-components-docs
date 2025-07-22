import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabTab, GoabTabs, GoabLink } from "@abgov/react-components";
import LinkExamples from "@examples/link/LinkExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import ICONS from "@routes/components/icons.json";


export default function LinkPage() {
  const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303448";
  const [linkProps, setLinkProps] = useState({});

  const [linkBindings, setLinkBindings] = useState<ComponentBinding[]>([
    {
      label: "Leading Icon",
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
    setLinkBindings(bindings);
    setLinkProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Link"
        figmaLink={FIGMA_LINK}
        githubLink="Link"
        category={Category.UTILITIES}
        description="Wraps an anchor element to add icons or margins."
        relatedComponents={[
          { link: "/components/button", name: "Button" },
        ]}
      />

      <GoabTabs initialTab={1}>
        <GoabTab heading="Code playground">
          <Sandbox properties={linkBindings} onChange={onSandboxChange}>

            <GoabLink {...linkProps}>
              <a href="#url">Link</a>
            </GoabLink>

          </Sandbox>
          <ComponentProperties properties={componentProperties} />
        </GoabTab>

        
        <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="1" />
              </>
            }
          >
          <LinkExamples />
        </GoabTab>

        <GoabTab heading="Design">
          <DesignEmpty figmaLink={FIGMA_LINK} />
        </GoabTab>
        
        <GoabTab heading="Accessibility">
          <AccessibilityEmpty figmaLink={FIGMA_LINK} />
        </GoabTab>
      </GoabTabs>
    </>
  );
}