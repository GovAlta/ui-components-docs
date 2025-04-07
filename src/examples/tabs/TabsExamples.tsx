import { TabsDifferentViewsTableExample } from "@examples/tabs/TabsDifferentViewsTableExample.tsx";
import { TabsSetSpecificTabActiveExample } from "@examples/tabs/TabsSetSpecificTabActiveExample.tsx";

export const TabsExamples = () => {
  return (
    <>
      <h3 id="component-example-different-views-data-table">
        Show different views of data in a table
      </h3>
      <TabsDifferentViewsTableExample />
      <h3 id="component-example-set-specific-tab-active">Set a specific tab to be active</h3>
      <TabsSetSpecificTabActiveExample/>
    </>

  )
}
