import { GoabBlock, GoabButton, GoabFormItem, GoabInput } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TextFieldSearchExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const noop = () => {};
  return (
    <Sandbox flags={["reactive"]} allow={["form"]} skipRenderOnly={"react"}>
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
                        search: [''],
                      });
                    }
                    onClick() {
                      console.log('search:', this.form.controls['search'].value);
                    }
                  }
        `}
        />
      )}

      {/*React code*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAFormItem>
              <GoABlock gap="xs" direction="row">
                <GoAInput type="search" name="search" value="" onChange={onChange} leadingIcon="search"></GoAInput>
                <GoAButton type="primary" onClick={onClick}>Search</GoAButton>
              </GoABlock>
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
             const [search, setSearch] = useState<string>('');
             const onClick = () => console.log('search: ', search);
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
            <GoabFormItem>
              <GoabBlock gap="xs" direction="row">
                <GoabInput type="search" name="search" value={search} onChange={(event: GoabInputOnChangeDetail) => setSearch(event.value)} leadingIcon="search"></GoabInput>
                <GoabButton type="primary" onClick={onClick}>Search</GoabButton>
              </GoabBlock>
            </GoabFormItem>
        `}
        />
      )}

      <form>
        <GoabFormItem>
          <GoabBlock gap="xs" direction="row">
            <GoabInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
            <GoabButton type="primary" onClick={noop}>
              Search
            </GoabButton>
          </GoabBlock>
        </GoabFormItem>
      </form>
    </Sandbox>
  );
};
