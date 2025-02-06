import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAppHeader, GoabAppHeaderMenu } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const AppHeaderWithNavigationExample = () => {
  const {version} = useContext(LanguageVersionContext);

  return (
    <Sandbox fullWidth skipRender>
      {/*Angular code*/}
      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goa-microsite-header type="live"></goa-microsite-header>
                <goa-app-header url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <goa-app-header-menu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goa-app-header-menu>
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
                <goab-app-header url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <goab-app-header-menu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goab-app-header-menu>
                  <a href="#" class="interactive">Sign in</a>
                </goab-app-header>
              `}
        />
      )}

      {/*React code*/}
      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                <GoAAppHeader url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <GoAAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </GoAAppHeaderMenu>
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
                <GoabAppHeader url="https://example.com" heading="Ticket and Fine Payments">
                  <a href="#">Support</a>
                  <GoabAppHeaderMenu heading="Tickets" leadingIcon="ticket">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </GoabAppHeaderMenu>
                  <a href="#" className="interactive">Sign in</a>
                </GoabAppHeader>
              `}
        />
      )}

      <GoabAppHeader url="https://www.alberta.ca" heading="Ticket and Fine Payments">
        <a href="">Support</a>
        <GoabAppHeaderMenu heading="Tickets" leadingIcon="ticket">
          <a>Cases</a>
          <a>Payments</a>
          <a>Outstanding</a>
        </GoabAppHeaderMenu>
        <a className="interactive">Sign in</a>
      </GoabAppHeader>
    </Sandbox>
  )
}
