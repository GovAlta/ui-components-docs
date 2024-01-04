import {
  GoABadge,
  GoASideMenu,
  GoASideMenuGroup,
  GoASideMenuHeading,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Sandbox } from "@components/sandbox";

const componentName = "Side menu";
const description =
  "The side menu is a navigation component positioned on the left side of the screen.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;

export default function SideMenuPage() {
  const sideMenuGroupProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Group header text",
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
      />

      <GoATabs>
        <GoATab heading="Code examples">
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
                    <goa-side-menu-group heading="Group heading">
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
                    <GoASideMenuGroup heading="Group heading">
                      <a href="#">Foo</a>
                      <a href="#">Bar</a>
                    </GoASideMenuGroup>
                  </GoASideMenu>
                </div>
                `}
            />
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
                <GoASideMenuGroup heading="Group heading">
                  <a>Foo</a>
                  <a>Bar</a>
                </GoASideMenuGroup>
              </GoASideMenu>
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
