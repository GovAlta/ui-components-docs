import { GoAMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function MicrositeHeaderExamples () {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
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
        <GoAMicrositeHeader
          type="alpha"
          version={<><span>Slotted <b>version text</b>.</span><span>v1.23</span></>}
        />
      </Sandbox>
    </>
  )
}