import ICONS from "./icons.json";
import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { GoABlock, GoAGrid, GoAIcon, GoAIconType, GoATab, GoATabs } from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { IconSnippet } from "@components/icon-snippet/IconSnippet.tsx";

export default function IconsPage() {
  const [iconsProps, setIconsProps] = useState({
    type: ICONS[0] as GoAIconType,
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
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoAIconType",
      description: "Set the icon",
      required: true,
    },
    {
      name: "size",
      type: "small | medium | large",
      description: "Set the size of icon",
      defaultValue: "medium",
    },
    {
      name: "theme",
      type: "outline | filled",
      description: "Style this icon to show outline, or filled",
      defaultValue: "outline",
    },
  ];

  function onSandboxChange(iconsBindings: ComponentBinding[], props: Record<string, unknown>) {
    setIconsBindings(iconsBindings);
    setIconsProps(props as { type: GoAIconType; [key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Icons"
        category={Category.UTILITIES}
        description="A simple and universal graphic symbol representing an action, object, or concept to help guide the user."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Icons Sandbox*/}
          <Sandbox properties={iconsBindings} onChange={onSandboxChange}>
            <GoAIcon {...iconsProps} />
          </Sandbox>

          {/*Icons Properties*/}
          <ComponentProperties properties={componentProperties} />

          {/*Icons example*/}
          <GoABlock gap="xs" direction="column" mt="2xl" mb="3xl">
            <a href="#alert-messaging">Alert and messaging</a>
            <a href="#basic">Basic</a>
            <a href="#direction">Direction</a>
            <a href="#interaction">Interactions</a>
            <a href="#accounts">Accounts</a>
          </GoABlock>

          <h3 id="alert-messaging">Alert and messaging</h3>
          <GoAGrid minChildWidth="230px" gap="l">
            <IconSnippet type={"information-circle"} />
            <IconSnippet type={"warning"} />
            <IconSnippet type={"add-circle"} />
            <IconSnippet type={"alert-circle"} />
            <IconSnippet type={"checkmark-circle"} />
            <IconSnippet type={"close-circle"} />
            <IconSnippet type={"help-circle"} />
            <IconSnippet type={"remove-circle"} />
          </GoAGrid>

          <h3 id="basic">Basic</h3>
          <GoAGrid minChildWidth="230px" gap="l">
            <IconSnippet type={"close"} />
            <IconSnippet type={"checkmark"} />
            <IconSnippet type={"add"} />
            <IconSnippet type={"remove"} />
          </GoAGrid>

          <h3 id="direction">Direction</h3>
          <GoAGrid minChildWidth={"230px"} gap={"l"}>
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
          </GoAGrid>

          <h3 id="interaction">Interactions</h3>
          <GoAGrid minChildWidth={"230px"} gap={"l"}>
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
          </GoAGrid>

          <h3 id="accounts">Accounts</h3>
          <GoAGrid minChildWidth={"230px"} gap={"l"}>
            <IconSnippet type={"person-circle"} />
            <IconSnippet type={"settings"} />
            <IconSnippet type={"mail"} />
            <IconSnippet type={"call"} />
          </GoAGrid>
        </GoATab>
      </GoATabs>
    </>
  );
}
