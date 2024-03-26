import { GoABadge, GoATab, GoATabs } from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const componentName = "Tabs";
const description =
  "Let users navigate between related sections of content, displaying one section at a time.";
const category = Category.STRUCTURE_AND_NAVIGATION;
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
  ];
  const tabProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "slot",
      description: "Add components to the tab heading such as badges",
    },
  ];

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox fullWidth>
              <GoATabs>
                <GoATab heading="Tab Item 1">
                  Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
                <GoATab heading="Tab Item 2">
                  Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
                <GoATab heading="Tab Item 3">
                  Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </GoATab>
              </GoATabs>
            </Sandbox>

            {/*GoATabs Table Properties*/}
            <ComponentProperties heading="GoATabs Properties" properties={componentProperties} />
            <ComponentProperties heading="GoATab Properties" properties={tabProperties} />
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }></GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
