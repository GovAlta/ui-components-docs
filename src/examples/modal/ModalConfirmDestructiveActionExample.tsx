import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ModalConfirmDestructiveActionExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [destructiveModalOpen, setDestructiveModalOpen] = useState<boolean>();
  return (
    <Sandbox skipRender>
      <GoabButton
        type="tertiary"
        leadingIcon="trash"
        onClick={() => setDestructiveModalOpen(true)}>
        Delete record
      </GoabButton>
      <GoabModal
        heading="Are you sure you want to delete this record?"
        open={destructiveModalOpen}
        role="alertdialog"
        actions={
          <GoabButtonGroup alignment="end">
            <GoabButton type="tertiary" onClick={() => setDestructiveModalOpen(false)}>
              Cancel
            </GoabButton>
            <GoabButton
              type="primary"
              variant="destructive"
              onClick={() => setDestructiveModalOpen(false)}>
              Delete record
            </GoabButton>
          </GoabButtonGroup>
        }>
        <p>This action cannot be undone.</p>
      </GoabModal>

      {/*Angular code*/}
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
                  <goa-button type="tertiary" leadingIcon="trash" (_click)="toggleModal()">Delete record</goa-button>
                  <goa-modal [open]="open" role="alertdialog" (_close)="toggleModal()" heading="Are you sure you want to delete this record?">
                      <p>This action cannot be undone.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="tertiary" (_click)="toggleModal()">Cancel</goa-button>
                        <goa-button type="primary" variant="destructive" (_click)="toggleModal()">Delete record</goa-button>
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
            <goab-button type="tertiary" leadingIcon="trash" (onClick)="toggleModal()">Delete record</goab-button>
            <goab-modal [open]="open" role="alertdialog" (onClose)="toggleModal()" heading="Are you sure you want to delete this record?" [actions]="actions">
              <p>This action cannot be undone.</p>
              <ng-template #actions>
                <goab-button-group alignment="end">
                <goab-button type="tertiary" (onClick)="toggleModal()">Cancel</goab-button>
                <goab-button type="primary" variant="destructive" (onClick)="toggleModal()">Delete record</goab-button>
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
                  <GoAButton type="tertiary" leadingIcon="trash" onClick={() => setOpen(true)}>Delete record</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to delete this record?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="tertiary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton type="primary" variant="destructive" onClick={() => setOpen(false)}>
                           Delete record
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>This action cannot be undone.</p>
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
                  <GoabButton type="tertiary" leadingIcon="trash" onClick={() => setOpen(true)}>Delete record</GoabButton>
                  <GoabModal
                    heading="Are you sure you want to delete this record?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="tertiary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoabButton>
                        <GoabButton type="primary" variant="destructive" onClick={() => setOpen(false)}>
                           Delete record
                        </GoabButton>
                      </GoabButtonGroup>
                    }
                  >
                    <p>This action cannot be undone.</p>
                  </GoabModal>
                `}
        />
      )}
    </Sandbox>
  )
}
