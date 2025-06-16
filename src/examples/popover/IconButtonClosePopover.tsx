import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabButton, GoabIconButton, GoabPopover } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const IconButtonClosePopover = () => {
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
                  <p>This popover has a close icon button inside</p>
                  <p>Click the icon button below to close this popover.</p>
                  <GoabIconButton 
                    icon="close" 
                    variant="color" 
                    action="close"
                    ariaLabel="Close Popover"
                  />
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
              <p>This popover has a close icon button inside</p>
              <p>Click the icon button below to close this popover.</p>
              <goab-icon-button 
                icon="close" 
                variant="color" 
                action="close"
                ariaLabel="Close Popover">
              </goab-icon-button>
              
              <ng-template #closeTarget>
                <goab-button type="primary" size="normal">
                  Click to open (with close icon button)
                </goab-button>
              </ng-template>
            </goab-popover>
            `}
        />
      )}

      {/* Sandbox Example */}
      <GoabBlock gap="xl" direction="column">
        <GoabPopover target={popoverTargetWithClose} minWidth="250px">
          <GoabIconButton icon="close" variant="color" action="close" ariaLabel="Close Popover" />
          <p>This popover has a close icon button inside</p>
          <p>Click the icon button above to close this popover.</p>
        </GoabPopover>
      </GoabBlock>
    </Sandbox>
  );
};
