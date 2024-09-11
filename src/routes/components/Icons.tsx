import ICONS from "./icons.json";
import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { GoabGrid, GoabIcon, GoabTab, GoabTabs } from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { IconSnippet } from "@components/icon-snippet/IconSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabIconType } from "@abgov/ui-components-common";

export default function IconsPage() {
  const [iconsProps, setIconsProps] = useState({
    type: ICONS[0] as GoabIconType,
  });
  const [iconsBindings, setIconsBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "combobox",
      name: "type",
      options: ICONS,
      value: ICONS[0],
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "small", "medium", "large"],
      value: "",
      defaultValue: "medium",
    },
    {
      label: "Theme",
      type: "list",
      name: "theme",
      options: ["", "outline", "filled"],
      value: "",
      defaultValue: "outline",
    },
    {
      label: "Opacity",
      type: "number",
      name: "opacity",
      value: 1,
    },
    {
      label: "Fill Color",
      type: "string",
      name: "fillColor",
      value: "",
    },
    {
      label: "Inverted",
      type: "boolean",
      name: "inverted",
      value: false,
    },
    {
      label: "Title",
      type: "string",
      name: "title",
      value: "",
    },
    {
      label: "ARIA Label",
      type: "string",
      name: "ariaLabel",
      value: "",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoAIconType",
      description: "Sets the icon.",
      required: true,
    },
    {
      name: "size",
      type: "small | medium | large",
      description: "Sets the size of icon.",
      defaultValue: "medium",
    },
    {
      name: "theme",
      type: "outline | filled",
      description: "Styles the icon to show outline or filled.",
      defaultValue: "outline",
    },
    {
      name: "opacity",
      type: "number",
      description: "Sets the opacity of the icon between 0 and 1.",
      defaultValue: "1",
    },
    {
      name: "fillcolor",
      type: "string",
      lang: "angular",
      description: "Sets the fill colour of the icon.",
      defaultValue: "false",
    },
    {
      name: "fillColor",
      type: "string",
      lang: "react",
      description: "Sets the fill colour of the icon.",
      defaultValue: "false",
    },
    {
      name: "inverted",
      type: "boolean",
      description: "Colors the icon white for use on dark backgrounds.",
      defaultValue: "false",
    },
    {
      name: "title",
      type: "string",
      description: "Sets the title of the icon.",
    },
    {
      name: "arialabel",
      type: "string",
      lang: "angular",
      description: "Sets the accessible name of the icon.",
    },
    {
      name: "ariaLabel",
      type: "string",
      lang: "react",
      description: "Sets the accessible name of the icon.",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },  
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },  
  ];

  function onSandboxChange(iconsBindings: ComponentBinding[], props: Record<string, unknown>) {
    setIconsBindings(iconsBindings);
    setIconsProps(props as { type: GoabIconType; [key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Icons"
        category={Category.UTILITIES}
        description="A simple and universal graphic symbol representing an action, object, or concept to help guide the user."
        relatedComponents={[
          { link: "/components/badge", name: "Badge" },
          { link: "/components/callout", name: "Callout" },
          { link: "/components/icon-button", name: "Icon button" },
          { link: "/components/Tooltip", name: "Tooltip" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Icons Sandbox*/}
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={iconsBindings} onChange={onSandboxChange}>
              <GoabIcon {...iconsProps} />
            </Sandbox>

            {/*Icons Properties*/}
            <ComponentProperties properties={componentProperties} />

            {/*Icons example*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-alert-messaging">Alert and messaging</h3>
            <GoabGrid minChildWidth="230px" gap="l" mt="m">
              <IconSnippet type={"information-circle"} />
              <IconSnippet type={"warning"} />
              <IconSnippet type={"add-circle"} />
              <IconSnippet type={"alert-circle"} />
              <IconSnippet type={"checkmark-circle"} />
              <IconSnippet type={"close-circle"} />
              <IconSnippet type={"help-circle"} />
              <IconSnippet type={"remove-circle"} />
            </GoabGrid>

            <h3 id="component-example-basic">Basic</h3>
            <GoabGrid minChildWidth="230px" gap="l" mt="m">
              <IconSnippet type={"close"} />
              <IconSnippet type={"checkmark"} />
              <IconSnippet type={"add"} />
              <IconSnippet type={"remove"} />
            </GoabGrid>

            <h3 id="component-example-direction">Direction</h3>
            <GoabGrid minChildWidth={"230px"} gap={"l"} mt="m">
              <IconSnippet type={"chevron-down"} />
              <IconSnippet type={"chevron-up"} />
              <IconSnippet type={"chevron-back"} />
              <IconSnippet type={"chevron-forward"} />
              <IconSnippet type={"arrow-down"} />
              <IconSnippet type={"arrow-up"} />
              <IconSnippet type={"arrow-back"} />
              <IconSnippet type={"arrow-forward"} />
              <IconSnippet type={"caret-down"} />
              <IconSnippet type={"caret-up"} />
              <IconSnippet type={"caret-back"} />
              <IconSnippet type={"caret-forward"} />
            </GoabGrid>

            <h3 id="component-example-interaction">Interactions</h3>
            <GoabGrid minChildWidth={"230px"} gap={"l"} mt="m">
              <IconSnippet type={"menu"} />
              <IconSnippet type={"reload"} />
              <IconSnippet type={"search"} />
              <IconSnippet type={"pencil"} />
              <IconSnippet type={"flag"} />
              <IconSnippet type={"open"} />
              <IconSnippet type={"bookmark"} />
              <IconSnippet type={"calendar"} />
              <IconSnippet type={"documents"} />
              <IconSnippet type={"trash"} />
              <IconSnippet type={"funnel"} />
              <IconSnippet type={"ellipsis-vertical"} />
              <IconSnippet type={"notifications"} />
              <IconSnippet type={"notifications-off"} />
              <IconSnippet type={"eye"} />
              <IconSnippet type={"eye-off"} />
              <IconSnippet type={"cloud-upload"} />
              <IconSnippet type={"download"} />
            </GoabGrid>

            <h3 id="component-example-accounts">Accounts</h3>
            <GoabGrid minChildWidth={"230px"} gap={"l"} mt="m">
              <IconSnippet type={"person-circle"} />
              <IconSnippet type={"settings"} />
              <IconSnippet type={"mail"} />
              <IconSnippet type={"call"} />
            </GoabGrid>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
