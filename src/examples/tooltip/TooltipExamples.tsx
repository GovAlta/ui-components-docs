import { TooltipShowFullDateExample } from "@examples/tooltip/TooltipShowFullDateExample.tsx";
import {
  TooltipShowLabelForIconOnlyButtonExample
} from "@examples/tooltip/TooltipShowLabelForIconOnlyButtonExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TooltipExamples = () => {
  return (
    <>

      <SandboxHeader
        exampleTitle="Show a full date when shortened"
        figmaExample="">
      </SandboxHeader>
      <TooltipShowFullDateExample />

      <SandboxHeader
        exampleTitle="Show a label on an icon only button"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=60735-395436&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <TooltipShowLabelForIconOnlyButtonExample />

      {/* This example won't import from styling.ts for some reason...
      <h3 id="component-example-copy-clipboard">Click to copy something to your clipboard</h3>
      <TooltipClickCopyToClipboardExample />
      */}
    </>

  )
}
