import {
  DetailsMoreInformationBasicQuestionExample
} from "@examples/details/DetailsMoreInformationBasicQuestionExample.tsx";
import {
  DetailsAdditionalInformationHelpUserExample
} from "@examples/details/DetailsAdditionalInformationHelpUserExample.tsx";
import {
  DetailsShowDirectDepositInformationExample
} from "@examples/details/DetailsShowDirectDepositInformationExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DetailsExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show more information to help answer a question"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59148-252228&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <DetailsMoreInformationBasicQuestionExample />

      <SandboxHeader
        exampleTitle="Show lists as more information to help answer a question "
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59148-252532&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <DetailsAdditionalInformationHelpUserExample />

      <SandboxHeader
        exampleTitle="Show more information to help a user fill out direct deposit information"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59148-251933&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <DetailsShowDirectDepositInformationExample/>
    </>
  )
}
