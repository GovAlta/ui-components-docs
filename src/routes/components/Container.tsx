import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoabBadge,
  GoabContainer, GoabContainerProps,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import ContainerExamples from "@examples/container/ContainerExamples.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=1789-12623";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const componentName = "Container";
const description = "Group information, create hierarchy, and show related information.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/accordion", name: "Accordion" },
  { link: "/components/details", name: "Details" },
  { link: "/components/divider", name: "Divider" }
];
type ComponentPropsType = GoabContainerProps;
type CastingType = {
  [key: string]: unknown;
};

export default function ContainerPage() {
  const [containerProps, setContainerProps] = useState<ComponentPropsType>({});

  const [containerBindings, setContainerBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["", "interactive", "info", "error", "success", "important", "non-interactive"],
      value: "",
      defaultValue: "interactive",
    },
    {
      label: "Accent",
      type: "radio",
      name: "accent",
      options: ["thick", "thin", "filled"],
      value: "filled",
      defaultValue: "filled",
    },
    {
      label: "Padding",
      type: "radio",
      name: "padding",
      options: ["relaxed", "compact"],
      value: "relaxed",
      defaultValue: "relaxed",
    },
    {
      label: "Width",
      type: "radio",
      name: "width",
      options: ["full", "content"],
      value: "full",
      defaultValue: "full"
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "interactive | info | error | success | important | non-interactive",
      description: "Sets the container and accent bar styling.",
      defaultValue: "interactive",
    },
    {
      name: "accent",
      type: "thick | thin | filled",
      defaultValue: "filled",
      description: "Sets the style of accent on the container.",
    },
    {
      name: "padding",
      type: "relaxed | compact",
      defaultValue: "relaxed",
      description: "Sets the amount of white space in the container.",
    },
    {
      name: "title",
      type: "slot",
      description:
        "Sets the content in the left of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "actions",
      type: "slot",
      description:
        "Sets the content in the right of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "width",
      type: "full | content",
      defaultValue: "full",
      description: "Sets the width of the container."
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the container.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the container.",
      lang: "angular",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabContainerType (interactive | info | error | success | important | non-interactive)",
      description: "Sets the container and accent bar styling.",
      defaultValue: "interactive",
    },
    {
      name: "accent",
      type: "GoabContainerAccent (thick | thin | filled)",
      defaultValue: "filled",
      description: "Sets the style of accent on the container.",
    },
    {
      name: "padding",
      type: "GoabContainerPadding (relaxed | compact)",
      defaultValue: "relaxed",
      description: "Sets the amount of white space in the container.",
    },
    {
      name: "width",
      type: "GoabContainerWidth (full | content)",
      defaultValue: "full",
      description: "Sets the width of the container."
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the container.",
    },
    {
      name: "title",
      lang: "angular",
      type: "TemplateRef<any>",
      description:
        "Sets the content in the left of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "actions",
      type: "TemplateRef<any>",
      lang: "angular",
      description:
        "Sets the content in the right of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "title",
      lang: "react",
      type: "ReactNode",
      description:
        "Sets the content in the left of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "actions",
      type: "ReactNode",
      lang: "react",
      description:
        "Sets the content in the right of the accent bar. Can only be used with accent=thick.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setContainerBindings(bindings);
    setContainerProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Container"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={containerBindings} onChange={onSandboxChange} fullWidth>
              <GoabContainer {...containerProps}>
                <h2>Detach to use</h2>
                <p>Add things inside me</p>
              </GoabContainer>
            </Sandbox>
            <ComponentProperties oldProperties={oldComponentProperties} properties={componentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="4" />
              </>
            }
          >
            <ContainerExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
