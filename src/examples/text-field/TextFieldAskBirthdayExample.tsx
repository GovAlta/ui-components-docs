import { Sandbox } from "@components/sandbox";
import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TextFieldAskBirthdayExample = () => {
  const { version } = useContext(LanguageVersionContext);

  const noop = () => {};
  return (
    <Sandbox flags={["reactive"]} skipRenderOnly={"react"}>
      {/*React code*/}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
           const [day, setDay] = useState<string>('');
           const [month, setMonth] = useState<string | undefined>('');
           const [year, setYear] = useState<string>('');
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
           <GoabFormItem label="What is your date of birth?" >
            <GoabBlock gap="m" direction="row">
            <GoabFormItem helpText={"Month"}>
                <GoabDropdown onChange={(event: GoabDropdownOnChangeDetail) => setMonth(event.value)} name="month" value={month}>
                  <GoabDropdownItem label="January" value="January"></GoabDropdownItem>
                  <GoabDropdownItem label="February" value="February"></GoabDropdownItem>
                  <GoabDropdownItem label="March" value="March"></GoabDropdownItem>
                  <GoabDropdownItem label="April" value="April"></GoabDropdownItem>
                  <GoabDropdownItem label="May" value="May"></GoabDropdownItem>
                  <GoabDropdownItem label="June" value="June"></GoabDropdownItem>
                  <GoabDropdownItem label="July" value="July"></GoabDropdownItem>
                  <GoabDropdownItem label="August" value="August"></GoabDropdownItem>
                  <GoabDropdownItem label="September" value="September"></GoabDropdownItem>
                  <GoabDropdownItem label="October" value="October"></GoabDropdownItem>
                  <GoabDropdownItem label="November" value="November"></GoabDropdownItem>
                  <GoabDropdownItem label="December" value="December"></GoabDropdownItem>
                </GoabDropdown>
              </GoabFormItem>
              
              <GoabFormItem  helpText={"Day (DD)"}>
                <GoabInput onChange={(event: GoabInputOnChangeDetail) => setDay(event.value)} value={day} name="day" width="2ch"></GoabInput>
              </GoabFormItem>
              <GoabFormItem helpText={"Year (YYYY)"}>
                <GoabInput onChange={(event: GoabInputOnChangeDetail) => setYear(event.value)} value={year} name="year" width="4ch"></GoabInput>
              </GoabFormItem>
            </GoabBlock>
          </GoabFormItem>
        `}
        />
      )}

      {/*Angular code*/}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
           export class ExampleComponent {
            form!: FormGroup;
            constructor(private fb: FormBuilder) {
              this.form = this.fb.group({
                day: [''],
                month: [''],
                year: [''],
              });
            }
          }
        `}
        />
      )}

      <GoabFormItem label="What is your date of birth?">
        <GoabBlock gap="m" direction="row">
          <GoabFormItem helpText={"Month"}>
            <GoabDropdown onChange={noop} name="month" value="">
              <GoabDropdownItem label="January" value="January" />
              <GoabDropdownItem label="February" value="February" />
              <GoabDropdownItem label="March" value="March" />
              <GoabDropdownItem label="April" value="April" />
              <GoabDropdownItem label="May" value="May" />
              <GoabDropdownItem label="June" value="June" />
              <GoabDropdownItem label="July" value="July" />
              <GoabDropdownItem label="August" value="August" />
              <GoabDropdownItem label="September" value="September" />
              <GoabDropdownItem label="October" value="October" />
              <GoabDropdownItem label="November" value="November" />
              <GoabDropdownItem label="December" value="December" />
            </GoabDropdown>
          </GoabFormItem>

          <GoabFormItem helpText={"Day (DD)"}>
            <GoabInput onChange={noop} value="" name="day" width="2ch" />
          </GoabFormItem>

          <GoabFormItem helpText={"Year (YYYY)"}>
            <GoabInput onChange={noop} value="" name="year" width="4ch" />
          </GoabFormItem>
        </GoabBlock>
      </GoabFormItem>
    </Sandbox>
  );
};
