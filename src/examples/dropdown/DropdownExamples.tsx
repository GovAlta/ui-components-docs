import { DynamicallyAddAnItemToADropdownList } from "@examples/dynamically-add-an-item-to-a-dropdown-list.tsx";
import {
  DynamicallyChangeItemsInADropdownList
} from "@examples/dynamically-change-items-in-a-dropdown-list.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DropdownExamples = () => {
  return (
    <>
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
    </>
  );
}
