import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabHeroBanner, GoabTab, GoabTabs, GoabBadge } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { HeroBannerExamples } from "@examples/hero-banner/HeroBannerExamples.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=622-14412";

export default function HeroBannerPage() {
  const [heroBannerProps, setHeroBannerProps] = useState({
    heading: "Heading",
  });
  const relatedComponents = [{ link: "/components/header", name: "Header" }];
  const [heroBannerBindings, setHeroBannerBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Heading",
    },
    {
      label: "Background URL",
      type: "string",
      name: "backgroundUrl",
      value: "",
    },
    {
      label: "Min height",
      type: "string",
      name: "minHeight",
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "",
    },
    {
      label: "Background color",
      type: "string",
      name: "backgroundColor",
      value: "",
    },
    {
      label: "Text color",
      type: "string",
      name: "textColor",
      value: "",
    },
  ]);
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      description: "Main heading text",
      required: true,
    },
    {
      name: "backgroundurl",
      type: "string",
      description: "Background image url",
      lang: "angular",
    },
    {
      name: "backgroundUrl",
      type: "string",
      description: "Background image url",
      lang: "react",
    },
    {
      name: "minheight",
      type: "string",
      description: "Set the height of the Hero Banner",
      lang: "angular",
      defaultValue: "600px",
    },
    {
      name: "minHeight",
      type: "string",
      description: "Sets the height of the Hero Banner",
      lang: "react",
      defaultValue: "600px",
    },
    {
      name: "maxcontentwidth",
      type: "string",
      description: "Maximum width of the content area",
      lang: "angular",
      defaultValue: "100%",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      lang: "react",
      defaultValue: "100%",
    },
    {
      name: "backgroundcolor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      lang: "angular",
      defaultValue: "#f8f8f8",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      lang: "react",
      defaultValue: "#f8f8f8",
    },
    {
      name: "textcolor",
      type: "string",
      description: "Text color within the hero banner",
      lang: "angular",
      defaultValue: "#333",
    },
    {
      name: "textColor",
      type: "string",
      description: "Text color within the hero banner",
      lang: "react",
      defaultValue: "#333",
    },
    {
      name: "actions",
      type: "slot",
      description: "Buttons displayed in the bottom left of the hero banner",
      lang: "angular",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      description: "Main heading text",
    },
    {
      name: "backgroundUrl",
      type: "string",
      description: "Background image url",
    },
    {
      name: "minHeight",
      type: "string",
      description: "Sets the height of the Hero Banner",
      lang: "react",
      defaultValue: "600px",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      defaultValue: "#f8f8f8",
    },
    {
      name: "textColor",
      type: "string",
      description: "Text color within the hero banner",
      defaultValue: "#333",
    },
    {
      name: "testId",
      type: "string",
      description: "Test ID for the component",
    },
    {
      name: "actions",
      type: "slot",
      description: "Buttons displayed in the bottom left of the hero banner",
      lang: "angular",
    },
  ];

  function onSandboxChange(heroBannerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setHeroBannerBindings(heroBannerBindings);
    setHeroBannerProps(props as { heading: string; [key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Hero banner"
        category={Category.CONTENT_AND_LAYOUT}
        description="A visual band of text, including a background colour or image and a call to action."
        githubLink="Hero banner"
        figmaLink={FIGMA_LINK}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={heroBannerBindings} fullWidth={true} onChange={onSandboxChange}>
              <GoabHeroBanner {...heroBannerProps}>
                Resources are available to help Alberta entrepreneurs and small businesses start,
                grow and succeed.
              </GoabHeroBanner>
            </Sandbox>
            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="1" />
              </>
            }>
            <HeroBannerExamples />
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
