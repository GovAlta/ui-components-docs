import { GoabAccordion, GoabBadge, GoabButton } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import "./accordion-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useState } from "react";

export default function AccordionExamples() {
  const [open, setOpen] = useState<boolean>(false); // for accordion group
  const [accordionStatus, setAccordionStatus] = useState<string>("Show all sections");
  const onClick = () => {
    setOpen(!open);
    const status = !open ? "Hide all sections" : "Show all sections";
    setAccordionStatus(status);
  }
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-expand-collapse-form">Expand or collapse part of a form</h3>
      <Sandbox fullWidth skipRender allow={["h3"]}>
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
                  dl.accordion-example {
                    margin: 0 0;
                  }
                  
                  .accordion-example dt {
                    color: var(--goa-color-text-default);
                    font: var(--goa-typography-heading-s);
                    margin-bottom: var(--goa-space-xs);
                  }
                  
                  .accordion-example dd {
                    margin: 0 0 var(--goa-space-l);
                    font: var(--goa-typography-body-m);
                  }
                  
                  .accordion-example dd:last-of-type {
                    margin-bottom: 0;
                  }                      
                `}
        />
        {/*Angular*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`<h3>Review your application</h3>
                  <goa-accordion heading="Referral details">
                    <goa-badge type="important" content="Updated" slot="headingcontent"/>
                      <dl class="accordion-example">
                        <dt>Date of referral</dt>
                        <dd>January 27, 2021</dd>
                        <dt>Work safety concerns</dt>
                        <dd>None</dd>
                        <dt>Type of referral</dt>
                        <dd>Word of mouth, internet search</dd>
                        <dt>Intake received from another site</dt>
                        <dd>Yes</dd>
                      </dl>
                  </goa-accordion>
                  
                  <goa-accordion heading="Contact information">
                    <dl class="accordion-example">
                      <dt>Name</dt>
                      <dd>Joan Smith</dd>
                      <dt>Contact preference</dt>
                      <dd>Text message</dd>
                    </dl>
                  </goa-accordion>
              `}
        />
        {/*React*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                const headingContent = <GoABadge type="important" content="Updated" />;
              `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                <h3>Review your application</h3>
                
                <GoabAccordion heading="Referral details" headingContent={headingContent}>
                  <dl className="accordion-example">
                    <dt>Date of referral</dt>
                    <dd>January 27, 2021</dd>
                    <dt>Work safety concerns</dt>
                    <dd>None</dd>
                    <dt>Type of referral</dt>
                    <dd>Word of mouth, internet search</dd>
                    <dt>Intake received from another site</dt>
                    <dd>Yes</dd>
                  </dl>
                </GoabAccordion>
                
                <GoabAccordion heading="Contact information">
                  <dl className="accordion-example">
                    <dt>Name</dt>
                    <dd>Joan Smith</dd>
                    <dt>Contact preference</dt>
                    <dd>Text message</dd>
                  </dl>
                </GoabAccordion>
              `}
        />

        <h3>Review your application</h3>
        <GoabAccordion
          heading="Referral details"
          headingContent={<GoabBadge type="important" content="Updated" />}>
          <dl className="accordion-example">
            <dt>Date of referral</dt>
            <dd>January 27, 2021</dd>
            <dt>Work safety concerns</dt>
            <dd>None</dd>
            <dt>Type of referral</dt>
            <dd>Word of mouth, internet search</dd>
            <dt>Intake received from another site</dt>
            <dd>Yes</dd>
          </dl>
        </GoabAccordion>

        <GoabAccordion heading="Contact information">
          <dl className="accordion-example">
            <dt>Name</dt>
            <dd>Joan Smith</dd>
            <dt>Contact preference</dt>
            <dd>Text message</dd>
          </dl>
        </GoabAccordion>
      </Sandbox>

      <h3 id="component-example-faq">Hide and show many sections of information (FAQ)</h3>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                export class SomeOtherComponent {
                  open = false;
                  accordionStatus = "Show all sections";

                  onClick() {
                    this.open = !this.open;
                    this.accordionStatus = (this.open) ? "Hide all sections" : "Show all sections";
                  }
                }
              `}
        />
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                <goa-button type="tertiary" mb="m" (_click)="onClick()">
                  {{ accordionStatus }}
                </goa-button>
                
                <goa-accordion heading="How do I create an account?" headingsize="medium" [open]="open">
                 To create an account you will need to contact your office admin.
                </goa-accordion>
                
                <goa-accordion heading="What verification is needed to sign documents digitally?" headingsize="medium" [open]="open">
                  You will need to verify your identity through our two factor authentication in addition to the digital signature.
                </goa-accordion>
                
                <goa-accordion heading="Can I track the status of my service requests online?" headingsize="medium" [open]="open">
                 Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.
                </goa-accordion>
                
                <goa-accordion heading="Can I track the status of my service requests online?" headingsize="medium" [open]="open">
                  Yes, our digital service is designed with accessibility in mind. <a href="#">More information on accessibility.</a>
                </goa-accordion>
              `}
        />
        {/*React*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                const [open, setOpen] = useState<boolean>(false);
                const [accordionStatus, setAccordionStatus] = useState<string>("Show all sections");
                const onClick = () => {
                  setOpen(!open);
                  const status = !open ? "Hide all sections" : "Show all sections";
                  setAccordionStatus(status);
                }
              `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
               <GoAButton type="tertiary" mb="m" onClick={() => onClick()}>
                  { accordionStatus }
               </GoAButton>
               
               <GoAAccordion open={open} heading="How do I create an account?" headingSize="medium">
                  To create an account you will need to contact your office admin.
               </GoAAccordion>
               
               <GoAAccordion open={open} heading="What verification is needed to sign documents digitally?" headingSize="medium">
                  You will need to verify your identity through our two factor authentication in addition to the digital signature.
               </GoAAccordion>
               
               <GoAAccordion open={open} heading="Can I track the status of my service requests online?" headingSize="medium">
                  Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.
               </GoAAccordion>
               
               <GoAAccordion open={open} heading="Are there accessibility features for people with disabilities?" headingSize="medium">
                  Yes, our digital service is designed with accessibility in mind. <a href="">More information on accessibility.</a>
               </GoAAccordion>
              `}
        />

        <GoabButton type="tertiary" mb="m" onClick={() => onClick()}>
          { accordionStatus }
        </GoabButton>

        <GoabAccordion open={open} heading="How do I create an account?" headingSize="medium">
          To create an account you will need to contact your office admin.
        </GoabAccordion>

        <GoabAccordion open={open} heading="What verification is needed to sign documents digitally?" headingSize="medium">
          You will need to verify your identity through our two factor authentication in addition to
          the digital signature.
        </GoabAccordion>

        <GoabAccordion open={open} heading="Can I track the status of my service requests online?" headingSize="medium">
          Yes, you can see the status of your application on the main service dashboard when you
          login. You will receive updates and notifications in your email as your request
          progresses.
        </GoabAccordion>

        <GoabAccordion open={open} heading="Are there accessibility features for people with disabilities?" headingSize="medium">
          Yes, our digital service is designed with accessibility in mind. <a href="">More information on accessibility.</a>
        </GoabAccordion>
      </Sandbox>
    </>
  );
}
