import { Sandbox } from "@components/sandbox";
import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDetails,
  GoabFormItem,
  GoabTextarea
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TextAreaAskQuestionMoreInformationExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox flags={["reactive"]} fullWidth allow={["form", "h2", "p"]}>
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                   export class TextareaAskQuestionExampleComponent {
                    form!: FormGroup;

                    public constructor(private fb: FormBuilder) {
                      this.form = this.fb.group({
                        program: [""]
                      })
                    }
                  }
                  `}
      />}
      <GoabContainer>
        <GoabButton type="tertiary" leadingIcon="arrow-back" mb="m">
          Back
        </GoabButton>

        <h2>Submit a question about your benefits</h2>
        <p>
          If you need clarification about your benefit eligibility, payment schedule, or application status, submit your
          question here.
        </p>
        <form>
        <GoabFormItem
          label="Provide details about your situation"
          helpText="Include specific details to help us answer your question quickly.">
          <GoabTextarea name="program" onChange={noop} maxCount={400} countBy={"character"} />
        </GoabFormItem>
        </form>
        <GoabDetails mt={"m"} heading="What kind of information is useful?">
          <p>
            Include your benefit program name, mention any recent correspondence you received and/or provide any
            relevant case or reference numbers.
          </p>
        </GoabDetails>

        <GoabButtonGroup alignment="start" mt="l">
          <GoabButton type="primary">
            Continue
          </GoabButton>
        </GoabButtonGroup>
      </GoabContainer>


    </Sandbox>
  )
}
