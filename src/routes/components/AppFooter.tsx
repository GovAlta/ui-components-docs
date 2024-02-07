import {
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAFooterNavSectionProps,
  GoAAppFooterNavSection,
  GoAAppFooterProps,
  GoABadge,
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

// == Page props ==

const componentName = "Footer";
const description =
  "Provides information related your service at the bottom of every page.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/header", name: "Header" },
  { link: "/patterns", name: "Layout" }
];
type ComponentPropsType = GoAAppFooterProps;
type FooterNavPropsType = GoAFooterNavSectionProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function AppFooterPage() {
  const [appFooterProps, setAppFooterProps] = useState<ComponentPropsType>({
    maxContentWidth: "100%",
  });
  const [appFooterNavProps, setAppFooterNavProps] = useState<FooterNavPropsType>({
    maxColumnCount: 1,
    heading: "",
  });
  const [appFooterBindings, setAppFooterBindings] = useState<ComponentBinding[]>([
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "100%",
    },
  ]);

  const [appFooterNavBindings, setAppFooterNavBindings] = useState<ComponentBinding[]>([
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "100%",
    },
    {
      label: "Max footer nav columns",
      type: "number",
      name: "maxColumnCount",
      value: 1,
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "",
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
  ];

  function onSandbox1Change(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAppFooterProps(props as CastingType);
    setAppFooterBindings(bindings);
  }

  function onSandbox2Change(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAppFooterNavProps(props as CastingType);
    setAppFooterNavBindings(bindings);
  }

  return (
    <>
       <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />
      <GoATabs>
        <GoATab heading="Code examples">
          <h3>Basic Footer</h3>
          <Sandbox properties={appFooterBindings} onChange={onSandbox1Change} fullWidth>
            <GoAAppFooter {...appFooterProps} />
          </Sandbox>

          {/*Component properties table*/}
          <ComponentProperties properties={componentProperties} />
          <ComponentProperties
            heading="Footer Secondary nav properties"
            properties={secondaryNavProperties}
          />
          <ComponentProperties
            heading="Meta link properties"
            properties={metaLinkProperties}
          />


          {/* Examples*/}
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>

          <h3 id="example-footer-meta">Footer with meta info</h3>
          <Sandbox fullWidth>
            <GoAAppFooter {...appFooterProps}>
              <GoAAppFooterMetaSection>
                <a href="privacy.html">Privacy</a>
                <a href="disclaimer.html">Disclaimer</a>
                <a href="accessibility.html">Accessibility</a>
                <a href="using-alberta.html">Using Alberta.ca</a>
              </GoAAppFooterMetaSection>
            </GoAAppFooter>
          </Sandbox>

          <h3 id="example-footer-secondary-nav">Secondary navigation column section and meta section</h3>
          <Sandbox properties={appFooterNavBindings} onChange={onSandbox2Change} fullWidth>
            <GoAAppFooter {...appFooterProps}>
              <GoAAppFooterNavSection {...appFooterNavProps}>
                <a href="a.html">Arts and culture</a>
                <a href="b.html">Education and training</a>
                <a href="c.html">Family and social supports</a>
                <a href="d.html">Housing and community</a>
                <a href="e.html">Life events</a>
                <a href="f.html">Business and economy</a>
                <a href="g.html">Emergencies and public safety</a>
                <a href="h.html">Government</a>
                <a href="i.html">Jobs and employment</a>
                <a href="j.html">Moving to Alberta</a>
              </GoAAppFooterNavSection>
              <GoAAppFooterMetaSection>
                <a href="privacy.html">Privacy</a>
                <a href="disclaimer.html">Disclaimer</a>
                <a href="accessibility.html">Accessibility</a>
                <a href="using-alberta.html">Using Alberta.ca</a>
              </GoAAppFooterMetaSection>
            </GoAAppFooter>
          </Sandbox>
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
    </>
  );
}
