import { useContext, useState } from "react";
import { ComponentBinding, LanguageContext } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAFooterNavSectionProps,
  GoAAppFooterNavSection,
  GoAAppFooterProps,
  GoATab,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import Sandbox from "@components/sandbox/Sandbox.tsx";
import "./AllComponents.css";

// == Page props ==

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=582-5939";
const componentName = "Footer";
const description = "Provides information related your service at the bottom of every page.";
const category = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/header", name: "Header" },
  { link: "/patterns", name: "Layout" },
];
type ComponentPropsType = GoAAppFooterProps;
type FooterNavPropsType = GoAFooterNavSectionProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function AppFooterPage() {
  const language = useContext(LanguageContext);

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
    {
      name: "slot",
      lang: "angular",
      type: "nav",
      description: "Links to nav information to display in the footer",
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
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={appFooterBindings} onChange={onSandbox1Change} fullWidth>
              <GoAAppFooter {...appFooterProps} />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} />
            <ComponentProperties
              heading="Nav section properties"
              properties={secondaryNavProperties}
            />

            {language === "angular" && (
              <ComponentProperties
                heading="App Footer Meta Section"
                properties={metaLinkProperties}
              />
            )}
          </GoATab>

          <GoATab heading={<>Examples<GoABadge type="information" content="2" /></>}>

            <h3 id="component-example-footer-meta">Show quick links</h3>
            <Sandbox skipRender fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-app-footer maxcontentwidth="100%">
                  <goa-app-footer-meta-section slot="meta">
                    <a href="privacy.html">
                      Privacy
                    </a>
                    <a href="disclaimer.html">
                      Disclaimer
                    </a>
                    <a href="accessibility.html">
                      Accessibility
                    </a>
                    <a href="using-alberta.html">
                      Using Alberta.ca
                    </a>
                  </goa-app-footer-meta-section>
                </goa-app-footer>
               `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                 <GoAAppFooter maxContentWidth="100%">
                  <GoAAppFooterMetaSection>
                    <a href="privacy.html">
                      Privacy
                    </a>
                    <a href="disclaimer.html">
                      Disclaimer
                    </a>
                    <a href="accessibility.html">
                      Accessibility
                    </a>
                    <a href="using-alberta.html">
                      Using Alberta.ca
                    </a>
                  </GoAAppFooterMetaSection>
                </GoAAppFooter>
              `}
              />

              <GoAAppFooter {...appFooterProps}>
                <GoAAppFooterMetaSection>
                  <a href="privacy.html">Privacy</a>
                  <a href="disclaimer.html">Disclaimer</a>
                  <a href="accessibility.html">Accessibility</a>
                  <a href="using-alberta.html">Using Alberta.ca</a>
                </GoAAppFooterMetaSection>
              </GoAAppFooter>
            </Sandbox>

            <h3 id="component-example-footer-secondary-nav">
              Show links to navigation items
            </h3>
            <Sandbox
              skipRender
              properties={appFooterNavBindings}
              onChange={onSandbox2Change}
              fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-app-footer maxcontentwidth="100%">
                  <goa-app-footer-nav-section slot="nav" maxcolumncount="1">
                    <a href="a.html">
                      Arts and culture
                    </a>
                    <a href="b.html">
                      Education and training
                    </a>
                    <a href="c.html">
                      Family and social supports
                    </a>
                    <a href="d.html">
                      Housing and community
                    </a>
                    <a href="e.html">
                      Life events
                    </a>
                    <a href="f.html">
                      Business and economy
                    </a>
                    <a href="g.html">
                      Emergencies and public safety
                    </a>
                    <a href="h.html">
                      Government
                    </a>
                    <a href="i.html">
                      Jobs and employment
                    </a>
                    <a href="j.html">
                      Moving to Alberta
                    </a>
                  </goa-app-footer-nav-section>
                  <goa-app-footer-meta-section slot="meta">
                    <a href="privacy.html">
                      Privacy
                    </a>
                    <a href="disclaimer.html">
                      Disclaimer
                    </a>
                    <a href="accessibility.html">
                      Accessibility
                    </a>
                    <a href="using-alberta.html">
                      Using Alberta.ca
                    </a>
                  </goa-app-footer-meta-section>
                </goa-app-footer>
               `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                 <GoAAppFooter maxContentWidth="100%">
                  <GoAAppFooterNavSection maxColumnCount=1>
                    <a href="a.html">
                      Arts and culture
                    </a>
                    <a href="b.html">
                      Education and training
                    </a>
                    <a href="c.html">
                      Family and social supports
                    </a>
                    <a href="d.html">
                      Housing and community
                    </a>
                    <a href="e.html">
                      Life events
                    </a>
                    <a href="f.html">
                      Business and economy
                    </a>
                    <a href="g.html">
                      Emergencies and public safety
                    </a>
                    <a href="h.html">
                      Government
                    </a>
                    <a href="i.html">
                      Jobs and employment
                    </a>
                    <a href="j.html">
                      Moving to Alberta
                    </a>
                  </GoAAppFooterNavSection>
                  <GoAAppFooterMetaSection>
                    <a href="privacy.html">
                      Privacy
                    </a>
                    <a href="disclaimer.html">
                      Disclaimer
                    </a>
                    <a href="accessibility.html">
                      Accessibility
                    </a>
                    <a href="using-alberta.html">
                      Using Alberta.ca
                    </a>
                  </GoAAppFooterMetaSection>
                </GoAAppFooter>
              `}
              />

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