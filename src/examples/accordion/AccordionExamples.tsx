import "./accordion-example.css";
import { AccordionExpandOrCollapseExample } from "@examples/accordion/AccordionExpandOrCollapseExample.tsx";
import { AccordionHideOrShowSectionExample } from "@examples/accordion/AccordionHideOrShowSectionExample.tsx";

export default function AccordionExamples() {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-expand-collapse-form">Expand or collapse part of a form</h3>
      <AccordionExpandOrCollapseExample/>

      <h3 id="component-example-faq">Hide and show many sections of information (FAQ)</h3>
      <AccordionHideOrShowSectionExample/>
    </>
  );
}
