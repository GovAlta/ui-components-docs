import {
  GoabBadge,
  GoabSideMenu,
  GoabSideMenuGroup,
  GoabSideMenuHeading,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Sandbox } from "@components/sandbox";
import { ComponentContent } from "@components/component-content/ComponentContent";

const componentName = "Side menu";
const description =
  "A side navigation that helps the user navigate between pages.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/header", name: "Header" },
  { link: "/patterns", name: "Layout" }
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
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox fullWidth allow={["div"]} skipRender>
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
              <div style={{ maxWidth: "250px" }}>
                <GoabSideMenu>
                  <GoabSideMenuHeading>Nav section 1</GoabSideMenuHeading>
                  <a>Home</a>
                  <a>Profile</a>
                  <GoabSideMenuHeading
                    meta={<GoabBadge type="midtone" content="Details"></GoabBadge>}
                    icon="home">
                    Nav section 2
                  </GoabSideMenuHeading>
                  <a>About</a>
                  <a>Contact</a>
                  <GoabSideMenuHeading>Nav with sub nav</GoabSideMenuHeading>
                  <GoabSideMenuGroup heading="Group heading" icon="person">
                    <a>Foo</a>
                    <a>Bar</a>
                  </GoabSideMenuGroup>
                </GoabSideMenu>
              </div>
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties
              heading="Side menu group properties"
              properties={sideMenuGroupProperties}
            />
            <ComponentProperties
              heading="Side menu heading properties"
              properties={sideMenuHeadingProperties}
            />
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
