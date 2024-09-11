import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

const onClick = () => {
  console.log("Feedback clicked");
  alert("Thank you for your feedback!");
};

export default function MicrositeHeaderExamples () {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-feedbackclick">Custom click event handler (for feedback)</h3>
            <Sandbox skipRender fullWidth>
              <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />

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

              <CodeSnippet
                lang="typescript"
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
            </Sandbox>
      <h3 id="component-example-slotted-microsite-header-version">Slotted version</h3>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        <CodeSnippet
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
        />
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <GoAMicrositeHeader
            type="alpha"
            version={<><span>Slotted <b>version text</b>.</span><span>v1.23</span></>}
          ></GoAMicrositeHeader>
        `}
        />
        <GoabMicrositeHeader
          type="alpha"
          version={<><span>Slotted <b>version text</b>.</span><span>v1.23</span></>}
        />
      </Sandbox>
    </>
  )
}
