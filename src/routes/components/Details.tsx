import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabBlock,
  GoabDetails,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

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
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },    
  ]);

  const oldComponentProperties: ComponentProperty[] = [
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
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the details.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the details.",
      lang: "angular",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

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
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the details.",
    },
    {
      name: "testId",
      type: "string",
      description: "A unique identifier for the component.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDetailsProps(props as { heading: string;[key: string]: unknown });
    setDetailsBindings(bindings);
  }

  const noop = () => { };

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

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={detailsBindings} onChange={onSandboxChange} fullWidth>
              <GoabDetails {...detailsProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus, sed
                sodales lectus. Aliquam sed volutpat velit. Sed in lacus ut dui placerat accumsan
                malesuada quis erat. Aenean mi diam, rhoncus vitae justo eu, venenatis maximus nunc.
                In vel est commodo, porttitor sem vel, tincidunt ipsum. In hac habitasse platea
                dictumst. Mauris varius mollis dui. Aenean ut dui eu arcu rutrum auctor. Curabitur
                cursus velit vel libero sollicitudin tincidunt. Proin tincidunt, enim et ultrices
                rhoncus, nibh leo imperdiet sapien, sed porttitor ipsum nulla non massa. Nulla
                facilisi.
              </GoabDetails>
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties oldProperties={oldComponentProperties} properties={componentProperties} />

            {/* Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

            <h3 id="component-example-show-more-information-for-basic-question">
              Show more information for a basic question
            </h3>
            <Sandbox fullWidth note="Example below: Advanced Education - Pay for my education">
              <GoabFormItem label="Do you pay for childcare?" helpText="Examples of child care include day care, day homes, and baby-sitters.">
                <GoabRadioGroup name="pay" onChange={() => { }}>
                  <GoabRadioItem label="Yes" value="yes" name="pay" />
                  <GoabRadioItem label="No" value="no" name="pay" />
                </GoabRadioGroup>
              </GoabFormItem>

              <GoabDetails heading="Why are we asking this question?" mt="l">
                <p>
                  This question helps us better understand your situation and ensure that you receive
                  the right information and support.
                </p>
              </GoabDetails>
            </Sandbox>

            <h3 id="component-example-additional-information-help">
              Additional information to help a user understand and answer a question
            </h3>
            <Sandbox flags={["reactive"]} fullWidth>
              <GoabFormItem
                label="Do you have additional education expense?"
                helpText="You can request this money now or at any time during your program."
              >
                <GoabRadioGroup name="additional" onChange={noop}>
                  <GoabRadioItem label="Yes" value="yes" name="additional" />
                  <GoabRadioItem label="No" value="no" name="additional" />
                </GoabRadioGroup>
              </GoabFormItem>

              <GoabDetails heading="What is an additional education expense?">
                <GoabBlock gap="m" mt="m">
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
                </GoabBlock>
              </GoabDetails>
            </Sandbox>

            <h3 id="component-example-direct-deposit-information">
              Show more information to help a user fill out direct deposit information
            </h3>
            <Sandbox flags={["reactive"]} fullWidth>
              <h2>Direct deposit information</h2>
              <p>
                Find this information on your bank's website or on your personal cheques. Contact your
                bank if you can't find this information.
              </p>
              <GoabFormItem
                label="Bank or Institution number"
                id="bankNumber"
                helpText={"3-4 digits in length"}
                mb="xl"
              >
                <GoabInput
                  maxLength={4}
                  name="bankNumber"
                  onChange={noop}
                  value={""}
                  ariaLabel="bankNumber"
                  width="88px"
                />
              </GoabFormItem>
              <GoabFormItem
                label="Branch or Transit number"
                helpText={"5 digits in length"}
                id="transitNumber"
                mb="xl"
              >
                <GoabInput
                  maxLength={5}
                  name="transitNumber"
                  onChange={noop}
                  value={""}
                  ariaLabel="transitNumber"
                  width="143px"
                />
              </GoabFormItem>
              <GoabFormItem label="Account number" helpText="3-12 digits in length" id="accountNumber">
                <GoabInput
                  maxLength={12}
                  name="accountNumber"
                  value=""
                  onChange={noop}
                  ariaLabel="accountNumber"
                />
              </GoabFormItem>

              <GoabDetails heading="Where can I find this information on a personal cheque?" mt="l">
                <p>
                  Below is an example of where you can find the required bank information on a
                  personal cheque.
                </p>
                <img src="/images/details-demo.jpg" />
              </GoabDetails>
            </Sandbox>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }
          >
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
