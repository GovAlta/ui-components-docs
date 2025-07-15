import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";

export class ReactSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;

  constructor(
    properties: ComponentBinding[],
    version: LanguageVersion,
    protected variableNames: string[]
  ) {
    super(properties, version);
  }

  setIsRoot(isRoot: boolean) {
    this.isRoot = isRoot;
  }

  setState(state: SerializerState) {
    super.setState(state);
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
    if (this.variableNames.includes(name)) {
      return `${name}={${name}}`;
    }

    if (name === "value" && value === "") return `value=""`;

    if (value === "") return "";
    return `${name}="${value}"`;
  }

  numberToProp(name: string, value: number): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    if (this.variableNames.includes(name)) {
      return `${name}={${name}}`;
    }
    return `${name}={${value}}`;
  }

  booleanToProp(name: string, value: boolean): string {
    if (this.isDynamic(name)) {
      return this.dynamicProp(name);
    }
    if (this.variableNames.includes(name)) {
      return `${name}={${name}}`;
    }
    if (!value) return "";
    return `${name}={${value}}`;
  }

  funcToProp(name: string, _callback: Object): string {
    if (this.version === "old" || name === "onClick") {
      return `${name}={${name}}`;
    }

    return `${name}={${this.getNewVersionFunctionName(name)}}`;
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
    if (this.version === "old") {
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

  postProcess(children: string): string {
    return children;
  }
}
