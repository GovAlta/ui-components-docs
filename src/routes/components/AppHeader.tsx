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

const componentName = "Header";
const description =
  "Provide structure to help users find their way around the service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/footer", name: "Footer" },
  { link: "/patterns", name: "Layout" },
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
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={appHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoabAppHeader {...appHeaderProps} />
            </Sandbox>

            {/*Component properties*/}
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

            <AppHeaderExamples/>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
