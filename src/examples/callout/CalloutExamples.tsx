import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { ConfirmThatAnApplicationWasSubmitted } from "@examples/confirm-that-an-application-was-submitted.tsx";

export const CalloutExamples = () => {

  return <>
    {/*Callout Example 1*/}
    <SandboxHeader
      exampleTitle="Confirm that an application was submitted"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-125026&t=jbZ3ZY9Al2nJpHse-4">
    </SandboxHeader>
    <ConfirmThatAnApplicationWasSubmitted />

    {/*Callout example 2*/}
  </>;
};
