import { Search } from "@examples/search.tsx";
import { AskAUserForDollarAmounts } from "@examples/ask-a-user-for-dollar-amounts.tsx";
import {
  AskAUserForAnIndianRegistrationNumber
} from "@examples/ask-a-user-for-an-indian-registration-number.tsx";
import { TextFieldRightAlignExample } from "@examples/text-field/TextFieldRightAlignExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { AskAUserForAnAddress } from "@examples/ask-a-user-for-an-address.tsx";

export default function TextFieldExamples() {
  return (
    <>
      {/*Examples*/}
      <SandboxHeader
        exampleTitle="Ask a user for an address"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-43250&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AskAUserForAnAddress />

      <SandboxHeader
        exampleTitle="Search"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-68872&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <Search />

      <SandboxHeader
        exampleTitle="Ask a user for dollar amounts"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179629&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AskAUserForDollarAmounts />

      <SandboxHeader
        exampleTitle="Text alignment options"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179633&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <TextFieldRightAlignExample />

      <SandboxHeader
        exampleTitle="Ask a user for an indian registration number"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179631&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AskAUserForAnIndianRegistrationNumber />
    </>
  );
}