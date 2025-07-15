import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabDetails, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { DetailsExamples } from "@examples/details/DetailsExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=15931-553576";

export default function DetailsPage() {
  const [detailsProps, setDetailsProps] = useState({
    heading: "Detail Heading",
  });
  const [detailsBindings, setDetailsBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Detail Heading",
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
      name: "heading",
      type: "string",
      required: true,
      description: "The title heading",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if details is expanded or not",
      defaultValue: "false",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the details.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the details.",
      lang: "angular",
    },
    LegacyMarginProperty,
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "The title heading",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if details is expanded or not",
      defaultValue: "false",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the details.",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDetailsProps(props as { heading: string; [key: string]: unknown });
    setDetailsBindings(bindings);
  }

  return (
    <>
      <ComponentHeader
        name="Details"
        category={Category.CONTENT_AND_LAYOUT}
        description="Let users reveal more detailed information when they need it."
        figmaLink={FIGMA_LINK}
        githubLink="Details"
        relatedComponents={[
          { link: "/components/accordion", name: "Accordion" },
          { link: "/components/form-item", name: "Form item" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={detailsBindings} onChange={onSandboxChange} fullWidth>
              <GoabDetails {...detailsProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus, sed
                sodales lectus. Aliquam sed volutpat velit. Sed in lacus ut dui placerat accumsan
                malesuada quis erat. Aenean mi diam, rhoncus vitae justo eu, venenatis maximus nunc.
                In vel est commodo, porttitor sem vel, tincidunt ipsum. In hac habitasse platea
                dictumst. Mauris varius mollis dui. Aenean ut dui eu arcu rutrum auctor. Curabitur
                cursus velit vel libero sollicitudin tincidunt. Proin tincidunt, enim et ultrices
                rhoncus, nibh leo imperdiet sapien, sed porttitor ipsum nulla non massa. Nulla
                facilisi.
              </GoabDetails>
            </Sandbox>
            <ComponentProperties
              oldProperties={oldComponentProperties}
              properties={componentProperties}
            />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }
          >
            <DetailsExamples />
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
