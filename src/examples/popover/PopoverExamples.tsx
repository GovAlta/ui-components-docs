import { ButtonClosePopover } from "@examples/popover/ButtonClosePopover";
import { LinkClosePopover } from "@examples/popover/LinkClosePopover";
import { IconButtonClosePopover } from "@examples/popover/IconButtonClosePopover";
import { TablePopover } from "@examples/popover/TablePopover";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const PopoverExamples = () => {
  const { version, language } = useContext(LanguageVersionContext);
  return (
    <>
      {version === "old" && (
        <OldComponentBanner componentName={"The popover"} language={language} type="example" />
      )}
      {/*Popover Example - close using a button*/}
      <SandboxHeader exampleTitle="Close a Popover with a Button" figmaExample=""></SandboxHeader>
      <ButtonClosePopover />

      {/*Popover example - close using a link*/}
      <SandboxHeader exampleTitle="Close a Popover with a Link" figmaExample=""></SandboxHeader>
      <LinkClosePopover />

      {/*Popover example - close using an icon-button*/}
      <SandboxHeader
        exampleTitle="Close a Popover with an Icon Button"
        figmaExample=""></SandboxHeader>
      <IconButtonClosePopover />

      {/*Popover example - Table*/}
      <SandboxHeader
        exampleTitle="Filter data in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=7104-1626357&t=r6QOKdLIJuKEXs1I-4"></SandboxHeader>
      <TablePopover />

      <GoabSpacer vSpacing={"2xl"}></GoabSpacer>
      {version === "old" && (
        <OldComponentBanner componentName={"Popover"} language={language} type="example" />
      )}
    </>
  );
};
