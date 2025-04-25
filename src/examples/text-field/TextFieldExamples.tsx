import { TextFieldAskBirthdayExample } from "@examples/text-field/TextFieldAskBirthdayExample.tsx";
import { TextFieldSearchExample } from "@examples/text-field/TextFieldSearchExample.tsx";
import { TextFieldAskUserAmountExample } from "@examples/text-field/TextFieldAskUserAmountExample.tsx";
import {
  TextFieldAskUserIndianRegistrationExample
} from "@examples/text-field/TextFieldAskUserIndianRegistrationExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { ButtonAskUserAddressExample } from "@examples/button/ButtonAskUserAddressExample.tsx";


export default function TextFieldExamples() {
  return (
    <>
      {/*Examples*/}
      <SandboxHeader
        exampleTitle="Ask a user for an address"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-34121&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <ButtonAskUserAddressExample />

      <SandboxHeader
        exampleTitle="Ask a user for their birthday"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59348-31582&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <TextFieldAskBirthdayExample/>

      <SandboxHeader
        exampleTitle="Search"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59348-35365&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <TextFieldSearchExample/>

      <SandboxHeader
        exampleTitle="Ask a user for dollar amounts"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59348-51406&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <TextFieldAskUserAmountExample/>

      <SandboxHeader
        exampleTitle="Ask a user for an indian registration number"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59350-15813&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <TextFieldAskUserIndianRegistrationExample/>
    </>
  );
}
