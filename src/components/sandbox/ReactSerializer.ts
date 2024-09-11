import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer } from "./BaseSerializer";

export class ReactSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;

  constructor(properties: ComponentBinding[], isOldVersion: boolean) {
    super(properties, isOldVersion);
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;
  }

  getProperty(name: string): ComponentBinding | undefined {
    return this.properties.find(p => p.name === name);
  }

  dynamicProp(name: string): string {
    return `${name.toLowerCase()}={${name}}`;
  }

  stringToProp(name: string, value: string): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    if (name === "value" && value === "") return `value=""`;

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

  dateToProp(name: string, item: Date): string {
    const year = item.getFullYear();
    const month = item.getMonth();
    const day = item.getDate();
    return `${name}={new Date(${year},${month},${day})}`;
  }

  arrayToProp(name: string, values: string, delimit: boolean): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    return delimit ? `${name}=[${values}]` : `${name}=${values}`;
  }

  componentNameToString(name: string): string {
    if (this.isOldVersion) {
      return name.replace(/^Goab/, "GoA");
    }
    return name;
  }

  componentToString(name: string): string {
    return `<${name} />`;
  }

  // @ts-ignore
  modifyProps(props: string, propName: string, elementType: string): string {
      return props;
  }

  postProcess (children: string): string {
    return children;
  }
}
