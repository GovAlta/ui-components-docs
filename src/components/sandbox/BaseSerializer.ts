import { ComponentBinding } from "./ComponentBinding";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";

export interface Serializer {
  stringToProp: (name: string, item: string) => string;
  numberToProp: (name: string, item: number) => string;
  booleanToProp: (name: string, item: boolean) => string;
  funcToProp: (name: string, item: Object) => string;
  dateToProp: (name: string, item: Date) => string;
  arrayToProp: (name: string, item: string, delimit: boolean) => string;
  componentNameToString: (name: string) => string;
  componentToString: (name: string) => string;

  setIsRoot: (value: boolean) => void;
  setState: (state: SerializerState) => void;
  modifyProps: (props: string, propName: string, elementType: string) => string;
  postProcess: (value: string) => string;
}

export interface SerializerState {
  element: string;
  props: { name: string };
}

export function propsToString(
  props: Record<string, string | number>,
  lang: "angular" | "react",
  version: LanguageVersion
): string {
  if (lang === "angular") {
    if (version === "old") {
      return Object.entries(props)
        .filter(e => e[1] !== "" && e[1] != undefined)
        .map(e => {
          return typeof e[1] === "number" || typeof e[1] === "boolean"
            ? `${e[0].toLowerCase()}="${e[1]}"`
            : `${e[0].toLowerCase()}="${e[1]}"`;
        })
        .join(" ");
    } else {
      return Object.entries(props)
        .filter(e => e[1] !== "" && e[1] != undefined)
        .map(e => {
          return typeof e[1] === "number" || typeof e[1] === "boolean"
            ? `[${e[0]}]="${e[1]}"`
            : `${e[0]}="${e[1]}"`;
        })
        .join(" ");
    }
  }
  return Object.entries(props)
    .filter(e => e[1] !== "" && e[1] != undefined)
    .map(e => {
      return typeof e[1] === "number" || typeof e[1] === "boolean"
        ? `${e[0]}={${e[1]}}`
        : `${e[0]}="${e[1]}"`;
    })
    .join(" ");
}

export class BaseSerializer {
  protected isRoot = false;
  protected state: SerializerState = { element: "", props: { name: "" } };

  constructor(protected properties: ComponentBinding[], protected version: LanguageVersion) {}

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

  protected isDynamic(name: string): boolean {
    return this.getProperty(name)?.dynamic || false;
  }

  protected getNewVersionFunctionName(functionName: string): string {
    let element = this.state.element || "goab-";
    let componentName = "";
    if (element.includes("-")) {
      const parts = element.split("-");
      componentName = parts[1] || "";
    } else if (element.toLowerCase().startsWith("goab")) {
      componentName = element.substring(4);
      if (componentName.length > 0) {
        componentName = componentName[0].toLowerCase() + componentName.slice(1);
      }
    }
    // So onChange for GoabInput will be: inputOnChange, onChange for Dropdown will be dropdownOnChange
    // The event passed on onChange.. now is strict with type of Event, so we must handle it
    functionName = functionName[0].toUpperCase() + functionName.slice(1);
    return `${componentName}${functionName}`;
  }
}
