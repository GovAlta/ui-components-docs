import { useContext, useState } from "react";
import {
  GoabBadge,
  GoabMenuAction,
  GoabMenuButton,
  GoabMenuButtonProps,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { GoabMenuButtonOnActionDetail } from "@abgov/ui-components-common";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { ExamplesEmpty } from "@components/empty-states/examples-empty/ExamplesEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=69366-164803";

const componentName = "Menu button";
const description = "Expose a short list of contextual actions without cluttering the interface.";
const componentCategory = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/button", name: "Button" },
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/icon-button", name: "Icon button" },
];

type ComponentPropsType = GoabMenuButtonProps;

export default function MenuButtonPage() {
  const { version, language } = useContext(LanguageVersionContext);
  
  const [menuButtonProps, setMenuButtonProps] = useState<ComponentPropsType>({
    text: "Menu actions",
    type: "primary",
  });

  const [menuButtonBindings, setMenuButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Button text",
      type: "string",
      name: "text",
      value: "Menu actions",
    },
    {
      label: "Button type",
      type: "radio",
      name: "type",
      options: ["primary", "secondary", "tertiary"],
      value: "primary",
    },
  ]);

  const menuButtonProperties: ComponentProperty[] = [
    {
      name: "text",
      type: "string",
      required: true,
      description: "Sets the label displayed on the menu trigger button.",
    },
    {
      name: "type",
      type: "GoabButtonType (primary | secondary | tertiary | start)",
      description: "Controls the visual style of the trigger button.",
      defaultValue: "primary",
    },
    TestIdProperty,
    {
      name: "onAction",
      type: "(detail: GoabMenuButtonOnActionDetail) => void",
      description:
        "Callback fired when a menu action is selected. Receives the action identifier from the clicked item.",
    },
  ];

  const menuActionProperties: ComponentProperty[] = [
    {
      name: "text",
      type: "string",
      required: true,
      description: "Sets the visible label for the action inside the menu.",
    },
    {
      name: "action",
      type: "string",
      required: true,
      description: "Identifier emitted through onAction when the item is selected.",
    },
    {
      name: "icon",
      type: "GoabIconType",
      description: "Optional leading icon shown before the label.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: ComponentPropsType) {
    setMenuButtonBindings(bindings);
    setMenuButtonProps(props);
  }

  function handleAction(detail: GoabMenuButtonOnActionDetail) {
    console.log("Last action: ", detail.action);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Menu button"
      />

      {version === "old" && <OldComponentBanner componentName={componentName} language={language} />}

      {version === "new" && (
        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoabTabs initialTab={1}>
            <GoabTab heading="Code playground">
              <h2 id="component" style={{ display: "none" }}>
                Playground
              </h2>
              <Sandbox<ComponentPropsType> properties={menuButtonBindings} onChange={onSandboxChange}>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                    menuOnAction(detail: GoabMenuButtonOnActionDetail) {
                      console.log("Last action: ", detail.action);
                    }
                  `}
                />
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                    const menuButtonOnAction = (detail: GoabMenuButtonOnActionDetail) => {
                      console.log("Last action: ", detail.action);
                    };
                  `}
                />
                <GoabMenuButton {...menuButtonProps} onAction={handleAction}>
                  <GoabMenuAction text="View profile" action="profile" icon="person-circle" />
                  <GoabMenuAction text="Notifications" action="notifications" icon="notifications" />
                  <GoabMenuAction text="Log out" action="logout" icon="log-out" />
                </GoabMenuButton>
              </Sandbox>

              <ComponentProperties heading="Menu button properties" properties={menuButtonProperties} />
              <ComponentProperties heading="Menu action properties" properties={menuActionProperties} />
            </GoabTab>

            <GoabTab
              heading={
                <>
                  Examples
                  <GoabBadge type="information" content="0" />
                </>
              }>
              <ExamplesEmpty />
            </GoabTab>

            <GoabTab heading="Design">
              <DesignEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>

            <GoabTab heading="Accessibility">
              <AccessibilityEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>
          </GoabTabs>
        </ComponentContent>
      )}
    </>
  );
}
