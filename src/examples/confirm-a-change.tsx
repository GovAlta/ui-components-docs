import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDatePicker,
  GoabFormItem,
  GoabModal
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

export const ConfirmAChange = () => {
  const {version} = useContext(LanguageVersionContext);
  const [inputModalOpen, setInputModalOpen] = useState<boolean>();
  const [effectiveDate, setEffectiveDate] = useState<Date | undefined>(new Date());

  const onChangeEffectiveDate = (detail: GoabDatePickerOnChangeDetail) => {
    setEffectiveDate(detail.value as Date);
  };
  return (
    <>
      {/*Don't use a Sandbox because Datepicker inside a modal will make the modal shifts everytime we click on datepicker*/}
      <GoabContainer mt="none" mb="none">
        <GoabButtonGroup alignment="center">
          <GoabButton onClick={() => setInputModalOpen(true)}>Save and continue</GoabButton>
        </GoabButtonGroup>

        <GoabModal
          heading="Address has changed"
          role="dialog"
          open={inputModalOpen}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="secondary" onClick={() => setInputModalOpen(false)}>
                Undo address change
              </GoabButton>
              <GoabButton type="primary" onClick={() => setInputModalOpen(false)}>
                Confirm
              </GoabButton>
            </GoabButtonGroup>
          }>
          <GoabContainer type="non-interactive" accent="filled" padding="compact" width="full">
            <dl className="address-change-example--description">
              <dt>Before</dt>
              <dd>123456 78 Ave NW, Edmonton, Alberta</dd>
            </dl>
            <dl className="address-change-example--description">
              <dt>After</dt>
              <dd>881 12 Ave NW, Edmonton, Alberta</dd>
            </dl>
          </GoabContainer>
          <GoabFormItem label="Effective date">
            <GoabDatePicker
              onChange={onChangeEffectiveDate}
              name="effectiveDate"
              value={effectiveDate}></GoabDatePicker>
          </GoabFormItem>
        </GoabModal>
      </GoabContainer>
      <CodeSnippet
        lang="css"
        allowCopy={true}
        code={`
            .address-change-example--description dt {
              font: var(--goa-typography-heading-s);
            }
            .address-change-example--description dd {
              font: var(--goa-typography-body-m);
              margin-left: 0;
            }       
          `}
      />

      {/*Angular code*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  export class SomeOtherComponent {
                    open = false;
                    effectiveDate = new Date(); 
                    
                    toggleModal() {
                      this.open = !this.open;
                    }
                    
                    onChangeEffectiveDate(event: Event) {
                      this.effectiveDate = (event as CustomEvent).detail.value;
                    }
                  }
                `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  export class SomeOtherComponent {
                    open = false;
                    effectiveDate = new Date(); 
                    
                    toggleModal() {
                      this.open = !this.open;
                    }
                    
                    onChangeEffectiveDate(event: GoabDatePickerOnChangeDetail) {
                      this.effectiveDate = event.value as Date;
                    }
                  }
                `}
      />}

      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  <goa-button (_click)="toggleModal()">Save and continue</goa-button>
                  <goa-modal [open]="open" role="dialog"
                    (_close)="toggleModal()" heading="Address has changed">
                      <goa-container type="non-interactive" accent="filled" padding="compact" width="full">
                        <dl class="address-change-example--description">
                          <dt>Before</dt>
                          <dd>123456 78 Ave NW, Edmonton, Alberta</dd>
                        </dl>
                        <dl class="address-change-example--description">
                          <dt>After</dt>                   
                          <dd>881 12 Ave NW, Edmonton, Alberta</dd>
                        </dl>
                      </goa-container>
                      <goa-form-item label="Effective date">
                        <goa-date-picker (_change)="onChangeEffectiveDate($event)" name="effectiveDate" [value]="effectiveDate">
                        </goa-date-picker>
                      </goa-form-item>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="toggleModal()">
                          Undo address change
                        </goa-button>
                        <goa-button type="primary" (_click)="toggleModal()">
                          Confirm
                        </goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-button (onClick)="toggleModal()">Save and continue</goab-button>
          <goab-modal [open]="open" role="dialog"
           (onClose)="toggleModal()" heading="Address has changed" [actions]="actions">
            <goab-container type="non-interactive" accent="filled" padding="compact" width="full">
              <dl class="address-change-example--description">
                <dt>Before</dt>
                <dd>123456 78 Ave NW, Edmonton, Alberta</dd>
              </dl>
              <dl class="address-change-example--description">
                <dt>After</dt>
                <dd>881 12 Ave NW, Edmonton, Alberta</dd>
              </dl>
            </goab-container>
            <goab-form-item label="Effective date">
              <goab-date-picker (onChange)="onChangeEffectiveDate($event)" name="effectiveDate" [value]="effectiveDate"></goab-date-picker>
            </goab-form-item>
            <ng-template #actions>
              <goab-button-group alignment="end">
                <goab-button type="secondary" (onClick)="toggleModal()">
                  Undo address change
                </goab-button>
                <goab-button type="primary" (onClick)="toggleModal()">
                  Confirm
                </goab-button>
              </goab-button-group>
            </ng-template>
          </goab-modal>
                `}
      />}

      {/*React code*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  const [open, setOpen] = useState(false);
                  const [effectiveDate, setEffectiveDate] = useState<Date>(new Date());
                  
                  const onChangeEffectiveDate = (name: string, value: Date) => {
                    setEffectiveDate(value);
                  }
                `}
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  const [open, setOpen] = useState(false);
                  const [effectiveDate, setEffectiveDate] = useState<Date | undefined>(new Date());
                  
                  const onChangeEffectiveDate = (detail: GoabDatePickerOnChangeDetail) => {
                    setEffectiveDate(detail.value as Date);
                  }
                `}
      />}

      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  <GoAButton onClick={() => setOpen(true)}>Save and continue</GoAButton>
                  <GoAModal
                    heading="Address has changed"
                    role="dialog"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Undo address change
                        </GoAButton>
                        <GoAButton type="primary" onClick={() => setOpen(false)}>
                          Confirm
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                   <GoAContainer type="non-interactive" accent="filled" padding="compact" width="full">
                      <dl className="address-change-example--description">
                        <dt>Before</dt>
                        <dd>123456 78 Ave NW, Edmonton, Alberta</dd>
                      </dl>
                      <dl className="address-change-example--description">
                        <dt>After</dt>
                        <dd>881 12 Ave NW, Edmonton, Alberta</dd>
                      </dl>
                    </GoAContainer>
                    <GoAFormItem label="Effective date">
                      <GoADatePicker
                        onChange={onChangeEffectiveDate}
                        name="effectiveDate"
                        value={effectiveDate}></GoADatePicker>
                    </GoAFormItem>
                  </GoAModal>
                `}
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  <GoabButton onClick={() => setOpen(true)}>Save and continue</GoabButton>
                  <GoabModal
                    heading="Address has changed"
                    role="dialog"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="secondary" onClick={() => setOpen(false)}>
                          Undo address change
                        </GoabButton>
                        <GoabButton type="primary" onClick={() => setOpen(false)}>
                          Confirm
                        </GoabButton>
                      </GoabButtonGroup>
                    }
                  >
                   <GoabContainer type="non-interactive" accent="filled" padding="compact" width="full">
                      <dl className="address-change-example--description">
                        <dt>Before</dt>
                        <dd>123456 78 Ave NW, Edmonton, Alberta</dd>
                      </dl>
                      <dl className="address-change-example--description">
                        <dt>After</dt>
                        <dd>881 12 Ave NW, Edmonton, Alberta</dd>
                      </dl>
                    </GoabContainer>
                    <GoabFormItem label="Effective date">
                      <GoabDatePicker
                        onChange={onChangeEffectiveDate}
                        name="effectiveDate"
                        value={effectiveDate}></GoabDatePicker>
                    </GoabFormItem>
                  </GoabModal>
                `}
      />}
    </>
  )
}

export default ConfirmAChange;
