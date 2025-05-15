import { Sandbox } from "@components/sandbox";
import { GoabDetails, GoabFormItem, GoabInput } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const DetailsShowDirectDepositInformationExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {};

  return (
    <Sandbox flags={["reactive"]} fullWidth allow={["form", "h2", "p"]} skipRenderOnly={"react"}>

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
                bankNumber: [""],
                transitNumber: [""],
                accountNumber: [""]
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
            const [bankNumber, setBankNumber] = useState<string>("");
            const [transitNumber, setTransitNumber] = useState<string>("");
            const [accountNumber, setAccountNumber] = useState<string>("");
        `}
      />}
      {version === "new" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
            <h2>Direct deposit information</h2>
            <p>
              Find this information on your bank's website or on your personal cheques. Contact your bank if you can't find
              this information.
            </p>
          
            <GoabFormItem label="Bank or Institution number" id="bankNumber" helpText="3-4 digits in length" mb="xl">
              <GoabInput maxLength={4} name="bankNumber" onChange={(event: GoabInputOnChangeDetail) => setBankNumber(event.value)} value={bankNumber} ariaLabel="bankNumber"
                     width="88px"></GoabInput>
            </GoabFormItem>
            <GoabFormItem label="Branch or Transit number" helpText="5 digits in length" id="transitNumber" mb="xl">
              <GoabInput maxLength={5} name="transitNumber" onChange={(event: GoabInputOnChangeDetail) => setTransitNumber(event.value)} value={transitNumber} ariaLabel="transitNumber"
                     width="143px"></GoabInput>
            </GoabFormItem>
            <GoabFormItem label="Account number" helpText="3-12 digits in length" id="accountNumber">
              <GoabInput maxLength={12} name="accountNumber" value={accountNumber} onChange={(event: GoabInputOnChangeDetail) => setAccountNumber(event.value)}
                     ariaLabel="accountNumber"></GoabInput>
            </GoabFormItem>
            <GoabDetails heading="Where can I find this information on a personal cheque?" mt="l">
              <p>Below is an example of where you can find the required bank information on a personal cheque.</p>
              <img src="https://design.alberta.ca/images/details-demo.jpg" />
            </GoabDetails>
        `}
      />}

      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
           <GoAFormItem label="Bank or Institution number" id="bankNumber" helpText="3-4 digits in length" mb="xl">
              <GoAInput maxLength={4} name="bankNumber" onChange={onChange} value="" ariaLabel="bankNumber" width="88px"></GoAInput>
           </GoAFormItem>
           <GoAFormItem label="Branch or Transit number" helpText="5 digits in length" id="transitNumber" mb="xl">
              <GoAInput maxLength={5} name="transitNumber" onChange={onChange} value="" ariaLabel="transitNumber" width="143px"></GoAInput>
           </GoAFormItem>
           <GoAFormItem label="Account number" helpText="3-12 digits in length" id="accountNumber">
              <GoAInput maxLength={12} name="accountNumber" value="" onChange={onChange} ariaLabel="accountNumber"></GoAInput>
           </GoAFormItem>
           <GoADetails heading="Where can I find this information on a personal cheque?" mt="l">
              <p>Below is an example of where you can find the required bank information on a personal cheque.</p>
              <img src="https://design.alberta.ca/images/details-demo.jpg" />
           </GoADetails>
        `}
      />}


      <h2>Direct deposit information</h2>
      <p>
        Find this information on your bank's website or on your personal cheques. Contact your bank
        if you can't find this information.
      </p>
      <form>
        <GoabFormItem
          label="Bank or Institution number"
          id="bankNumber"
          helpText={"3-4 digits in length"}
          mb="xl">
          <GoabInput
            maxLength={4}
            name="bankNumber"
            onChange={noop}
            value={""}
            ariaLabel="bankNumber"
            width="88px"
          />
        </GoabFormItem>
        <GoabFormItem
          label="Branch or Transit number"
          helpText={"5 digits in length"}
          id="transitNumber"
          mb="xl">
          <GoabInput
            maxLength={5}
            name="transitNumber"
            onChange={noop}
            value={""}
            ariaLabel="transitNumber"
            width="143px"
          />
        </GoabFormItem>
        <GoabFormItem label="Account number" helpText="3-12 digits in length" id="accountNumber">
          <GoabInput
            maxLength={12}
            name="accountNumber"
            value=""
            onChange={noop}
            ariaLabel="accountNumber"
          />
        </GoabFormItem>
      </form>

      <GoabDetails heading="Where can I find this information on a personal cheque?" mt="l">
        <p>
          Below is an example of where you can find the required bank information on a personal
          cheque.
        </p>
        <img src="https://design.alberta.ca/images/details-demo.jpg" />
      </GoabDetails>
    </Sandbox>
  );
};
