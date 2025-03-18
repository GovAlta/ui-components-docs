import {
  GoabAppFooter,
  GoabAppFooterProps,
  GoabBadge,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { useState, useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { AppFooterExamples } from "@examples/app-footer/AppFooterExamples.tsx";

// == Page props ==

const componentName = "Footer";
const description = "Provides information related your service at the bottom of every page.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/header", name: "Header" },
  { link: "/patterns/layout", name: "Layout" },
];
type ComponentPropsType = GoabAppFooterProps;

type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function AppFooterPage() {
  const {language} = useContext(LanguageVersionContext);

  const [sandbox1Props, setSandbox1Props] = useState<ComponentPropsType>({
    maxContentWidth: "100%",
  });
  const [appFooterBindings, setAppFooterBindings] = useState<ComponentBinding[]>([
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "100%",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "maxContentWidth",
      type: "string",
      description: "The maximum width of the main content area",
      defaultValue: "100%",
    },
  ];
  const metaLinkProperties: ComponentProperty[] = [
    {
      name: "slot",
      lang: "angular",
      type: "meta",
      description: "Links to meta information to display in the footer",
    },
  ];
  const secondaryNavProperties: ComponentProperty[] = [
    {
      name: "maxColumnCount",
      type: "number",
      description: "Set the number of columns for navigation links on larger viewports",
      defaultValue: "1",
    },
    {
      name: "heading",
      type: "string",
      description: "Sub heading of the navigation links",
      defaultValue: "",
    },
    {
      name: "slot",
      lang: "angular",
      required: true,
      type: "nav",
      description: "Links to nav information to display in the footer",
    },
  ];

  function onSandbox1Change(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setSandbox1Props(props as CastingType);
    setAppFooterBindings(bindings);
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
            <h3>Basic Footer</h3>
            <Sandbox properties={appFooterBindings} onChange={onSandbox1Change} fullWidth>
              <GoabAppFooter {...sandbox1Props} />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} />
            <ComponentProperties
              heading="App Footer Nav Section"
              properties={secondaryNavProperties}
            />

            {language === "angular" && (
              <ComponentProperties
                heading="App Footer Meta Section"
                properties={metaLinkProperties}
              />
            )}

            {/* Examples*/}
            <AppFooterExamples/>

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
