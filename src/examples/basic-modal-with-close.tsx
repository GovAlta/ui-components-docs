import { Sandbox } from "@components/sandbox";
import { GoabButton, GoabModal } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const BasicModalWithClose = () => {
  const {version} = useContext(LanguageVersionContext);
  const [basicModalOpen, setBasicModalOpen] = useState<boolean>();
  return (
    <Sandbox skipRender>
      <GoabButton onClick={() => setBasicModalOpen(true)}>Open Basic Modal</GoabButton>
      <GoabModal
        heading="Modal"
        open={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        >
        <p>This modal uses an icon button to close it.</p>
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
                  <goa-modal [open]="open" (_close)="toggleModal()" heading="Modal">
                      <p>This modal uses an icon button to close it.</p>
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
                  <goab-modal [open]="open" (close)="toggleModal()" heading="Modal" [actions]="actions">
                    <p>This modal uses an icon button to close it.</p>
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
                    heading="Modal"
                    open={open}
                    onClose={() => setOpen(false)}
                  >
                    <p>This modal uses an icon button to close it.</p>
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
                    heading="Modal"
                    open={open}
                    onClose={() => setOpen(false)}
                  >
                    <p>This modal uses an icon button to close it.</p>
                  </GoabModal>
                `}
        />
      )}
    </Sandbox>
  )
}

export default BasicModalWithClose;
