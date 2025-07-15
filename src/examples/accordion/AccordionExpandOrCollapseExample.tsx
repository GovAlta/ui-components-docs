import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAccordion, GoabBadge } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const AccordionExpandOrCollapseExample = () => {
  const { version } = useContext(LanguageVersionContext);
  return (
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
      {version === "old" && (
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`<h3>Review your application</h3>
                  <goab-accordion heading="Referral details" [headingContent]="importantBadge">
                    <ng-template #importantBadge>
                      <goab-badge type="important" content="Updated"></goab-badge>
                    </ng-template>
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
                  </goab-accordion>

                  <goab-accordion heading="Contact information">
                    <dl class="accordion-example">
                      <dt>Name</dt>
                      <dd>Joan Smith</dd>
                      <dt>Contact preference</dt>
                      <dd>Text message</dd>
                    </dl>
                  </goab-accordion>
              `}
        />
      )}

      {/*React*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                const headingContent = <GoABadge type="important" content="Updated" />;
              `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                const headingContent = <GoabBadge type="important" content="Updated" />;
              `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                <h3>Review your application</h3>
                
                <GoAAccordion heading="Referral details" headingContent={headingContent}>
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
                </GoAAccordion>
                
                <GoAAccordion heading="Contact information">
                  <dl className="accordion-example">
                    <dt>Name</dt>
                    <dd>Joan Smith</dd>
                    <dt>Contact preference</dt>
                    <dd>Text message</dd>
                  </dl>
                </GoAAccordion>
              `}
        />
      )}

      {version === "new" && (
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
      )}

      <h3>Review your application</h3>
      <GoabAccordion
        heading="Referral details"
        headingContent={<GoabBadge type="important" content="Updated" />}
      >
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
  );
};
