import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoabBadge,
  GoabTab,
  GoabTabs,
  GoabCircularProgress,
  GoabCircularProgressProps, GoabButton
} from "@abgov/react-components";
import { resetScrollbars } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Progress indicator";
const description = "Provide visual feedback to users while loading.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/file-uploader", name: "File uploader" },
  { link: "/components/skeleton-loader", name: "Skeleton loading" }
];
type ComponentPropsType = GoabCircularProgressProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function ProgressIndicatorPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    variant: "inline",
    size: "large",
    message: "Loading message...",
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
      type: "number",
      name: "progress",
      width: "8ch",
    },
    {
      label: "Message",
      type: "string",
      name: "message",
      width: "50ch",
      value: "Loading message...",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "variant",
      type: "GoabCircularProgressVariant (inline | fullscreen)",
      description: "Stretch across the full screen or use it inline",
    },
    {
      name: "size",
      type: "GoabCircularProgressSize (large | small)",
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
    TestIdProperty,
  ];

  // Sandbox helpers
  const [visible, setVisible] = useState<boolean>(true);

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const updatedProps = { ...props} as CastingType;

    setComponentBindings(bindings);
    setComponentProps(updatedProps);
    if (props?.variant === "fullscreen") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  const openFullScreenProgress = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      // reset body styles after closing the modal, sandbox renders multiple times that not trigger modal component no-scroll destroy effects
      resetScrollbars();
    }, 3000);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange} variableNames={["visible"]}>
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    const [visible, setVisible] = useState(${visible});
                    ${componentProps.variant === 'fullscreen' ? `
                    function onClick() {
                      setVisible(true);
                      setTimeout(() => {
                        setVisible(false);
                      }, 3000);
                    }` : ''}
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    export class ExampleComponent {
                      visible = ${visible};
                      ${componentProps.variant === 'fullscreen' ? `
                      onClick() {
                      this.visible = true;
                      setTimeout(() => {
                        this.visible = false;
                      }, 3000);
                    }` : ''}
                `}
              />
              {componentProps.variant === "fullscreen" && <GoabButton onClick={openFullScreenProgress}>Show Fullscreen</GoabButton>}
              <GoabCircularProgress {...componentProps} visible={visible} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
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
      </ComponentContent>
    </>
  );
}
