import { useState, useContext } from "react";
import { GoabBadge, GoabContainer, GoabTab, GoabTabs } from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { TabsExamples } from "@examples/tabs/TabsExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const componentName = "Tabs";
const description =
  "Let users navigate between related sections of content, displaying one section at a time.";
const category = Category.STRUCTURE_AND_NAVIGATION;
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=25293-519360";
export default function TabsPage() {
  const { version } = useContext(LanguageVersionContext);
  const [tabsBindings, setTabsBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "default", "segmented"],
      value: "",
    },
  ]);
  const [tabsProps, setTabsProps] = useState<Record<string, unknown>>({});
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "initialtab",
      type: "number",
      lang: "angular",
      defaultValue: "1",
      description: "Current active tab",
    },
    {
      name: "initialTab",
      type: "number",
      lang: "react",
      defaultValue: "1",
      description: "Current active tab",
    },
    {
      name: "_change",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when tab is changed.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(tabIndex: number) => void",
      description: "Callback function when tab is changed.",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "initialTab",
      type: "number",
      defaultValue: "1",
      description: "Current active tab",
    },
    {
      name: "variant",
      type: "GoabTabsVariant (default | segmented)",
      defaultValue: "default",
      description: "The visual style variant of the tabs.",
    },
    {
      name: "onChange",
      type: "(event: GoabTabsOnChangeDetail) => void",
      description: "Callback function when tab is changed.",
    },
    TestIdProperty,
  ];

  const oldTabProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "slot",
      description: "Add components to the tab heading such as badges",
    },
  ];
  const tabProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "ReactNode|string",
      lang: "react",
      description: "Add components to the tab heading such as badges",
    },
    {
      name: "heading",
      type: "TemplateRef|string",
      lang: "angular",
      description: "Add components to the tab heading such as badges",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the tab, preventing user interaction.",
    },
  ];
  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        figmaLink={FIGMA_LINK}
        githubLink="Tabs"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            {/*Cannot use Sandbox because if we change the language/version, the tabs inside the tabs will make the below bugs:*/}
            {/*1. Scroll down to an example*/}
            {/*2. Scroll back and change the language selected*/}
            {/*3. It autoscrolls you back down close to the example you were looking at*/}
            {/*4. If you click anywhere on the screen, it then autoscrolls back up to the top*/}
            <GoabContainer mt="m" mb="none">
              <div style={{ padding: "40px" }}>
                {/* JSON stringify to force React to remount the `GoabTabs` component when variant changes */}
                <GoabTabs
                  key={JSON.stringify(tabsProps)}
                  initialTab={1}
                  onChange={noop}
                  {...tabsProps}
                >
                  <GoabTab heading="Tab Item 1">
                    Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoabTab>
                  <GoabTab heading="Tab Item 2">
                    Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoabTab>
                  <GoabTab heading="Tab Item 3">
                    Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoabTab>
                </GoabTabs>
              </div>
            </GoabContainer>

            {/*Angular code*/}
            {version === "old" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  onChange(event: Event) {
                    const customEvent = event as CustomEvent;
                    const tabIndex = customEvent.detail.tab;
                    console.log('Tab changed to ', tabIndex);
                  } 
                `}
                />

                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  <goa-tabs (_change)="onChange($event)">
                    <goa-tab heading="Tab Item 1">
                      Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goa-tab>
                    <goa-tab heading="Tab Item 2">
                      Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goa-tab>
                    <goa-tab heading="Tab Item 3">
                      Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goa-tab>
                  </goa-tabs>
                `}
                />
              </>
            )}

            {version === "new" && (
              <Sandbox
                properties={tabsBindings}
                onChange={(bindings, props) => {
                  setTabsBindings(bindings);
                  setTabsProps(props);
                }}
                skipRender
                skipRenderDom
              >
                {/* Angular Code */}
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  tabsOnChange(event: GoabTabsOnChangeDetail) {
                    const tabIndex = event.tab;
                    console.log('Tab changed to ', tabIndex);
                  }
                `}
                />
                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  <goab-tabs${
                    tabsProps.variant ? ` variant="${tabsProps.variant}"` : ""
                  } (onChange)="tabsOnChange($event)">
                    <goab-tab heading="Tab Item 1">
                      Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goab-tab>
                    <goab-tab heading="Tab Item 2">
                      Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goab-tab>
                    <goab-tab heading="Tab Item 3">
                      Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </goab-tab>
                  </goab-tabs>
                `}
                />

                {/* React Code */}
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  function tabsOnChange(event: GoabTabsOnChangeDetail): void {
                    console.log('Tab changed to ', event.tab);
                  }
                  `}
                />
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  <GoabTabs${
                    tabsProps.variant ? ` variant="${tabsProps.variant}"` : ""
                  } onChange={tabsOnChange}>
                    <GoabTab heading="Tab Item 1">
                      Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </GoabTab>
                    <GoabTab heading="Tab Item 2">
                      Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </GoabTab>
                    <GoabTab heading="Tab Item 3">
                      Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </GoabTab>
                  </GoabTabs>
                  `}
                />
              </Sandbox>
            )}

            {/*React Code*/}
            {version === "old" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  function onChange(tabIndex: number): void {
                    console.log('Tab changed to ', tabIndex);
                  }
                  `}
                />
                <CodeSnippet
                  lang="html"
                  tags="react"
                  allowCopy={true}
                  code={`
                <GoATabs onChange={onChange}>
                  <GoATab heading="Tab Item 1">
                    Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                  <GoATab heading="Tab Item 2">
                    Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                  <GoATab heading="Tab Item 3">
                    Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </GoATab>
                </GoATabs>
                  `}
                />
              </>
            )}

            {/*GoATabs Table Properties*/}
            <ComponentProperties
              heading="GoATabs Properties"
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
            <ComponentProperties
              heading="GoATab Properties"
              properties={tabProperties}
              oldProperties={oldTabProperties}
            />
          </GoabTab>
          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }
          >
            <TabsExamples />
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
