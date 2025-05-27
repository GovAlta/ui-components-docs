import { GoabCallout, GoabTable, GoabText } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { InlineCode } from "@components/inline-code/InlineCode.tsx";
import { components } from "@routes/get-started/developers/upgrade-guide/components.ts";

export const AngularGuide = () => {
  const angularComponents = components.filter(x => x.angular);
  const componentsWithTemplateRef = angularComponents.filter(component =>
    component.angular?.some(prop => prop.v4?.type.includes("TemplateRef"))
  );
  return (
    <>
      <h2 id="angular">Migrating an Angular app</h2>
      <GoabCallout maxWidth={"640px"}>
          <InlineCode>@abgov/angular-components</InlineCode> supports only Angular v16 and above.
      </GoabCallout>

      <GoabText size="heading-s" mt="xl" mb="s">1. Update dependencies</GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          npm i @abgov/web-components@latest
          npm i @abgov/angular-components@latest
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">2. Update angular component dependencies and import paths</GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          // Before
          import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
          
          @Component({
            selector: "app-accordion",
            standalone: true,
            templateUrl: "./accordion.component.html",
            schemas: [CUSTOM_ELEMENTS_SCHEMA] // Required for v3 but will be removed in v4
          })
          export class AccordionComponent {}
          
          // After
          import {GoabAccordion, GoabButton, GoabBadge} from '@abgov/angular-components';
          
          @Component({
            selector: "app-accordion",
            standalone: true,
            imports: [GoabAccordion, GoabButton, GoabBadge],
            templateUrl: "./accordion.component.html"
          })
          export class AccordionComponent {}
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">
        3. Rename all components name from <InlineCode>goa-name</InlineCode> to{" "}
        <InlineCode>goab-name</InlineCode> in HTML templates
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In v4, all Angular component names have been updated from <InlineCode>goa-</InlineCode> to{" "}
        <InlineCode>goab-</InlineCode>, with the following exceptions:
      </GoabText>
      <ul>
        <li>
          <strong>TwoColumnLayout</strong>: remains <InlineCode>goa-two-column-layout</InlineCode>
        </li>
        <li>
          <strong>ThreeColumnLayout</strong>: remains{" "}
          <InlineCode>goa-three-column-layout</InlineCode>
        </li>
      </ul>
      <GoabText size="body-m" mt="l" mb="l">
        As a result, imports and dependencies for pages using these components will not need to be
        changed.
      </GoabText>
      <GoabText size="heading-s" mt="xl" mb="s">Special Case:</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        The <InlineCode>goa-one-column-layout</InlineCode> component has been renamed to{" "}
        <InlineCode>goab-column-layout</InlineCode>
      </GoabText>
      <GoabText size="heading-s" mt="xl" mb="s">Next Steps:</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        After updating your packages and imports, perform a find/replace in your code editor to
        change <InlineCode>goa-</InlineCode> to <InlineCode>goab-</InlineCode> for all component
        names. For example:
      </GoabText>
      <CodeSnippet
        lang="html"
        allowCopy={true}
        code={`
            <!--Before-->
            <goa-circular-progress variant="inline" size="small" visible="true"></goa-circular-progress>
            <goa-accordion heading="Heading" [open]="open"> Content 1</goa-accordion>
            <goa-button (_click)="onClick()" type="tertiary">Tertiary</goa-button>
            // After
            <goab-circular-progress variant="inline" size="small" [visible]="true"></goab-circular-progress>
            <goab-accordion heading="Heading" [open]="open"> Content 1 </goab-accordion>
            <goab-button (onClick)="onClick()" type="tertiary">Tertiary</goab-button>
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">4. Update component margin properties</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        The margin properties for components have been standardized. Previously, margin values in
        Angular components were defined as <InlineCode>string</InlineCode>. Now, these margin
        properties are categorized under <InlineCode>Spacing</InlineCode>, ensuring consistency:
      </GoabText>
      <GoabTable width="100%">
        <thead>
        <th>Property Name</th>
        <th>v3</th>
        <th>v4</th>
        </thead>
        <tbody>
        <tr>
          <td>
            <InlineCode>mt</InlineCode>
          </td>
          <td>
            <InlineCode>string</InlineCode>
          </td>
          <td>
            <InlineCode>Spacing</InlineCode>
          </td>
        </tr>
        <tr>
          <td>
            <InlineCode>mb</InlineCode>
          </td>
          <td>
            <InlineCode>string</InlineCode>
          </td>
          <td>
            <InlineCode>Spacing</InlineCode>
          </td>
        </tr>
        <tr>
          <td>
            <InlineCode>ml</InlineCode>
          </td>
          <td>
            <InlineCode>string</InlineCode>
          </td>
          <td>
            <InlineCode>Spacing</InlineCode>
          </td>
        </tr>
        <tr>
          <td>
            <InlineCode>mr</InlineCode>
          </td>
          <td>
            <InlineCode>string</InlineCode>
          </td>
          <td>
            <InlineCode>Spacing</InlineCode>
          </td>
        </tr>
        </tbody>
      </GoabTable>

      <GoabText size="heading-s" mt="xl" mb="s">5. Update component properties</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In version 4, we have updated all Angular component properties from lowercase to camelCase.
        For example, a property previously named <InlineCode>headingsize</InlineCode> is now{" "}
        <InlineCode>headingSize</InlineCode>.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Additionally, in version 3, our Angular component properties were defined using basic types
        like <InlineCode>string</InlineCode> or <InlineCode>boolean</InlineCode>. In version 4, we
        introduced custom types for these properties and function arguments to ensure that the type
        checker validates the data structure specific to our components. You can find these changes
        detailed in the tables below:
      </GoabText>
      <GoabTable width={"100%"} mb={"m"}>
        <thead>
        <th>Component</th>
        <th>v3</th>
        <th>v4</th>
        </thead>
        <tbody>
        {angularComponents.map((component, index) => (
          <tr key={index}>
            <td><b>{component.name}</b></td>
            <td>
              <ul>
                {component.angular?.map((prop, propsIndex) => (
                  <li key={propsIndex}>
                    {prop.v3?.name && <span>{prop.v3.name + ": " + prop.v3.type}</span>}{" "}
                    {prop.v3 == null && "Do not have"}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {component.angular?.map((prop, propsIndex) => (
                  <li key={propsIndex}>
                    {prop.v4?.name && <span>{prop.v4.name + ": " + prop.v4.type}</span>}{" "}
                    {prop.v4 == null && <strong>Removed</strong>}{" "}
                    {prop.v3 == null && <strong>(Newly added)</strong>}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
        </tbody>
      </GoabTable>

      <GoabText size="heading-s" mt="xl" mb="s">6. Update component slot content using Angular's ng-template</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        The most common manual update that teams will need to make involves adjusting slot content
        that uses <InlineCode>slot="name"</InlineCode> to reference a property. For example,
      </GoabText>

      <CodeSnippet
        lang="html"
        allowCopy={true}
        code={`
            <!--Before-->
            <goa-popover>
              <p>This is a popover</p>
              It can be used for a number of different contexts.
              <!--Slot target is required but can be forgotten because there are no errors alerted if we miss it-->
              <div slot="target">
                <goa-button type="secondary" size="compact">Click me</goa-button>
              </div>
            </goa-popover>
            
            <!--After-->
            <!-- target property is required for goab-popover -->
            <goab-popover target="popOverTarget">
              <p>This is a popover</p>
                It can be used for a number of different contexts.
              <ng-template #popOverTarget>
                <goab-button type="secondary" size="compact">Click me</goab-button>
              </ng-template>
            </goab-popover>
        `}
      />

      <div className="descriptionWithList">
        <GoabText size="heading-s" mt="xl" mb="s">
          Components with <InlineCode>slot</InlineCode> replaced by Angular{" "}
          <InlineCode>ng-template</InlineCode> references:
        </GoabText>
        <GoabTable>
          <thead>
          <th>Component</th>
          <th>v3</th>
          <th>v4</th>
          </thead>
          <tbody>
          {componentsWithTemplateRef.map((component, index) => (
            <tr key={index}>
              <td><b>{component.name}</b></td>
              <td>
                <ul>
                  {component.angular?.map(
                    (prop, propIndex) =>
                      prop.v4?.type.includes("TemplateRef") && (
                        <li key={propIndex}>
                          {prop.v3?.name}: {prop.v3?.type}
                        </li>
                      )
                  )}
                </ul>
              </td>
              <td>
                <ul>
                  {component.angular?.map(
                    (prop, propIndex) =>
                      prop.v4?.type.includes("TemplateRef") && (
                        <li key={propIndex}>
                          {prop.v4?.name}: {prop.v4?.type}
                        </li>
                      )
                  )}
                </ul>
              </td>
            </tr>
          ))}
          </tbody>
        </GoabTable>
      </div>

      <GoabText size="heading-s" mt="xl" mb="s">
        7. Remove <InlineCode>goaValue</InlineCode> and <InlineCode>goaChecked</InlineCode> from the
        Angular input components
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In v4, the <InlineCode>goaValue</InlineCode> and <InlineCode>goaChecked</InlineCode>{" "}
        directives can be removed from our input components when using Angular Forms. This applies
        to the following components:
      </GoabText>
      <ul>
        <li>Checkbox</li>
        <li>Date picker</li>
        <li>Dropdown</li>
        <li>Input</li>
        <li>Radio</li>
        <li>Textarea</li>
      </ul>

      <GoabText size="body-m" mt="l" mb="l">
        To handle user input in your app, you can use Angular's reactive forms, template-driven
        forms, or simply add an event handler. Below are examples of how to use our Angular checkbox
        component in these three different approaches:
      </GoabText>

      <h5>1. Reactive</h5>
      <CodeSnippet
        lang={"ts"}
        allowCopy={true}
        code={`
          import { GoabCheckbox } from "@abgov/angular-components";
          import { Component } from "@angular/core";
          import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
          @Component({
            standalone: true,
            selector: "abgov-checkbox",
            templateUrl: "./checkbox.component.html",
            imports: [
              GoABCheckbox,
              ReactiveFormsModule
            ]
          })
          class CheckboxComponent {
            form!: FormGroup;
            constructor(private fb: FormBuilder) {
              this.form = this.fb.group({
                checked: [false]
              });
            }
          }
        `}></CodeSnippet>
      <CodeSnippet
        lang={"html"}
        allowCopy={true}
        code={`
            <form [formGroup]="form">
              <goab-checkbox formControlName="checked" text="Item"></goab-checkbox>
            </form>
          `}></CodeSnippet>

      <h5>2. Template-driven</h5>
      <CodeSnippet
        lang={"ts"}
        allowCopy={true}
        code={`
          import { GoabCheckbox } from "@abgov/angular-components";
          import { Component } from "@angular/core";
          import { FormsModule } from "@angular/forms";
          @Component({
            standalone: true,
            selector: "abgov-checkbox",
            templateUrl: "./checkbox.component.html",
            imports: [
              GoabCheckbox,
              FormsModule,
            ]
          })
          class CheckboxComponent {
            checked = false;
          }
        `}></CodeSnippet>
      <CodeSnippet
        lang={"html"}
        allowCopy={true}
        code={`
            <form>
              <goab-checkbox [(ngModel)]="checked" text="Item"></goab-checkbox>
            </form>
          `}></CodeSnippet>

      <h5>3. Event handler</h5>
      <CodeSnippet
        lang={"ts"}
        allowCopy={true}
        code={`
          import { GoabCheckbox, GoabCheckboxOnChangeDetail } from "@abgov/angular-components";
          import { Component } from "@angular/core";
          @Component({
            standalone: true,
            selector: "abgov-checkbox",
            templateUrl: "./checkbox.component.html",
            imports: [
              GoABCheckbox
            ]
          })
          class CheckboxComponent {
            checked = false;
            onChange(event: GoabCheckboxOnChangeDetail) {
               this.checked = event.checked;
            }
          }
        `}></CodeSnippet>
      <CodeSnippet
        lang="html"
        allowCopy={true}
        code={`
          <goab-checkbox name="item" text="Item" [value]="checked" (onChange)="onChange($event)"></goab-checkbox>
          `}></CodeSnippet>
    </>
  );
};
