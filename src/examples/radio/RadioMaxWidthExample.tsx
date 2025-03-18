import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const RadioMaxWidthExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [selectOne, setSelectOne] = useState<string>("1");
  return (
    <Sandbox fullWidth flags={["reactive"]} allow={["form"]} skipRenderOnly={"react"}>
      {/*We skipRenderOnly React because it is quite complex to remove value (2 els have value: radio-item and radio-group which radio-group is the one should remove value*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
             <GoAFormItem label="Select one option">
              <GoARadioGroup name="selectOne" value={value} onChange={(_, value) => setValue(value)}>
              <GoARadioItem value="1" label="Option one which has a very long label with lots of text" maxWidth="300px"/>
              <GoARadioItem value="2" label="Option two" />
              <GoARadioItem value="3" label="Option three" />
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
              <GoabFormItem label="Select one option">
                <GoabRadioGroup name="selectOne" value={value} onChange={(e: GoabRadioGroupOnChangeDetail) => setValue(e.value)}>
                  <GoabRadioItem value="1" label="Option one which has a very long label with lots of text" maxWidth="300px"></GoabRadioItem>
                  <GoabRadioItem value="2" label="Option two"></GoabRadioItem>
                  <GoabRadioItem value="3" label="Option three"></GoabRadioItem>
                </GoabRadioGroup>
              </GoabFormItem>
          `}
        />
      )}

      <form>
        <GoabFormItem label="Select one option">
          <GoabRadioGroup name="selectOne" value={selectOne} onChange={(e) => setSelectOne(e.value)}>
            <GoabRadioItem
              value="1"
              label="Option one which has a very long label with lots of text"
              maxWidth="300px"
            />
            <GoabRadioItem value="2" label="Option two" />
            <GoabRadioItem value="3" label="Option three" />
          </GoabRadioGroup>
        </GoabFormItem>
      </form>
    </Sandbox>
  );
};
