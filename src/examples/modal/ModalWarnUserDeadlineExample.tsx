import { Sandbox } from "@components/sandbox";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ModalWarnUserDeadlineExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [warnCalloutModalOpen, setWarnCalloutModalOpen] = useState<boolean>();
  return (
    <Sandbox skipRender>
      <GoabButton type="secondary" onClick={() => setWarnCalloutModalOpen(true)}>
        Save for later
      </GoabButton>
      <GoabModal
        heading="Complete submission prior to 1PM"
        calloutVariant="important"
        role="alertdialog"
        open={warnCalloutModalOpen}
        onClose={() => setWarnCalloutModalOpen(false)}
        actions={
          <GoabButtonGroup alignment="end">
            <GoabButton type="primary" onClick={() => setWarnCalloutModalOpen(false)}>
              I understand
            </GoabButton>
          </GoabButtonGroup>
        }>
        <p>
          You’ve selected to adjourn a matter that is required to appear today. This Calgary court
          location does not accept adjournment requests past 1PM MST. Please submit your
          adjournment request as soon as possible.
        </p>
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
                  <goa-button type="secondary" (_click)="toggleModal()">Save for later</goa-button>
                  <goa-modal [open]="open" role="alertdialog" calloutvariant="important"
                    (_close)="toggleModal()" heading="Complete submission prior to 1PM">
                      <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="primary" (_click)="toggleModal()">
                          I understand
                        </goa-button>
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
          <goab-button type="secondary" (onClick)="toggleModal()">Save for later</goab-button>
          <goab-modal [open]="open" role="alertdialog" calloutVariant="important"
            (onClose)="toggleModal()" heading="Complete submission prior to 1PM" [actions]="actions">
            <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
            <ng-template #actions>
              <goab-button-group alignment="end">
                <goab-button type="primary" (onClick)="toggleModal()">
                   I understand
                </goab-button>
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
                  <GoAButton type="secondary" onClick={() => setOpen(true)}>Save for later</GoAButton>
                  <GoAModal
                    heading="Complete submission prior to 1PM"
                    open={open}
                    calloutVariant="important"
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="primary" onClick={() => setOpen(false)}>I understand</GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
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
                  <GoabButton type="secondary" onClick={() => setOpen(true)}>Save for later</GoabButton>
                  <GoabModal
                    heading="Complete submission prior to 1PM"
                    open={open}
                    calloutVariant="important"
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="primary" onClick={() => setOpen(false)}>I understand</GoabButton>
                      </GoabButtonGroup>
                    }
                  >
                    <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                  </GoabModal>
                `}
        />
      )}
    </Sandbox>
  )
}
