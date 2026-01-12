import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { BasicTableWithKeyboardNavigation } from "./basic-table-with-keyboard-navigation.tsx";
import { SortableTableWithRowSelection } from "./sortable-table-with-row-selection.tsx";
import { LayoutModeWithCards } from "./layout-mode-with-cards.tsx";

export function DataGridExamples() {
  return (
    <>
      <SandboxHeader exampleTitle="Basic table with keyboard navigation" />
      <BasicTableWithKeyboardNavigation />

      <SandboxHeader exampleTitle="Sortable table with row selection" />
      <SortableTableWithRowSelection />

      <SandboxHeader exampleTitle="Layout mode with cards" />
      <LayoutModeWithCards />
    </>
  );
}

export default DataGridExamples;
