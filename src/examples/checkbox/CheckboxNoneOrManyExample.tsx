import { GoabCheckbox, GoabFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function CheckboxNoneOrManyExample() {
  const { version } = useContext(LanguageVersionContext);
  return (
    <>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}

        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
              <goa-form-item
                label="How would you like to be contacted?"
                helpText="Choose all that apply"
              >
                <goa-checkbox checked="false" name="optionOne" text="Email" />
                <goa-checkbox checked="false" name="optionTwo" text="Phone" />
                <goa-checkbox checked="false" name="optionThree" text="Text message" />
              </goa-form-item>
            `}
          />
        )}

        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
              <goab-form-item
                label="How would you like to be contacted?"
                helpText="Choose all that apply"
              >
                <goab-checkbox [checked]="false" name="optionOne" text="Email" />
                <goab-checkbox [checked]="false" name="optionTwo" text="Phone" />
                <goab-checkbox [checked]="false" name="optionThree" text="Text message" />
              </goab-form-item>
            `}
          />
        )}

        {/*React*/}
        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
              <GoAFormItem
                label="How would you like to be contacted?"
                helpText="Choose all that apply"
              >
                <GoACheckbox checked={false} name="optionOne" text="Email" />
                <GoACheckbox checked={false} name="optionTwo" text="Phone" />
                <GoACheckbox checked={false} name="optionThree" text="Text message" />
              </GoAFormItem>
            `}
          />
        )}

        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
              <GoabFormItem
                label="How would you like to be contacted?"
                helpText="Choose all that apply"
              >
                <GoabCheckbox checked={false} name="optionOne" text="Email" />
                <GoabCheckbox checked={false} name="optionTwo" text="Phone" />
                <GoabCheckbox checked={false} name="optionThree" text="Text message" />
              </GoabFormItem>
            `}
          />
        )}

        <GoabFormItem label="How would you like to be contacted?" helpText="Choose all that apply">
          <GoabCheckbox checked={false} name="optionOne" text="Email" />
          <GoabCheckbox checked={false} name="optionTwo" text="Phone" />
          <GoabCheckbox checked={false} name="optionThree" text="Text message" />
        </GoabFormItem>
      </Sandbox>
    </>
  );
}
