import { ButtonClosePopover } from "@examples/popover/ButtonClosePopover";
import { LinkClosePopover } from "@examples/popover/LinkClosePopover";
import { IconButtonClosePopover } from "@examples/popover/IconButtonClosePopover";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const PopoverExamples = () => {
  return (
    <>
      {/*Popover Example - close using a button*/}
      <SandboxHeader exampleTitle="Closing Popovers with Button" figmaExample=""></SandboxHeader>
      <ButtonClosePopover />

      {/*Popover example - close using a link*/}
      <SandboxHeader exampleTitle="Closing Popovers with Link" figmaExample=""></SandboxHeader>
      <LinkClosePopover />

      {/*Popover example - close using an icon-button*/}
      <SandboxHeader
        exampleTitle="Closing Popovers with Icon Button"
        figmaExample=""></SandboxHeader>
      <IconButtonClosePopover />
    </>
  );
};
