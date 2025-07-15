import { RadioSlottedDescriptionExample } from "@examples/radio/RadioSlottedDescriptionExample.tsx";
import { RadioYesNoExample } from "@examples/radio/RadioYesNoExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { RadioRevealSlotExample } from "@examples/radio/RadioRevealSlotExample.tsx";

export default function RadioExamples() {
  return (
    <>
      <SandboxHeader
        exampleTitle="Radio items with description"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6844-1982128&t=esZgJXviyArNDmmo-1"
      ></SandboxHeader>
      <RadioSlottedDescriptionExample />

      <SandboxHeader
        exampleTitle="Yes or no question horizontally"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6844-165351&t=esZgJXviyArNDmmo-1"
      ></SandboxHeader>
      <RadioYesNoExample />

      <SandboxHeader
        exampleTitle="Reveal input based on selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131069&m=dev"
      ></SandboxHeader>
      <RadioRevealSlotExample />
    </>
  );
}
