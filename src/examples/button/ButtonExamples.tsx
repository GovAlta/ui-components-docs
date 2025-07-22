import { AskAUserForAnAddress } from "@examples/ask-a-user-for-an-address.tsx";
import { ConfirmADestructiveAction } from "@examples/confirm-a-destructive-action.tsx";
import { DisabledButtonWithARequiredField } from "@examples/disabled-button-with-a-required-field.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const ButtonExamples = () => {

  return <>
    {/*Button Example 1*/}
    <SandboxHeader
      exampleTitle="Ask a user for an address"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-43250&t=X0IQW5flDDaj8Vyg-4">
    </SandboxHeader>
    <AskAUserForAnAddress />

    {/*Button example 2*/}
    <SandboxHeader
      exampleTitle="Confirm a destructive action"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43038&t=X0IQW5flDDaj8Vyg-4">
    </SandboxHeader>
    <ConfirmADestructiveAction />

    {/*Button example */}
    <SandboxHeader
      exampleTitle="Disabled button with a required field"
      figmaExample="">
    </SandboxHeader>
    <DisabledButtonWithARequiredField />
  </>;
};
