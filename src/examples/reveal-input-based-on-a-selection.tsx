import { RadioRevealSlotExample } from "@examples/radio/RadioRevealSlotExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { CheckboxRevealSlotExample } from "@examples/checkbox/CheckboxRevealSlotExample.tsx";

export default function RevealInputBasedOnASelection() {

  return (
    <>
      <SandboxHeader
        exampleTitle="Reveal a checkbox input based on a selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131333&t=i24jD5GZOelxxzSN-4">
      </SandboxHeader>
      <CheckboxRevealSlotExample />

      <SandboxHeader
        exampleTitle="Reveal a radio input based on a selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131333&t=i24jD5GZOelxxzSN-4">
      </SandboxHeader>
      <RadioRevealSlotExample />
    </>
  );
}