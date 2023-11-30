import { ComponentBinding } from "./ComponentBinding";

export interface Serializer {
  stringToProp: (name: string, item: string) => string;
  numberToProp: (name: string, item: number) => string;
  booleanToProp: (name: string, item: boolean) => string;
  funcToProp: (name: string, item: Object) => string;
  arrayToProp: (name: string, item: string, delimit: boolean) => string;
  componentNameToString: (name: string) => string;
  componentToString: (name: string) => string;

  setIsRoot: (value: boolean) => void;
  setState: (state: SerializerState) => void;
}

export interface SerializerState {
  element: string;
  props: { name: string };
}

export class BaseSerializer {
  protected isRoot = false;
  protected state: SerializerState = { element: "", props: { name: "" } };

  constructor(protected properties: ComponentBinding[]) {}

  getProperty(name: string): ComponentBinding | undefined {
    return this.properties.find(p => p.name === name);
  }

  protected setIsRoot(value: boolean) {
    this.isRoot = value;
  }

  setState(state: SerializerState) {
    this.state = state;
  }

  // converts React camelcase props to dasherized
  protected dasherize(name: string): string {
    const out: string[] = [];
    name.split("").forEach((c: string, i: number) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90 && i > 0) {
        out.push("-");
      }
      out.push(c.toLowerCase());
    });
    return out.join("");
  }

  protected capitalize(value: string): string {
    return `${value[0].toUpperCase()}${value.substring(1)}`;
  }

  protected isDynamic(name: string): boolean {
    return this.getProperty(name)?.dynamic || false;
  }
}
