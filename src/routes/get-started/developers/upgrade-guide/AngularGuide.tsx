import { GoACallout, GoATable } from "@abgov/react-components";
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
      <GoACallout>
        <p>
          <InlineCode>@abgov/angular-components</InlineCode> supports only Angular v16 and above.
        </p>
      </GoACallout>

      <h4>1. Update dependencies</h4>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          npm i @abgov/web-components@latest
          npm i @abgov/angular-components@latest
          npm i @abgov/ui-components-common@latest
        `}
      />

      <h4>2. Update angular component dependencies and import paths</h4>
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

      <h4>
        3. Rename all components name from <InlineCode>goa-name</InlineCode> to{" "}
        <InlineCode>goab-name</InlineCode> in HTML templates
      </h4>
      <p>
        In v4, all Angular component names have been updated from <InlineCode>goa-</InlineCode> to{" "}
        <InlineCode>goab-</InlineCode>, with the following exceptions:
      </p>
      <ul>
        <li>
          <strong>TwoColumnLayout</strong>: remains <InlineCode>goa-two-column-layout</InlineCode>
        </li>
        <li>
          <strong>ThreeColumnLayout</strong>: remains{" "}
          <InlineCode>goa-three-column-layout</InlineCode>
        </li>
      </ul>
      <p>
        As a result, imports and dependencies for pages using these components will not need to be
        changed.
      </p>
      <h4>Special Case:</h4>
      <p>
        The <InlineCode>goa-one-column-layout</InlineCode> component has been renamed to{" "}
        <InlineCode>goab-column-layout</InlineCode>
      </p>
      <h4>Next Steps:</h4>
      <p>
        After updating your packages and imports, perform a find/replace in your code editor to
        change <InlineCode>goa-</InlineCode> to <InlineCode>goab-</InlineCode> for all component
        names. For example:
      </p>
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

      <h4>4. Update component margin properties</h4>
      <p>
        The margin properties for components have been standardized. Previously, margin values in
        Angular components were defined as <InlineCode>string</InlineCode>. Now, these margin
        properties are categorized under <InlineCode>Spacing</InlineCode>, ensuring consistency:
      </p>
      <GoATable width="100%">
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
      </GoATable>

      <h4>5. Update component properties</h4>
      <p>
        In version 4, we have updated all Angular component properties from lowercase to camelCase.
        For example, a property previously named <InlineCode>headingsize</InlineCode> is now{" "}
        <InlineCode>headingSize</InlineCode>.
      </p>
      <p>
        Additionally, in version 3, our Angular component properties were defined using basic types
        like <InlineCode>string</InlineCode> or <InlineCode>boolean</InlineCode>. In version 4, we
        introduced custom types for these properties and function arguments to ensure that the type
        checker validates the data structure specific to our components. You can find these changes
        detailed in the tables below:
      </p>
      <GoATable width={"100%"} mb={"m"}>
        <thead>
          <th>Component Name</th>
          <th>v3</th>
          <th>v4</th>
        </thead>
        <tbody>
          {angularComponents.map((component, index) => (
            <tr key={index}>
              <td>{component.name}</td>
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
      </GoATable>

      <h4>6. Update component slot content using Angular's ng-template</h4>
      <p>
        The most common manual update that teams will need to make involves adjusting slot content
        that uses <InlineCode>slot="name"</InlineCode> to reference a property. For example,
      </p>

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
        <h4>
          Components with <InlineCode>slot</InlineCode> replaced by Angular{" "}
          <InlineCode>ng-template</InlineCode> references:
        </h4>
        <GoATable>
          <thead>
            <th>Component Name</th>
            <th>v3</th>
            <th>v4</th>
          </thead>
          <tbody>
            {componentsWithTemplateRef.map((component, index) => (
              <tr key={index}>
                <td>{component.name}</td>
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
        </GoATable>
      </div>

      <h4>
        7. Remove <InlineCode>goaValue</InlineCode> and <InlineCode>goaChecked</InlineCode> from the
        Angular input components
      </h4>
      <p>
        In v4, the <InlineCode>goaValue</InlineCode> and <InlineCode>goaChecked</InlineCode>{" "}
        directives can be removed from our input components when using Angular Forms. This applies
        to the following components:
      </p>
      <ul>
        <li>Checkbox</li>
        <li>Date picker</li>
        <li>Dropdown</li>
        <li>Input</li>
        <li>Radio</li>
        <li>Textarea</li>
      </ul>

      <p>
        To handle user input in your app, you can use Angular's reactive forms, template-driven
        forms, or simply add an event handler. Below are examples of how to use our Angular checkbox
        component in these three different approaches:
      </p>

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
          import { GoabCheckbox } from "@abgov/angular-components";
          import { GoabCheckboxOnChangeDetail } from "@abgov/ui-components-common";
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
