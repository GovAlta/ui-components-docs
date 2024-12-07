import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";

const ReactiveComponents = [
  "goab-input",
  "goab-textarea",
  "goab-dropdown",
  "goab-checkbox",
  "goab-radio-group",
  "goab-date-picker",
];

export class AngularReactiveSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;
  private nativeEls =
    "div form span p br header footer blockquote input textarea a button h2 h2 h3 h4 h5 h6 img label ul li ol hr section dt dl dd".split(
      " "
    );

  constructor(properties: ComponentBinding[], version: LanguageVersion) {
    super(properties, version);
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;
  }

  setState(state: SerializerState) {
    super.setState(state);
  }

  #dynamicProp(name: string): string {
    return `[${name.toLowerCase()}]="${name}"`;
  }

  #toFunc(name: string): string {
    if (name === "onChange") {
      return "";
    }

    if (this.version === "new" && name === "onClick") {
      return `(${name})="${name}()"`;
    }

    let _name = name.replace(/^on/, "");
    _name = _name.substring(0, 1).toLowerCase() + _name.substring(1);

    return `(_${_name})="${name}($event)"`;
  }

  stringToProp(name: string, item: string): string {
    if (ReactiveComponents.includes(this.state.element) && name === "value" && this.version === "old") {
      return `goaValue`;
    }
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    if (item === "") return "";
    if (name === "className") name = "class";

    return `${this.version === "old" ? name.toLowerCase() : name}="${item}"`;
  }

  dateToProp(name: string, item: Date): string {
    return this.stringToProp(name, `${item}`);
  }

  numberToProp(name: string, item: number): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    return `${this.version === "old" ? name.toLowerCase() : `[${name}]`}="${item}"`;
  }

  booleanToProp(propName: string, propValue: boolean): string {
    if (this.version === "old" && ReactiveComponents.includes(this.state.element) && propName === "checked") {
      return `goaChecked`;
    }
    if (this.isDynamic(propName)) {
      return this.#dynamicProp(propName);
    }
    if (!propValue) return "";
    return this.version === "old" ? `${propName.toLowerCase()}="${propValue}"` : `[${propName.toLowerCase()}]="${propValue}"`;
  }

  funcToProp(name: string, _item: Object): string {
    return this.#toFunc(name);
  }

  arrayToProp(name: string, items: string, delimit: boolean): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    return delimit ? `${name.toLowerCase()}=[${items}]` : `${name.toLowerCase()}=${items}`;
  }

  componentNameToString(name: string): string {
    if (this.nativeEls.includes(name)) {
      return name;
    }
    const currentPrefix = "Goab";
    const oldPrefix = "goa";
    const tail = name.replace(currentPrefix, "");
    if (this.version === "old") {
      return `${oldPrefix}-${this.dasherize(tail)}`;
    }
    return `${currentPrefix.toLowerCase()}-${this.dasherize(tail)}`;
  }

  componentToString(name: string): string {
    name = this.dasherize(name);
    return `<${name} />`;
  }

  modifyProps(props: string, propName: string, elementType: string): string {
    if (ReactiveComponents.includes(elementType)) {
      const additionalProps =
        this.version === "old"
          ? `[formControl]="${propName}FormCtrl" [value]="${propName}FormCtrl.value"`
          : `formControlName="${propName}"`;
      props = props ? `${props} ${additionalProps}` : additionalProps;
    }
    return props;
  }

  postProcess(children: string): string {
    // New version, reactive form will include [formGroup]
    if (this.version === "new" && children.includes("<form") && !children.includes("[formGroup]=")) {
      children = children.replace(/<form/g, '<form [formGroup]="form"');
    }
    console.log("this.version new and children ", children);
    if (this.version === "new" && children.startsWith("<goab-form-item")) {
      children = children.replace(/<goab-form-item/g, '<goab-form-item [formGroup]="form"');
    }

    if (this.version === "new" && children.includes(`[value]="value"`)) {
      children = children.replace(`[value]="value"`, "");
    }
    if (children.startsWith("<goa-checkbox")) {
      if (this.version === "old") {
        if (children.includes("goaChecked") && children.includes("goaValue")) {
          children = children.replace(/\bgoaValue\b\s?/g, "");
        }

        if (children.includes("disabled=true")) {
          children = children
            .replace(/disabled=true/g, '[attr.disabled]="true"')
            .replace(/\bgoaValue\b\s?/g, "");
        }
      }
    }
    return children;
  }
}
