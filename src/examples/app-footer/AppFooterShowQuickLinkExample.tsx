import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAppFooter, GoabAppFooterMetaSection } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const AppFooterShowQuickLinkExample = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox skipRender fullWidth>
      {/*********** Angular code **************/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goa-app-footer maxcontentwidth="100%">
                  <goa-app-footer-meta-section slot="meta">
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </goa-app-footer-meta-section>
                </goa-app-footer>
               `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goab-app-footer maxContentWidth="100%">
                  <goab-app-footer-meta-section slot="meta">
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </goab-app-footer-meta-section>
                </goab-app-footer>
               `}
      />}

      {/*********** React code **************/}

      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                 <GoAAppFooter maxContentWidth="100%">
                  <GoAAppFooterMetaSection>
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </GoAAppFooterMetaSection>
                </GoAAppFooter>
              `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                 <GoabAppFooter maxContentWidth="100%">
                  <GoabAppFooterMetaSection>
                    <a href="#">
                      Give feedback
                    </a>
                    <a href="#">
                      Accessibility
                    </a>
                    <a href="#">
                      Privacy
                    </a>
                    <a href="#">
                      Contact us
                    </a>
                  </GoabAppFooterMetaSection>
                </GoabAppFooter>
              `}
      />}

      <GoabAppFooter maxContentWidth={"100%"}>
        <GoabAppFooterMetaSection>
          <a href="#">Give feedback</a>
          <a href="#">Accessibility</a>
          <a href="#">Privacy</a>
          <a href="#">Contact us</a>
        </GoabAppFooterMetaSection>
      </GoabAppFooter>
    </Sandbox>
  )
}
