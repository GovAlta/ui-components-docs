import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function ShowVersionNumberExample() {
  const {version} = useContext(LanguageVersionContext);

  return (
    <>
      <Sandbox fullWidth skipRender>

        {/*Angular code*/}
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
        
        {/*Angular code*/}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-microsite-header type="alpha">
              <div slot="version">
                <span>Slotted <b>version text</b>.</span>
                <span>v1.23</span>
              </div>
            </goab-microsite-header>
          `}
        />}

        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAMicrositeHeader
              type="alpha"
              version={
                <>
                  <span>Slotted <b>version text</b>.</span>
                  <span>v1.23</span>
                </>
              }
            ></GoAMicrositeHeader>
          `}
        />}

        {/*React code*/}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoabMicrositeHeader
              type="alpha"
              version={
                <>
                  <span>Slotted <b>version text</b>.</span>
                  <span>v1.23</span>
                </>
              }
            ></GoabMicrositeHeader>
          `}
        />}

        {/* ...React + Angular code snippets here (same as original)... */}
        <GoabMicrositeHeader
          type="alpha"
          version={
            <>
              <span>Slotted <b>version text</b>.</span>
              <span>v1.23</span>
            </>
          }
        />
      </Sandbox>
    </>
  );
}