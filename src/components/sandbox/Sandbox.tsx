import { ReactElement, ReactNode, useContext, useEffect, useState } from "react";

import SandboxProperties from "./SandboxProperties";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentBinding } from "./ComponentBinding";
import { ReactSerializer } from "./ReactSerializer";
import { AngularSerializer } from "./AngularSerializer";
import { AngularReactiveSerializer } from "./AngularReactiveSerializer";
import ComponentSerializer from "./ComponentSerializer";

import "./Sandbox.css";
import React from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { AngularTemplateDrivenSerializer } from "@components/sandbox/AngularTemplateDrivenSerializer.ts";
import { LanguageVersion } from "@components/version-language-switcher/version-language-constants.ts";
import { GoabAccordion } from "@abgov/react-components";

type Flag = "reactive" | "template-driven" | "event";
type ComponentType = "goa" | "codesnippet";
type Serializer = (el: any, properties: ComponentBinding[]) => string;

interface SandboxProps {
  properties?: ComponentBinding[];
  formItemProperties?: ComponentBinding[];
  note?: string;
  fullWidth?: boolean;
  onChange?: (bindings: ComponentBinding[], props: Record<string, unknown>) => void;
  onChangeFormItemBindings?: (bindings: ComponentBinding[], props: Record<string, unknown>) => void;
  flags?: Flag[];
  skipRender?: boolean; // prevent rendering the snippet, to allow custom code to be shown
  skipRenderOnly?: string; // prevent rendering the snippet for a specific language. Ex: react/angular
  skipRenderDom?: boolean; // rendering code snippets, but display none for the DOM because it isn't working as expected if inside sandbox
  allow?: string[]; // Be default the Sandbox is selective to what it renders out. This adds
  // additional elements to what is allowed to be rendered out
  variableNames?: string[]; // If we want to assign a variable such as step={step} render in code snippet, provides variableNames=["step"]
  children: ReactNode;
  background?: string;
}

type SandboxViewProps = {
  fullWidth?: boolean;
  sandboxProps: SandboxProps;
  background?: string;
};

export const Sandbox = (props: SandboxProps) => {
  const {language: lang, version} = useContext(LanguageVersionContext);
  const [formatLang, setFormatLang] = useState<string>("");

  const serializers: Record<string, Serializer> = {
    "react": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new ReactSerializer(properties, version, props.variableNames || []));
      return serializer.componentsToString(els);
    },

    "angular": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularSerializer(properties, version, props.variableNames || []));
      return serializer.componentsToString(els);
    },

    "angular-reactive": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularReactiveSerializer(properties, version));
      return serializer.componentsToString(els);
    },

    "angular-template-driven": (els: ReactElement[], properties) => {
      const serializer = new ComponentSerializer(new AngularTemplateDrivenSerializer(properties, version, props.variableNames || []));
      return serializer.componentsToString(els);
    }
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

  function onChangeFormItemBindings(bindings: ComponentBinding[]) {
    props.onChangeFormItemBindings?.(bindings, toKeyValue(bindings));
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

  function SandboxView(props: SandboxViewProps): ReactElement {
    const { background } = props;

    return <div className="sandbox-render" style={{ background }}>
      <div className={props.fullWidth ? "sandbox-render-fullwidth" : "sandbox-render-centered"}>
        <ComponentList type="goa" sandboxProps={props.sandboxProps} />
      </div>
    </div>
  }

  return (
    <>
    {props.skipRenderDom ? null : <SandboxView fullWidth={props.fullWidth} sandboxProps={props} background={props.background} />}

      {/* Only render the GoAAccordion if props.properties is provided */}
      {props.properties && props.properties.length > 0 && (
        <GoabAccordion
          heading="Playground controls"
          secondaryText="Change component properties to update code"
          headingSize="small"
          mt="m"
          open={true}
        >
          {props.formItemProperties && props.formItemProperties.length > 0 && (
            <SandboxProperties
              onChange={onChangeFormItemBindings}
              properties={props.formItemProperties}
            />
          )}

          <SandboxProperties
            properties={props.properties}
            onChange={onChange}
          />
        </GoabAccordion>
      )}
      <SandboxCode props={props} formatLang={formatLang} lang={lang} serializers={serializers} version={version} />
      {props.note && (<div className="sandbox-note">{props.note}</div>)}
    </>
  );
};

