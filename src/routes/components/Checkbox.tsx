import { useContext, useState } from "react";
import { GoabBadge, GoabCheckbox, GoabCheckboxProps, GoabFormItem, GoabTab, GoabTabs } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import CheckboxExamples from "@examples/checkbox/CheckboxExamples.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

// == Page props ==
const componentName = "Checkbox";
const description = "Let the user select one or more options.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/radio", name: "Radio" }
];
type ComponentPropsType = GoabCheckboxProps;
type CastingType = {
  name: string;
  checked: boolean;
  [key: string]: unknown;
};
export default function CheckboxPage() {
  const {version} = useContext(LanguageVersionContext);
  const [checkboxProps, setCheckboxProps] = useState<ComponentPropsType>({
    name: "item",
    checked: false,
    text: "Item",
    value: "",
  });
  const [checkboxBindings, setCheckboxBindings] = useState<ComponentBinding[]>([
    { label: "Text", type: "string", name: "text", value: "Item" },
    { label: "Description", type: "string", name: "description", value: "" },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
    { label: "Error", type: "boolean", name: "error", value: false },
    { label: "ARIA label", type: "string", name: "ariaLabel", value: "" },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Basic",
  });
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Unique name to identify the checkbox.",
      required: true,
    },
    {
      name: "checked",
      type: "boolean",
      description: "Marks the checkbox item as selected.",
      required: true,
    },
    {
      name: "text",
      type: "string",
      description: "Label shown beside the checkbox.",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding.",
    },
    {
      name: "description",
      type: "string | slot",
      description: "Additional content shown below the label.",
      lang: "angular",
    },
    {
      name: "description",
      type: "string | ReactNode",
      description: "Additional content shown below the label.",
      lang: "react",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disable this control. It will not receive focus or events. Use [attr.disabled] with [formControl].",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Shows an error on the checkbox item.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      lang: "react",
    },
    {
      name: "arialabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      lang: "angular",
    },
    {
      name: "onChange",
      type: "(name: string, checked: boolean, value: string) => void",
      description: "Callback function when checkbox value is changed.",
      lang: "react"
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the checkbox.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the checkbox.",
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Unique name to identify the checkbox.",
    },
    {
      name: "checked",
      type: "boolean",
      description: "Marks the checkbox item as selected.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disable this control. It will not receive focus or events.",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Shows an error on the checkbox item.",
    },
    {
      name: "text",
      type: "string",
      description: "Label shown beside the checkbox.",
    },
    {
      name: "value",
      type: "string | number | boolean",
      description: "The value binding.",
    },
    {
      name: "description",
      type: "string | TemplateRef<any>",
      description: "Additional content shown below the label.",
      lang: "angular",
    },
    {
      name: "description",
      type: "string | ReactNode",
      description: "Additional content shown below the label.",
      lang: "react",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the checkbox.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "onChange",
      type: "(event: GoabCheckboxOnChangeDetail) => void",
      description: "Callback function when checkbox value is changed.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const noop = () => { };

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const missingProps = {
      name: "item",
      checked: false,
      value: ""
    };
    const updatedProps = { ...missingProps, ...props };

    setCheckboxBindings(bindings);
    setCheckboxProps(updatedProps as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox
              properties={checkboxBindings}
              formItemProperties={formItemBindings}
              onChange={onChange}
              allow={["form"]}
              onChangeFormItemBindings={onFormItemChange}
              flags={version === "old" ? ["reactive"] : ["reactive", "template-driven"]}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
                      console.log(event);
                    }
                  }
                `}
              />

              {version === "old" && <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                  import { FormControl } from "@angular/forms";
                  export class SomeOtherComponent {
                    itemFormCtrl = new FormControl();
                  }
                `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                   form!: FormGroup;
                   constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                      item: [""]
                    })
                   }
                  }
                `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags={["angular", "template-driven"]}
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                   item=false;
                   checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
                    console.log(event);
                    this.item = event.checked;
                   }
                  }
                `}
              />}

              <form>
                <GoabFormItem {...formItemProps}>
                  <GoabCheckbox {...checkboxProps} onChange={noop} />
                </GoabFormItem>
              </form>
            </Sandbox>

            <ComponentProperties oldProperties={oldComponentProperties} properties={componentProperties} />
            <CheckboxExamples />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
