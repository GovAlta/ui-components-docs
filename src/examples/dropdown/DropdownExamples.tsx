import { DynamicallyAddAnItemToADropdownList } from "@examples/dynamically-add-an-item-to-a-dropdown-list.tsx";
import {
  DynamicallyChangeItemsInADropdownList
} from "@examples/dynamically-change-items-in-a-dropdown-list.tsx";
import { FilterItemsInADropdownList } from "@examples/filter-through-long-list-to-choose-an-option.tsx";
import { ChooseOneOptionFromList } from "@examples/choose-one-option-from-a-list.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import BasicPageWithDropdown from "@examples/basic-question-page-with-a-dropdown.tsx";


export const DropdownExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Choose one option from a list"
        figmaExample="">
      </SandboxHeader>
      <ChooseOneOptionFromList />

      <SandboxHeader
        exampleTitle="Filter through a long list to choose an option"
        figmaExample="">
      </SandboxHeader>
      <FilterItemsInADropdownList />
      
      <SandboxHeader
        exampleTitle="Dynamically add an item to a dropdown list"
        figmaExample="">
      </SandboxHeader>
      <DynamicallyAddAnItemToADropdownList />

      <SandboxHeader
        exampleTitle="Dynamically change items in a dropdown"
        figmaExample="">
      </SandboxHeader>
      <DynamicallyChangeItemsInADropdownList />

      <SandboxHeader
        exampleTitle="Basic question page"
        figmaExample="">
      </SandboxHeader>
      <BasicPageWithDropdown />
      
      
    </>
  );
}