type SandboxCodeProps = {
  props: SandboxProps & { children: ReactNode };
  lang: string;
  formatLang: string;
  serializers: Record<string, Serializer>;
  version?: LanguageVersion;
}
function SandboxCode(p: SandboxCodeProps) {
  // reactive angular
  if (p.lang === "angular" && p.props.flags?.includes("reactive")) {
    return (
      <>
        {(p.version === "old" || p.props.flags?.includes("event")) && <>
          <h4>Event based</h4>
          <AdditionalCodeSnippets tags={["angular"]} sandboxProps={p.props} />
          {!p.props.skipRender && p.props?.skipRenderOnly !== p.lang && (
            <ComponentOutput
              formatLang={p.formatLang}
              type="angular"
              sandboxProps={p.props}
              serializer={p.serializers[p.lang]}
            />
          )}
        </>}

        <h4>Reactive forms (FormControl)</h4>
        <AdditionalCodeSnippets tags={["angular", "reactive"]} sandboxProps={p.props} />

        {!p.props.skipRender && (
          <ComponentOutput
            formatLang={p.formatLang}
            type="angular-reactive"
            sandboxProps={p.props}
            serializer={p.serializers["angular-reactive"]}
          />
        )}

        {/*If flags have reactive, it means that the possibility we have template-driven as well*/}

        {p.props.flags?.includes("template-driven") && (
          <>
            <h4>Template driven (ngModel)</h4>
            <AdditionalCodeSnippets tags={["angular", "template-driven"]} sandboxProps={p.props} />
            {!p.props.skipRender && (
              <ComponentOutput
                formatLang={p.formatLang}
                type="angular-template-driven"
                sandboxProps={p.props}
                serializer={p.serializers["angular-template-driven"]}
              />
            )}
          </>
        )}
      </>
    );
  }

  // angular
  if (p.lang === "angular") {
    return (
      <>
        <AdditionalCodeSnippets tags={["angular"]} sandboxProps={p.props} />
        {!p.props.skipRender && p.props.skipRenderOnly !== "angular" && <ComponentOutput formatLang={p.formatLang} type="angular" sandboxProps={p.props} serializer={p.serializers[p.lang]} />}
      </>
    );
  }

  // react
  if (p.lang === "react") {
    return (
      <>
        <AdditionalCodeSnippets tags={["react"]} sandboxProps={p.props} />
        {!p.props.skipRender && p.props.skipRenderOnly !== "react" && <ComponentOutput formatLang={p.formatLang} type="react" sandboxProps={p.props} serializer={p.serializers[p.lang]} />}
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
      if (el.props.lang === "css") return true;
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
  const isValidGOAComponent = (el: ReactElement) =>
    typeof el.type === "function" && el.type.name.toLowerCase().startsWith(props.type);
  const isAllowedInSandbox = (el: ReactElement) =>
    typeof el.type === "string" && props.sandboxProps.allow?.includes(el.type) ||
    typeof el.type === "function" && props.sandboxProps.allow?.includes(el.type.name);
  return children.filter(
    el => React.isValidElement(el) && (isValidGOAComponent(el) || isAllowedInSandbox(el))
  );
}

// CodeSnippet output. To show code the root element *must* start with goa (case-insensitive).
// This allows
type ComponentOutputProps = {
  formatLang: string;
  type: "angular" | "angular-reactive" | "angular-template-driven" | "react";
  sandboxProps: SandboxProps;
  serializer: Serializer;
}

function ComponentOutput(props: ComponentOutputProps): ReactElement {
  let code = props.serializer(
    ComponentList({type: "goa", sandboxProps: props.sandboxProps})
    ,props.sandboxProps.properties || []
  )

  // HACK: solve angular template error: If you meant to write the @ character, you should use the "&#64;" HTML entity instead.
  if (props.type.includes("angular")) {
    code = code.replace(/@/g, "&#64;");
  }
  // HACK: remove `$1`s that appear only in the prod build
  code = code.replace(/\$1/g, "")

  return (
    <CodeSnippet
      lang={props.formatLang}
      tags={props.type}
      allowCopy={true}
      code={code}
    />
  )
}


export default Sandbox;
