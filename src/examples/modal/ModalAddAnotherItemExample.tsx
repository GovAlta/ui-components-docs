import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabModal,
  GoabTextarea,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  GoabDropdownOnChangeDetail,
  GoabTextAreaOnChangeDetail,
} from "@abgov/ui-components-common";

export const ModalAddAnotherItemExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [addItemModalOpen, setAddItemModalOpen] = useState<boolean>();
  const [type, setType] = useState<string>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeDescription = (event: GoabTextAreaOnChangeDetail) => {
    setDescription(event.value);
  };
  const onChangeType = (event: GoabDropdownOnChangeDetail) => {
    setType(event.value);
  };

  return (
    <>
      {/*Don't use a Sandbox because the Dropdown inside a modal will make the modal shifts everytime we tab from the dropdown*/}
      <GoabContainer mt="none" mb="none">
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
          }
        >
          <p>Fill in the information to create a new item</p>
          <GoabFormItem label="Type" mt="xs">
            <GoabDropdown onChange={onChangeType} value={type}>
              <GoabDropdownItem value="1" label="Option 1"></GoabDropdownItem>
              <GoabDropdownItem value="2" label="Option 2"></GoabDropdownItem>
            </GoabDropdown>
          </GoabFormItem>
          <GoabFormItem label="Name" mt="xs">
            <GoabInput
              onChange={event => onChangeName(event.value)}
              value={name}
              name="name"
            ></GoabInput>
          </GoabFormItem>
          <GoabFormItem label="Description" mt="xs">
            <GoabTextarea
              name="description"
              width="80%"
              rows={2}
              onChange={onChangeDescription}
              value={description}
            ></GoabTextarea>
          </GoabFormItem>
        </GoabModal>
      </GoabContainer>
      {/*Angular code*/}
      {version === "old" && (
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  export class SomeOtherComponent {
                    open = false;
                    type: string|undefined = "";
                    name = "";
                    description = "";

                    toggleModal() {
                      this.open = !this.open;
                    }

                    updateType(event: GoabDropdownOnChangeDetail) {
                      this.type = event.value;
                    }

                    updateName(event: GoabInputOnChangeDetail) {
                      this.name = event.value;
                    }

                    updateDescription(event: GoabTextAreaOnChangeDetail) {
                      this.description = event.value;
                    }
                  }
                `}
        />
      )}

      {version === "old" && (
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
        <goab-button type="tertiary" leadingIcon="add" (onClick)="toggleModal()">Add another item</goab-button>
        <goab-modal [open]="open" role="dialog"
           (onClose)="toggleModal()" heading="Add a new item" [actions]="actions">
          <p>Fill in the information to create a new item</p>
          <goab-form-item label="Type" mt="xs">
            <goab-dropdown (onChange)="updateType($event)" [value]="type">
              <goab-dropdown-item value="1" label="Option 1"></goab-dropdown-item>
              <goab-dropdown-item value="2" label="Option 2"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
          <goab-form-item label="Name" mt="xs">
            <goab-input name="name" (onChange)="updateName($event)" [value]="name"></goab-input>
          </goab-form-item>
          <goab-form-item label="Description" mt="xs">
            <goab-textarea name="description" width="80%" [rows]="2" (onChange)="updateDescription($event)" [value]="description"></goab-textarea>
          </goab-form-item>
          <ng-template #actions>
            <goab-button-group alignment="end">
              <goab-button type="tertiary" (onClick)="toggleModal()">Cancel</goab-button>
              <goab-button type="primary" (onClick)="toggleModal()">Save new item</goab-button>
            </goab-button-group>
          </ng-template>
        </goab-modal>
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  const [open, setOpen] = useState(false);
                  const [type, setType] = useState<string>();
                  const [name, setName] = useState<string>();
                  const [description, setDescription] = useState<string>();
                  
                  function onChangeName(value: string) {
                    setName(value);
                  }
                  
                  function onChangeDescription(event: GoabTextAreaOnChangeDetail) {
                    setDescription(event.value);
                  }
                  
                  function onChangeType(event: GoabDropdownOnChangeDetail) {
                    setType(event.value);
                  };
                  
                `}
        />
      )}
      {version === "old" && (
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
      )}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoabButton type="tertiary" leadingIcon="add" onClick={() => setOpen(true)}>
                    Add another item
                  </GoabButton>
                   <GoabModal
                    heading="Add a new item"
                    role="dialog"
                    open={open}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="tertiary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoabButton>
                        <GoabButton type="primary" onClick={() => setOpen(false)}>
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
                        <GoabInput onChange={event => onChangeName(event.value)} value={name} name="name"></GoabInput>
                      </GoabFormItem>
                      <GoabFormItem label="Description" mt="xs">
                        <GoabTextArea name="description" width="80%" rows={2} onChange={onChangeDescription} value={description}></GoabTextArea>
                      </GoabFormItem>
                   </GoabModal>
                `}
        />
      )}
    </>
  );
};
