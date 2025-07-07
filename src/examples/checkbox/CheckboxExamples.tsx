import IncludeDescriptionsForItemsInACheckboxList
  from "@examples/include-descriptions-for-items-in-a-checkbox-list.tsx";
import SelectOneAnyAllOrNoOptionsFromAList from "@examples/select-one-any-all-or-no-options-from-a-list.tsx";
import { CheckboxRevealSlotExample } from "@examples/checkbox/CheckboxRevealSlotExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const CheckboxExamples = () => {
  return <>
    {/*Checkbox example 1*/}
    <SandboxHeader
      exampleTitle="Include descriptions for items in a checkbox list"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131778&t=X0IQW5flDDaj8Vyg-4">
    </SandboxHeader>
    <IncludeDescriptionsForItemsInACheckboxList />

    {/*Checkbox example 2*/}
    <SandboxHeader
      exampleTitle="Select one, any, all, or no options from a list"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6564-70176&t=kFEYlzR03SibmVz9-1">
    </SandboxHeader>
    <SelectOneAnyAllOrNoOptionsFromAList />

    {/*Checkbox example 3 - NEW from alpha*/}
    <SandboxHeader
      exampleTitle="Reveal input based on selection"
      figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131069&m=dev">
    </SandboxHeader>
    <CheckboxRevealSlotExample />
  </>;
}