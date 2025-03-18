import { Sandbox } from "@components/sandbox";
import { GoabDetails, GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const DetailsMoreInformationBasicQuestionExample = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox fullWidth note="Example below: Advanced Education - Pay for my education">

      {/*Angular code*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          export class ExampleComponent {
            radioOnChange(event: GoabRadioGroupOnChangeDetail) {
              console.log("value ", event.value);
            }
          }
        `}
      />}

      {/*React code*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          const radioGroupOnChange = (event: GoabRadioGroupOnChangeDetail) => {
            console.log("value is ", event.value);
          }
        `}
      />}

      <GoabFormItem label="Do you pay for childcare?" helpText="Examples of child care include day care, day homes, and baby-sitters.">
        <GoabRadioGroup name="pay" onChange={() => { }}>
          <GoabRadioItem label="Yes" value="yes" name="pay" />
          <GoabRadioItem label="No" value="no" name="pay" />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabDetails heading="Why are we asking this question?" mt="l">
        <p>
          This question helps us better understand your situation and ensure that you receive
          the right information and support.
        </p>
      </GoabDetails>
    </Sandbox>
  )
}
