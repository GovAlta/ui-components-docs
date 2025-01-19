import {
  GoABadge,
  GoASideMenu,
  GoASideMenuGroup,
  GoASideMenuHeading,
  GoATab,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Sandbox } from "@components/sandbox";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=24089-474089";
const componentName = "Side menu";
const category = Category.STRUCTURE_AND_NAVIGATION;
const description = "A side navigation that helps the user navigate between pages.";
const relatedComponents = [
  { link: "/components/header", name: "Header" },
  { link: "/patterns/layout", name: "Layout" },
];

export default function SideMenuPage() {
  const sideMenuGroupProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Group header text",
    },
    {
      name: "icon",
      type: "GoAIconType",
      description: "Icon placed left of the heading",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const sideMenuHeadingProperties: ComponentProperty[] = [
    {
      name: "icon",
      type: "GoAIconType",
      description: "Icon to position to the left of heading",
    },
    {
      name: "meta",
      type: "ReactNode",
      lang: "react",
      description: "Add badges to the right of the heading",
    },
    {
      name: "meta",
      type: "slot",
      lang: "angular",
      description: "Add badges to the right of the heading",
    },
  ];

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
            {/* Side Menu Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox fullWidth allow={["div"]} skipRender>
              {/* Angular */}
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <div style="max-width: 250px">
                  <goa-side-menu>
                    <goa-side-menu-heading>
                      Nav section 1
                    </goa-side-menu-heading>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <goa-side-menu-heading icon="home">
                      Nav section 2
                    </goa-side-menu-heading>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <goa-side-menu-heading>
                      Nav with sub nav
                    </goa-side-menu-heading>
                    <goa-side-menu-group heading="Group heading" icon="person">
                      <a href="#">Foo</a>
                      <a href="#">Bar</a>
                    </goa-side-menu-group>
                  </goa-side-menu>
                </div>
              `}
              />

              {/* React */}
              <CodeSnippet
                allowCopy={true}
                lang="typescript"
                tags={["react"]}
                code={`
                  <div style={{ maxWidth: "250px" }}>
                  <GoASideMenu>
                    <GoASideMenuHeading>
                      Nav section 1
                    </GoASideMenuHeading>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <GoASideMenuHeading icon="home">
                      Nav section 2
                    </GoASideMenuHeading>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <GoASideMenuHeading>
                      Nav with sub nav
                    </GoASideMenuHeading>
                    <GoASideMenuGroup heading="Group heading" icon="person">
                      <a href="#">Foo</a>
                      <a href="#">Bar</a>
                    </GoASideMenuGroup>
                  </GoASideMenu>
                </div>
                `}
              />

              {/* Rendered Side Menu */}
              <div style={{ maxWidth: "250px" }}>
                <GoASideMenu>
                  <GoASideMenuHeading>Nav section 1</GoASideMenuHeading>
                  <a>Home</a>
                  <a>Profile</a>
                  <GoASideMenuHeading
                    meta={<GoABadge type="midtone" content="Details"></GoABadge>}
                    icon="home">
                    Nav section 2
                  </GoASideMenuHeading>
                  <a>About</a>
                  <a>Contact</a>
                  <GoASideMenuHeading>Nav with sub nav</GoASideMenuHeading>
                  <GoASideMenuGroup heading="Group heading" icon="person">
                    <a>Foo</a>
                    <a>Bar</a>
                  </GoASideMenuGroup>
                </GoASideMenu>
              </div>
            </Sandbox>

            {/* Component properties tables */}
            <ComponentProperties
              heading="Side menu group properties"
              properties={sideMenuGroupProperties}
            />
            <ComponentProperties
              heading="Side menu heading properties"
              properties={sideMenuHeadingProperties}
            />
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
            <GoACallout heading="We are currently collecting design examples for this component" type="important" size="medium" maxWidth="540px">
              {" "}
              <a href="https://design.alberta.ca/get-started/support#:~:text=Raise%20an%20issue-,Talk%20to%20us,-Slack" target="_blank" rel="noreferrer">
                Talk to the design system team
              </a>{" "}
              to contribute examples from your service.
            </GoACallout>
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