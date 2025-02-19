import { Sandbox } from "@components/sandbox";
import GoabModal from "@components/mock-modal/Modal.tsx";
import { GoabButton, GoabButtonGroup } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const ButtonConfirmDestructiveActionExample = () => {
  const noop = () => {};

  return (
    <Sandbox>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
           function onClick() {}
        `}
      />
      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          export class Example {
            onClick() {}
          }
        `}
      />

      <GoabModal heading="Are you sure you want to delete this record?">
        <p>You cannot undo this action.</p>

        <GoabButtonGroup alignment="end" mt="l">
          <GoabButton type="secondary" onClick={noop}>
            Cancel
          </GoabButton>
          <GoabButton type="primary" variant="destructive" onClick={noop}>
            Delete record
          </GoabButton>
        </GoabButtonGroup>
      </GoabModal>
    </Sandbox>
  );
};
