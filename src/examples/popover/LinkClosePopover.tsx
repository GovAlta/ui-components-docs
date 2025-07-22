import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabButton, GoabLink, GoabPopover } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const LinkClosePopover = () => {
  const { version } = useContext(LanguageVersionContext);

  const popoverTargetWithClose = (
    <GoabButton type="primary" size="normal">
      Click to open
    </GoabButton>
  );

  return (
    <Sandbox skipRender>
      {/* React Code Snippets */}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
              const popoverTargetWithClose = (
                <GoabButton type="primary" size="normal">
                  Click to open
                </GoabButton>
              );
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                <GoabPopover target={popoverTargetWithClose} minWidth="250px">
                  <p>This popover has a close link inside</p>
                  <p>Click the link below to close this popover.</p>
                  <GoabLink action="close">
                    <a href="#">Close Popover</a>
                  </GoabLink>
                </GoabPopover>    
            `}
        />
      )}

      {/* Angular Code Snippets */}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-popover [target]="closeTarget" minWidth="250px">
              <p>This popover has a close link inside</p>
              <p>Click the link below to close this popover.</p>
              <goab-link action="close">
                <a href="#">Close Popover</a>
              </goab-link>
              
              <ng-template #closeTarget>
                <goab-button type="primary" size="normal">
                  Click to open
                </goab-button>
              </ng-template>
            </goab-popover>
            `}
        />
      )}

      {/* Sandbox Example */}
      <GoabBlock gap="xl" direction="column">
        <GoabPopover target={popoverTargetWithClose} minWidth="250px">
          <p>This popover has a close link inside</p>
          <p>Click the link below to close this popover.</p>
          <GoabLink action="close">
            <a href="popover#tab-1">Close Popover</a>
          </GoabLink>
        </GoabPopover>
      </GoabBlock>
    </Sandbox>
  );
};
