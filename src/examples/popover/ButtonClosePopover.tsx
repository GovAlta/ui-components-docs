import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabButton, GoabPopover } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const ButtonClosePopover = () => {
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
                  <p>This popover has a close button inside</p>
                  <p>Click the button below to close this popover.</p>
                  <GoabButton 
                    type="secondary" 
                    size="compact" 
                    action="close"
                  >
                    Close Popover
                  </GoabButton>
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
              <p>This popover has a close button inside</p>
              <p>Click the button below to close this popover.</p>
              <goab-button 
                type="secondary" 
                size="compact" 
                action="close">
                Close Popover
              </goab-button>
              
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
          <p>This popover has a close button inside</p>
          <p>Click the button below to close this popover.</p>
          <GoabButton type="secondary" size="compact" action="close">
            Close Popover
          </GoabButton>
        </GoabPopover>
      </GoabBlock>
    </Sandbox>
  );
};
