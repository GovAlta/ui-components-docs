import { ReactElement, ReactNode, useContext, useEffect, useState } from "react";

import SandboxProperties from "./SandboxProperties";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding } from "./ComponentBinding";
import { LanguageContext } from "./LanguageContext";
import ComponentSerializer from "./ComponentSerializer";
import { ReactSerializer } from "./ReactSerializer";
import { AngularSerializer } from "./AngularSerializer";
import { AngularReactiveSerializer } from "./AngularReactiveSerializer";

import "./Sandbox.css";

type Flag = "reactive"

interface ElementProps {
  properties?: ComponentBinding[];
  note?: string;
  fullWidth?: boolean;
  onChange?: (bindings: ComponentBinding[], props: Record<string, unknown>) => void;
  flags?: Flag[];
}

export const Sandbox = (props: ElementProps & { children: ReactNode }) => {

  type Serializer = (el: any, properties: ComponentBinding[]) => string;

  const serializers: Record<string, Serializer> = {
    react: (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new ReactSerializer(properties));
      return serializer.componentsToString(els)
    },
    angular: (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularSerializer(properties));
      return serializer.componentsToString(els)
    },
    "angular-reactive": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularReactiveSerializer(properties));
      return serializer.componentsToString(els)
    },
  }

  // Hooks

  const lang = useContext(LanguageContext);
  const [formatLang, setFormatLang] = useState<string>("");

  const formatMap: Record<string, string> = {
    react: "tsx",
    angular: "html"
  }

  useEffect(() => {
    if (!props.properties) return;
    if (!props.children) return;

    setFormatLang(formatMap[lang])
  }, [lang, props.children, props.properties])

  // Functions

  function onChange(bindings: ComponentBinding[]) {
    props.onChange?.(bindings, toKeyValue(bindings))
  }

  function toKeyValue(bindings: ComponentBinding[]) {
    return bindings.reduce((acc: Record<string, unknown>, prop: ComponentBinding) => {
      if (typeof prop.value === "string" && prop.value === "") {
        return acc;
      }
      acc[prop.name] = prop.value;
      return acc;
    }, {})
  }

  // Filters components from within the Sandbox children
  // i.e. Get all the <CodeSnippet> components
  function getComponents(type: "goa" | "codesnippet"): ReactElement[] {
    const children = Array.isArray(props.children) ? props.children : [props.children]

    return (children as ReactElement[])
      .filter(el => typeof el.type !== "string" && el.type.name.toLowerCase().startsWith(type))
  }

  // Gets code snippets matching the tags passed in. This allows for Angular reactive components
  // to be displayed, while hiding the non-reactive ones
  function getCodeSnippets(...tags: string[]) {
    const matches = (list: string[]): boolean => {
      return tags.filter(tag => list.includes(tag)).length === list.length
    }
    return getComponents("codesnippet")
      .filter(el => {
        const componentTags: string[] = Array.isArray(el.props.tags) ? el.props.tags : [el.props.tags];
        if (tags.length !== componentTags.length) return false
        return matches(componentTags)
      })
  }

  // CodeSnippet output. To show code the root element *must* start with goa (case-insensitive).
  // This allows
  function output(fn: Serializer): string {
    return fn(getComponents("goa"), props.properties || []);
  }

  function render() {
    if (lang === "angular" && props.flags?.includes("reactive")) {
      return <>
        Angular
        {getCodeSnippets("angular")}
        <CodeSnippet lang={formatLang} allowCopy={true}>
          {output(serializers["angular"])}
        </CodeSnippet>

        Reactive
        {getCodeSnippets("angular", "reactive")}
        <CodeSnippet lang={formatLang} allowCopy={true}>
          {output(serializers["angular-reactive"])}
        </CodeSnippet>
      </>
    }

    if (lang === "angular") {
      return <>
        {getCodeSnippets("angular")}
        <CodeSnippet lang={formatLang} allowCopy={true}>
          {output(serializers["angular"])}
        </CodeSnippet>
      </>
    }

    // formatted code snippet ex React -> Angular
    if (lang === "react") {
      return <CodeSnippet lang={formatLang} allowCopy={true}>
        {output(serializers["react"])}
      </CodeSnippet>
    }

    return <>No formatter found for {lang}</>
  }

  return (
    <>
      {props.properties &&
        <SandboxProperties properties={props.properties} onChange={onChange} />
      }

      <div className="sandbox-note">
        {props.note}
      </div>

      {/* rendered output */}
      <div className="sandbox-render">
        <div className={ props.fullWidth ? "sandbox-render-fullwidth" : "sandbox-render-centered"}>
          {getComponents("goa")}
        </div>
      </div>

      {render()}
    </>
  )
}

export default Sandbox;
