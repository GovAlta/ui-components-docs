import { GoABadge, GoATab, GoATabs, } from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import "./AllComponents.css";
import { ExamplesEmpty } from "@components/examples-empty/ExamplesEmpty.tsx";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=25293-519360";
const componentName = "Tabs";
const category = Category.STRUCTURE_AND_NAVIGATION;
const description =
  "Let users navigate between related sections of content, displaying one section at a time.";
const relatedComponents = [
  { link: "/components/button", name: "Button" },
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/pagination", name: "Pagination" },
  { link: "/components/tabs", name: "Tabs" },
];

export default function TabsPage() {
  const componentProperties: ComponentProperty[] = [
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
  const tabProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "slot",
      description: "Add components to the tab heading such as badges",
    },
  ];
  const noop = () => {};

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
            {/* Tabs Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox fullWidth>
              {/* Angular */}
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

              {/* React */}
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

              <GoATabs onChange={noop}>
                <GoATab heading="Tab Item 1">
                  Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
                <GoATab heading="Tab Item 2">
                  Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
                <GoATab heading="Tab Item 3">
                  Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
              </GoATabs>
            </Sandbox>

            {/*GoATabs Table Properties*/}
            <ComponentProperties heading="GoATabs Properties" properties={componentProperties} />
            {/* GoATab Properties */}
            <ComponentProperties heading="GoATab Properties" properties={tabProperties} />
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
            <ExamplesEmpty/>
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