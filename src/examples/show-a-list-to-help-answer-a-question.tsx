import { Sandbox } from "@components/sandbox";
import { GoabBlock, GoabDetails, GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ShowAListToHelpAnswerAQuestion = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}

  return (
    <Sandbox flags={["reactive"]} fullWidth allow={["form"]}>
      {/*Angular code*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
          export class ExampleComponent {
            form!: FormGroup;
            constructor(private fb: FormBuilder) {
              this.form = this.fb.group({
                additional: [""],
              })
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

      <form>
        <GoabFormItem
        label="Do you have additional education expense?"
        helpText="You can request this money now or at any time during your program."
      >
        <GoabRadioGroup name="additional" onChange={noop}>
          <GoabRadioItem label="Yes" value="yes" name="additional" />
          <GoabRadioItem label="No" value="no" name="additional" />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabDetails heading="What is an additional education expense?">
        <GoabBlock gap="m" mt="m">
          <div>
            <strong>Examples of education expenses</strong>
            <ul className="goa-unordered-list">
              <li>Laptop and computer hardware</li>
              <li>Computer apps and subscriptions</li>
              <li>Home internet</li>
              <li>Testing and exam fees</li>
              <li>Work or school clothing, like work boots</li>
            </ul>
          </div>
          <div>
            <strong>Do not include</strong>
            <ul className="goa-unordered-list">
              <li>Tuition</li>
              <li>Mandatory fees</li>
              <li>Books and supplies</li>
              <li>School association fees</li>
            </ul>
          </div>
        </GoabBlock>
      </GoabDetails>
      </form>
    </Sandbox>
  )
}

export default ShowAListToHelpAnswerAQuestion;
