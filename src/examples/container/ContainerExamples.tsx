import { DisplayUserInformation } from "@examples/display-user-information.tsx";
import { CardViewOfCaseFiles } from "@examples/card-view-of-case-files.tsx";
import { CardGrid } from "@examples/card-grid.tsx";
import { ReviewAndAction } from "@examples/review-and-action.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function ContainerExamples() {
  return (
    <>
      {/*Container examples*/}

      <SandboxHeader
        exampleTitle="User information"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-154067&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <DisplayUserInformation />

      <SandboxHeader
        exampleTitle="Card view of case files"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-161012&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <CardViewOfCaseFiles />

      <SandboxHeader
        exampleTitle="Card grid"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-165873&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <CardGrid />

      <SandboxHeader
        exampleTitle="Review and action"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-173587&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>

      <ReviewAndAction />
    </>
  );
}
