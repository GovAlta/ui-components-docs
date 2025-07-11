import { useState, useContext } from "react";
import {
  GoabBadge,
  GoabButton,
  GoabTab,
  GoabTabs,
  GoabTemporaryNotificationCtrl,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { TemporaryNotificationExamples } from "@examples/temporary-notification/TemporaryNotificationExamples.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { TemporaryNotification } from "@abgov/ui-components-common";

// == Page props ==

const componentName = "Temporary notification";
const description = "Temporary notifications provide brief feedback about an action or event. They appear temporarily and can include an action for users to take.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/callout", name: "Callout" },
  { link: "/components/notification-banner", name: "Notification banner" }
];
const FIGMA_LINK = ""; // TODO: Add figma link when available
const ACCESSIBILITY_FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=61514-308154";

export default function TemporaryNotificationPage() {
  const { version, language } = useContext(LanguageVersionContext);
  
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Vertical position",
      type: "dropdown",
      name: "verticalPosition",
      options: ["top", "bottom"],
      value: "bottom",
    },
    {
      label: "Horizontal position",
      type: "dropdown",
      name: "horizontalPosition",
      options: ["left", "center", "right"],
      value: "center",
    },
    {
      label: "Message",
      type: "string",
      name: "message",
      value: "This is a notification message",
      width: "40ch",
    },
    {
      label: "Type",
      type: "dropdown",
      name: "type",
      options: ["basic", "success", "failure"],
      value: "basic",
    },
    {
      label: "Duration (ms)",
      type: "number",
      name: "duration",
      value: 4000,
      helpText: "Use 0 to disable auto-dismiss",
    },
    {
      label: "Action text",
      type: "string",
      name: "actionText",
      value: "",
      helpText: "Optional action button text",
    },
  ]);

  const handleShowNotification = () => {
    const props = componentBindings.reduce((acc, binding) => {
      if (binding.value !== "" && binding.value !== undefined) {
        acc[binding.name] = binding.value;
      }
      return acc;
    }, {} as Record<string, any>);
    
    const options: any = {
      type: props.type || "basic",
      duration: props.duration !== undefined ? props.duration : 4000,
    };
    
    let notificationId: string;
    
    if (props.actionText) {
      options.actionText = props.actionText;
      options.action = () => {
        console.log("Action clicked!");
        if (notificationId) {
          TemporaryNotification.dismiss(notificationId);
        }
        TemporaryNotification.show("Action performed!", { type: "success", duration: 2000 });
      };
    }
    
    notificationId = TemporaryNotification.show(props.message || "Default message", options);
  };

  function onSandboxChange(bindings: ComponentBinding[]) {
    setComponentBindings(bindings);
  }

  const componentProperties: ComponentProperty[] = [
    {
      name: "message",
      type: "string",
      description: "The message to display in the notification.",
    },
    {
      name: "type",
      type: "SnackbarType (basic | success | failure)",
      defaultValue: "basic",
      description: "The type of notification which determines the styling and icon.",
    },
    {
      name: "duration",
      type: "number",
      description: "Duration in milliseconds before the notification auto-dismisses. Use 0 to disable auto-dismiss.",
    },
    {
      name: "progress",
      type: "number",
      description: "Progress value from 0-100. Only used with type='progress'.",
    },
    {
      name: "actionText",
      type: "string",
      description: "Text for the action button. When provided, displays an action button.",
    },
    {
      name: "visible",
      type: "boolean",
      defaultValue: "true",
      description: "Controls the visibility of the notification.",
    },
    {
      name: "animationDirection",
      type: "AnimationDirection (up | down)",
      defaultValue: "down",
      description: "Direction of the slide animation when showing/hiding.",
    },
    TestIdProperty,
  ];

  const controllerProperties: ComponentProperty[] = [
    {
      name: "verticalPosition",
      type: "SnackbarVerticalPosition (top | bottom)",
      defaultValue: "bottom",
      description: "Vertical position of notifications on the screen.",
    },
    {
      name: "horizontalPosition",
      type: "SnackbarHorizontalPosition (left | center | right)",
      defaultValue: "center",
      description: "Horizontal position of notifications on the screen.",
    },
    TestIdProperty,
  ];

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink={componentName}
      />

      {version === "old" && <OldComponentBanner componentName={componentName} language={language} />}

      {version === "new" && (
        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoabTabs initialTab={1}>
            <GoabTab heading="Code playground">
              <h2 id="component" style={{ display: "none" }}>
                Component
              </h2>

              <Sandbox properties={componentBindings} onChange={onSandboxChange} skipRender={true}>
                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`<!-- In your app.component.html -->
<goab-temporary-notification-ctrl 
  [verticalPosition]="'${componentBindings.find(b => b.name === 'verticalPosition')?.value}'" 
  [horizontalPosition]="'${componentBindings.find(b => b.name === 'horizontalPosition')?.value}'">
</goab-temporary-notification-ctrl>`}
                />

                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`// In your component
import { TemporaryNotification } from "@abgov/angular-components";

showNotification() {
  TemporaryNotification.show("${componentBindings.find(b => b.name === 'message')?.value}", {
    type: "${componentBindings.find(b => b.name === 'type')?.value}",
    duration: ${componentBindings.find(b => b.name === 'duration')?.value}${componentBindings.find(b => b.name === 'actionText')?.value ? `,
    actionText: "${componentBindings.find(b => b.name === 'actionText')?.value}",
    action: () => {
      console.log("Action clicked!");
    }` : ''}
  });
}`}
                />

                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`// In your App.tsx
import { GoabTemporaryNotificationCtrl } from "@abgov/react-components";

function App() {
  return (
    <>
      <GoabTemporaryNotificationCtrl 
        verticalPosition="${componentBindings.find(b => b.name === 'verticalPosition')?.value}" 
        horizontalPosition="${componentBindings.find(b => b.name === 'horizontalPosition')?.value}" 
      />
      {/* Your app content */}
    </>
  );
}

// In your component
import { TemporaryNotification } from "@abgov/react-components";

const showNotification = () => {
  TemporaryNotification.show("${componentBindings.find(b => b.name === 'message')?.value}", {
    type: "${componentBindings.find(b => b.name === 'type')?.value}",
    duration: ${componentBindings.find(b => b.name === 'duration')?.value}${componentBindings.find(b => b.name === 'actionText')?.value ? `,
    actionText: "${componentBindings.find(b => b.name === 'actionText')?.value}",
    action: () => {
      console.log("Action clicked!");
    }` : ''}
  });
};`}
                />

                <GoabButton onClick={handleShowNotification}>Show Notification</GoabButton>
                <GoabTemporaryNotificationCtrl
                  verticalPosition={componentBindings.find(b => b.name === 'verticalPosition')?.value as any || "bottom"}
                  horizontalPosition={componentBindings.find(b => b.name === 'horizontalPosition')?.value as any || "center"}
                />
              </Sandbox>

              <ComponentProperties properties={componentProperties} />
              <ComponentProperties heading={"Temporary Notification Controller"} properties={controllerProperties} />
            </GoabTab>

            <GoabTab heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }>
              <TemporaryNotificationExamples />
            </GoabTab>

            <GoabTab heading="Design">
              <DesignEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>

            <GoabTab heading="Accessibility">
              <AccessibilityEmpty figmaLink={ACCESSIBILITY_FIGMA_LINK} />
            </GoabTab>
          </GoabTabs>
        </ComponentContent>
      )}
    </>
  );
}
