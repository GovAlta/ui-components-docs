import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabInput, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const RadioRevealSlotExample = () => {
  const noop = () => {}

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
<goab-form-item [formGroup]="form" label="How would you like to be contacted?" helpText="Select one option">
  <goab-radio-group name="contactMethod" formControlName="contactMethod">
    <goab-radio-item label="Email" value="email" [reveal]="phoneNumberReveal">
    <ng-template #phoneNumberReveal>
      <goab-form-item label="Phone number">
        <goab-input name="phone" formControlName="phoneNumber"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-radio-item>
  <goab-radio-item value="phone" label="Phone" [reveal]="emailReveal">
    <ng-template #emailReveal>
      <goab-form-item label="Email address">
        <goab-input name="email" formControlName="emailAddress"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-radio-item>

  <goab-radio-item name="contactMethod" value="text" label="Text message" [reveal]="textContactMethodReveal">
    <ng-template #textContactMethodReveal>
      <goab-form-item label="Mobile phone number">
        <goab-input name="phone" formControlName="phoneNumber"></goab-input>
      </goab-form-item>
    </ng-template>
  </goab-radio-item>
</goab-radio-group>
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
      contactMethod: [""],
      phoneNumber: [""],
      emailAddress: [""],
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
<GoabFormItem label="How would you like to be contacted?" helpText={"Select one option"}>
  <GoabRadioGroup name="contactMethod" value={contactMethod} onChange={(e) => setContactMethod(e.value)}>
    <GoabRadioItem value="email" label="Email" reveal={
      <GoabFormItem label="Phone number">
        <GoabInput name="phoneNumber" onChange={() => {/** do nothing */}} value="" />
      </GoabFormItem>
      }
    />
    <GoabRadioItem value="phone" label="Phone" reveal={
      <GoabFormItem label="Email address">
        <GoabInput name="email" onChange={() => {/** do nothing */}} value="" />
      </GoabFormItem>
      }
    />
    <GoabRadioItem value="text" label="Text message" reveal={
      <GoabFormItem label="Mobile phone number">
        <GoabInput name="mobilePhoneNumber" onChange={() => {/** do nothing */}} value="" />
      </GoabFormItem>
    }
  />
  </GoabRadioGroup>
</GoabFormItem>
          `}
        />

        <GoabFormItem label="How would you like to be contacted?" helpText={"Select one option"}>
          <GoabRadioGroup name="contactMethod" onChange={noop}>
            <GoabRadioItem value="email" label="Email" reveal={
              <GoabFormItem label="Phone number">
                <GoabInput name="phoneNumber" onChange={() => {/** do nothing */}} value="" />
              </GoabFormItem>
            }
            />
            <GoabRadioItem value="phone" label="Phone" reveal={
              <GoabFormItem label="Email address">
                <GoabInput name="email" onChange={() => {/** do nothing */}} value="" />
              </GoabFormItem>
            }
            />
            <GoabRadioItem value="text" label="Text message" reveal={
              <GoabFormItem label="Mobile phone number">
                <GoabInput name="mobilePhoneNumber" onChange={() => {/** do nothing */}} value="" />
              </GoabFormItem>
            }
            />
          </GoabRadioGroup>
        </GoabFormItem>
      </Sandbox>
    </>
  );
};
