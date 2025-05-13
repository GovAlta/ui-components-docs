import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { useContext} from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const RadioYesNoExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox fullWidth flags={["reactive"]} allow={["form"]} skipRenderOnly={"react"}>
      {/*We skipRenderOnly React because it is quite complex to remove value (2 els have value: radio-item and radio-group which radio-group is the one should remove value*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAFormItem label="Have you changed your name?" helpText="This includes changing your last name or spelling your name differently">
              <GoARadioGroup orientation="horizontal" name="selectOne" onChange={onChange}>
                <GoARadioItem value="1" label="Yes" />
                <GoARadioItem value="2" label="No" />
              </GoARadioGroup>
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
              <GoabFormItem label="Have you changed your name?" helpText="This includes changing your last name or spelling your name differently">
                <GoabRadioGroup orientation="horizontal" name="selectOne" onChange={onChange}>
                  <GoabRadioItem value="1" label="Yes" />
                  <GoabRadioItem value="2" label="No" />
                </GoabRadioGroup>
              </GoabFormItem>
          `}
        />
      )}

      <form>
        <GoabFormItem label="Have you changed your name?" helpText="This includes changing your last name or spelling your name differently">
          <GoabRadioGroup orientation="horizontal" name="selectOne" onChange={noop}>
            <GoabRadioItem value="1" label="Yes" />
            <GoabRadioItem value="2" label="No" />
          </GoabRadioGroup>
        </GoabFormItem>
      </form>
    </Sandbox>
  );
};
