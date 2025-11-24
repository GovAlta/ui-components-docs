import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabRadioGroup, GoabRadioItem, GoabFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const IncludeALinkInTheHelperTextOfAnOption = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {
  };

  return (
    <>
    <Sandbox fullWidth skipRender>
      {/*Angular*/}

      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          <goa-form-item label="How would you like to be contacted?">
            <goa-radio-group name="contactOption">
              <goa-radio-item value="1" label="Email">
                <span slot="description">Help text with a <a href="#">link</a>.</span>
              </goa-radio-item>
              <goa-radio-item value="2" text="Phone" />
              <goa-radio-item value="3" text="Text message" />
            </goa-radio-group>
          </goa-form-item>
        `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-form-item label="How would you like to be contacted?">
            <goab-radio-group name="contactOption">
              <goab-radio-item value="1" label="Email" [description]="descriptionTemplate">
                <ng-template #descriptionTemplate>
                  <span>Help text with a <a href="#">link</a>.</span>
                </ng-template>
              </goab-radio-item>
              <goab-radio-item value="2" text="Phone" />
              <goab-radio-item value="3" text="Text message" />
            </goab-radio-group>
          </goab-form-item>
        `}
      />}

      {/*React*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <GoAFormItem label="How would you like to be contacted?">
            <GoARadioGroup name="contactOption">
              <GoARadioItem
                value="1"
                label="Email"
                description={<span>Help text with a <a href="#">link</a>.</span>}
              />
              <GoARadioItem value="2" label="Phone" />
              <GoARadioItem value="3" label="Text message" />
            </GoARadioGroup>
          </GoAFormItem>
        `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <GoabFormItem label="How would you like to be contacted?">
            <GoabRadioGroup name="contactOption">
              <GoabRadioItem
                value="1"
                label="Email"
                description={<span>Help text with a <a href="#">link</a>.</span>}
              />
              <GoabRadioItem value="2" label="Phone" />
              <GoabRadioItem value="3" label="Text message" />
            </GoabRadioGroup>
          </GoabFormItem>
        `}
      />}

      <GoabFormItem label="How would you like to be contacted?">
        <GoabRadioGroup name="contactOption">
          <GoabRadioItem
            name="optionOne"
            value="1"
            label="Email"
            description={<span>Help text with a <a href="#">link</a>.</span>}
          />
          <GoabRadioItem value="2" name="optionTwo" label="Phone" />
          <GoabRadioItem value="3" name="optionThree" label="Text message" />
        </GoabRadioGroup>
      </GoabFormItem>
    </Sandbox>
    </>
  );
}

export default IncludeALinkInTheHelperTextOfAnOption;
