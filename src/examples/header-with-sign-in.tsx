import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAppHeader, GoabMicrositeHeader } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const HeaderSignIn = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox fullWidth skipRender>
      <GoabMicrositeHeader type="live"></GoabMicrositeHeader>
      <GoabAppHeader
        url="https://example.com"
        heading="Service name"
        fullMenuBreakpoint={1500}>
        <a href="#" className="interactive">Sign in</a>
      </GoabAppHeader>

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goa-microsite-header type="live"></goa-microsite-header>
                <goa-app-header
                  url="https://example.com"
                  heading="Design System"
                  [fullmenubreakpoint]="1500"
                  [hasmenuclickhandler]="true"
                  (_menuClick)="handleMenuClick()"
                >
                  <a href="#" class="interactive">Sign in</a>
                </goa-app-header>
              `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goab-microsite-header type="live"></goab-microsite-header>
                <goab-app-header
                  url="https://example.com"
                  heading="Design System"
                  [fullMenuBreakpoint]="1500"
                  (onMenuClick)="handleMenuClick()"
                >
                  <a href="#" class="interactive">Sign in</a>
                </goab-app-header>
              `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
              <GoAMicrositeHeader type="live"></GoAMicrositeHeader>
              <GoAAppHeader
                url="https://example.com"
                heading="Service name"
                fullMenuBreakpoint={1500}>
                <a href="#" className="interactive">Sign in</a>
              </GoAAppHeader>
              `}
        />
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
              <GoabMicrositeHeader type="live"></GoabMicrositeHeader>
              <GoabAppHeader
                url="https://example.com"
                heading="Service name"
                fullMenuBreakpoint={1500}>
                <a href="#" className="interactive">Sign in</a>
              </GoabAppHeader>
              `}
        />
      )}
    </Sandbox>
  )
}

export default HeaderSignIn;
