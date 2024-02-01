import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";

const ReactiveComponents = [
  "goa-input",
  "goa-textarea",
  "goa-dropdown",
  "goa-checkbox",
  "goa-radio-group",
  "goa-date-picker"
];

export class AngularReactiveSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;
  private nativeEls =
    "div span p br header footer blockquote input textarea a button h2 h2 h3 h4 img label ul li ol hr section dt dl dd".split(
      " "
    );

  constructor(properties: ComponentBinding[]) {
    super(properties);
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;
  }

  setState(state: SerializerState) {
    super.setState(state);
  }

  #dynamicProp(name: string): string {
    return `[${name.toLowerCase()}]="some${this.capitalize(name)}Value"`;
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
      return `goaValue [formControl]="${this.state.props.name}FormCtrl" [value]="${this.state.props.name}FormCtrl.value"`;
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
      return `goaChecked [formControl]="${this.state.props.name}FormCtrl" [value]="${this.state.props.name}FormCtrl.value"`;
    }
    if (this.isDynamic(propName)) {
      return this.#dynamicProp(propName);
    }
    if (!propValue) return "";
    return `${propName.toLowerCase()}=${propValue}`;
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
    const prefix = "GoA";
    const tail = name.replace(prefix, "");
    return `${prefix.toLowerCase()}-${this.dasherize(tail)}`;
  }

  componentToString(name: string): string {
    name = this.dasherize(name);
    return `<${name} />`;
  }
}
