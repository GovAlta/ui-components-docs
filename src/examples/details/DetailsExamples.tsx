import {
  ShowAListToHelpAnswerAQuestion
} from "@examples/show-a-list-to-help-answer-a-question.tsx";
import {
  AskAUserForDirectDepositInformation
} from "@examples/ask-a-user-for-direct-deposit-information.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import RevealMoreInformationToHelpAnswerAQuestion
  from "@examples/reveal-more-information-to-help-answer-a-question.tsx";

export const DetailsExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show more information to help answer a question"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-197360&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <RevealMoreInformationToHelpAnswerAQuestion />

      <SandboxHeader
        exampleTitle="Show a list to help answer a question"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-198753&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowAListToHelpAnswerAQuestion />

      <SandboxHeader
        exampleTitle="Ask a user for direct deposit information"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-202678&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AskAUserForDirectDepositInformation />
    </>
  )
}
