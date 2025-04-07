import { TextFieldAskUserAddressExample } from "@examples/text-field/TextFieldAskUserAddressExample.tsx";
import { TextFieldAskBirthdayExample } from "@examples/text-field/TextFieldAskBirthdayExample.tsx";
import { TextFieldSearchExample } from "@examples/text-field/TextFieldSearchExample.tsx";
import { TextFieldAskUserAmountExample } from "@examples/text-field/TextFieldAskUserAmountExample.tsx";
import {
  TextFieldAskUserIndianRegistrationExample
} from "@examples/text-field/TextFieldAskUserIndianRegistrationExample.tsx";

export default function TextFieldExamples() {
  return (
    <>
      {/*Examples*/}
      <h3 id="component-example-ask-user-for-an-address">Ask a user for an address </h3>
      <TextFieldAskUserAddressExample/>

      <h3 id="component-example-ask-user-for-birthday">Ask a user for their birthday</h3>
      <TextFieldAskBirthdayExample/>

      <h3 id="component-example-search">Search</h3>
      <TextFieldSearchExample/>

      <h3 id="component-example-ask-for-costs">Ask a user for dollar amounts or costs</h3>
      <TextFieldAskUserAmountExample/>

      <h3 id="component-example-registration-number">
        Ask a user for their indian registration number
      </h3>
      <TextFieldAskUserIndianRegistrationExample/>
    </>
  );
}
