import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabDetails,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { DetailsExamples } from "@examples/details/DetailsExamples.tsx";

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
        relatedComponents={[
          { link: "/components/accordion", name: "Accordion" },
          { link: "/components/form-item", name: "Form item" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
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

            <DetailsExamples />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
