import { useState } from "react";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { LinearProgressAutoExample } from "@examples/linear-progress/linear-progress-auto-example";
import {
  GoabBadge,
  GoabLinearProgress,
  GoabLinearProgressProps,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";

type ComponentPropsType = GoabLinearProgressProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

const FIGMA_LINK =
  "https://figma.com/design/3pb2IK8s2QUqWieH79KdN7/❖-Component-library-%7C-DDD?node-id=41625-1999968&p=f";
const componentName = "Linear Progress indicator";
const category = Category.FEEDBACK_AND_ALERTS;
const description = "Provide visual feedback to users while loading.";
const relatedComponents = [
  { link: "/components/circular-progress-indicator", name: "Circular Progress indicator" },
  { link: "/components/file-uploader", name: "File uploader" },
  { link: "/components/skeleton-loader", name: "Skeleton loading" },
];

export default function LinearProgressIndicatorPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    progress: 10,
    percentVisibility: "visible",
  });
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Progress",
      type: "number",
      name: "progress",
      width: "8ch",
      value: 10,
    },
    {
      label: "Percent Visibility",
      name: "percentVisibility",
      type: "radio",
      options: ["visible", "hidden"],
      value: "visible",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "progress",
      type: "number",
      description:
        "Set the progress value to a number between 0 and 100. Leave this as undefined for an indeterminate progress bar, set this value will change the type from indeterminate to progress bar",
    },
    {
      name: "percentVisibility",
      type: "string (inline | fullscreen)",
      description: "Stretch across the full screen or use it inline",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Provides an accessible label for the progress indicator",
    },
    {
      name: "ariaLabelledby",
      type: "string",
      description: "Identifies the element that labels the progress indicator",
    },
    TestIdProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const updatedProps = { ...props } as CastingType;

    setComponentBindings(bindings);
    setComponentProps(updatedProps);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Progress indicator"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={componentBindings}
              onChange={onSandboxChange}
              variableNames={["visible"]}
              fullWidth={true}>
              <GoabLinearProgress {...componentProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }>
            <SandboxHeader exampleTitle="Indeterminate Progress"></SandboxHeader>
            <GoabLinearProgress progress={undefined} />
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code="<GoabLinearProgress progress={undefined} />"
            />
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code="<goab-linear-progress />"
            />

            <SandboxHeader exampleTitle="Indeterminate Progress, no percentage"></SandboxHeader>
            <GoabLinearProgress progress={undefined} percentVisibility="hidden" />
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`<GoabLinearProgress progress={undefined} percentVisibility="hidden" />`}
            />
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`<goab-linear-progress [percentVisibility]="'hidden'" />`}
            />

            <SandboxHeader exampleTitle="Automatically increasing progress"></SandboxHeader>
            <LinearProgressAutoExample />
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
