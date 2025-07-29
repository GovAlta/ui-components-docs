import { GoabCheckbox, GoabFormItem, GoabInput, GoabSpacer } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";

export const RevealCheckboxInputBasedOnSelection = () => {
  const { version, language } = useContext(LanguageVersionContext);
  return (
    <>
      {/*Skip rendering because we use reveal that isn't supported by sandbox*/}
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
              <goa-form-item label="How would you like to be contacted?">
                <goa-checkbox name="optionOne" text="Email" value="email" [checked]="optionOneChecked" (_change)="updateContactMethod($event)">
                  <div slot="reveal">
                    <goa-form-item label="Email address">
                      <goa-input name="email" [value]="emailAddress" (_change)="updateEmailAddress($event)"></goa-input>
                    </goa-form-item>
                  </div>
                </goa-checkbox>
                <goa-checkbox name="optionTwo" text="Phone" value="phone" [checked]="optionTwoChecked" (_change)="updateContactMethod($event)">
                  <div slot="reveal">
                    <goa-form-item label="Phone number">
                        <goa-input name="phone" [value]="phoneNumber" (_change)="updatePhoneNumber($event)"></goa-input>
                    </goa-form-item>
                  </div>
                </goa-checkbox>
                <goa-checkbox name="optionThree" text="Text message" value="text" [checked]="optionThreeChecked" (_change)="updateContactMethod($event)">
                    <div slot="reveal">
                      <goa-form-item label="Mobile phone number">
                        <goa-input name="phone" [value]="phoneNumber" (_change)="updatePhoneNumber($event)"></goa-input>
                      </goa-form-item>
                    </div>
                </goa-checkbox>
              </goa-form-item>
            `}
          />
        )}

        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
        export class ExampleComponent {
          phoneNumber = "";
          emailAddress = "";
          optionOneChecked = false;
          optionTwoChecked = false;
          optionThreeChecked = false;

          updateContactMethod(event: any) {
            const value = (event as CustomEvent).detail.value;
            if (value === "email") {
              this.optionOneChecked = true;
            }
            if (value === "phone") {
              this.optionTwoChecked = true;
            }
            if (value === "text") {
              this.optionThreeChecked = true;
            }
          }
          updatePhoneNumber(event: any) {
            this.phoneNumber = (event as CustomEvent).detail.value;
          }
          updateEmailAddress(event: any) {
            this.emailAddress = (event as CustomEvent).detail.value;
          }
        }
     `}
          />
        )}

        {/*Angular*/}
        {version === "new" && (
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
        )}

        {version === "new" && (
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
        )}

        {/*React*/}
        {version === "new" && (
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
        )}

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
      <GoabSpacer vSpacing={"1"}></GoabSpacer>
      {version === "old" && language === "react" && (
        <OldComponentBanner
          componentName={"Reveal input based on selection"}
          language={language}
          type="example"
        />
      )}
    </>
  );
};
