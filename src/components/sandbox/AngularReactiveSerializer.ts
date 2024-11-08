import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";

const ReactiveComponents = [
  "goa-input",
  "goa-textarea",
  "goa-dropdown",
  "goa-checkbox",
  "goa-radio-group",
  "goa-date-picker",
];

export class AngularReactiveSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;
  private nativeEls =
    "div span p br header footer blockquote input textarea a button h2 h2 h3 h4 img label ul li ol hr section dt dl dd".split(
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

    let _name = name.replace(/^on/, "");
    _name = _name.substring(0, 1).toLowerCase() + _name.substring(1);

    return `(_${_name})="${name}($event)"`;
  }

  stringToProp(name: string, item: string): string {
    if (ReactiveComponents.includes(this.state.element) && name === "value") {
      return `goaValue`;
    }
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    if (item === "") return "";
    if (name === "className") name = "class";
    return `${name.toLowerCase()}="${item}"`;
  }

  dateToProp(name: string, item: Date): string {
    return this.stringToProp(name, `${item}`);
  }

  numberToProp(name: string, item: number): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    return `${name.toLowerCase()}="${item}"`;
  }

  booleanToProp(propName: string, propValue: boolean): string {
    if (ReactiveComponents.includes(this.state.element) && propName === "checked") {
      return `goaChecked`;
    }
    if (this.isDynamic(propName)) {
      return this.#dynamicProp(propName);
    }
    if (!propValue) return "";
    return `${propName.toLowerCase()}="${propValue}"`;
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

  addReactiveProperties(props: string, propName: string): string {
    const additionalProps = `[formControl]="${propName}FormCtrl" [value]="${propName}FormCtrl.value"`;
    props = props ? `${props} ${additionalProps}` : additionalProps;
    return props;
  }

  modifyProps(props: string, propName: string, elementType: string): string {
    if (ReactiveComponents.includes(elementType)) {
      const additionalProps = `[formControl]="${propName}FormCtrl" [value]="${propName}FormCtrl.value"`;
      props = props ? `${props} ${additionalProps}` : additionalProps;
    }
    return props;
  }

  postProcess(children: string): string {
    if (children.startsWith("<goa-checkbox")) {
      if (children.includes("goaChecked") && children.includes("goaValue")) {
        children = children.replace(/\bgoaValue\b\s?/g, "");
      }

      if (children.includes("disabled=true")) {
        children = children
          .replace(/disabled=true/g, '[attr.disabled]="true"')
          .replace(/\bgoaValue\b\s?/g, "");
      }
    }
    return children;
  }
}
