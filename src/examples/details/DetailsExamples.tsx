import { DetailsMoreInformationBasicQuestionExample } from "@examples/details/DetailsMoreInformationBasicQuestionExample.tsx";
import { DetailsAdditionalInformationHelpUserExample } from "@examples/details/DetailsAdditionalInformationHelpUserExample.tsx";
import { DetailsShowDirectDepositInformationExample } from "@examples/details/DetailsShowDirectDepositInformationExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DetailsExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show more information to help answer a question"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-197360&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <DetailsMoreInformationBasicQuestionExample />

      <SandboxHeader
        exampleTitle="Show lists as more information to help answer a question"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-198753&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <DetailsAdditionalInformationHelpUserExample />

      <SandboxHeader
        exampleTitle="Ask a user for direct deposit information"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-202678&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <DetailsShowDirectDepositInformationExample />
    </>
  );
};
