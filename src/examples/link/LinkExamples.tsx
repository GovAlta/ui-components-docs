import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { LinkToAnExternalPage } from "../link-to-an-external-page.tsx";

export default function LinkExamples() {
  return (
    <>
      <SandboxHeader exampleTitle="Link to an external page"
                     figmaExample={"https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=7219-158738&t=ZAP1bFiCNoYaDiKo-4"} />
      <LinkToAnExternalPage />
    </>
  );
}
