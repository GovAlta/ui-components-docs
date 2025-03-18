import {
  DetailsMoreInformationBasicQuestionExample
} from "@examples/details/DetailsMoreInformationBasicQuestionExample.tsx";
import {
  DetailsAdditionalInformationHelpUserExample
} from "@examples/details/DetailsAdditionalInformationHelpUserExample.tsx";
import {
  DetailsShowDirectDepositInformationExample
} from "@examples/details/DetailsShowDirectDepositInformationExample.tsx";

export const DetailsExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

      <h3 id="component-example-show-more-information-for-basic-question">
        Show more information for a basic question
      </h3>
      <DetailsMoreInformationBasicQuestionExample />

      <h3 id="component-example-additional-information-help">
        Additional information to help a user understand and answer a question
      </h3>
      <DetailsAdditionalInformationHelpUserExample />

      <h3 id="component-example-direct-deposit-information">
        Show more information to help a user fill out direct deposit information
      </h3>
      <DetailsShowDirectDepositInformationExample/>
    </>
  )
}
