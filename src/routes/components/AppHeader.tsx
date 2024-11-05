import {
  GoabAppHeader,
  GoabAppHeaderMenu,
  GoabAppHeaderProps,
  GoabBadge, GoabRadioGroup, GoabRadioItem,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

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
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
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

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAppHeaderProps(props as CastingType);
    setAppHeaderBindings(bindings);
  }

  const [deviceWidth, setDeviceWidth] = useState("5000");
  function handleMenuClick() {
    alert("Menu not being displayed and you can do anything");
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
            <ComponentProperties properties={componentProperties} />

            {/*Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-header-navigation">Header with navigation</h3>
            <Sandbox fullWidth skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-microsite-header type="live"></goa-microsite-header>
                <goa-app-header url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <goa-app-header-menu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goa-app-header-menu>
                  <a href="#" className="interactive">Sign in</a>
                </goa-app-header>
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                <GoAAppHeader url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <GoAAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </GoAAppHeaderMenu>
                  <a href="#" className="interactive">Sign in</a>
                </GoAAppHeader>
              `}
              />
              <GoabAppHeader url="https://www.alberta.ca" heading="Ticket and Fine Payments">
                <a href="">Support</a>
                <GoabAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                  <a>Cases</a>
                  <a>Payments</a>
                  <a>Outstanding</a>
                </GoabAppHeaderMenu>
                <a className="interactive">Sign in</a>
              </GoabAppHeader>
            </Sandbox>

            <h3 id="component-example-with-menu-click">Header with menu click event</h3>
            <Sandbox fullWidth skipRender>
              <GoabRadioGroup name="device" value={deviceWidth} onChange={(event: GoabRadioGroupOnChangeDetail) => setDeviceWidth(event.value)}>
                <GoabRadioItem value="600" label="Desktop"></GoabRadioItem>
                <GoabRadioItem value="5000" label="Mobile"></GoabRadioItem>
              </GoabRadioGroup>
              <GoabAppHeader
                url="https://example.com"
                heading="Design System"
                onMenuClick={handleMenuClick}
                fullMenuBreakpoint={+deviceWidth}>
                <a href="#">Support</a>
                <GoabAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                  <a href="#">Cases</a>
                  <a href="#">Payments</a>
                  <a href="#">Outstanding</a>
                </GoabAppHeaderMenu>
                <a href="#" className="interactive">
                  Sign in
                </a>
              </GoabAppHeader>

              <CodeSnippet
                lang="typescript"
                tags={"angular"}
                allowCopy={true}
                code={`
                export class MyComponent {
                  deviceWidth = '5000';
                  changeDeviceWidth(event: Event) {
                    this.deviceWidth = (event as CustomEvent).detail.value;
                  }
                  
                  handleMenuClick() {
                    alert("Menu not being displayed and you can do anything");
                  }
                }
              `}/>

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                 <goa-radio-group name="device" value="deviceWidth" (_change)="changeDeviceWidth($event)">
                  <goa-radio-item value="600" label="Desktop"></goa-radio-item>
                  <goa-radio-item value="5000" label="Mobile"></goa-radio-item>
                 </goa-radio-group>
                  
                 <goa-app-header url="https://example.com" heading="Design System" [fullmenubreakpoint]="deviceWidth" [hasmenuclickhandler]="true" (_menuClick)="handleMenuClick()">
                  <a href="#">Support</a>
                  <goa-app-header-menu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goa-app-header-menu>
                  <a href="#" className="interactive">Sign in</a>
                </goa-app-header>
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags={"react"}
                allowCopy={true}
                code={`
                const [deviceWidth, setDeviceWidth] = useState("5000");
                function handleMenuClick() {
                  alert("Menu not being displayed and you can do anything");
                }
              `}/>

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoARadioGroup name="device" value={deviceWidth} onChange={(_, value) => setDeviceWidth(value)}>
                    <GoARadioItem value="600" label="Desktop"></GoARadioItem>
                    <GoARadioItem value="5000" label="Mobile"></GoARadioItem>
                  </GoARadioGroup>
                  
                  <GoAAppHeader
                    url="https://example.com"
                    heading="Design System"
                    onMenuClick={handleMenuClick}
                    fullMenuBreakpoint={+deviceWidth}>
                    <a href="#">Support</a>
                    <GoAAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                      <a href="#">Cases</a>
                      <a href="#">Payments</a>
                      <a href="#">Outstanding</a>
                    </GoAAppHeaderMenu>
                    <a href="#" className="interactive">Sign in</a>
                  </GoAAppHeader>
              `}
              />
            </Sandbox>
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
