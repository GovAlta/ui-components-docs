import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import AskAUserOneQuestionAtATime from "@examples/ask-a-user-one-question-at-a-time.tsx";
import GiveBackgroundInformationBeforeAskingAQuestion
      from "../give-background-information-before-asking-a-question.tsx";
import ShowMoreInformationToHelpAnswerAQuestion from "../show-more-information-to-help-answer-a-question.tsx";
import ShowASectionTitleOnAQuestionPage from "../show-a-section-title-on-a-question-page.tsx";
import ShowASimpleProgressIndicatorOnAQuestionPage from "../show-a-simple-progress-indicator-on-a-question-page.tsx";
import GroupRelatedQuestionsTogetherOnAQuestionPage from "../group-related-questions-together-on-a-question-page.tsx";
import ShowASimpleProgressIndicatorOnAQuestionPageWithMultipleQuestions
      from "../show-a-simple-progress-indicator-on-a-question-page-with-multiple-questions.tsx";

export default function QuestionPageExamples() {
  return (
    <div className="question-page-example">
        <SandboxHeader
          exampleTitle="Ask a user one question at a time"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-93778&t=sWyB4A2UXCb9rn2W-1">
        </SandboxHeader>
          <AskAUserOneQuestionAtATime />

        <SandboxHeader
          exampleTitle="Give background information before asking a question"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
          <GiveBackgroundInformationBeforeAskingAQuestion />

        <SandboxHeader
          exampleTitle="Reveal more information to help answer a question"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
      <ShowMoreInformationToHelpAnswerAQuestion />

        <SandboxHeader
          exampleTitle="Show a section title on a question page"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
          <ShowASectionTitleOnAQuestionPage />

        <SandboxHeader
          exampleTitle="Show a simple progress indicator on a question page"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
          <ShowASimpleProgressIndicatorOnAQuestionPage />

        <SandboxHeader
          exampleTitle="Group related questions together on a question page"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
          <GroupRelatedQuestionsTogetherOnAQuestionPage />

        <SandboxHeader
          exampleTitle="Show a simple progress indicator on a question page with multiple questions"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
          <ShowASimpleProgressIndicatorOnAQuestionPageWithMultipleQuestions />

    </div>
  );
}