import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoABadge,
  GoABlock,
  GoAButton,
  GoACallout,
  GoAContainer, GoAContainerProps,
  GoATab,
  GoATable,
  GoATabs
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==
const componentName = "Container";
const description = "Group information, create hierarchy, and show related information.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/accordion", name: "Accordion" },
  { link: "/components/details", name: "Details" },
  { link: "/components/divider", name: "Divider" }
];
type ComponentPropsType = GoAContainerProps;
type CastingType = {
  [key: string]: unknown;
};

export default function ContainerPage() {
  const [containerProps, setContainerProps] = useState<ComponentPropsType>({});

  const [containerBindings, setContainerBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["", "interactive", "info", "error", "success", "important", "non-interactive"],
      value: "",
      defaultValue: "interactive",
    },
    {
      label: "Accent",
      type: "list",
      name: "accent",
      options: ["", "thick", "thin", "filled"],
      value: "",
      defaultValue: "filled",
    },
    {
      label: "Padding",
      type: "list",
      name: "padding",
      options: ["", "relaxed", "compact"],
      value: "",
      defaultValue: "relaxed",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "interactive | info | error | success | important | non-interactive",
      description: "Choose the type of container the type of the accent bar",
      defaultValue: "interactive",
    },
    {
      name: "accent",
      type: "thick | thin | filled",
      defaultValue: "filled",
      description: "Sets the style of accent on the container",
    },
    {
      name: "padding",
      type: "relaxed | compact",
      defaultValue: "relaxed",
      description: "Sets the amount of white space in the container",
    },
    {
      name: "title",
      type: "slot",
      description:
        "Sets the content in the left of the accent bar. To only beused along with accent=thick.",
    },
    {
      name: "actions",
      type: "slot",
      description:
        "Sets the content in the right of the accent bar. To only be used along with accent=thick.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setContainerBindings(bindings);
    setContainerProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents}/>

      <GoATabs>
        <GoATab heading={"Code examples"}>
          <Sandbox properties={containerBindings} onChange={onSandboxChange} fullWidth>
            <GoAContainer {...containerProps}>
              <h2>Detach to use</h2>
              <p>Add things inside me</p>
            </GoAContainer>
          </Sandbox>

          {/*Container Table Properties*/}
          <ComponentProperties properties={componentProperties} />

          {/*Container examples*/}
          <GoABlock gap="xs" direction="column" mt="2xl" mb="3xl">
            <a href="#accent-bar-with-heading">Accent bar with heading</a>
            <a href="#accent-bar-with-badge">Accent bar with badge</a>
            <a href="#accent-bar-with-button">Accent bar with button</a>
            <a href="#container-inside-container">Container with container inside</a>
            <a href="#complex-container">Container with complex content</a>
          </GoABlock>

          <h3 id="accent-bar-with-heading">Accent bar with heading</h3>
          <Sandbox fullWidth>
            <GoAContainer accent="thick" heading="Group Heading">
              Content
            </GoAContainer>
          </Sandbox>

          <h3 id="accent-bar-with-badge">Accent bar with badge</h3>
          <Sandbox fullWidth skipRender>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                <goa-container type="non-interactive" accent="thick" heading="Group Heading">
                  <div slot="actions">
                    <goa-badge type="success" icon content="Badge Text"></goa-badge>
                  </div>
                  Content
                </goa-container>
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                <GoAContainer
                  type="non-interactive"
                  accent="thick"
                  heading="Group Heading"
                  actions={<GoABadge type="success" content="Badge Text" icon={true} />}
                >
                  Content
                </GoAContainer>
             `}
            />

            <GoAContainer
              type="non-interactive"
              accent="thick"
              heading="Group Heading"
              actions={<GoABadge type="success" content="Badge Text" icon={true} />}
            >
              Content
            </GoAContainer>
          </Sandbox>

          <h3 id="accent-bar-with-button">Accent bar with button</h3>
          <Sandbox fullWidth skipRender>
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                <GoAContainer
                  type="non-interactive"
                  accent="thick"
                  heading="Group Heading"
                  actions={
                    <GoAButton type="secondary" size="compact">
                      Edit
                    </GoAButton>
                  }>
                  Content
                </GoAContainer>
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                <goa-container type="non-interactive" accent="thick" heading="Group Heading">
                   <div slot="actions">
                    <goa-button type="secondary" size="compact">Assign to me</goa-button>
                   </div>
                   Content
                </goa-container>
              `}
            />

            <GoAContainer
              type="non-interactive"
              accent="thick"
              heading="Group Heading"
              actions={
                <GoAButton type="secondary" size="compact">
                  Edit
                </GoAButton>
              }
            >
              Content
            </GoAContainer>
          </Sandbox>

          <h3 id="container-inside-container">Container with container inside</h3>
          <Sandbox fullWidth>
            <GoAContainer accent="thick">
              <h2>Heading</h2>
              <p>Content</p>
              <GoAContainer type="non-interactive">
                <h2>Heading</h2>
                <p>Content</p>
              </GoAContainer>
            </GoAContainer>
          </Sandbox>

          <h3 id="complex-container">Container with complex content</h3>
          <Sandbox fullWidth>
            <GoAContainer>
              <h2>Heading</h2>
              <GoATable width="100%">
                <tbody>
                  <tr>
                    <td>Content</td>
                    <td align="right">$2,110.00</td>
                  </tr>
                  <tr>
                    <td>Content</td>
                    <td align="right">$525.00</td>
                  </tr>
                  <tr>
                    <td>Content</td>
                    <td align="right">$275.00</td>
                  </tr>
                </tbody>
              </GoATable>
              <GoACallout type="important" mt="l">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </GoACallout>
            </GoAContainer>
          </Sandbox>
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        >
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
