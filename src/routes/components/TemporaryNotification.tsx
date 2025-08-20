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
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { TemporaryNotification } from "@abgov/ui-components-common";
import { TemporaryNotificationExamples } from "@examples/temporary-notification/TemporaryNotificationExamples.tsx";
import { FunctionProperties } from "@components/function-properties/FunctionProperties.tsx";

// == Page props ==

const componentName = "Temporary notification";
const description = "Temporary notifications provide brief feedback about an action or event. They appear temporarily and can include an action for users to take.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/callout", name: "Callout" },
  { link: "/components/notification-banner", name: "Notification banner" }
];
const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=64940-255303";
const ACCESSIBILITY_FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=64940-255303";

export default function TemporaryNotificationPage() {
  const { version, language } = useContext(LanguageVersionContext);
  
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
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
      options: ["basic", "success", "failure", "indeterminate", "progress"],
      value: "basic",
    },
    {
      label: "Duration",
      type: "dropdown",
      name: "duration",
      options: ["short", "medium", "long"],
      value: "short",
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

  const showMethodProperties: ComponentProperty[] = [
    {
      name: "message",
      type: "string",
      description: "The message to display in the notification.",
    },
    {
      name: "options",
      type: "Partial<GoabNotificationOptions>",
      description: "Optional configuration object for the notification.",
    },
    {
      name: "options.type",
      type: "GoabTemporaryNotificationType (basic | success | failure | indeterminate | progress)",
      defaultValue: "basic",
      description: "The type of notification which determines styling and icon.",
    },
    {
      name: "options.duration",
      type: "long | medium | short | number",
      defaultValue: "short",
      description: "Duration before auto-dismissal. Use 'short' (~3s), 'medium' (~4s), 'long' (~6s), or custom milliseconds.",
    },
    {
      name: "options.actionText",
      type: "string",
      description: "Text for the action button. When provided, displays an action button.",
    },
    {
      name: "options.action",
      type: "() => void",
      description: "Function to execute when the action button is clicked.",
    },
    {
      name: "options.cancelUUID",
      type: "string",
      description: "UUID of an existing notification to cancel when showing this one.",
    },
  ];

  const dismissMethodProperties: ComponentProperty[] = [
    {
      name: "uuid",
      type: "string",
      description: "The UUID of the notification to dismiss. This is the value returned by TemporaryNotification.show().",
    },
  ];

  const progressMethodProperties: ComponentProperty[] = [
    {
      name: "uuid",
      type: "string",
      description: "The UUID of the progress notification to update. This is the value returned by TemporaryNotification.show().",
    },
    {
      name: "progress",
      type: "number",
      description: "The progress percentage (0-100) to display in the progress notification.",
    },
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
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
          export class ExampleComponent {
            showNotification() {
              TemporaryNotification.show("${componentBindings.find(b => b.name === 'message')?.value}", {
                type: "${componentBindings.find(b => b.name === 'type')?.value}",
                duration: "${componentBindings.find(b => b.name === 'duration')?.value}"${componentBindings.find(b => b.name === 'actionText')?.value ? `,
                actionText: "${componentBindings.find(b => b.name === 'actionText')?.value}",
                action: () => {
                  TemporaryNotification.show("Action performed!", { type: "success", duration: 2000 });
                }` : ''}
              });
            }
          }`}
                />

                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
          <goab-temporary-notification-ctrl 
            verticalPosition="bottom" 
            horizontalPosition="${componentBindings.find(b => b.name === 'horizontalPosition')?.value}">
          </goab-temporary-notification-ctrl>

          <goab-button (onClick)="showNotification()">
            Show Notification
          </goab-button>`}
                />

                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
          const showNotification = () => {
            TemporaryNotification.show("${componentBindings.find(b => b.name === 'message')?.value}", {
              type: "${componentBindings.find(b => b.name === 'type')?.value}",
              duration: "${componentBindings.find(b => b.name === 'duration')?.value}"${componentBindings.find(b => b.name === 'actionText')?.value ? `,
              actionText: "${componentBindings.find(b => b.name === 'actionText')?.value}",
              action: () => {
                TemporaryNotification.show("Action performed!", { type: "success", duration: 2000 });
              }` : ''}
            });
          };`}
                />

                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
          <>
            <GoabTemporaryNotificationCtrl 
              verticalPosition="bottom" 
              horizontalPosition="${componentBindings.find(b => b.name === 'horizontalPosition')?.value}" 
            />
            <GoabButton onClick={showNotification}>
              Show Notification
            </GoabButton>
          </>`}
                />

                <GoabButton onClick={handleShowNotification}>Show Notification</GoabButton>
                <GoabTemporaryNotificationCtrl
                  verticalPosition={componentBindings.find(b => b.name === 'verticalPosition')?.value as any || "bottom"}
                  horizontalPosition={componentBindings.find(b => b.name === 'horizontalPosition')?.value as any || "center"}
                />
              </Sandbox>

              <ComponentProperties heading={"TemporaryNotificationCtrl Properties"} properties={controllerProperties} />
              <FunctionProperties
                heading="TemporaryNotification.show(message, options)" 
                subHeading={<><code>show(message, options)</code> is a helper function to display temporary notifications in your component. View the table below to learn about the available options.</>}
                properties={showMethodProperties}
                codeSnippets={{
                  angular: <>
                    <CodeSnippet
                      lang="typescript"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      import { TemporaryNotification } from "@abgov/ui-components-common";

                      export class ExampleComponent {
                        showNotification() {
                          TemporaryNotification.show("Your message here", {
                            type: "success",
                            duration: "medium",
                          });
                        }
                      }`}
                    />
                    <CodeSnippet
                      lang="html"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      <goab-temporary-notification-ctrl/>
                      <goab-button (onClick)="showNotification()">Show Notification</goab-button>
                      `}
                    />
                  </>,
                  react: <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    import { TemporaryNotification } from "@abgov/ui-components-common";

                    export function ExampleComponent() {
                      const showNotification = () => {
                        TemporaryNotification.show("Your message here", {
                          type: "success",
                          duration: "medium",
                        });
                      };

                      return <>
                        <GoabNotificationCtrl />
                        <GoabButton onClick={showNotification}>Show Notification</GoabButton>
                      </>
                    }`}
                  />
                }}
              />
              <FunctionProperties
                heading="TemporaryNotification.dismiss(uuid)" 
                subHeading={<><code>dismiss(uuid)</code> is a helper function to hide a notification in your component. View the table below to learn about the available options.</>}
                properties={dismissMethodProperties}
                codeSnippets={{
                  angular: <>
                    <CodeSnippet
                      lang="typescript"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      import { TemporaryNotification } from "@abgov/ui-components-common";

                      export class ExampleComponent {
                        async handleSave() {
                          // Use the UUID returned from show() to dismiss the notification
                          const uuid = TemporaryNotification.show("Saving...", {
                            type: "indeterminate"
                          });

                          await this.api.save();
                          
                          // Dismiss the notification using the UUID
                          TemporaryNotification.dismiss(uuid);
                        }
                      }`}
                    />
                    <CodeSnippet
                      lang="html"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      <goab-temporary-notification-ctrl/>
                      <goab-button (onClick)="handleSave()">Save</goab-button>
                      `}
                    />
                  </>,
                  react: <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    import { TemporaryNotification } from "@abgov/ui-components-common";

                    export function ExampleComponent() {
                      async function handleSave() {
                        // Use the UUID returned from show() to dismiss the notification
                        const uuid = TemporaryNotification.show("Saving...", {
                          type: "indeterminate"
                        });

                        await api.save();
                        
                        // Dismiss the notification using the UUID
                        TemporaryNotification.dismiss(uuid);
                      }

                      return <>
                        <GoabNotificationCtrl />
                        <GoabButton onClick={handleSave}>Save</GoabButton>
                      </>
                    }`}
                  />
                }}
              />
              <FunctionProperties
                heading="TemporaryNotification.setProgress(uuid, progress)" 
                subHeading={<><code>setProgress(uuid, progress)</code> is a helper function to update the progress of a progress notification. View the table below to learn about the available options.</>}
                properties={progressMethodProperties}
                codeSnippets={{
                  angular: <>
                    <CodeSnippet
                      lang="typescript"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      import { TemporaryNotification } from "@abgov/ui-components-common";

                      export class ExampleComponent {
                        uuid: string;

                        handleSave() {
                          this.uuid = TemporaryNotification.show("Downloading file...", {
                            type: "progress"
                          });

                          this.api.save(data, {onProgress: this.updateProgress.bind(this)});
                        }

                        updateProgress(value: number) {
                          TemporaryNotification.setProgress(this.uuid, value);
                        }
                      }`}
                    />
                    <CodeSnippet
                      lang="html"
                      tags="angular"
                      allowCopy={true}
                      code={`
                      <goab-temporary-notification-ctrl/>
                      <goab-button (onClick)="handleSave()">Save</goab-button>
                      `}
                    />
                  </>,
                  react: <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    import { TemporaryNotification } from "@abgov/ui-components-common";

                    export function ExampleComponent() {
                      const [uuid, setUUID] = useState();

                      function handleSave() {
                        const uuid = TemporaryNotification.show("Downloading file...", {
                          type: "progress"
                        });
                        setUUID(uuid);

                        api.save(data, {onProgress: updateProgress});
                      }

                      function updateProgress(value: number) {
                        TemporaryNotification.setProgress(uuid, value);
                      }

                      return <>
                        <GoabNotificationCtrl />
                        <GoabButton onClick={handleSave}>Save</GoabButton>
                      </>
                    }`}
                  />
                }}
              />
            </GoabTab>

            <GoabTab heading={
              <>
                Examples
                <GoabBadge type="information" content="4" />
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
