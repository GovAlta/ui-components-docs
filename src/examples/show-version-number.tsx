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
              <div slot="version">v1.23</div>
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
              <div slot="version">v1.23</div>
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
              version="v1.23"
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
              version="v1.23"
            ></GoabMicrositeHeader>
          `}
        />}

        {/* ...React + Angular code snippets here (same as original)... */}
        <GoabMicrositeHeader
          type="alpha"
          version="v1.23"
        />
      </Sandbox>
    </>
  );
}