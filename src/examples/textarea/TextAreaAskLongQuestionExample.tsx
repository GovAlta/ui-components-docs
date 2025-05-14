import { Sandbox } from "@components/sandbox";
import {
  GoabFormItem,
  GoabTextarea
} from "@abgov/react-components";

export const TextAreaAskLongQuestionExample = () => {
  const noop = () => {}
  return (
    <Sandbox fullWidth>

        <GoabFormItem
          label="Provide more detail"
          helpText="Do not include personal or financial information, like your National Insurance number or credit card details.">
          <GoabTextarea name="program" onChange={noop} width="100%" rows={6} maxCount={500} countBy={"word"} />
        </GoabFormItem>

    </Sandbox>
  )
}
