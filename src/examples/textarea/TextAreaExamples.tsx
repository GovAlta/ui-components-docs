import {
  TextAreaAskQuestionMoreInformationExample
} from "@examples/textarea/TextAreaAskQuestionMoreInformationExample.tsx";

import { TextAreaAskLongQuestionExample } from "@examples/textarea/TextAreaAskLongQuestionExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TextAreaExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Ask a question and give more information"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-137633&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <TextAreaAskQuestionMoreInformationExample/>

      <SandboxHeader
        exampleTitle="Ask a long-answer question"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6674-70199&t=hnUe1OTZr4PmE2Ka-1">
      </SandboxHeader>
      <TextAreaAskLongQuestionExample />
    </>
  )
}
