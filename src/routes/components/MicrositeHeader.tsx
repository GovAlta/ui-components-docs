import {
  GoABadge,
  GoAHeaderProps,
  GoAMicrositeHeader,
  GoAServiceLevel,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { ComponentContent } from "@components/component-content/ComponentContent";
import MicrositeHeaderExamples from "@examples/microsite-header/MicrositeHeaderExamples.tsx";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=2-81";
const componentName = "Microsite header";
const category = Category.STRUCTURE_AND_NAVIGATION;
const description =
  "Communicate what stage the service is at, connect to Alberta.ca, and gather feedback on your service from users.";
const relatedComponents = [
  { link: "/components/footer", name: "Footer" },
  { link: "/components/header", name: "Header" },
];

type ComponentPropsType = GoAHeaderProps;
type CastingType = {
  type: GoAServiceLevel;
  [key: string]: unknown;
};

export default function MicrositeHeaderPage() {
  const [micrositeHeaderProps, setMicrositeHeaderProps] = useState<ComponentPropsType>({
    type: "alpha" as GoAServiceLevel,
  });
  const [micrositeHeaderBindings, setMicrositeHeaderBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "dropdown",
      name: "type",
      options: ["alpha", "beta", "live"],
      value: "alpha",
    },
    {
      label: "Version",
      type: "string",
      name: "version",
      value: "",
    },
    {
      label: "Feedback url",
      type: "string",
      name: "feedbackUrl",
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "",
    },
    {
      label: "Feedback url target",
      type: "dropdown",
      name: "feedbackUrlTarget",
      options: ["blank", "self"],
      value: "blank",
    },
    {
      label: "Header url target",
      type: "dropdown",
      name: "headerUrlTarget",
      options: ["blank", "self"],
      value: "blank",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "alpha | beta | live",
      required: true,
    },
    {
      name: "version",
      type: "string | ReactNode",
      lang: "react",
      description: "Displayed on the right-hand side of the header.",
    },
    {
      name: "version",
      type: "string | slot",
      lang: "angular",
      description: "Displayed on the right-hand side of the header.",
    },
    {
      name: "feedbackUrl",
      type: "string",
      lang: "react",
      description: "Url to feedback page that will be displayed when provided.",
    },
    {
      name: "feedbackurl",
      type: "string",
      lang: "angular",
      description: "Url to feedback page that will be displayed when provided.",
    },
    {
      name: "maxContentWidth",
      type: "string",
      lang: "react",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "maxcontentwidth",
      type: "string",
      lang: "angular",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "feedbackUrlTarget",
      type: "self | blank",
      lang: "react",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "feedbackurltarget",
      type: "self | blank",
      lang: "angular",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerUrlTarget",
      type: "self | blank",
      lang: "react",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerurltarget",
      type: "self | blank",
      lang: "angular",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "hasfeedbackhandler",
      type: "boolean",
      lang: "angular",
      defaultValue: "false",
      description:
        "Set to true to handle the feedback click via _feedbackClick custom event handler.",
    },
    {
      name: "_feedbackclick",
      lang: "angular",
      type: "CustomEvent",
      description: "Function invoked when feedback link is clicked.",
    },
    {
      name: "onFeedbackClick",
      lang: "react",
      type: "() => void",
      description: "Function invoked when feedback link is clicked.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setMicrositeHeaderProps(props as CastingType);
    setMicrositeHeaderBindings(bindings);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            {/* Microsite Header Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={micrositeHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoAMicrositeHeader {...micrositeHeaderProps} />
            </Sandbox>

            {/* Component properties table */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>
            <GoATab
              heading={
                <>
                  Examples
                  <GoABadge type="information" content="2" />
                </>
              }
            >
              <MicrositeHeaderExamples />

          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}