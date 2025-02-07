import { ComponentBinding } from "./ComponentBinding";
import { BaseSerializer, Serializer, SerializerState } from "./BaseSerializer";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";

export class AngularSerializer extends BaseSerializer implements Serializer {
  public isRoot = false;
  private nativeEls =
    "table form th thead tbody tr td div span p br header footer blockquote input textarea a button h1 h2 h3 h4 h5 h6 img label ul li ol hr section dl dt dd strong u".split(
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
    if (this.version === "old") {
      let _name = name.replace(/^on/, "");
      _name = _name.substring(0, 1).toLowerCase() + _name.substring(1);
      return `(_${_name})="${name}($event)"`;
    }


    if (name === "onClick") {
      return `(${name})="${name}()"`;
    }

    // New version has onChange with event strict to different type, so we must have different names to handle that
    // camel case componentName above for me
    return `(${name})="${this.getNewVersionFunctionName(name)}($event)"`;
  }

  stringToProp(name: string, item: string): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }

    if (name === "value" && item === "") return `value=""`;
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

  booleanToProp(name: string, item: boolean): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    if (!item) return "";
    return `${this.version === "old" ? name.toLowerCase() : `[${name}]`}="${item}"`;
  }

  funcToProp(name: string, _item: Object): string {
    return this.#toFunc(name);
  }

  arrayToProp(name: string, items: string, delimit: boolean): string {
    if (this.isDynamic(name)) {
      return this.#dynamicProp(name);
    }
    return delimit ? `${this.version === "old" ? name.toLowerCase() : name}=[${items}]` : `${this.version === "old" ? name.toLowerCase(): name}=${items}`;
  }

  componentNameToString(name: string): string {
    if (this.nativeEls.includes(name)) {
      return name;
    }
    let tail = name.replace("Goab", "");
    if (tail === "OneColumnLayout" && this.version === "new") {
      tail = "ColumnLayout";
    }
    return `${this.version === "old" ? "goa" : "goab"}-${this.dasherize(tail)}`;
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
