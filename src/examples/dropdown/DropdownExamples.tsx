import { DropdownAddItemExample } from "@examples/dropdown/DropdownAddItemExample.tsx";
import { DropdownChangeItemExample } from "@examples/dropdown/DropdownChangeItemExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DropdownExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Dynamically add an item to a dropdown list"
        figmaExample=""
      ></SandboxHeader>
      <DropdownAddItemExample />

      <SandboxHeader
        exampleTitle="Dynamically change items in a dropdown"
        figmaExample=""
      ></SandboxHeader>
      <DropdownChangeItemExample />
    </>
  );
};
