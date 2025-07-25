import {
  IncludeALinkInTheHelperTextOfAnOption
} from "@examples/include-a-link-in-the-helper-text-of-an-option.tsx";
import { SetAMaxWidthOnALongRadioItem } from "@examples/set-a-max-width-on-a-long-radio-item.tsx";
import { RadioRevealSlotExample } from "@examples/radio/RadioRevealSlotExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function RadioExamples () {

  return (
    <>
      <SandboxHeader
        exampleTitle="Include a link in the helper text of an option"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-133375&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <IncludeALinkInTheHelperTextOfAnOption />

      <SandboxHeader
        exampleTitle="Max width on long radio items"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-133539&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <SetAMaxWidthOnALongRadioItem />

      <SandboxHeader
        exampleTitle="Reveal input based on selection"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-131069&m=dev">
      </SandboxHeader>
      <RadioRevealSlotExample />
    </>
  );
}