import "./accordion-example.css";
import { AccordionExpandOrCollapseExample } from "@examples/accordion/AccordionExpandOrCollapseExample.tsx";
import { AccordionHideOrShowSectionExample } from "@examples/accordion/AccordionHideOrShowSectionExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function AccordionExamples() {
  return (
    <>
      <SandboxHeader
        exampleTitle="Expand or collapse part of a form"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6302-491810&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AccordionExpandOrCollapseExample/>

      <SandboxHeader
        exampleTitle="Hide and show many sections of information (FAQ)"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6469-76255&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AccordionHideOrShowSectionExample/>
    </>
  );
}
