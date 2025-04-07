import "./accordion-example.css";
import { AccordionExpandOrCollapseExample } from "@examples/accordion/AccordionExpandOrCollapseExample.tsx";
import { AccordionHideOrShowSectionExample } from "@examples/accordion/AccordionHideOrShowSectionExample.tsx";

export default function AccordionExamples() {
  return (
    <>
      <h3 id="component-example-expand-collapse-form">Expand or collapse part of a form</h3>
      <AccordionExpandOrCollapseExample/>

      <h3 id="component-example-faq">Hide and show many sections of information (FAQ)</h3>
      <AccordionHideOrShowSectionExample/>
    </>
  );
}
