import { TooltipShowFullDateExample } from "@examples/tooltip/TooltipShowFullDateExample.tsx";
import {
  TooltipShowLabelForIconOnlyButtonExample
} from "@examples/tooltip/TooltipShowLabelForIconOnlyButtonExample.tsx";

export const TooltipExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-date-when-shortened">Use a tooltip to show a full date when shortened</h3>
      <TooltipShowFullDateExample />

      <h3 id="component-example-label-icon-only">Show a label on an icon only button</h3>
      <TooltipShowLabelForIconOnlyButtonExample />

      <h3 id="component-example-copy-clipboard">Click to copy something to your clipboard</h3>
      
    </>
  )
}
