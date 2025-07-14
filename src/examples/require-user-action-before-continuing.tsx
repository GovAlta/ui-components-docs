import { Sandbox } from "@components/sandbox";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const RequireUserActionBeforeContinuing = () => {
  const {version} = useContext(LanguageVersionContext);
  const [basicModalOpen, setBasicModalOpen] = useState<boolean>();
  return (
    <Sandbox skipRender>
      <GoabButton onClick={() => setBasicModalOpen(true)}>Open Basic Modal</GoabButton>
      <GoabModal
        heading="Are you sure you want to continue?"
        role="dialog"
        open={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        actions={
          <GoabButtonGroup alignment="end">
            <GoabButton type="secondary" onClick={() => setBasicModalOpen(false)}>
              Back
            </GoabButton>
            <GoabButton type="primary" onClick={() => setBasicModalOpen(false)}>
              Continue
            </GoabButton>
          </GoabButtonGroup>
        }>
        <p>You cannot return to this page.</p>
      </GoabModal>
      {/*Angular*/}
      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  export class SomeOtherComponent {
                    open = false;
                    toggleModal() {
                      this.open = !this.open;
                    }
                  }
                `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button (_click)="toggleModal();">Open Basic Modal</goa-button>
                  <goa-modal [open]="open" (_close)="toggleModal()" heading="Are you sure you want to continue?">
                      <p>You cannot return to this page.</p>
                      <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="toggleModal()">Back</goa-button>
                        <goa-button type="primary" (_click)="toggleModal()">Continue</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goab-button (onClick)="toggleModal();">Open Basic Modal</goab-button>
                  <goab-modal [open]="open" (close)="toggleModal()" heading="Are you sure you want to continue?" [actions]="actions">
                    <p>You cannot return to this page.</p>
                    <ng-template #actions>
                      <goab-button-group alignment="end">
                        <goab-button type="secondary" (onClick)="toggleModal()">Back</goab-button>
                        <goab-button type="primary" (onClick)="toggleModal()">Continue</goab-button>
                      </goab-button-group>
                    </ng-template>
                  </goab-modal>
                `}
        />
      )}

      {/*React code*/}
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  const [open, setOpen] = useState(false);
                `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton onClick={() => setOpen(true)}>Open Basic Modal</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to continue?"
                    role="dialog"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Back
                        </GoAButton>
                        <GoAButton type="primary" onClick={() => setOpen(false)}>
                          Continue
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>You cannot return to this page.</p>
                  </GoAModal>
                `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoabButton onClick={() => setOpen(true)}>Open Basic Modal</GoabButton>
                  <GoabModal
                    heading="Are you sure you want to continue?"
                    role="dialog"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="secondary" onClick={() => setOpen(false)}>
                          Back
                        </GoabButton>
                        <GoabButton type="primary" onClick={() => setOpen(false)}>
                          Continue
                        </GoabButton>
                      </GoabButtonGroup>
                    }
                  >
                    <p>You cannot return to this page.</p>
                  </GoabModal>
                `}
        />
      )}
    </Sandbox>
  )
}

export default RequireUserActionBeforeContinuing;
