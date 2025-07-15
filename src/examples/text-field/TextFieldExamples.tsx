import { TextFieldAskBirthdayExample } from "@examples/text-field/TextFieldAskBirthdayExample.tsx";
import { TextFieldSearchExample } from "@examples/text-field/TextFieldSearchExample.tsx";
import { TextFieldAskUserAmountExample } from "@examples/text-field/TextFieldAskUserAmountExample.tsx";
import { TextFieldAskUserIndianRegistrationExample } from "@examples/text-field/TextFieldAskUserIndianRegistrationExample.tsx";
import { TextFieldRightAlignExample } from "@examples/text-field/TextFieldRightAlignExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { ButtonAskUserAddressExample } from "@examples/button/ButtonAskUserAddressExample.tsx";

export default function TextFieldExamples() {
  return (
    <>
      {/*Examples*/}
      <SandboxHeader
        exampleTitle="Ask a user for an address"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-43250&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <ButtonAskUserAddressExample />

      <SandboxHeader
        exampleTitle="Ask a user for their birthday"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6334-80568&t=X0IQW5flDDaj8Vyg-44"
      ></SandboxHeader>
      <TextFieldAskBirthdayExample />

      <SandboxHeader
        exampleTitle="Search"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-68872&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <TextFieldSearchExample />

      <SandboxHeader
        exampleTitle="Ask a user for dollar amounts"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179629&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <TextFieldAskUserAmountExample />

      <SandboxHeader
        exampleTitle="Text alignment options"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179633&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <TextFieldRightAlignExample />

      <SandboxHeader
        exampleTitle="Ask a user for an indian registration number"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179631&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <TextFieldAskUserIndianRegistrationExample />
    </>
  );
}
