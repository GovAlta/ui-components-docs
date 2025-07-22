import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const ShowANotification = () => {
  const save = () => {
    TemporaryNotification.show("Your application has been saved.", {
      type: "success"
    });
  };

  return (
    <Sandbox skipRender>
      <GoabButton type="secondary" onClick={save}>Save</GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          export class ExampleComponent {
            async save() {
              await this.api.save();
              
              TemporaryNotification.show("Your application has been saved.", {
                type: "success"
              });
            }
          }
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          const save = async () => {
            await api.save();
            
            TemporaryNotification.show("Your application has been saved.", {
              type: "success"
            });
          };
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <>
            <GoabTemporaryNotificationCtrl />
            <GoabButton type="secondary" onClick={save}>Save</GoabButton>
          </>
        `}
      />

      <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-temporary-notification-ctrl/>

          <goab-button type="secondary" (onClick)="save()">Save</goab-button>
        `}
      />
    </Sandbox>
  );
};

export default ShowANotification;
