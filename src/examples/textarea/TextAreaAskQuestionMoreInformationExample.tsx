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

        <h2>Description</h2>
        <p>
          List all components and include a description, including the number of hours for
          each.
        </p>
        <form>
        <GoabFormItem
          label="Program outline"
          helpText="Remember to maintain clarity, accuracy, and coherence throughout the program outline.">
          <GoabTextarea name="program" value="Input text" onChange={noop} />
        </GoabFormItem>
        </form>
        <GoabDetails heading="How to write a good outline">
          <p>
            Break down your outline into easily digestible sections. This can help to ensure
            that the document is well-organized and easy to navigate.
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
