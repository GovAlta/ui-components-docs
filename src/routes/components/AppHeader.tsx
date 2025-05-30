import {
  GoabAppHeader,
  GoabAppHeaderProps,
  GoabBadge,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LegacyTestIdProperties, TestIdProperty } from "@components/component-properties/common-properties.ts";
import { AppHeaderExamples } from "@examples/app-header/AppHeaderExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=4576-224884";
const componentName = "Header";
const description =
  "Provide structure to help users find their way around the service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/footer", name: "Footer" },
  { link: "/examples/layout", name: "Layout" },
  { link: "/components/microsite-header", name: "Microsite header" }
];
type ComponentPropsType = GoabAppHeaderProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};
export default function AppHeaderPage() {
  const [appHeaderProps, setAppHeaderProps] = useState<ComponentPropsType>({
    url: "www.alberta.ca",
    maxContentWidth: "100%",
  });
  const [appHeaderBindings, setAppHeaderBindings] = useState<ComponentBinding[]>([
    {
      label: "Url",
      type: "string",
      name: "url",
      value: "www.alberta.ca",
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "100%",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "url",
      type: "string",
      description: "Set the URL to link from the alberta.ca logo. A full url is required.",
    },
    {
      name: "heading",
      type: "string",
      description: "Set the service name to display in the app header.",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area.",
      defaultValue: "100%",
      lang: "react"
    },
    {
      name: "maxcontentwidth",
      type: "string",
      description: "Maximum width of the content area.",
      defaultValue: "100%",
      lang: "angular"
    },
    {
      name: "fullmenubreakpoint",
      type: "number",
      description: "Sets the breakpoint in px for the full menu to display.",
      lang: "angular"
    },
    {
      name: "fullMenuBreakpoint",
      type: "number",
      description: "Sets the breakpoint in px for the full menu to display.",
      lang: "react"
    },
    ...LegacyTestIdProperties,
    {
      name: "hasmenuclickhandler",
      type: "boolean",
      lang: "angular",
      description: "Set to true to handle the menu click event via _menuClick event custom event handler. Defaults to false.",
    },
    {
      name: "_menuClick",
      type: "CustomEvent",
      lang: "angular",
      description: "Function invoked when the menu hamburger button (on mobile/tablet device) is clicked."
    },
    {
      name: "onMenuClick",
      type: "() => void",
      lang: "react",
      description: "Function invoked when the menu hamburger button (on mobile/tablet device) is clicked."
    }
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "url",
      type: "string",
      description: "Set the URL to link from the alberta.ca logo. A full url is required.",
    },
    {
      name: "heading",
      type: "string",
      description: "Set the service name to display in the app header.",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area.",
      defaultValue: "100%",
    },
    {
      name: "fullMenuBreakpoint",
      type: "number",
      description: "Sets the breakpoint in px for the full menu to display.",
    },
    TestIdProperty,
    {
      name: "onMenuClick",
      type: "() => void",
      description: "Function invoked when the menu hamburger button (on mobile/tablet device) is clicked."
    }
  ];


  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAppHeaderProps(props as CastingType);
    setAppHeaderBindings(bindings);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Header"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={appHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoabAppHeader {...appHeaderProps} />
            </Sandbox>

            {/*Component properties*/}
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }
          >
            <AppHeaderExamples />
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
