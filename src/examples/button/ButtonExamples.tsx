import { ButtonAskUserAddressExample } from "@examples/button/ButtonAskUserAddressExample.tsx";
import { ButtonConfirmDestructiveActionExample } from "@examples/button/ButtonConfirmDestructiveActionExample.tsx";
import { ButtonDisabledWithRequiredFieldExample } from "@examples/button/ButtonDisabledWithRequiredFieldExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const ButtonExamples = () => {

  return <>
    {/*Button Example 1*/}
    <SandboxHeader
      exampleTitle="Ask a user for an address"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-43250&t=X0IQW5flDDaj8Vyg-4">
    </SandboxHeader>
    <ButtonAskUserAddressExample/>

    {/*Button example 2*/}
    <SandboxHeader
      exampleTitle="Confirm a destructive action"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43038&t=X0IQW5flDDaj8Vyg-4">
    </SandboxHeader>
    <ButtonConfirmDestructiveActionExample/>

    {/*Button example */}
    <SandboxHeader
      exampleTitle="Disabled button with a required field"
      figmaExample="">
    </SandboxHeader>
    <ButtonDisabledWithRequiredFieldExample/>
  </>;
};
