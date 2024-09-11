import { LanguageContext, Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDatePicker,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabModal, GoabTextarea
} from "@abgov/react-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./modal-examples.css";
import { GoabDropdownOnChangeDetail, GoabTextAreaOnChangeDetail } from "@abgov/ui-components-common";

export default function ModalExamples() {
  // hooks
  const [basicModalOpen, setBasicModalOpen] = useState<boolean>();
  const [destructiveModalOpen, setDestructiveModalOpen] = useState<boolean>();
  const [warnCalloutModalOpen, setWarnCalloutModalOpen] = useState<boolean>();
  const [inputModalOpen, setInputModalOpen] = useState<boolean>();
  const [effectiveDate, setEffectiveDate] = useState<Date|undefined>(new Date());
  const [onRouteChangeModalOpen, setOnRouteChangeModalOpen] = useState<boolean>();
  const [addItemModalOpen, setAddItemModalOpen] = useState<boolean>();
  const [type, setType] = useState<string>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const navigate = useNavigate();
  const language = useContext(LanguageContext);
  // @ts-ignore
  const onChangeEffectiveDate = (detail: GoabDatePickerOnChangeDetail) => {
    setEffectiveDate(detail.value);
  };

  const onChangeType = (event: GoabDropdownOnChangeDetail) => {
    setType(event.value);
  };

  const onChangeName = (value: string) => {
    setName(value);
  }

  const onChangeDescription = (event: GoabTextAreaOnChangeDetail) => {
    setDescription(event.value);
  }

  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-basic">Basic Modal</h3>
      <Sandbox skipRender>
        <GoabButton onClick={() => setBasicModalOpen(true)}>Open Basic Modal</GoabButton>
        <GoabModal
          heading="Heading"
          role="dialog"
          open={basicModalOpen}
          onClose={() => setBasicModalOpen(false)}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="secondary" onClick={() => setBasicModalOpen(false)}>
                Secondary
              </GoabButton>
              <GoabButton type="primary" onClick={() => setBasicModalOpen(false)}>
                Primary
              </GoabButton>
            </GoabButtonGroup>
          }>
          <p>Content</p>
        </GoabModal>
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  export class SomeOtherComponent {
                    open = false;
                    toggleModal() {
                      this.open = !this.open;
                    }
                  }
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button (_click)="toggleModal();">Open Basic Modal</goa-button>
                  <goa-modal [open]="open" (_close)="toggleModal()" heading="Heading">
                      <p>Content</p>
                      <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="toggleModal()">Secondary</goa-button>
                        <goa-button type="primary" (_click)="toggleModal()">Primary</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  const [open, setOpen] = useState(false);
                `}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton onClick={() => setOpen(true)}>Open Basic Modal</GoAButton>
                  <GoAModal
                    heading="Heading"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Secondary
                        </GoAButton>
                        <GoAButton type="primary" onClick={() => setOpen(false)}>
                          Primary
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>Content</p>
                  </GoAModal>
                `}
        />
      </Sandbox>

      <h3 id="component-example-destructive">Confirm a destructive action</h3>
      <Sandbox skipRender>
        <GoabButton
          type="tertiary"
          leadingIcon="trash"
          onClick={() => setDestructiveModalOpen(true)}>
          Delete my application
        </GoabButton>
        <GoabModal
          heading="Are you sure you want to delete this application?"
          open={destructiveModalOpen}
          role="alertdialog"
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="tertiary" onClick={() => setDestructiveModalOpen(false)}>
                Cancel
              </GoabButton>
              <GoabButton
                type="primary"
                variant="destructive"
                onClick={() => setDestructiveModalOpen(false)}>
                Delete application
              </GoabButton>
            </GoabButtonGroup>
          }>
          <p>This action cannot be undone.</p>
        </GoabModal>
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  export class SomeOtherComponent {
                    open = false;
                    toggleModal() {
                      this.open = !this.open;
                    }
                  }
                `}
        />

        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button type="tertiary" leadingIcon="trash" (_click)="toggleModal()">Delete my application</goa-button>
                  <goa-modal [open]="open" role="alertdialog" (_close)="toggleModal()" heading="Are you sure you want to delete this application?">
                      <p>This action cannot be undone.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="tertiary" (_click)="toggleModal()">Cancel</goa-button>
                        <goa-button type="primary" variant="destructive" (_click)="toggleModal()">Delete application</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  const [open, setOpen] = useState(false);
                `}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton type="tertiary" leadingIcon="trash" onClick={() => setOpen(true)}>Delete my application</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to delete this application?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="tertiary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton type="primary" variant="destructive" onClick={() => setOpen(false)}>
                           Delete application
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>This action cannot be undone.</p>
                  </GoAModal>
                `}
        />
      </Sandbox>

      <h3 id="component-example-warning">Warn a user of a deadline</h3>
      <Sandbox skipRender>
        <GoabButton type="secondary" onClick={() => setWarnCalloutModalOpen(true)}>
          Save for later
        </GoabButton>
        <GoabModal
          heading="Complete submission prior to 1PM"
          calloutVariant="important"
          role="alertdialog"
          open={warnCalloutModalOpen}
          onClose={() => setWarnCalloutModalOpen(false)}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="primary" onClick={() => setWarnCalloutModalOpen(false)}>
                I understand
              </GoabButton>
            </GoabButtonGroup>
          }>
          <p>
            You’ve selected to adjourn a matter that is required to appear today. This Calgary court
            location does not accept adjournment requests past 1PM MST. Please submit your
            adjournment request as soon as possible.
          </p>
        </GoabModal>
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  export class SomeOtherComponent {
                    open = false;
                    toggleModal() {
                      this.open = !this.open;
                    }
                  }
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button type="secondary" (_click)="toggleModal()">Save for later</goa-button>
                  <goa-modal [open]="open" role="alertdialog" calloutvariant="important"
                    (_close)="toggleModal()" heading="Complete submission prior to 1PM">
                      <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="primary" (_click)="toggleModal()">
                          I understand
                        </goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  const [open, setOpen] = useState(false);
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton type="secondary" onClick={() => setOpen(true)}>Save for later</GoAButton>
                  <GoAModal
                    heading="Complete submission prior to 1PM"
                    open={open}
                    calloutVariant="important"
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="primary" onClick={() => setOpen(false)}>I understand</GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                  </GoAModal>
                `}
        />
      </Sandbox>

      <h3 id="component-example-with-input">Confirm record change</h3>
      {/*Don't use a Sandbox because Datepicker inside a modal will make the modal shifts everytime we click on datepicker*/}
      <GoabContainer mt="m" mb="none">
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

      {language === "angular" && (
        <>
          <CodeSnippet
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
          />

          <CodeSnippet
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
          />
        </>
      )}

      {language === "react" && (
        <>
          <CodeSnippet
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
          />

          <CodeSnippet
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
          />
        </>
      )}

      <h3 id="component-example-add-item">Add another item</h3>
      {/*Don't use a Sandbox because the Dropdown inside a modal will make the modal shifts everytime we tab from the dropdown*/}
      <GoabContainer mt="m" mb="none">
        <GoabButtonGroup alignment="center">
          <GoabButton type="tertiary" leadingIcon="add" onClick={() => setAddItemModalOpen(true)}>
            Add another item
          </GoabButton>
        </GoabButtonGroup>

        <GoabModal
          heading="Add a new item"
          role="dialog"
          open={addItemModalOpen}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="tertiary" onClick={() => setAddItemModalOpen(false)}>
                Cancel
              </GoabButton>
              <GoabButton type="primary" onClick={() => setAddItemModalOpen(false)}>
                Save new item
              </GoabButton>
            </GoabButtonGroup>
          }>
          <p>Fill in the information to create a new item</p>
          <GoabFormItem label="Type" mt="xs">
            <GoabDropdown onChange={onChangeType} value={type}>
              <GoabDropdownItem value="1" label="Option 1"></GoabDropdownItem>
              <GoabDropdownItem value="2" label="Option 2"></GoabDropdownItem>
            </GoabDropdown>
          </GoabFormItem>
          <GoabFormItem label="Name" mt="xs">
            <GoabInput onChange={(event) => onChangeName(event.value)} value={name} name="name"></GoabInput>
          </GoabFormItem>
          <GoabFormItem label="Description" mt="xs">
            <GoabTextarea
              name="description"
              width="80%"
              rows={2}
              onChange={onChangeDescription}
              value={description}></GoabTextarea>
          </GoabFormItem>
        </GoabModal>
      </GoabContainer>

      {language === "angular" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                  export class SomeOtherComponent {
                    open = false;
                    type = "";
                    name = "";
                    description = "";
                    
                    toggleModal() {
                      this.open = !this.open;
                    }
                    
                    updateType(event: Event) {
                      this.type = (event as CustomEvent).detail.value;
                    }
                    
                    updateName(event: Event) {
                      this.name = (event as CustomEvent).detail.value;
                    }
                    
                    updateDescription(event: Event) {
                      this.description = (event as CustomEvent).detail.value;
                    }
                    
                  }
                `}
          />
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                  <goa-button type="tertiary" leadingicon="add" (_click)="toggleModal()">Add another item</goa-button>
                  <goa-modal [open]="open" role="dialog"
                    (_close)="toggleModal()" heading="Add a new item">
                    <p>Fill in the information to create a new item</p>
                    <goa-form-item label="Type" mt="xs">
                      <goa-dropdown (_change)="updateType($event)" [value]="type">
                        <goa-dropdown-item value="1" label="Option 1"></goa-dropdown-item>
                        <goa-dropdown-item value="2" label="Option 2"></goa-dropdown-item>
                      </goa-dropdown>
                    </goa-form-item>
                    <goa-form-item label="Name" mt="xs">
                      <goa-input name="name" (_change)="updateName($event)" [value]="name"></goa-input>
                    </goa-form-item>
                    <goa-form-item label="Description" mt="xs">
                      <goa-textarea name="description" width="80%" [rows]="2" (_change)="updateDescription($event)" [value]="description"></goa-textarea>
                    </goa-form-item>
                    <div slot="actions">
                        <goa-button-group alignment="end">
                          <goa-button type="tertiary" (_click)="toggleModal()">Cancel</goa-button>
                          <goa-button type="primary" (_click)="toggleModal()">Save new item</goa-button>
                        </goa-button-group>
                      </div>
                  </goa-modal>
                `}
          />
        </>
      )}

      {language === "react" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                  const [open, setOpen] = useState(false);
                  const [type, setType] = useState<string>();
                  const [name, setName] = useState<string>();
                  const [description, setDescription] = useState<string>();
                  
                  function onChangeName(name: string, value: string) {
                    setName(value);
                  }
                  
                  function onChangeDescription(name: string, value: string) {
                    setDescription(value);
                  }
                  
                  function onChangeType(name: string, value: string[] | string) {
                    setType(value as string);
                  };
                  
                `}
          />
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                  <GoAButton type="tertiary" leadingIcon="add" onClick={() => setOpen(true)}>
                    Add another item
                  </GoAButton>
                   <GoAModal
                    heading="Add a new item"
                    role="dialog"
                    open={open}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="tertiary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton type="primary" onClick={() => setOpen(false)}>
                          Save new item
                        </GoAButton>
                      </GoAButtonGroup>
                    }>
                      <p>Fill in the information to create a new item</p>
                      <GoAFormItem label="Type" mt="xs">
                        <GoADropdown onChange={onChangeType} value={type}>
                          <GoADropdownItem value="1" label="Option 1"></GoADropdownItem>
                          <GoADropdownItem value="2" label="Option 2"></GoADropdownItem>
                        </GoADropdown>
                      </GoAFormItem>
                      <GoAFormItem label="Name" mt="xs">
                        <GoAInput onChange={onChangeName} value={name} name="name"></GoAInput>
                      </GoAFormItem>
                      <GoAFormItem label="Description" mt="xs">
                        <GoATextArea name="description" width="80%" rows={2} onChange={onChangeDescription} value={description}></GoATextArea>
                      </GoAFormItem>
                   </GoAModal>
                `}
          />
        </>
      )}

      <h3 id="component-example-route-change">Route changes</h3>
      <Sandbox skipRender>
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  import { Router } from "@angular/router";
                  export class SomeOtherComponent {
                    open = false;
                    constructor(private router: Router) {}
                    
                    onOpen() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                    onChangeRoute() {
                      this.open = false;
                      setTimeout(() => this.router.navigate(["/components"]), 0)
                    }
                  }
                `}
        />

        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open" role="alertdialog" heading="Are you sure you want to change route?">
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="onClose()">Cancel</goa-button>
                        <goa-button type="primary" (_click)="onChangeRoute()">Change route</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`import { useNavigate } from "react-router-dom";`}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            const navigate = useNavigate();
            const [open, setOpen] = useState(false);
          `}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to change route?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton
                          size="medium"
                          onClick={() => {
                            setOpen(false);
                            // setTimeout will allow any modal transitions to be run
                            // setTimeout(() => navigate("/some-path"), 300) }
                            navigate("/components")
                        }}>Change route</GoAButton>
                      </GoAButtonGroup>
                    }
                  ></GoAModal>
                `}
        />
        <GoabButton onClick={() => setOnRouteChangeModalOpen(true)}>Open</GoabButton>
        <GoabModal
          heading="Are you sure you want to change route?"
          open={onRouteChangeModalOpen}
          onClose={() => setOnRouteChangeModalOpen(false)}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="secondary" onClick={() => setOnRouteChangeModalOpen(false)}>
                Cancel
              </GoabButton>
              <GoabButton
                type="primary"
                onClick={() => {
                  setOnRouteChangeModalOpen(false);
                  navigate("/components");
                }}>
                Change route
              </GoabButton>
            </GoabButtonGroup>
          }></GoabModal>
      </Sandbox>
    </>
  );
}
