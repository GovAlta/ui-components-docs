import { RadioSlottedDescriptionExample } from "@examples/radio/RadioSlottedDescriptionExample.tsx";
import { RadioMaxWidthExample } from "@examples/radio/RadioMaxWidthExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function RadioExamples () {

  return (
    <>
      <SandboxHeader
        exampleTitle="Include a link in the helper text of an option"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-25318&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <RadioSlottedDescriptionExample/>

      <SandboxHeader
        exampleTitle="Max width on long radio items"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-75250&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <RadioMaxWidthExample/>
    </>
  );
}
