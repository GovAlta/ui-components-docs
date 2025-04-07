import { ContainerUserInformationExample } from "@examples/container/ContainerUserInformationExample.tsx";
import { ContainerCaseFilesExample } from "@examples/container/ContainerCaseFilesExample.tsx";
import { ContainerCardGridExample } from "@examples/container/ContainerCardGridExample.tsx";
import { ContainerReviewActionExample } from "@examples/container/ContainerReviewActionExample.tsx";

export default function ContainerExamples() {
  return (
    <>
      {/*Container examples*/}
      <h3 id="component-example-1">User information</h3>
      <ContainerUserInformationExample/>

      <h3 id="component-example-2">Card view of case files</h3>
      <ContainerCaseFilesExample/>

      <h3 id="component-example-3">Card grid that links to different sections</h3>
      <ContainerCardGridExample/>

      <h3 id="example-4">Review and action</h3>
      <ContainerReviewActionExample/>
    </>
  );
}
