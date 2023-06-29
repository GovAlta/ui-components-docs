import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";

export class AngularSerializer extends BaseSerializer implements Serializer {

  public isRoot = false;
  private nativeEls = "div span p br header footer blockquote input textarea a button h2 h2 h3 h4 img label ul li ol hr section".split(" ")

  constructor(properties: ComponentBinding[]) {
    super(properties)
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;  
  }

  setState(state: SerializerState) {
    super.setState(state)  
  }

  #dynamicProp(name: string): string {
    return `[${name.toLowerCase()}]="some${this.capitalize(name)}Value"`;
  }
  
  #toFunc(name: string): string {
    let _name = name.replace(/^on/, "")
    _name = _name.substring(0, 1).toLowerCase() + _name.substring(1)

    return `(_${_name})="${name}($event)"`
  }
  
  stringToProp(name: string, item: string): string {    
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    if (item === "") return "";
    return `${name.toLowerCase()}="${item}"`;
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
    return `${name.toLowerCase()}=${item}`;
  }

  funcToProp(name: string, _item: Object): string {
    return this.#toFunc(name);
  }

  arrayToProp(name: string, items: string, delimit: boolean): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    return delimit ? `${name.toLowerCase()}=[${items}]` : `${name.toLowerCase()}=${items}` ;
  }

  componentNameToString(name: string): string {
    if (this.nativeEls.includes(name)) {
      return name;
    }
    const prefix = "GoA";
    const tail = name.replace(prefix, "")
    return `${prefix.toLowerCase()}-${this.dasherize(tail)}`;
  }
  
  componentToString(name: string): string {
    name = this.dasherize(name)
    return `<${name} />`;
  }
}

