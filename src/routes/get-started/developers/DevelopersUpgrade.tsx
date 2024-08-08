import { GoAContainer } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import "./Developers.css";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function DevelopersUpgradePage() {
  return (
    <div className="developer-setup">
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Developers</h1>
        <h2 id="setup">Guide</h2>
        <GoAContainer type="non-interactive">
          <h3>Step-by-step guide to updating your code from DDD Design System v3 to v4.</h3>
        </GoAContainer>

        <h3 id="overview">Overview</h3>
        <p>
          This guide helps you update your project to DDD Design System v4. It is broken into
          sections based on how you are using DDD Design System components in your project today.
        </p>
        <p>
          One of the biggest changes to DDD Design System in v4 is that we rename our component
          prefix from <code className="inline">GoA</code> to <code className="inline">GoAB</code> (for React)
          and <code className="inline">goa</code> to{" "}
          <code className="inline">goab</code> (for Angular). What this means for you is that if you were previously
          using the below component names in your project:
          <ul>
            <li>
              <code className="inline">GoAButton</code> will be <code className="inline">GoABButton</code> in React
              and{" "}
              <code className="inline">goa-button</code> will be <code className="inline">goab-button</code> in Angular.
            </li>
            <li>
              <code className="inline">GoAContainer</code> will be <code className="inline">GoABContainer</code> in
              React and{" "}
              <code className="inline">goa-container</code> will be <code className="inline">goab-container</code> in
              Angular.
            </li>
            <li>And same for other components...</li>
          </ul>
        </p>
        <p>If you were previously import components props (in React) from <code>@abgov/react-components</code>,
          components props from DDD Design System
          v4 packages are available under <code className="inline">@abgov/ui-components-common</code>.</p>

        <h3 id="react">Migrating a React app</h3>
        <p>
          The React components for DDD Design System still live in the{" "}
          <code className="inline">@abgov/react-components</code> package. However, the component props will be imported
          from <code className="inline">@abgov/ui-components-common</code> instead of <code
          className="inline">@abgov/react-components</code>.
        </p>
        <h4>1. Update Dependencies</h4>
        <p>To get started, update the following packages:</p>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          npm i @abgov/web-components@4.x
          npm i @abgov/react-components@4.x
          npm i @abgov/ui-components-common@1.x
        `}
        />

        <h4>2. Rename all components name from <code className="inline">GoA-name</code> to <code
          className="inline">GoAB-name</code></h4>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          // Before
          import {GoAAccordion, GoAButton, GoACallout, GoAHeadingSize } from '@abgov/react-components';
          
          // After
          import {GoABAccordion, GoABButton, GoABCallout} from '@abgov/react-components';
          import {GoABAccordionHeadingSize} from '@abgov/ui-components-common';
        `}
        />

        <h4>3. Update components that have changed</h4>
        <p>In v4, we have updated the APIs of certain components in one of the following ways:</p>
        <ul>
          <li>Update component's props name from some common names to a specific component name that props belonged to.
            For example: <code className="inline">GoAHeadingSize</code> will become <code
              className="inline">GoABAccordionHeadingSize</code></li>
          <li>Update component's function arguments from multiple arguments to a single component props. For
            example: <code className="inline">onChange(name: string, checked: boolean, value: string)</code> for <code
              className="inline">
              GoABCheckbox
            </code> will become <code className="inline">onChange(detail: GoABCheckboxOnChangeDetail)</code></li>
        </ul>
        <CodeSnippet
          lang="html"
          allowCopy={true}
          code={`
            <!-- Before -->
            <GoACheckbox onChange={(name, checked, value) => handleChange} />
            <!-- After -->
            <GoABCheckbox onChange={(detail: GoABCheckboxOnChangeDetail) => handleChange} />
        `}
        />


        <h3 id="angular">Migrating an Angular app</h3>
        <p>Starting in v4, the Angular components for DDD Design System live in the <code className="inline">@abgov/angular-components</code>,
        while before we don't import any angular components directly from <code className="inline">@abgov/angular-components</code> but import everything
        from <code className="inline">@abgov/web-components</code> and declare <code className="inline">CUSTOM_ELEMENTS_SCHEMA</code> in order to use
        DDD Design System web components.</p>
        <p>Notice that our <code className="inline">@abgov/angular-components</code> supports only Angular v16 and above.</p>

        <h4>1. Update Dependencies</h4>
        <p>To get started, update the following packages:</p>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          npm i @abgov/web-components@4.x
          npm i @abgov/angular-components@4.x
          npm i @abgov/ui-components-common@1.x
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
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
          export class AccordionComponent {}
          
          // After
          import {GoABAccordion, GoABButton, GoABBadge} from '@abgov/angular-components';
          
          @Component({
            selector: "app-accordion",
            standalone: true,
            imports: [GoABAccordion, GoABButton, GoABBadge],
            templateUrl: "./accordion.component.html"
          })
          export class AccordionComponent {}
        `}
        />

        <h4>3. Update components that have changed</h4>
        <p>In v4, we have updated the APIs of certain components in one of the following ways:</p>
        <ul>
          <li>Update component's name from <code className="inline">goa-name</code> to <code className="inline">goab-name</code>.</li>
          <li>Update component's function arguments from generic <code className="inline">Event</code> to component's event property. For example: <code className="inline">
            onChange(event: Event)
          </code> for <code className="inline">GoABCheckbox</code> will become <code className="inline">onChange(detail: GoABCheckboxOnChangeDetail)</code>, that is imported from <code className="inline">@abgov/ui-components-common</code>.</li>
          <li>Replace some <code className="inline">slot</code> <code className="inline">div</code> with Angular <code className="inline">ng-template</code> allowing some required <code className="inline">slot</code> to be required. Reference is at <a href="https://angular.dev/api/core/ng-template">Angular ng-template</a>.</li>
          <li>Remove some Form Control (Reactive forms) directives such as <code className="inline">goaValue</code> or <code className="inline">goaChecked</code>, instead using Angular form control value (import from <code className="inline">FormsModule</code>) or Reactive Forms (import from <code className="inline">ReactiveFormsModule</code>) to make use
          of Angular forms validation and its API.</li>
        </ul>
        <p>Some examples of component name should be changed in HTML files:</p>
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

        <p>Some examples of changing the component trigger functions:</p>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
            // Before 
            selectColor(event: Event) {
              this.selectedColor = (event as CustomEvent).detail.value;
            }
            
            // After
            import { GoABDropdownOnChangeDetail } from "@abgov/ui-components-common";
            ...
            selectColor(event: GoABDropdownOnChangeDetail) {
              this.selectedColor = event.value || "";
            }
        `}
        />

        <p>Some examples of component properties are more stricter than before that can be only string:</p>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
            // Before 
            status = ["incomplete", "incomplete", "incomplete", "incomplete"]; // FormStepper status
            
            // After
            import { GoABFormStepStatus } from "@abgov/ui-components-common";
            ...
            status: GoABFormStepStatus[] = ["complete", "complete", "incomplete"];
        `}
        />

        <p>Some examples of component slot content replaced by Angular ng-template:</p>
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

        <p>Input examples that we can use Angular Forms Control & Reactive Forms:</p>
        <CodeSnippet
          lang="html"
          allowCopy={true}
          code={`
            <!--Before-->
             <goa-input name="item" goaValue [formControl]="itemFormCtrl" [value]="itemFormCtrl.value"></goa-input>
            
            <!--After-->
            <form [formGroup]="example2Form">
             <goab-input name="inputControl" formControlName="inputControl" placeholder="Enter text"></goab-input>
            </form>
            <!-- Or using Forms Control (ngModel) -->
            <goab-input name="inputControl" [(ngModel)]="inputControl" placeholder="Enter text"></goab-input>
        `}
        />

      </ComponentContent>
    </div>
  );
}
