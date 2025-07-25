import {
  GoabBadge,
  GoabHeaderProps,
  GoabMicrositeHeader,
  GoabTab,
  GoabTabs,
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
import { GoabServiceLevel } from "@abgov/ui-components-common";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=2-81";

const componentName = "Microsite header";
const description =
  "Communicate what stage the service is at, connect to Alberta.ca, and gather feedback on your service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
type ComponentPropsType = GoabHeaderProps;
const relatedComponents = [{ link: "/components/header", name: "Header" }];
type CastingType = {
  // add any required props here
  type: GoabServiceLevel;
  [key: string]: unknown;
};
export default function MicrositeHeaderPage() {
  const [micrositeHeaderProps, setMicrositeHeaderProps] = useState<ComponentPropsType>({
    type: "alpha" as GoabServiceLevel,
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

  const oldComponentProperties: ComponentProperty[] = [
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
      name: "_feedbackClick",
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabServiceLevel (alpha | beta | live)",
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
      type: "string | TemplateRef",
      lang: "angular",
      description: "Displayed on the right-hand side of the header.",
    },
    {
      name: "feedbackUrl",
      type: "string",
      description: "Url to feedback page that will be displayed when provided.",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "feedbackUrlTarget",
      type: "GoabLinkTarget(self | blank)",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerUrlTarget",
      type: "GoabLinkTarget (self | blank)",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "onFeedbackClick",
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
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Microsite header"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={micrositeHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoabMicrositeHeader {...micrositeHeaderProps} />
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
                <GoabBadge type="information" content="2" />
              </>
            }>
            <MicrositeHeaderExamples />
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
