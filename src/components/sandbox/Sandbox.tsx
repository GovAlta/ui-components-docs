import { ReactElement, ReactNode, useContext, useEffect, useState } from "react";

import SandboxProperties from "./SandboxProperties";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding } from "./ComponentBinding";
import { LanguageContext } from "./LanguageContext";
import { ReactSerializer } from "./ReactSerializer";
import { AngularSerializer } from "./AngularSerializer";
import { AngularReactiveSerializer } from "./AngularReactiveSerializer";
import ComponentSerializer from "./ComponentSerializer";

import "./Sandbox.css";
import React from "react";

type Flag = "reactive";
type ComponentType = "goa" | "codesnippet";
type Serializer = (el: any, properties: ComponentBinding[]) => string;

interface SandboxProps {
  properties?: ComponentBinding[];
  note?: string;
  fullWidth?: boolean;
  onChange?: (bindings: ComponentBinding[], props: Record<string, unknown>) => void;
  flags?: Flag[];
  skipRender?: boolean; // prevent rendering the snippet, to allow custom code to be shown
  allow?: string[];     // Be default the Sandbox is selective to what it renders out. This adds
                        // additional elements to what is allowed to be rendered out
  children: ReactNode;
}

export const Sandbox = (props: SandboxProps) => {

  const lang = useContext(LanguageContext);
  const [formatLang, setFormatLang] = useState<string>("");

  const serializers: Record<string, Serializer> = {
    "react": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new ReactSerializer(properties));
      return serializer.componentsToString(els);
    },

    "angular": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularSerializer(properties));
      return serializer.componentsToString(els);
    },

    "angular-reactive": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularReactiveSerializer(properties));
      return serializer.componentsToString(els);
    },
  };

  const formatMap: Record<string, string> = {
    react: "tsx",
    angular: "html",
  };

  // Hooks

  useEffect(() => {
    if (!props.properties) return;
    if (!props.children) return;

    setFormatLang(formatMap[lang]);
  }, [lang, props.children, props.properties]);

  // Functions

  function onChange(bindings: ComponentBinding[]) {
    props.onChange?.(bindings, toKeyValue(bindings));
  }

  function toKeyValue(bindings: ComponentBinding[]) {
    return bindings.reduce((acc: Record<string, unknown>, prop: ComponentBinding) => {
      if (typeof prop.value === "string" && prop.value === "") {
        return acc;
      }
      acc[prop.name] = prop.value;
      return acc;
    }, {});
  }

  return (
    <>
      <SandboxView fullWidth={props.fullWidth} sandboxProps={props} />
      <SandboxProperties properties={props.properties} onChange={onChange} />
      <SandboxCode props={props} formatLang={formatLang} lang={lang} serializers={serializers} />
      <div className="sandbox-note">{props.note}</div>
    </>
  );
};

type SandboxCodeProps = {
  props: SandboxProps & { children: ReactNode };
  lang: string;
  formatLang: string;
  serializers: Record<string, Serializer>;
}
function SandboxCode(p: SandboxCodeProps) {
  // reactive angular
  if (p.lang === "angular" && p.props.flags?.includes("reactive")) {
    return (
      <>
        <h4>Event based</h4>
        <AdditionalCodeSnippets tags={["angular"]} sandboxProps={p.props} />
        <ComponentOutput formatLang={p.formatLang} type="angular" sandboxProps={p.props} serializer={p.serializers[p.lang]} />

        <h4>Reactive forms (FormControl)</h4>
        <AdditionalCodeSnippets tags={["angular", "reactive"]} sandboxProps={p.props} />

        {!p.props.skipRender && <ComponentOutput formatLang={p.formatLang} type="angular-reactive" sandboxProps={p.props} serializer={p.serializers[p.lang]} />}
      </>
    );
  }

  // angular
  if (p.lang === "angular") {
    return (
      <>
        <AdditionalCodeSnippets tags={["angular"]} sandboxProps={p.props} />
        {!p.props.skipRender && <ComponentOutput formatLang={p.formatLang} type="angular" sandboxProps={p.props} serializer={p.serializers[p.lang]} />}
      </>
    );
  }

  // react
  if (p.lang === "react") {
    return (
      <>
        <AdditionalCodeSnippets tags={["react"]} sandboxProps={p.props} />
        {!p.props.skipRender && <ComponentOutput formatLang={p.formatLang} type="react" sandboxProps={p.props} serializer={p.serializers[p.lang]} />}
      </>
    );
  }

  return <>No formatter found for {p.formatLang}</>;
}


// Gets code snippets matching the tags passed in. This allows for Angular reactive components
// to be displayed, while hiding the non-reactive ones
type AdditionalCodeSnippetsProps = {
  tags: string[];
  sandboxProps: SandboxProps;
}
function AdditionalCodeSnippets(props: AdditionalCodeSnippetsProps) {
  const matches = (list: string[]): boolean => {
    return props.tags.filter(tag => list.includes(tag)).length === list.length;
  };
  const els = ComponentList({type: "codesnippet", sandboxProps: props.sandboxProps})
    .filter(el => {
      const componentTags: string[] = 
        Array.isArray(el.props.tags)
          ? el.props.tags
          : [el.props.tags];
      if (props.tags.length !== componentTags.length) 
        return false;
      return matches(componentTags);
    });

  return <>{els}</>
}

// Filters components from within the Sandbox children
// i.e. Get all the <CodeSnippet> components
type ComponentListProps = {
  sandboxProps: SandboxProps;
  type: ComponentType;
}
function ComponentList(props: ComponentListProps): ReactElement[] {
  const children = React.Children.toArray(props.sandboxProps.children) as ReactElement[];

  return children.filter(el => 
    React.isValidElement(el) 
    && typeof el.type === 'function' 
    && (el.type.name.toLowerCase().startsWith(props.type) 
        || props.sandboxProps.allow?.includes(el.type.name)
    )
  );
}


// CodeSnippet output. To show code the root element *must* start with goa (case-insensitive).
// This allows
type ComponentOutputProps = {
  formatLang: string;
  type: "angular" | "angular-reactive" | "react";
  sandboxProps: SandboxProps;
  serializer: Serializer;
}

function ComponentOutput(props: ComponentOutputProps): ReactElement {
  let code = props.serializer(
    ComponentList({type: "goa", sandboxProps: props.sandboxProps})
    ,props.sandboxProps.properties || []
  )

  // HACK: remove `$1`s that appear only in the prod build
  code = code.replace(/\$1/g, "") 
  
  return (
    <CodeSnippet 
      lang={props.formatLang} 
      allowCopy={true}
      code={code}
    />
  )  
}

type SandboxViewProps = {
  fullWidth?: boolean;
  sandboxProps: SandboxProps; 
}
function SandboxView(props: SandboxViewProps): ReactElement {
  return <div className="sandbox-render">
    <div className={props.fullWidth ? "sandbox-render-fullwidth" : "sandbox-render-centered"}>
      <ComponentList type="goa" sandboxProps={props.sandboxProps} />
    </div>
  </div>
}

export default Sandbox;
