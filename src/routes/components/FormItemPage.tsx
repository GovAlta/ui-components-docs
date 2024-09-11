import { useContext, useState } from "react";
import { ComponentBinding, LanguageContext, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabFormItem, GoabInput, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function FormItemPage() {
  const language = useContext(LanguageContext);
  const [formItemProps, setFormItemProps] = useState({
    label: "First name",
  });

  const helptextReactNode: React.ReactNode = <><i>This is </i> slotted <b> help text</b>.</>;
  const errorReactNode: React.ReactNode = <><i>This is </i> slotted <b>error text</b>.</>;

  const [formItemBindings, setFormItemBindings] = useState<ComponentBinding[]>([
    {
      label: "Label",
      type: "string",
      value: "First name",
      name: "label",
    },
    {
      label: "Label Size",
      type: "list",
      options: ["", "regular", "large"],
      value: "",
      defaultValue: "regular",
      name: "labelSize",
    },
    {
      label: "Help Text",
      name: "helpText",
      type: "string",
      value: "",
    },
    {
      label: "Error",
      type: "string",
      name: "error",
      value: "",
    },
    {
      label: "Requirement",
      type: "list",
      name: "requirement",
      options: ["", "optional", "required"],
      value: "",
    },
    {
      label: "Value",
      type: "string",
      name: "value",
      value: "",
      hidden: true,
      dynamic: true,
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);
  const componentProps: ComponentProperty[] = [
    {
      name: "label",
      type: "string",
      description: "Creates a label for a form item.",
    },
    {
      name: "labelSize",
      lang: "react",
      type: "regular | large",
      defaultValue: "regular",
      description: "Sets a regular or large label size.",
    },
    {
      name: "labelsize",
      lang: "angular",
      type: "regular | large",
      defaultValue: "regular",
      description: "Sets a regular or large label size.",
    },
    {
      name: "helpText",
      type: "string | ReactNode",
      lang: "react",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "helptext",
      type: "string | slot",
      lang: "angular",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "error",
      type: "string | ReactNode",
      lang: "react",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "error",
      type: "string | slot",
      lang: "angular",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "requirement",
      type: "optional | required",
      description: "Marks the field with an optional or required label.",
    },
    {
      name: "id",
      type: "string",
      description:
        "The id of the label, necessary for field's aria-labelledby attribute for the screen reader.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the form item.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the form item.",
      lang: "angular",
    },    
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFormItemBindings(bindings);
    setFormItemProps(props as { label: string;[key: string]: unknown });
  }

  const noop = () => { };

  return (
    <>
      <ComponentHeader
        name="Form Item"
        category={Category.INPUTS_AND_ACTIONS}
        description="Wraps an input control with a text label, requirement label, helper text, and error text."
        relatedComponents={[
          { link: "/components/checkbox", name: "Checkbox" },
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/Radio", name: "Radio" },
          { link: "/components/text-area", name: "Text area" },
          { link: "/components/text-field", name: "Text field" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={formItemBindings} onChange={onSandboxChange} flags={["reactive"]}>
              <CodeSnippet
                lang="typescript"
                tags={["angular"]}
                allowCopy={true}
                code={`
                // non-reactive code
                export class SomeComponent {
                  value: string = "";
                  
                  onChange(event: Event) {
                    console.log("Event ", event);
                    console.log("Value ", (event.target as HTMLInputElement).value);
                  }
                }
              `}
              />
              <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                // reactive code
                export class SomeComponent {
                  itemFormCtrl = new FormControl("");
                }
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                const [value, setValue] = useState<string>("");
              
                onChange(name: string, value: string) {
                  setValue(value);
                }
              `}
              />

              <GoabFormItem {...formItemProps}>
                <GoabInput onChange={noop} value="" name="item" />
              </GoabFormItem>
            </Sandbox>

            <ComponentProperties properties={componentProps} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

            <h3 id="component-example-sortable-columns">Slotted Helper Text</h3>
            <Sandbox skipRender>
              <GoabFormItem
                label="First name" 
                helpText={helptextReactNode}>
                <GoabInput onChange={noop} value="" name="item" />
              </GoabFormItem>

              {language === "react" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  <GoAFormItem label="First name"
                               helpText={<><i>This is </i> slotted <b>help text</b>.</>}>
                    <GoAInput onChange={onChange} value={value} name="item"></GoAInput>
                  </GoAFormItem>
                  `}
                />
              )}

              {language === "angular" && (
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  <goa-form-item label="First name">
                    <goa-input goaValue name="item" [formControl]="itemFormCtrl" [value]="itemFormCtrl.value"></goa-input>

                    <div slot="helptext">
                      <span>This is </span>
                      <i>slotted</i>
                      <b>help text</b>.
                    </div>

                  </goa-form-item>
                  `}
                />
              )}
            </Sandbox>

            <h3 id="component-example-sortable-columns">Slotted Error Text</h3>
            <Sandbox skipRender>
              <GoabFormItem
                label="First name" 
                error={errorReactNode}>
                <GoabInput onChange={noop} value="" name="item" />
              </GoabFormItem>

              {language === "react" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  <GoAFormItem 
                    label="First name"
                    error={<><i>This is </i> slotted <b>error text</b>.</>}>
                    <GoAInput onChange={onChange} value={value} name="item"></GoAInput>
                  </GoAFormItem>
                  `}
                />
              )}

              {language === "angular" && (
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  <goa-form-item label="First name">
                  <goa-input goaValue name="item" [formControl]="itemFormCtrl" [value]="itemFormCtrl.value"></goa-input>

                    <div slot="error">
                      <span>This is </span>
                      <i>slotted </i>
                      <b>error text.</b>
                    </div>

                  </goa-form-item>
                  `}
                />
              )}
            </Sandbox>
          </GoabTab>
          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
