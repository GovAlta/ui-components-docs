import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAppHeader, GoabAppHeaderMenu, GoabMicrositeHeader } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const HeaderLoggedInMenu = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox fullWidth skipRender>
      <GoabMicrositeHeader type="live"></GoabMicrositeHeader>
      <GoabAppHeader
        url="https://example.com"
        heading="Design System"
        fullMenuBreakpoint={1500}>
        <a href="#">Services</a>
        <GoabAppHeaderMenu heading="John Smith" leadingIcon="person-circle">
            <a href="#">Manage account</a>
            <a href="#">Request new staff account</a>
            <a href="#">System admin</a>
            <a href="#" className="interactive">Sign out</a>
        </GoabAppHeaderMenu>
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
                  <a href="#">Services</a>
                  <goa-app-header-menu heading="John Smith" leadingIcon="person-circle">
                      <a href="#">Manage account</a>
                      <a href="#">Request new staff account</a>
                      <a href="#">System admin</a>
                      <a href="#" className="interactive">Sign out</a>
                  </goa-app-header-menu>
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
                  <a href="#">Services</a>
                  <goab-app-header-menu heading="John Smith" leadingIcon="person-circle">
                      <a href="#">Manage account</a>
                      <a href="#">Request new staff account</a>
                      <a href="#">System admin</a>
                      <a href="#" className="interactive">Sign out</a>
                  </goab-app-header-menu>
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
                    heading="Design System"
                    onMenuClick={handleMenuClick}
                    fullMenuBreakpoint={1500}>
                      <a href="#">Services</a>
                      <GoAAppHeaderMenu heading="John Smith" leadingIcon="person-circle">
                          <a href="#">Manage account</a>
                          <a href="#">Request new staff account</a>
                          <a href="#">System admin</a>
                          <a href="#" className="interactive">Sign out</a>
                      </GoAAppHeaderMenu>
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
                    heading="Design System"
                    onMenuClick={handleMenuClick}
                    fullMenuBreakpoint={1500}>
                      <a href="#">Services</a>
                      <GoabAppHeaderMenu heading="John Smith" leadingIcon="person-circle">
                          <a href="#">Manage account</a>
                          <a href="#">Request new staff account</a>
                          <a href="#">System admin</a>
                          <a href="#" className="interactive">Sign out</a>
                      </GoabAppHeaderMenu>
                  </GoabAppHeader>
              `}
        />
      )}
    </Sandbox>
  )
}

export default HeaderLoggedInMenu;
