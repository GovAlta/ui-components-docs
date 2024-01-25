import {
  GoAAppHeader,
  GoAAppHeaderMenu,
  GoAAppHeaderProps,
  GoABadge,
  GoABlock,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";

const componentName = "Header";
const description =
  "Provide structure to help users find their way around the service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/footer", name: "Footer" },
  { link: "/patterns", name: "Layout" },
  { link: "/components/microsite-header", name: "Microsite header" }
];
type ComponentPropsType = GoAAppHeaderProps;
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
      description: "Set the URL to link from the alberta.ca logo. A full url is required",
    },
    {
      name: "heading",
      type: "string",
      description: "Set the service name to display in the app header",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
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

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={appHeaderBindings} onChange={onSandboxChange} fullWidth>
            <GoAAppHeader {...appHeaderProps} />
          </Sandbox>

          {/*Component properties*/}
          <ComponentProperties properties={componentProperties} />

          {/*Examples*/}
          <GoABlock gap="s" direction="column" mt="3xl" mb="3xl">
            <a href="#example-header-navigation">Header with navigation</a>
          </GoABlock>

          <h3 id="example-header-navigation">Header with navigation</h3>
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
            <GoAAppHeader url="https://www.alberta.ca" heading="Ticket and Fine Payments">
              <a href="">Support</a>
              <GoAAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                <a>Cases</a>
                <a>Payments</a>
                <a>Outstanding</a>
              </GoAAppHeaderMenu>
              <a className="interactive">Sign in</a>
            </GoAAppHeader>
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
