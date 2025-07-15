import { ButtonClosePopover } from "@examples/popover/ButtonClosePopover";
import { LinkClosePopover } from "@examples/popover/LinkClosePopover";
import { IconButtonClosePopover } from "@examples/popover/IconButtonClosePopover";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { GoabSpacer } from "@abgov/react-components";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const PopoverExamples = () => {
  const { version, language } = useContext(LanguageVersionContext);
  return (
    <>
      {/*Popover Example - close using a button*/}
      <SandboxHeader exampleTitle="Close a Popover with a Button" figmaExample=""></SandboxHeader>
      <ButtonClosePopover />

      {/*Popover example - close using a link*/}
      <SandboxHeader exampleTitle="Close a Popover with a Link" figmaExample=""></SandboxHeader>
      <LinkClosePopover />

      {/*Popover example - close using an icon-button*/}
      <SandboxHeader
        exampleTitle="Close a Popover with an Icon Button"
        figmaExample=""
      ></SandboxHeader>
      <IconButtonClosePopover />

      <GoabSpacer vSpacing={"2xl"}></GoabSpacer>
      {version === "old" && (
        <OldComponentBanner componentName={"Popover"} language={language} type="example" />
      )}
    </>
  );
};
