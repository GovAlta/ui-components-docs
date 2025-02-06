import { DropdownAddItemExample } from "@examples/dropdown/DropdownAddItemExample.tsx";
import { DropdownChangeItemExample } from "@examples/dropdown/DropdownChangeItemExample.tsx";

export const DropdownExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-with-mount-type">Dynamically add an item to a dropdown list</h3>
      <DropdownAddItemExample />
      <h3 id="component-parent-child-common-items" style={{ marginTop: "48px" }}>
        Dynamically change items in a dropdown
      </h3>
      <DropdownChangeItemExample/>
    </>
  );
}
