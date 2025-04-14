import {
  GoabButton,
  GoabCheckbox,
  GoabDrawer,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
import Sandbox from "@components/sandbox/Sandbox.tsx";
import { useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const DrawerFiltersExample = () => {
  const [open, setOpen] = useState(false);
  // const noop = () => {/* do something */};
  return (
    // Needs to skipRender because Sandbox doesn't support slotted action
    <Sandbox skipRender>
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
          const radioGroupOnChange = (event: GoabRadioGroupOnChangeDetail) => {
            console.log(event.value);
          }
        `}
      />

      <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
          <GoabButton onClick={onClick}>
                Filters
          </GoabButton>
          <GoabDrawer heading="Filters" open={open} onClose={drawerOnClose} position="right" actions={<GoabButton onClick={() => setOpen(false)}>Apply</GoabButton>}>
            <GoabFormItem label="Entry status">
              <GoabCheckbox text="Draft" value="draft" name="entryStatus"></GoabCheckbox>
              <GoabCheckbox text="Published" value="published" name="entryStatus"></GoabCheckbox>
            </GoabFormItem>
            <GoabFormItem label="Assigned to - Region">
              <GoabCheckbox text="Calgary" value="calgary" name="region"></GoabCheckbox>
              <GoabCheckbox text="Central" value="central" name="region"></GoabCheckbox>
              <GoabCheckbox text="Edmonton" value="edmonton" name="region"></GoabCheckbox>
              <GoabCheckbox text="North" value="north" name="region"></GoabCheckbox>
              <GoabCheckbox text="South" value="south" name="region"></GoabCheckbox>
            </GoabFormItem>
            <GoabFormItem label="Taken by - Region" mt="xs">
              <GoabCheckbox text="Calgary" value="calgary" name="region"></GoabCheckbox>
              <GoabCheckbox text="Central" value="central" name="region"></GoabCheckbox>
              <GoabCheckbox text="Edmonton" value="edmonton" name="region"></GoabCheckbox>
              <GoabCheckbox text="North" value="north" name="region"></GoabCheckbox>
              <GoabCheckbox text="South" value="south" name="region"></GoabCheckbox>
            </GoabFormItem>
            <GoabFormItem label="Date taken" mt="xs">
              <GoabRadioGroup name="dateTaken" onChange={radioGroupOnChange}>
                <GoabRadioItem value="24" label="Last 24 hours"></GoabRadioItem>
                <GoabRadioItem value="72" label="Last 72 hours"></GoabRadioItem>
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabDrawer>
        `}
      />

      {/*Angular*/}
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
            radioOnChange(event: GoabRadioGroupOnChangeDetail) {
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
          <goab-button (onClick)="onClick()">Filters</goab-button>
          <goab-drawer heading="Filters" [open]="open" (onClose)="onClose()" position="right" [actions]="actions">
            <goab-form-item label="Entry status">
              <goab-checkbox text="Draft" value="draft" name="entryStatus"></goab-checkbox>
              <goab-checkbox text="Published" value="published" name="entryStatus"></goab-checkbox>
            </goab-form-item>
            <goab-form-item label="Assigned to - Region">
              <goab-checkbox text="Calgary" value="calgary" name="region"></goab-checkbox>
              <goab-checkbox text="Central" value="central" name="region"></goab-checkbox>
              <goab-checkbox text="Edmonton" value="edmonton" name="region"></goab-checkbox>
              <goab-checkbox text="North" value="north" name="region"></goab-checkbox>
              <goab-checkbox text="South" value="south" name="region"></goab-checkbox>
            </goab-form-item>
            <goab-form-item label="Taken by - Region" mt="xs">
              <goab-checkbox text="Calgary" value="calgary" name="region"></goab-checkbox>
              <goab-checkbox text="Central" value="central" name="region"></goab-checkbox>
              <goab-checkbox text="Edmonton" value="edmonton" name="region"></goab-checkbox>
              <goab-checkbox text="North" value="north" name="region"></goab-checkbox>
              <goab-checkbox text="South" value="south" name="region"></goab-checkbox>
            </goab-form-item>
            <goab-form-item label="Date taken" mt="xs">
              <goab-radio-group name="dateTaken" (onChange)="radioOnChange($event)">
                <goab-radio-item value="24" label="Last 24 hours"></goab-radio-item>
                <goab-radio-item value="72" label="Last 72 hours"></goab-radio-item>
              </goab-radio-group>
            </goab-form-item>
            <ng-template #actions>
              <goab-button (onClick)="closeDrawer()">Apply</goab-button>
            </ng-template>
          </goab-drawer>
        `}
      />

      <GoabButton onClick={() => setOpen(true)}>Filters</GoabButton>
      <GoabDrawer
        heading="Filters"
        open={open}
        onClose={() => setOpen(false)}
        position="right"
        actions={<GoabButton onClick={() => setOpen(false)}>Apply</GoabButton>}>
        <GoabFormItem label="Entry status">
          <GoabCheckbox text="Draft" value="draft" name={"entryStatus"}></GoabCheckbox>
          <GoabCheckbox text="Published" value="published" name={"entryStatus"}></GoabCheckbox>
        </GoabFormItem>
        <GoabFormItem label="Assigned to - Region">
          <GoabCheckbox text="Calgary" value="calgary" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Central" value="central" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Edmonton" value="edmonton" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="North" value="north" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="South" value="south" name={"region"}></GoabCheckbox>
        </GoabFormItem>
        {/* TODO: We will put Dropdown back to Filters example once the issue https://github.com/GovAlta/ui-components/issues solved*/}
        {/*<GoabFormItem label="Assigned to">*/}
        {/*  <GoabDropdown*/}
        {/*    name="assignedTo"*/}
        {/*    onChange={noop}>*/}
        {/*    <GoabDropdownItem value={"1"} label="Person 1"></GoabDropdownItem>*/}
        {/*    <GoabDropdownItem value={"2"} label="Person 2"></GoabDropdownItem>*/}
        {/*  </GoabDropdown>*/}
        {/*</GoabFormItem>*/}
        <GoabFormItem label="Taken by - Region" mt={"xs"}>
          <GoabCheckbox text="Calgary" value="calgary" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Central" value="central" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Edmonton" value="edmonton" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="North" value="north" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="South" value="south" name={"region"}></GoabCheckbox>
        </GoabFormItem>
        {/* TODO: We will put Dropdown back to Filters example once the issue https://github.com/GovAlta/ui-components/issues solved*/}
        {/*<GoabFormItem label="Taken by">*/}
        {/*  <GoabDropdown*/}
        {/*    name="takenBy"*/}
        {/*    onChange={noop}>*/}
        {/*    <GoabDropdownItem value={"1"} label="Person 1"></GoabDropdownItem>*/}
        {/*    <GoabDropdownItem value={"2"} label="Person 2"></GoabDropdownItem>*/}
        {/*  </GoabDropdown>*/}
        {/*</GoabFormItem>*/}
        <GoabFormItem label="Date taken" mt={"xs"}>
          <GoabRadioGroup
            name={"dateTaken"}
            onChange={() => {
              /** do something **/
            }}>
            <GoabRadioItem value="24" label="Last 24 hours"></GoabRadioItem>
            <GoabRadioItem value="72" label="Last 72 hours"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>
      </GoabDrawer>
    </Sandbox>
  );
};
