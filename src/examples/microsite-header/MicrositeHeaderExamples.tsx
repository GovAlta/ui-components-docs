import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function MicrositeHeaderExamples() {
  const { version } = useContext(LanguageVersionContext);
  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-feedbackclick">Custom click event handler (for feedback)</h3>
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
                  @Component({
                    selector: "abgov-microsite-header",
                    templateUrl: "./microsite-header.component.html",
                  })
                  export class MicrositeHeaderComponent {
                    constructor() {}
              
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
      <h3 id="component-example-slotted-microsite-header-version">Slotted version</h3>
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
