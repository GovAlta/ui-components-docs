import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoABadge,
  GoATab,
  GoATabs,
  GoACallout,
  GoACircularProgress,
  GoACircularProgressProps,
} from "@abgov/react-components";
import { resetScrollbars } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=622-13604";
const componentName = "Progress indicator";
const category = Category.FEEDBACK_AND_ALERTS;
const description = "Provide visual feedback to users while loading.";
const relatedComponents = [
  { link: "/components/file-uploader", name: "File uploader" },
  { link: "/components/skeleton-loader", name: "Skeleton loading" },
];

type ComponentPropsType = GoACircularProgressProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function ProgressIndicatorPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    variant: "inline",
    size: "large",
    message: "Loading message...",
    visible: true,
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "radio",
      name: "variant",
      options: ["inline", "fullscreen"],
      value: "inline",
    },
    {
      label: "Size",
      type: "radio",
      name: "size",
      options: ["large", "small"],
      value: "large",
    },
    {
      label: "Progress",
      type: "string",
      name: "progress",
      width: "8ch",
      value: "",
    },
    {
      label: "Message",
      type: "string",
      name: "message",
      width: "50ch",
      value: "Loading message...",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "variant",
      type: "inline | fullscreen",
      description: "Stretch across the full screen or use it inline",
    },
    {
      name: "size",
      type: "large | small",
      description: "Size of the progress indicator",
    },
    {
      name: "progress",
      type: "number",
      description:
        "Set the progress value. Setting this value will change the type from infinite to progress",
    },
    {
      name: "message",
      type: "string",
      description: "Loading message displayed under the progress indicator",
    },
    {
      name: "visible",
      type: "boolean",
      description:
        "Show/hide the page loader. This allows for fade transition to be applied in each transition.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const updatedProps = { ...props, visible: true } as CastingType;

    setComponentBindings(bindings);
    setComponentProps(updatedProps);

    if (props?.variant === "fullscreen") {
      setTimeout(() => {
        setComponentProps({ ...updatedProps, visible: false });
        // Reset body styles after closing the modal, sandbox renders multiple times that do not trigger modal component no-scroll destroy effects
        resetScrollbars();
      }, 3000);
    }
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
            {/* Progress Indicator Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoACircularProgress {...componentProps} />
            </Sandbox>

            {/* Progress Indicator component properties table */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Since there are 0 examples, the "Examples" tab is omitted */}

          <GoATab
            heading={
              <>
                Examples
                <GoABadge type="information" content="0" />
              </>
            }
          >
            <GoACallout heading="We are currently working on design examples for this component" type="important" size="medium" maxWidth="540px">
              {" "}
              <a href="https://design.alberta.ca/get-started/support#:~:text=Raise%20an%20issue-,Talk%20to%20us,-Slack" target="_blank" rel="noreferrer">
                Talk to the design system team
              </a>{" "}
              to contribute examples from your service.
            </GoACallout>
          </GoATab>

          <GoATab heading="Design">
            <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

          <GoATab heading="Accessibility">
            <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
              Detailed accessibility documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}