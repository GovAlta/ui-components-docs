import QuestionPageOneQuestion from "../ask-a-user-one-question-at-a-time.tsx";
import QuestionPageAdditionalBackgroundInformation from "../give-background-information-before-asking-a-question.tsx";
import QuestionPageProgressiveDisclosure from "../reveal-more-information-to-help-answer-a-question.tsx";
import QuestionPageSectionTitle from "../show-a-section-title-on-a-question-page.tsx";
import QuestionPageSimpleProgressIndicator from "../show-a-simple-progress-indicator-on-a-question-page.tsx";
import QuestionPageMultipleQuestions from "../group-related-questions-together-on-a-question-page.tsx";
import QuestionPageMultipleQuestionsWithProgress
    from "../show-a-simple-progress-indicator-on-a-question-page-with-multiple-questions.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function QuestionPageExamples() {
  return (
    <div className="question-page-example">
        <SandboxHeader
          exampleTitle="One question"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-93778&t=sWyB4A2UXCb9rn2W-1">
        </SandboxHeader>
        <QuestionPageOneQuestion />

        <SandboxHeader
          exampleTitle="Additional background information"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageAdditionalBackgroundInformation />

        <SandboxHeader
          exampleTitle="Progressive disclosure"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageProgressiveDisclosure />

        <SandboxHeader
          exampleTitle="Section title"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageSectionTitle />

        <SandboxHeader
          exampleTitle="Simple progress indicator"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageSimpleProgressIndicator />

        <SandboxHeader
          exampleTitle="Multiple questions"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageMultipleQuestions />

        <SandboxHeader
          exampleTitle="Multiple questions and a simple progress indicator"
          figmaExample="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design">
        </SandboxHeader>
        <QuestionPageMultipleQuestionsWithProgress />

    </div>
  );
}