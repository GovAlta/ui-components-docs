import ShowNumberOfResultsPerPageExample from "../show-number-of-results-per-page.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const PaginationExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Set items per page and navigate multiple pages in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-118312&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowNumberOfResultsPerPageExample />
    </>
  );
};
