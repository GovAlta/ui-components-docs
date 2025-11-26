import { Sandbox } from "@components/sandbox";
import {
  GoabFormItem,
  GoabTextArea
} from "@abgov/react-components";

export const AskALongAnswerQuestionWithAMaximumWordCount = () => {
  const noop = () => {
  };
  return (
    <Sandbox fullWidth>

      <GoabFormItem
        label="Provide more detail"
        helpText="Do not include personal or financial information, like your National Insurance number or credit card details.">
        <GoabTextArea name="program" onChange={noop} width="100%" rows={6} maxCount={500} countBy={"word"} />
      </GoabFormItem>

    </Sandbox>
  );
};

export default AskALongAnswerQuestionWithAMaximumWordCount;