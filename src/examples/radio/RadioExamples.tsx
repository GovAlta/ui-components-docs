import { RadioSlottedDescriptionExample } from "@examples/radio/RadioSlottedDescriptionExample.tsx";
import { RadioMaxWidthExample } from "@examples/radio/RadioMaxWidthExample.tsx";

export default function RadioExamples () {

  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-use-tags-in-description">Use tags in the description</h3>
      <RadioSlottedDescriptionExample/>
      <h3 id="component-example-max-width">Radio item with max width</h3>
      <RadioMaxWidthExample/>
    </>
  );
}
