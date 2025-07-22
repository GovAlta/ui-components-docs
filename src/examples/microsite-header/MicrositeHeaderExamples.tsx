import GiveFeedbackLinkExample from "../link-the-user-to-give-feedback-to-the-service.tsx";
import ShowVersionNumberExample from "../show-version-number.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function MicrositeHeaderExamples() {
  return (
    <>
      <SandboxHeader
        exampleTitle="Link to give feedback to the service"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-92884"
      />
      <GiveFeedbackLinkExample />
      <SandboxHeader
        exampleTitle="Show version number"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-92885"
      />
      <ShowVersionNumberExample />
    </>
  );
}