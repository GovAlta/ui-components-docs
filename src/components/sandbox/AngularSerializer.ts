import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";

export class AngularSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;
  private nativeEls =
    "table th thead tbody tr td div span p br header footer blockquote input textarea a button h1 h2 h3 h4 img label ul li ol hr section dl dt dd strong u".split(
      " "
    );

  constructor(properties: ComponentBinding[], isOldVersion: boolean) {
    super(properties, isOldVersion);
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
    let _name = name.replace(/^on/, "");
    _name = _name.substring(0, 1).toLowerCase() + _name.substring(1);

    return `(_${_name})="${name}($event)"`;
  }

  stringToProp(name: string, item: string): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }

    if (name === "value" && item === "") return `value=""`;
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

  booleanToProp(name: string, item: boolean): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    if (!item) return "";
    return `${name.toLowerCase()}="${item}"`;
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
    if (this.isOldVersion) {
      return `${oldPrefix}-${this.dasherize(tail)}`;
    }
    return `${currentPrefix.toLowerCase()}-${this.dasherize(tail)}`;
  }

  componentToString(name: string): string {
    name = this.dasherize(name);
    return `<${name} />`;
  }

  //@ts-ignore
  modifyProps(props: string, propName: string, elementType: string): string {
    return props;
  }

  postProcess(children: string): string {
    return children;
  }
}
