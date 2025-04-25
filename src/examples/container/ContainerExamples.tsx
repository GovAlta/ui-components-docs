import { ContainerUserInformationExample } from "@examples/container/ContainerUserInformationExample.tsx";
import { ContainerCaseFilesExample } from "@examples/container/ContainerCaseFilesExample.tsx";
import { ContainerCardGridExample } from "@examples/container/ContainerCardGridExample.tsx";
import { ContainerReviewActionExample } from "@examples/container/ContainerReviewActionExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function ContainerExamples() {
  return (
    <>
      {/*Container examples*/}

      <SandboxHeader
        exampleTitle="User information"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-148878&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <ContainerUserInformationExample/>

      <SandboxHeader
        exampleTitle="Card view of case files"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-183806&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <ContainerCaseFilesExample/>

      <SandboxHeader
        exampleTitle="Card grid"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-185614&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <ContainerCardGridExample/>

      <SandboxHeader
        exampleTitle="Review and action"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59124-197773&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>

      <ContainerReviewActionExample/>
    </>
  );
}
