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

const componentName = "Microsite header";
const description =
  "Communicate what stage the service is at, connect to <a href='https://www.alberta.ca' target='_blank'>Alberta.ca</a>, and gather feedback on your service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/header", name: "Header" },
];
type ComponentPropsType = GoAHeaderProps;
type CastingType = {
  // add any required props here
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
      type: "self | blank",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerUrlTarget",
      type: "self | blank",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
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
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={micrositeHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoAMicrositeHeader {...micrositeHeaderProps} />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} />
            <MicrositeHeaderExamples />
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
