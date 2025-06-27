import { useContext, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabButton, GoabPopover, GoabTab, GoabTabs } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { propsToString } from "@components/sandbox/BaseSerializer.ts";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  LegacyTestIdProperties,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
//import { ExamplesEmpty } from "@components/empty-states/examples-empty/ExamplesEmpty.tsx";
import { PopoverExamples } from "@examples/popover/PopoverExamples";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-302109";

export default function PopoverPage() {
  const { version } = useContext(LanguageVersionContext);
  const [popoverProps, setPopoverProps] = useState({});
  const [popoverBindings, setPopoverBindings] = useState<ComponentBinding[]>([
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      value: "",
    },
    {
      label: "Min Width",
      type: "string",
      name: "minWidth",
      value: "",
    },
    {
      label: "Position",
      type: "list",
      name: "position",
      options: ["", "above", "below", "auto"],
      value: "",
      defaultValue: "auto",
    },
    {
      label: "Padding",
      type: "boolean",
      name: "padded",
      value: true,
    },
  ]);
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the popover container.",
      defaultValue: "320px",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the popover container.",
      defaultValue: "320px",
      lang: "angular",
    },
    {
      name: "minWidth",
      type: "string",
      description: "Sets the minimum width of the popover container.",
      lang: "react",
    },
    {
      name: "minwidth",
      type: "string",
      description: "Sets the minimum width of the popover container.",
      lang: "angular",
    },
    {
      name: "padded",
      type: "boolean",
      description: "Sets if the popover has padding.",
      defaultValue: "true",
    },
    {
      name: "position",
      type: "above | below | auto",
      description: "Provides control to where the popover content is positioned.",
      defaultValue: "auto",
    },
    {
      name: "target",
      type: "slot",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "angular",
    },
    {
      name: "target",
      type: "ReactNode",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "react",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative.",
      defaultValue: "false",
    },
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the popover container.",
      defaultValue: "320px",
    },
    {
      name: "minWidth",
      type: "string",
      description: "Sets the minimum width of the popover container.",
    },
    {
      name: "padded",
      type: "boolean",
      description: "Sets if the popover has padding.",
      defaultValue: "true",
    },
    {
      name: "position",
      type: "GoabPopoverPosition (above | below | auto)",
      description: "Provides control to where the popover content is positioned.",
      defaultValue: "auto",
    },
    {
      name: "target",
      type: "TemplateRef",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "angular",
    },
    {
      name: "target",
      type: "ReactNode",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "react",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative.",
      defaultValue: "false",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(baseBinding: ComponentBinding[], props: Record<string, unknown>) {
    setPopoverBindings(baseBinding);
    setPopoverProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Popover"
        category={Category.CONTENT_AND_LAYOUT}
        description="A small overlay that opens on demand, used in other components."
        relatedComponents={[
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/header", name: "Header" },
          { link: "/components/tooltip", name: "Tooltip" },
        ]}
        figmaLink={FIGMA_LINK}
        githubLink="Popover"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={popoverBindings} skipRender onChange={onSandboxChange}>
              {/*Must be skipRender because Sandbox doesn't support slot target*/}
              {/*Angular*/}
              {version === "old" && (
                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                <goa-popover ${propsToString(popoverProps, "angular", version)}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                  <div slot="target">
                    <goa-button type="secondary" size="compact">Click me</goa-button>
                  </div>
                </goa-popover>
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                <goab-popover ${propsToString(popoverProps, "angular", version)} [target]="target">
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                  <ng-template #target>
                    <goab-button type="secondary" size="compact">Click me</goab-button>
                  </ng-template>
                </goab-popover>
              `}
                />
              )}

              {/*React*/}
              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const target = (
                  <GoAButton type="secondary" size="compact">
                    Click me
                  </GoAButton>
                );
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const target = (
                  <GoabButton type="secondary" size="compact">
                    Click me
                  </GoabButton>
                );
              `}
                />
              )}

              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                <GoAPopover target={target} ${propsToString(popoverProps, "react", version)}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                </GoAPopover>
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                <GoabPopover target={target} ${propsToString(popoverProps, "react", version)}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                </GoabPopover>
              `}
                />
              )}

              <GoabPopover
                {...popoverProps}
                target={
                  <GoabButton type="secondary" size="compact">
                    Click me
                  </GoabButton>
                }>
                <p>This is a popover</p>
                It can be used for a number of different contexts.
              </GoabPopover>
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
                <GoabBadge type="information" content="3" />
              </>
            }>
            <PopoverExamples />
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
