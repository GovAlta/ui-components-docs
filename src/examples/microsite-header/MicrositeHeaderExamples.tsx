import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function MicrositeHeaderExamples() {
  const { version } = useContext(LanguageVersionContext);
  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };
  return (
    <>
      <SandboxHeader
        exampleTitle="Link to give feedback to the service"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59350-40601&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <Sandbox skipRender fullWidth>
        <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />
        {/*Angular code*/}
        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                  @Component({
                    selector: "abgov-microsite-header",
                    templateUrl: "./microsite-header.component.html",
                  })
                  export class MicrositeHeaderComponent {
                    constructor() {}

                    handleFeedbackClick(event: Event) {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }
                  }
                `}
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                  export class MicrositeHeaderComponent {
                    handleFeedbackClick() {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }
                  }
                `}
          />
        )}

        {version === "old" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
                  <goa-microsite-header
                    type="alpha"
                    [hasfeedbackhandler]="true"
                    (_feedbackClick)="handleFeedbackClick($event)"
                  ></goa-microsite-header>
                `}
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
                  <goab-microsite-header
                    type="alpha"
                    (onFeedbackClick)="handleFeedbackClick()"
                  ></goab-microsite-header>
                `}
          />
        )}

        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                  export default function MicrositeHeader() {
                    function onClick() {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }

                    return (
                      <>
                        <GoAMicrositeHeader
                          type="alpha"
                          onFeedbackClick={() => onClick()}
                        />
                      </>
                    );
                  }
                `}
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                  export default function MicrositeHeader() {
                    function onClick() {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }

                    return (
                      <>
                        <GoabMicrositeHeader
                          type="alpha"
                          onFeedbackClick={() => onClick()}
                        />
                      </>
                    );
                  }
                `}
          />
        )}
      </Sandbox>

      <SandboxHeader
        exampleTitle="Show version number"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59354-89591&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          <goa-microsite-header type="alpha">
            <div slot="version">
              <span>Slotted <b>version text</b>.</span>
              <span>v1.23</span>
            </div>
          </goa-microsite-header>
        `}
        />}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
         <goab-microsite-header type="alpha" [version]="version">
            <ng-template #version>
              <span>Slotted <b>version text</b>.</span>
              <span>v1.23</span>
            </ng-template>
         </goab-microsite-header>
        `}
        />}
        {/*React*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoAMicrositeHeader
            type="alpha"
            version={<><span>Slotted <b>version text</b>.</span><span>v1.23</span></>}
          ></GoAMicrositeHeader>
        `}
        />}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoabMicrositeHeader
            type="alpha"
            version={<><span>Slotted <b>version text</b>.</span><span>v1.23</span></>}
          ></GoabMicrositeHeader>
        `}
        />}
        <GoabMicrositeHeader
          type="alpha"
          version={
            <>
              <span>
                Slotted <b>version text</b>.
              </span>
              <span>v1.23</span>
            </>
          }
        />
      </Sandbox>
    </>
  );
}
