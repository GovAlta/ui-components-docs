import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function GiveFeedbackLinkExample() {
  const {version} = useContext(LanguageVersionContext);
  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };

  return (
    <>

      <Sandbox fullWidth skipRender>

        {/*Angular code*/}
        {version === "old" && <CodeSnippet
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
        />}

         {/*Angular code*/}
        {version === "old" && <CodeSnippet
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
        />}

        {/*Angular code*/}
        {version === "new" && <CodeSnippet
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
        />}
        
        {/*Angular code*/}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-microsite-header
              type="alpha"
              [hasfeedbackhandler]="true"
              (_feedbackClick)="handleFeedbackClick($event)"
            ></goab-microsite-header>
          `}
        />}

        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            const onClick = () => {
              console.log("Feedback clicked");
              alert("Thank you for your feedback!");
            };
          `}
        />}

        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAMicrositeHeader type="alpha" onFeedbackClick={onClick} />
          `}
        />}
        
        {/*React code*/}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            const onClick = () => {
              console.log("Feedback clicked");
              alert("Thank you for your feedback!");
            };
          `}
        />}

        {/*React code*/}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />
          `}
        />}

        <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />
        {/* ...React + Angular code snippets here (same as original)... */}
      </Sandbox>
    </>
  );
}

