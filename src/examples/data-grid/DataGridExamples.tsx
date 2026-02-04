import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { BasicTableWithKeyboardNavigation } from "./basic-table-with-keyboard-navigation.tsx";
import { SortableTableWithRowSelection } from "./sortable-table-with-row-selection.tsx";
import { LayoutModeWithCards } from "./layout-mode-with-cards.tsx";

interface DataGridExamplesProps {
  isGridReady?: boolean;
}

export function DataGridExamples({
  isGridReady = true,
}: DataGridExamplesProps) {
  return (
    <>
      <SandboxHeader exampleTitle="Basic table with keyboard navigation" />
      <BasicTableWithKeyboardNavigation isGridReady={isGridReady} />

      <SandboxHeader exampleTitle="Sortable table with row selection" />
      <SortableTableWithRowSelection isGridReady={isGridReady} />

      <SandboxHeader exampleTitle="Layout mode with cards" />
      <LayoutModeWithCards isGridReady={isGridReady} />
    </>
  );
}

export default DataGridExamples;
