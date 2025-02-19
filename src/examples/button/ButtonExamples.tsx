import { ButtonAskUserAddressExample } from "@examples/button/ButtonAskUserAddressExample.tsx";
import { ButtonConfirmDestructiveActionExample } from "@examples/button/ButtonConfirmDestructiveActionExample.tsx";
import { ButtonDisabledWithRequiredFieldExample } from "@examples/button/ButtonDisabledWithRequiredFieldExample.tsx";

export const ButtonExamples = () => {

  return <>
    <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
    {/*Button Example 1*/}
    <h3 id="component-example-ask-address">Ask a user for an address</h3>
    <ButtonAskUserAddressExample/>

    {/*Button example 2*/}
    <h3 id="component-example-confirm-action">Confirm a destructive action</h3>
    <ButtonConfirmDestructiveActionExample/>

    {/*Button example */}
    <h3 id="component-example-disabled-button">Disabled button with a required field</h3>
    <ButtonDisabledWithRequiredFieldExample/>
  </>;
};
