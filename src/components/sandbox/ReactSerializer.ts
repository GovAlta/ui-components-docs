import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer } from "./BaseSerializer";

export class ReactSerializer extends BaseSerializer implements Serializer {

  public isRoot = false;

  constructor(properties: ComponentBinding[]) {
    super(properties)
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;
  }

  getProperty(name: string): ComponentBinding | undefined {
    return this.properties.find(p => p.name === name)
  }

  dynamicProp(name: string): string {
    return `${name.toLowerCase()}={some${this.capitalize(name)}Value}`;
  }

  stringToProp(name: string, value: string): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    if (value === "") return "";
    return `${name}="${value}"`;
  }

  numberToProp(name: string, value: number): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    return `${name}={${value}}`;
  }

  booleanToProp(name: string, value: boolean): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    if (!value) return "";
    return `${name}={${value}}`;
  }

  funcToProp(name: string, _callback: Object): string {
    return `${name}={${name}}`;
  }

  arrayToProp(name: string, values: string, delimit: boolean): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    return delimit ? `${name}=[${values}]` : `${name}=${values}` ;
  }

  componentNameToString(name: string): string {
    return name;
  }

  componentToString(name: string): string {
    return `<${name} />`;
  }
}
