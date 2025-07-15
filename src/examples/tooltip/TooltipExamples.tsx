import { TooltipShowFullDateExample } from "@examples/tooltip/TooltipShowFullDateExample.tsx";
import { TooltipShowLabelForIconOnlyButtonExample } from "@examples/tooltip/TooltipShowLabelForIconOnlyButtonExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TooltipExamples = () => {
  return (
    <>
      <SandboxHeader exampleTitle="Show a full date when shortened" figmaExample=""></SandboxHeader>
      <TooltipShowFullDateExample />

      <SandboxHeader
        exampleTitle="Show a label on an icon only button"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-138133&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <TooltipShowLabelForIconOnlyButtonExample />

      {/* This example won't import from styling.ts for some reason...
      <h3 id="component-example-copy-clipboard">Click to copy something to your clipboard</h3>
      <TooltipClickCopyToClipboardExample />
      */}
    </>
  );
};
