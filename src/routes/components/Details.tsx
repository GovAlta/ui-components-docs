import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoABlock,
  GoADetails,
  GoAFormItem,
  GoAInput,
  GoARadioGroup,
  GoARadioItem,
  GoATab,
  GoATabs,
} from "@abgov/react-components";

export default function DetailsPage() {
  const [detailsProps, setDetailsProps] = useState({
    heading: "Detail Heading",
  });
  const [detailsBindings, setDetailsBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Detail Heading",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "The title heading",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if details is expanded or not",
      defaultValue: "false",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDetailsProps(props as { heading: string; [key: string]: unknown });
    setDetailsBindings(bindings);
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name="Details"
        category={Category.CONTENT_AND_LAYOUT}
        description="Let users reveal more detailed information when they need it."
        relatedComponents={[
        { link: "/components/accordion", name: "Accordion" },
        { link: "/components/form-item", name: "Form item" },
        ]}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={detailsBindings} onChange={onSandboxChange} fullWidth>
            <GoADetails {...detailsProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus, sed
              sodales lectus. Aliquam sed volutpat velit. Sed in lacus ut dui placerat accumsan
              malesuada quis erat. Aenean mi diam, rhoncus vitae justo eu, venenatis maximus nunc.
              In vel est commodo, porttitor sem vel, tincidunt ipsum. In hac habitasse platea
              dictumst. Mauris varius mollis dui. Aenean ut dui eu arcu rutrum auctor. Curabitur
              cursus velit vel libero sollicitudin tincidunt. Proin tincidunt, enim et ultrices
              rhoncus, nibh leo imperdiet sapien, sed porttitor ipsum nulla non massa. Nulla
              facilisi.
            </GoADetails>
          </Sandbox>

          {/*Component properties table*/}
          <ComponentProperties properties={componentProperties} />

          {/* Examples*/}
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>

          <h3 id="example-show-more-information-for-basic-question">
            Show more information for a basic question
          </h3>
          <Sandbox fullWidth note="Example below: Advanced Education - Pay for my education">
            <GoAFormItem label="Do you pay for childcare?" helpText="Examples of child care include day care, day homes, and baby-sitters.">
              <GoARadioGroup name="pay" onChange={() => {}}>
                <GoARadioItem label="Yes" value="yes" name="pay" />
                <GoARadioItem label="No" value="no" name="pay" />
              </GoARadioGroup>
            </GoAFormItem>

            <GoADetails heading="Why are we asking this question?" mt="l">
              <p>
                This question helps us better understand your situation and ensure that you receive
                the right information and support.
              </p>
            </GoADetails>
          </Sandbox>

          <h3 id="example-additional-information-help">
            Additional information to help a user understand and answer a question
          </h3>
          <Sandbox flags={["reactive"]} fullWidth>
            <GoAFormItem
              label="Do you have additional education expense?"
              helpText="You can request this money now or at any time during your program."
            >
              <GoARadioGroup name="additional" onChange={noop}>
                <GoARadioItem label="Yes" value="yes" name="additional" />
                <GoARadioItem label="No" value="no" name="additional" />
              </GoARadioGroup>
            </GoAFormItem>

            <GoADetails heading="What is an additional education expense?">
              <GoABlock gap="m" mt="m">
                <div>
                  <strong>Examples of education expenses</strong>
                  <ul className="goa-unordered-list">
                    <li>Laptop and computer hardware</li>
                    <li>Computer apps and subscriptions</li>
                    <li>Home internet</li>
                    <li>Testing and exam fees</li>
                    <li>Work or school clothing, like work boots</li>
                  </ul>
                </div>
                <div>
                  <strong>Do not include</strong>
                  <ul className="goa-unordered-list">
                    <li>Tuition</li>
                    <li>Mandatory fees</li>
                    <li>Books and supplies</li>
                    <li>School association fees</li>
                  </ul>
                </div>
              </GoABlock>
            </GoADetails>
          </Sandbox>

          <h3 id="example-direct-deposit-information">
            Show more information to help a user fill out direct deposit information
          </h3>
          <Sandbox flags={["reactive"]} fullWidth>
            <h2>Direct deposit information</h2>
            <p>
              Find this information on your bank's website or on your personal cheques. Contact your
              bank if you can't find this information.
            </p>
            <GoAFormItem
              label="Bank or Institution number"
              id="bankNumber"
              helpText={"3-4 digits in length"}
            >
              <GoAInput
                maxLength={4}
                name="bankNumber"
                onChange={noop}
                value={""}
                ariaLabel="bankNumber"
                width="88px"
              />
            </GoAFormItem>
            <GoAFormItem
              label="Branch or Transit number"
              helpText={"5 digits in length"}
              id="transitNumber"
            >
              <GoAInput
                maxLength={5}
                name="transitNumber"
                onChange={noop}
                value={""}
                ariaLabel="transitNumber"
                width="143px"
              />
            </GoAFormItem>
            <GoAFormItem label="Account number" helpText="3-12 digits in length" id="accountNumber">
              <GoAInput
                maxLength={12}
                name="accountNumber"
                value=""
                onChange={noop}
                ariaLabel="accountNumber"
              />
            </GoAFormItem>

            <GoADetails heading="Where can I find this information on a personal cheque?" mt="l">
              <p>
                Below is an example of where you can find the required bank information on a
                personal cheque.
              </p>
              <img src="/images/details-demo.jpg" />
            </GoADetails>
          </Sandbox>
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        >
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
