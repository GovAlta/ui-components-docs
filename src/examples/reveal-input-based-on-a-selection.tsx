import { RevealRadioInputBasedOnSelection } from "@examples/reveal-radio-input-based-on-selection.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { RevealCheckboxInputBasedOnSelection } from "@examples/reveal-checkbox-input-based-on-selection.tsx";

export default function RevealInputBasedOnASelection() {

  return (
    <>
      <SandboxHeader
        exampleTitle="Reveal a checkbox input based on a selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131333&t=i24jD5GZOelxxzSN-4">
      </SandboxHeader>
      <RevealCheckboxInputBasedOnSelection />

      <SandboxHeader
        exampleTitle="Reveal a radio input based on a selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131333&t=i24jD5GZOelxxzSN-4">
      </SandboxHeader>
      <RevealRadioInputBasedOnSelection />
    </>
  );
}