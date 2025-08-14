import { GoabCheckbox, GoabFormItem, GoabInput } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const CheckboxRevealSlotExample = () => {
  return (
    <>
      {/*Skip rendering because we use reveal that isn't supported by sandbox*/}
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
<goab-form-item [formGroup]="form" label="How would you like to be contacted?">
  <goab-checkbox formControlName="emailContactMethod" text="Email" [reveal]="emailReveal">
    <ng-template #emailReveal>
      <goab-form-item label="Email address">
        <goab-input name="email" formControlName="emailAddress"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-checkbox>
  <goab-checkbox formControlName="phoneContactMethod" text="Phone" [reveal]="phoneNumberReveal">
    <ng-template #phoneNumberReveal>
      <goab-form-item label="Phone number">
        <goab-input name="phone" formControlName="phoneNumber"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-checkbox>
  <goab-checkbox formControlName="textContactMethod" text="Text message" [reveal]="textContactMethodReveal">
    <ng-template #textContactMethodReveal>
      <goab-form-item label="Mobile phone number">
        <goab-input name="phone" formControlName="phoneNumber"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-checkbox>
</goab-form-item>
          `}
        />

        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
export class ExampleComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      emailContactMethod: [false],
      phoneContactMethod: [false],
      textContactMethod: [false],
      emailAddress: [""],
      phoneNumber: [""],
    });
  }
}
          `}
        />

        {/*React*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
<GoabFormItem label="How would you like to be contacted?">
  <GoabCheckbox
    checked={false}
    name="optionOne"
    text="Email"
    reveal={
      <GoabFormItem label="Email address">
        <GoabInput name="email" onChange={(e) =>  {/** do nothing */}} value="" />
      </GoabFormItem>
    }
  />
  <GoabCheckbox
    checked={false}
    name="optionTwo"
    text="Phone"
    reveal={
      <GoabFormItem label="Phone number">
        <GoabInput name="phoneNumber" onChange={(e) => {/** do nothing */}} value="" />
      </GoabFormItem>
    }
  />
  <GoabCheckbox
    checked={false}
    name="optionThree"
    text="Text message"
    reveal={
      <GoabFormItem label="Mobile phone number">
        <GoabInput name="mobilePhoneNumber" onChange={(e) =>  {/** do nothing */}} value="" />
      </GoabFormItem>
    }
  />
</GoabFormItem>
          `}
        />

        <GoabFormItem label="How would you like to be contacted?">
          <GoabCheckbox
            checked={false}
            name="optionOne"
            text="Email"
            reveal={
              <GoabFormItem label="Email address">
                <GoabInput name="email" onChange={() => {}} value="" />
              </GoabFormItem>
            }
          />
          <GoabCheckbox
            checked={false}
            name="optionTwo"
            text="Phone"
            reveal={
              <GoabFormItem label="Phone number">
                <GoabInput name="phoneNumber" onChange={() => {}} value="" />
              </GoabFormItem>
            }
          />
          <GoabCheckbox
            checked={false}
            name="optionThree"
            text="Text message"
            reveal={
              <GoabFormItem label="Mobile phone number">
                <GoabInput name="mobilePhoneNumber" onChange={() => {}} value="" />
              </GoabFormItem>
            }
          />
        </GoabFormItem>
      </Sandbox>
    </>
  );
};
