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
import { ComponentContent } from "@components/component-content/ComponentContent";
import { useState, useContext } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { LanguageContext } from "@components/sandbox";
import { SandboxHeader } from "@components/sandbox/sandboxHeader.tsx";

// == Page props ==

const componentName = "Footer";
const description = "Provides information related your service at the bottom of every page.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
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
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <h3>Basic Footer</h3>
            <Sandbox properties={appFooterBindings} onChange={onSandbox1Change} fullWidth>
              <GoAAppFooter {...appFooterProps} />
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
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <SandboxHeader
              exampleTitle="Show quick links"
              figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59337-151809&t=qwG1ZYADxjr1MeEq-4">
            </SandboxHeader>
            <Sandbox skipRender fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-app-footer maxcontentwidth="100%">
                  <goa-app-footer-meta-section slot="meta">
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
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
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </GoAAppFooterMetaSection>
                </GoAAppFooter>
              `}
              />

              <GoAAppFooter {...appFooterProps}>
                <GoAAppFooterMetaSection>
                  <a href="#">Give feedback</a>
                  <a href="#">Accessibility</a>
                  <a href="#">Privacy</a>
                  <a href="#">Contact us</a>
                </GoAAppFooterMetaSection>
              </GoAAppFooter>
            </Sandbox>

            <SandboxHeader
              exampleTitle="Show links to navigation items"
              figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59340-67916&t=qwG1ZYADxjr1MeEq-4">
            </SandboxHeader>
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
                      Section A
                    </a>
                    <a href="b.html">
                      Section B
                    </a>
                    <a href="c.html">
                      Section C
                    </a>
                    <a href="d.html">
                      Section D
                    </a>
                    <a href="e.html">
                      Section E
                    </a>
                    <a href="f.html">
                      Section F
                    </a>
                    <a href="g.html">
                      Section G
                    </a>
                    <a href="h.html">
                      Section H
                    </a>
                    <a href="i.html">
                      Section I
                    </a>
                  </goa-app-footer-nav-section>
                  <goa-app-footer-meta-section slot="meta">
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
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
                      Section A
                    </a>
                    <a href="b.html">
                      Section B
                    </a>
                    <a href="c.html">
                      Section C
                    </a>
                    <a href="d.html">
                      Section D
                    </a>
                    <a href="e.html">
                      Section E
                    </a>
                    <a href="f.html">
                      Section F
                    </a>
                    <a href="g.html">
                      Section G
                    </a>
                    <a href="h.html">
                      Section H
                    </a>
                    <a href="i.html">
                      Section I
                    </a>
                  </GoAAppFooterNavSection>
                  <GoAAppFooterMetaSection>
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </GoAAppFooterMetaSection>
                </GoAAppFooter>
              `}
              />

              <GoAAppFooter {...appFooterProps}>
                <GoAAppFooterNavSection {...appFooterNavProps}>
                  <a href="a.html">Section A</a>
                  <a href="b.html">Section B</a>
                  <a href="c.html">Section C</a>
                  <a href="d.html">Section D</a>
                  <a href="e.html">Section E</a>
                  <a href="f.html">Section F</a>
                  <a href="g.html">Section G</a>
                  <a href="h.html">Section H</a>
                  <a href="i.html">Section I</a>
                </GoAAppFooterNavSection>
                <GoAAppFooterMetaSection>
                  <a href="#">Give feedback</a>
                  <a href="#">Accessibility</a>
                  <a href="#">Privacy</a>
                  <a href="#">Contact us</a>
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
      </ComponentContent>
    </>
  );
}
