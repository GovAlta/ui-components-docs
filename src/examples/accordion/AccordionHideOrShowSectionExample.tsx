import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAccordion, GoabButton } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext, useEffect, useState } from "react";

export const AccordionHideOrShowSectionExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [expandedAll, setExpandedAll] = useState<boolean>(false);
  const [expandedList, setExpandedList] = useState<number[]>([]);

  useEffect(() => {
    setExpandedAll(expandedList.length === 4);
  }, [expandedList.length]);

  const expandOrCollapseAll = () => {
    setExpandedAll(prev => {
      const newState = !prev;
      setExpandedList(newState ? [1, 2, 3, 4] : []);
      return newState;
    });
  };

  const updateAccordion = (order: number, isOpen: boolean) => {
    setExpandedList(prev => {
      if (isOpen) {
        return prev.includes(order) ? prev : [...prev, order];
      }
      return prev.filter(item => item !== order);
    });
  };
  return (
    <Sandbox fullWidth skipRender>
      {/*Angular*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
                
          @Component({
            selector: "app-accordion-hide-show-example",
            standalone: true,
            templateUrl: "./example.component.html",
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
          export class ExampleComponent {
            expandedList: boolean[] = [false, false, false, false];
            expandedAll: boolean = false;
            accordionStatus = "Show all sections";

            toggleAccordion(index: number, event: Event): void {
              this.expandedList[index] = (event as CustomEvent).detail.open;
              this.updateAccordionStatus();
            }

            onClick(): void {
              const isExpanding = this.expandedList.some(isOpen => !isOpen)
              this.expandedList = this.expandedList.map(() => isExpanding);
              this.updateAccordionStatus();
            }

            private updateAccordionStatus(): void {
              this.expandedAll = this.expandedList.every(isOpen => isOpen);
              this.accordionStatus = this.expandedList.every(isOpen => isOpen) ? "Hide all sections" : "Show all sections";
            }
          }
    `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
          <goa-button type="tertiary" mb="m" (_click)="onClick()">
            {{ accordionStatus }}
          </goa-button>

          <goa-accordion heading="How do I create an account?" headingsize="medium" [open]="expandedList[0]" (_change)="toggleAccordion(0, $event)">
            To create an account, you will need to contact your office admin.
          </goa-accordion>

          <goa-accordion heading="What verification is needed to sign documents digitally?" headingsize="medium" [open]="expandedList[1]" (_change)="toggleAccordion(1, $event)">
            You will need to verify your identity through our two-factor authentication in addition to the digital signature.
          </goa-accordion>

          <goa-accordion heading="Can I track the status of my service requests online?" headingsize="medium" [open]="expandedList[2]" (_change)="toggleAccordion(2, $event)">
            Yes, you can see the status of your application on the main service dashboard when you log in. You will receive updates and notifications in your email as your request progresses.
          </goa-accordion>

          <goa-accordion heading="Is your digital service accessible?" headingsize="medium" [open]="expandedList[3]" (_change)="toggleAccordion(3, $event)">
            Yes, our digital service is designed with accessibility in mind. <a href="#">More information on accessibility.</a>
          </goa-accordion>
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          export class ExampleComponent {
            expandedList: boolean[] = [false, false, false, false];
            expandedAll = false;
            accordionStatus = "Show all sections";

            toggleAccordion(index: number, open: boolean): void {
              this.expandedList[index] = open;
              this.updateAccordionStatus();
            }

            onClick(): void {
              const isExpanding = this.expandedList.some(isOpen => !isOpen)
              this.expandedList = this.expandedList.map(() => isExpanding);
              this.updateAccordionStatus();
            }

            private updateAccordionStatus(): void {
              this.expandedAll = this.expandedList.every(isOpen => isOpen);
              this.accordionStatus = this.expandedList.every(isOpen => isOpen) ? "Hide all sections" : "Show all sections";
            }
          }
    `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goab-button type="tertiary" mb="m" (onClick)="onClick()">
                  {{ accordionStatus }}
                </goab-button>
                
                <goab-accordion heading="How do I create an account?" headingSize="medium" [open]="expandedList[0]" (onChange)="toggleAccordion(0, $event)">
                 To create an account you will need to contact your office admin.
                </goab-accordion>
                
                <goab-accordion heading="What verification is needed to sign documents digitally?" headingSize="medium" [open]="expandedList[1]" (onChange)="toggleAccordion(1, $event)">
                  You will need to verify your identity through our two factor authentication in addition to the digital signature.
                </goab-accordion>
                
                <goab-accordion heading="Can I track the status of my service requests online?" headingSize="medium" [open]="expandedList[2]" (onChange)="toggleAccordion(2, $event)">
                 Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.
                </goab-accordion>
                
                <goab-accordion heading="Can I track the status of my service requests online?" headingSize="medium" [open]="expandedList[3]" (onChange)="toggleAccordion(3, $event)">
                  Yes, our digital service is designed with accessibility in mind. <a href="#">More information on accessibility.</a>
                </goab-accordion>
              `}
        />
      )}

      {/*React*/}
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                const [expandedAll, setExpandedAll] = useState<boolean>(false);
                const [expandedList, setExpandedList] = useState<number[]>([]);
                useEffect(() => {
                  setExpandedAll(expandedList.length === 4);
                }, [expandedList.length]);

                const expandOrCollapseAll = () => {
                    setExpandedAll((prev) => {
                    const newState = !prev;
                    setExpandedList(newState ? [1, 2, 3, 4] : []);
                    return newState;
                  });
                };

                const updateAccordion = (order: number, isOpen: boolean) => {
                  setExpandedList((prev) => {
                  if (isOpen) {
                    return prev.includes(order) ? prev: [...prev, order];
                  }
                  return prev.filter((item) => item !== order);
                });
                }
              `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
               <GoAButton type="tertiary" mb="m" onClick={() => expandOrCollapseAll()}>
                  {expandedAll ? "Hide all sections" : "Show all sections"}
               </GoAButton>
               
               <GoAAccordion open={expandedList.includes(1)} heading="How do I create an account?" headingSize="medium" onChange={(open) => updateAccordion(1, open)}>
                  To create an account you will need to contact your office admin.
               </GoAAccordion>
               
               <GoAAccordion open={expandedList.includes(2)} heading="What verification is needed to sign documents digitally?" headingSize="medium" onChange={(open) => updateAccordion(2, open)}>
                  You will need to verify your identity through our two factor authentication in addition to the digital signature.
               </GoAAccordion>
               
               <GoAAccordion open={expandedList.includes(3)} heading="Can I track the status of my service requests online?" headingSize="medium" onChange={(open) => updateAccordion(3, open)}>
                  Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.
               </GoAAccordion>
               
               <GoAAccordion open={expandedList.includes(4)} heading="Are there accessibility features for people with disabilities?" headingSize="medium" onChange={(open) => updateAccordion(4, open)}>
                  Yes, our digital service is designed with accessibility in mind. <a href="">More information on accessibility.</a>
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
               <GoabButton type="tertiary" mb="m" onClick={() => expandOrCollapseAll()}>
                  {expandedAll ? "Hide all sections" : "Show all sections"}
               </GoabButton>
               
               <GoabAccordion open={expandedList.includes(1)} heading="How do I create an account?" headingSize="medium" onChange={(open) => updateAccordion(1, open)}>
                  To create an account you will need to contact your office admin.
               </GoabAccordion>
               
               <GoabAccordion open={expandedList.includes(2)} heading="What verification is needed to sign documents digitally?" headingSize="medium" onChange={(open) => updateAccordion(2, open)}>
                  You will need to verify your identity through our two factor authentication in addition to the digital signature.
               </GoabAccordion>
               
               <GoabAccordion open={expandedList.includes(3)} heading="Can I track the status of my service requests online?" headingSize="medium" onChange={(open) => updateAccordion(3, open)}>
                  Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.
               </GoabAccordion>
               
               <GoabAccordion open={expandedList.includes(4)} heading="Are there accessibility features for people with disabilities?" headingSize="medium" onChange={(open) => updateAccordion(4, open)}>
                  Yes, our digital service is designed with accessibility in mind. <a href="">More information on accessibility.</a>
               </GoabAccordion>
              `}
        />
      )}

      <GoabButton type="tertiary" mb="m" onClick={() => expandOrCollapseAll()}>
        {expandedAll ? "Hide all sections" : "Show all sections"}
      </GoabButton>

      <GoabAccordion
        open={expandedList.includes(1)}
        heading="How do I create an account?"
        headingSize="medium"
        onChange={open => updateAccordion(1, open)}
      >
        To create an account you will need to contact your office admin.
      </GoabAccordion>

      <GoabAccordion
        open={expandedList.includes(2)}
        heading="What verification is needed to sign documents digitally?"
        headingSize="medium"
        onChange={open => updateAccordion(2, open)}
      >
        You will need to verify your identity through our two factor authentication in addition to
        the digital signature.
      </GoabAccordion>

      <GoabAccordion
        open={expandedList.includes(3)}
        heading="Can I track the status of my service requests online?"
        headingSize="medium"
        onChange={open => updateAccordion(3, open)}
      >
        Yes, you can see the status of your application on the main service dashboard when you
        login. You will receive updates and notifications in your email as your request progresses.
      </GoabAccordion>

      <GoabAccordion
        open={expandedList.includes(4)}
        heading="Are there accessibility features for people with disabilities?"
        headingSize="medium"
        onChange={open => updateAccordion(4, open)}
      >
        Yes, our digital service is designed with accessibility in mind.{" "}
        <a href="">More information on accessibility.</a>
      </GoabAccordion>
    </Sandbox>
  );
};
