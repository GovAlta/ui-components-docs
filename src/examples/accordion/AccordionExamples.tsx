import "./accordion-example.css";
import { AccordionExpandOrCollapseExample } from "@examples/accordion/AccordionExpandOrCollapseExample.tsx";
import { AccordionHideOrShowSectionExample } from "@examples/accordion/AccordionHideOrShowSectionExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function AccordionExamples() {
  return (
    <>
      <SandboxHeader
        exampleTitle="Expand or collapse part of a form"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=48375-268093&t=Qn4eyi9UxONVqqY7-4">
      </SandboxHeader>
      <AccordionExpandOrCollapseExample/>

      <SandboxHeader
        exampleTitle="Hide and show many sections of information (FAQ)"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=15932-571271&t=svCeesMW3bnHA7sm-4">
      </SandboxHeader>
      <AccordionHideOrShowSectionExample/>
    </>
  );
}
