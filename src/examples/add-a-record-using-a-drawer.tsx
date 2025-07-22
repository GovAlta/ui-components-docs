import {
  GoabBlock,
  GoabButton, GoabCheckbox, GoabContainer, GoabDatePicker,
  GoabDrawer,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem, GoabInput, GoabRadioGroup, GoabRadioItem
} from "@abgov/react-components";
import { useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const AddARecordUsingADrawer = () => {
  const [open, setOpen] = useState(false);
  const noop = () => {/* do something */}
  return (
    <>
      {/*Don't use a Sandbox because the animation slowing displaying the drawer isn't working if it is inside sandbox*/}
      <GoabContainer mt="none" mb="none">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GoabButton leadingIcon={"add"} onClick={() => setOpen(true)}>
            Add Record
          </GoabButton>
        </div>
      </GoabContainer>
      <GoabDrawer
        maxSize="492px"
        open={open}
        heading={"Add Record"}
        position={"right"}
        onClose={() => setOpen(false)}
        actions={
          <GoabButton type="primary" onClick={() => setOpen(false)}>
            Add
          </GoabButton>
        }
      >
        <GoabFormItem label="Level of education">
          <GoabDropdown onChange={noop} name="education" value="university">
            <GoabDropdownItem value="university" label="University Degree"></GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
        <GoabFormItem label="Educational institution" mt="l" >
          <GoabInput name="education" type="text" placeholder="University of Colorado Boulder" width="100%" onChange={noop}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Field of study" requirement="optional" mt="l">
          <GoabInput name="fieldOfStudy" type="text" placeholder="Master of Engineering in Engineering Management" width="100%" onChange={noop}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Is the person currently attending the training?" mt="l">
          <GoabRadioGroup name="attendTraining" onChange={noop}>
            <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
            <GoabRadioItem value="no" label="No"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>
        <GoabFormItem label="Start date" mt="l">
          <GoabBlock direction="row" alignment="center">
            <GoabDatePicker onChange={noop} value={new Date("2022-09-01")}></GoabDatePicker>
            <GoabCheckbox name="startDateApproximate" text="Approximate date" value="y"></GoabCheckbox>
          </GoabBlock>
        </GoabFormItem>
        <GoabFormItem label="Completion/last attended date" mt="l">
          <GoabBlock direction="row" alignment="center">
            <GoabDatePicker onChange={noop} value={new Date("2024-01-31")}></GoabDatePicker>
            <GoabCheckbox name="endDateApproximate" text="Approximate date" value="y" checked={true}></GoabCheckbox>
          </GoabBlock>
        </GoabFormItem>
        <GoabFormItem label="Credential received?" mt="l">
          <GoabRadioGroup name="credentialReceived" onChange={noop}>
            <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
            <GoabRadioItem value="no" label="No"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>
        <GoabFormItem label="Name of credential" mt="l">
          <GoabInput name="credentialName" width="100%" type="text" placeholder="Master of Engineering in Engineering Management" onChange={noop}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Where did this education occur?" mt="l">
          <GoabRadioGroup name="educationLocation" onChange={noop}>
            <GoabRadioItem label="In Alberta" value="alberta"></GoabRadioItem>
            <GoabRadioItem label="In Canada but not in Alberta" value="outsideAlberta"></GoabRadioItem>
            <GoabRadioItem label="Outside Canada" value="outsideCanada"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>
      </GoabDrawer>

      {/*React*/}
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          const [open, setOpen] = useState(false);
          const onClick = () => {
            setOpen(true);
          }
          const drawerOnClose = () => {
            setOpen(false);
          }
          const dropdownOnChange = (event: GoabDropdownOnChangeDetail) => {
            console.log(event.value);
          }
          const radioGroupOnChange = (event: GoabRadioGroupOnChangeDetail) => {
            console.log(event.value);
          }
          const inputOnChange = (event: GoabInputOnChangeDetail) => {
            console.log(event.value);
          }
          const datePickerOnChange = (event: GoabDatePickerOnChangeDetail) => {
            console.log(event.value);
          }
        `}
      />

      <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
           <GoabButton leadingIcon="add" onClick={onClick}>
                Add Record
            </GoabButton>
           <GoabDrawer maxSize="492px" open={open} heading="Add Record" position="right" onClose={drawerOnClose}  actions={
                <GoabButton type="primary" onClick={() => setOpen(false)}>
                    Add
                </GoabButton>
            }>
                <GoabFormItem label="Level of education">
                    <GoabDropdown onChange={dropdownOnChange} name="education" value="university">
                        <GoabDropdownItem value="university" label="University Degree"></GoabDropdownItem>
                    </GoabDropdown>
                </GoabFormItem>
                <GoabFormItem label="Educational institution" mt="l">
                    <GoabInput name="education" type="text" placeholder="University of Colorado Boulder" width="100%" onChange={inputOnChange}></GoabInput>
                </GoabFormItem>
                <GoabFormItem label="Field of study" requirement="optional" mt="l">
                    <GoabInput name="fieldOfStudy" type="text" placeholder="Master of Engineering in Engineering Management" width="100%" onChange={inputOnChange}></GoabInput>
                </GoabFormItem>
                <GoabFormItem label="Is the person currently attending the training?" mt="l">
                    <GoabRadioGroup name="attendTraining" onChange={radioGroupOnChange}>
                        <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
                        <GoabRadioItem value="no" label="No"></GoabRadioItem>
                    </GoabRadioGroup>
                </GoabFormItem>
                <GoabFormItem label="Start date" mt="l">
                    <GoabBlock direction="row" alignment="center">
                        <GoabDatePicker onChange={datePickerOnChange} value={new Date(2022,7,31)}></GoabDatePicker>
                        <GoabCheckbox name="startDateApproximate" text="Approximate date" value="y"></GoabCheckbox>
                    </GoabBlock>
                </GoabFormItem>
                <GoabFormItem label="Completion/last attended date" mt="l">
                    <GoabBlock direction="row" alignment="center">
                        <GoabDatePicker onChange={datePickerOnChange} value={new Date(2024,0,30)}></GoabDatePicker>
                        <GoabCheckbox name="endDateApproximate" text="Approximate date" value="y" checked={true}></GoabCheckbox>
                    </GoabBlock>
                </GoabFormItem>
                <GoabFormItem label="Credential received?" mt="l">
                    <GoabRadioGroup name="credentialReceived" onChange={radioGroupOnChange}>
                        <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
                        <GoabRadioItem value="no" label="No"></GoabRadioItem>
                    </GoabRadioGroup>
                </GoabFormItem>
                <GoabFormItem label="Name of credential" mt="l">
                    <GoabInput name="credentialName" width="100%" type="text" placeholder="Master of Engineering in Engineering Management" onChange={inputOnChange}></GoabInput>
                </GoabFormItem>
                <GoabFormItem label="Where did this education occur?" mt="l">
                    <GoabRadioGroup name="educationLocation" onChange={radioGroupOnChange}>
                        <GoabRadioItem label="In Alberta" value="alberta"></GoabRadioItem>
                        <GoabRadioItem label="In Canada but not in Alberta" value="outsideAlberta"></GoabRadioItem>
                        <GoabRadioItem label="Outside Canada" value="outsideCanada"></GoabRadioItem>
                    </GoabRadioGroup>
                </GoabFormItem>
            </GoabDrawer>
        `}
      />

      {/*Angular */}
      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          export class ExampleComponent {
            open = false;
            onClick() {
              this.open = true;
            }
            onClose() {
              this.open = false;
            }
            dropdownOnChange(event: GoabDropdownOnChangeDetail) {
              console.log(event);
            }
            inputOnChange(event: GoabInputOnChangeDetail) {
              console.log(event);
            }
            radioOnChange(event: GoabRadioGroupOnChangeDetail) {
              console.log(event);
            }
            dateOnChange(event: GoabDatePickerOnChangeDetail) {
              console.log(event);
            }
            closeDrawer() {
              this.open = false;
            }
          }
        `}
      />

      <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-button leadingIcon="add" (onClick)="onClick()">Add Record</goab-button>
          <goab-drawer maxSize="492px" [open]="open" heading="Add Record" position="right" (onClose)="onClose()" [actions]="actions">
            <goab-form-item label="Level of education">
              <goab-dropdown (onChange)="dropdownOnChange($event)" name="education" value="university">
                <goab-dropdown-item value="university" label="University Degree"></goab-dropdown-item>
              </goab-dropdown>
            </goab-form-item>
            <goab-form-item label="Educational institution" mt="l">
              <goab-input name="education" type="text" placeholder="University of Colorado Boulder" width="100%" (onChange)="inputOnChange($event)"></goab-input>
            </goab-form-item>
            <goab-form-item label="Field of study" requirement="optional" mt="l">
              <goab-input name="fieldOfStudy" type="text" placeholder="Master of Engineering in Engineering Management" width="100%" (onChange)="inputOnChange($event)"></goab-input>
            </goab-form-item>
            <goab-form-item label="Is the person currently attending the training?" mt="l">
              <goab-radio-group name="attendTraining" (onChange)="radioOnChange($event)">
                <goab-radio-item value="yes" label="Yes"></goab-radio-item>
                <goab-radio-item value="no" label="No"></goab-radio-item>
              </goab-radio-group>
            </goab-form-item>
            <goab-form-item label="Start date" mt="l">
              <goab-block direction="row" alignment="center">
                <goab-date-picker (onChange)="dateOnChange($event)" value="Wed Aug 31 2022 18:00:00 GMT-0600 (Mountain Daylight Time)"></goab-date-picker>
                <goab-checkbox name="startDateApproximate" text="Approximate date" value="y"></goab-checkbox>
              </goab-block>
            </goab-form-item>
            <goab-form-item label="Completion/last attended date" mt="l">
              <goab-block direction="row" alignment="center">
                <goab-date-picker (onChange)="dateOnChange($event)" value="Tue Jan 30 2024 17:00:00 GMT-0700 (Mountain Standard Time)"></goab-date-picker>
                <goab-checkbox name="endDateApproximate" text="Approximate date" value="y" [checked]="true"></goab-checkbox>
              </goab-block>
            </goab-form-item>
            <goab-form-item label="Credential received?" mt="l">
              <goab-radio-group name="credentialReceived" (onChange)="radioOnChange($event)">
                <goab-radio-item value="yes" label="Yes"></goab-radio-item>
                <goab-radio-item value="no" label="No"></goab-radio-item>
              </goab-radio-group>
            </goab-form-item>
            <goab-form-item label="Name of credential" mt="l">
              <goab-input name="credentialName" width="100%" type="text" placeholder="Master of Engineering in Engineering Management" (onChange)="inputOnChange($event)"></goab-input>
            </goab-form-item>
            <goab-form-item label="Where did this education occur?" mt="l">
              <goab-radio-group name="educationLocation" (onChange)="radioOnChange($event)">
                <goab-radio-item label="In Alberta" value="alberta"></goab-radio-item>
                <goab-radio-item label="In Canada but not in Alberta" value="outsideAlberta"></goab-radio-item>
                <goab-radio-item label="Outside Canada" value="outsideCanada"></goab-radio-item>
              </goab-radio-group>
            </goab-form-item>
            <ng-template #actions>
              <goab-button (onClick)="closeDrawer()">Save</goab-button>
            </ng-template>
          </goab-drawer>
        `}
      />
  </>
  );
};

export default AddARecordUsingADrawer;
