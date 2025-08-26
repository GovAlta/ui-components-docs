import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabButton, GoabButtonGroup, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabButtonGroupAlignment } from "@abgov/ui-components-common";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { ButtonGroupExamples } from "@examples/button-group/ButtonGroupExamples.tsx";

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-302108";

export default function ButtonGroupPage() {
  const [buttonGroupProps, setButtonGroupProps] = useState({
    alignment: "center" as GoabButtonGroupAlignment,
  });

  const [buttonGroupBindings, setButtonGroupBindings] = useState<ComponentBinding[]>([
    {
      label: "Alignment",
      type: "list",
      name: "alignment",
      options: ["start", "end", "center"],
      value: "center",
    },
    {
      label: "Gap",
      type: "list",
      name: "gap",
      options: ["", "relaxed", "compact"],
      value: "",
      defaultValue: "relaxed",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "alignment",
      type: "start | end | center",
      description: "Positions the button group in the page layout.",
      required: true,
    },
    {
      name: "gap",
      type: "relaxed | compact",
      description: "Sets the spacing between buttons in the button group.",
      defaultValue: "relaxed",
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
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "alignment",
      type: "GoabButtonGroupAlignment (start | end | center)",
      description: "Positions the button group in the page layout.",
      required: true,
    },
    {
      name: "gap",
      type: "GoabButtonGroupGap (relaxed | compact)",
      description: "Sets the spacing between buttons in the button group.",
      defaultValue: "relaxed",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const noop = () => { };

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonGroupBindings(bindings);
    setButtonGroupProps(props as { alignment: GoabButtonGroupAlignment;[key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Button Group"
        category={Category.INPUTS_AND_ACTIONS}
        description="Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing."
        relatedComponents={[
          { link: "/components/button", name: "Button" },
        ]}
        figmaLink={FIGMA_LINK}
        githubLink="Button Group"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={buttonGroupBindings} onChange={onSandboxChange} fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    onClick() {
                      console.log('clicked');
                    }
                  }
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  function onClick() {
                    console.log('clicked');
                  }
                `}
              />
              <GoabButtonGroup {...buttonGroupProps}>
                <GoabButton type="primary" onClick={noop}>Button</GoabButton>
                <GoabButton type="secondary" onClick={noop}>Button</GoabButton>
                <GoabButton type="tertiary" onClick={noop}>Button</GoabButton>
              </GoabButtonGroup>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties}/>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }
          >
            <ButtonGroupExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
