import { ButtonAskUserAddressExample } from "@examples/button/ButtonAskUserAddressExample.tsx";
import { ButtonConfirmDestructiveActionExample } from "@examples/button/ButtonConfirmDestructiveActionExample.tsx";
import { ButtonDisabledWithRequiredFieldExample } from "@examples/button/ButtonDisabledWithRequiredFieldExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const ButtonExamples = () => {

  return <>
    {/*Button Example 1*/}
    <SandboxHeader
      exampleTitle="Ask a user for an address"
      figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-34121&t=Zhk6rgZlHuDDA1M3-4">
    </SandboxHeader>
    <ButtonAskUserAddressExample/>

    {/*Button example 2*/}
    <SandboxHeader
      exampleTitle="Confirm a destructive action"
      figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-33444&t=Zhk6rgZlHuDDA1M3-4">
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
