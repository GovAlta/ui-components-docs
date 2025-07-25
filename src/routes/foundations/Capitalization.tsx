import { GoabBlock, GoabDivider, GoabFormItem, GoabGrid, GoabSideMenu, GoabText } from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

const minGridWidth = "36ch";

export default function CapitalizationPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">

      <GoabText size="heading-xl" mb="m" mt="xl">
        Capitalization
      </GoabText>
      <GoabText size="heading-m" mb="xl">
        Use sentence case for all headings, labels, and content.
      </GoabText>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="sentence-case">Sentence case</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Sentence case means everything is lowercase except for the first word in a label, phrase, or
        sentence. Sentence case follows the natural patterns of written language, which makes text
        easier to scan and comprehend.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Use sentence case in most titles and headings. Only capitalize the first word of a sentence
        or title.
      </GoabText>

      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl">
          <DoDont
            type="do"
            description="Always capitalize the first word of a heading or new sentence.">
            <h3>Applicant admission requirements</h3>
            <div>
              An Alberta high school diploma or non-Alberta Canadian equivalent is required.
            </div>
          </DoDont>
          <DoDont type="dont" description="Don't use all uppercase for emphasis.">
            Document types will gradually be made available. If you need to file an UNSUPPORTED
            DOCUMENT TYPE, you must file via the existing email filing procedure or it will be
            rejected by the digital service.
          </DoDont>
          <DoDont
            type="do"
            description="Capitalize proper nouns. For example, there are lots of chief operating officers, so chief operating officer is a common noun. There’s only one John Doe, Chief Operating Officer, so that’s a proper noun.">
            Find available dates for Civil Regular Chambers, Family Docket Court or Applications
            Judges Chambers in Edmonton or Calgary.
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use lower case proper pronouns, services, brands etc.">
            Before the alberta digital filing services, the only way to file court documents was
            in-person or through email.
          </DoDont>
        </GoabGrid>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="title-case">Title case</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Title case may be used in certain situations including: proper nouns, brands, products, and
        service names.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        A proper noun is the name of a particular person, place, organization, or thing. <br />
        eg. “Margaret”, “Calgary”, “Government of Alberta”, or “Community Initiatives Program”
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        If a title, label, or heading includes a colon or ampersand, capitalize the first word after
        it.
      </GoabText>

      <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="xl">
        <DoDont
          type="do"
          description="Use title case when words are joined by a slash, capitalize the word after the slash if the word before the slash is capitalized.">
          <div style={{ textAlign: "center", height: "176px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <GoabFormItem label="Country/Region" mb="2xl" />
            <GoabFormItem label="On/Off" />
          </div>
        </DoDont>
        <DoDont type="do" description="Capitalize the first word after a colon or ampersand.">
          <div style={{ margin: "0 auto", maxWidth: "250px" }}>
            <GoabSideMenu>
              <a href="">Personal: Employment</a>
              <a href="">Personal: Education</a>
              <a href="">Other cases</a>
              <a href="">Related areas</a>
            </GoabSideMenu>
          </div>
        </DoDont>
      </GoabGrid>

      <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl" mb="3xl">
        <DoDont
          type="dont"
          description="Don’t use internal capitalization (such as AutoScale or e-Book) unless it’s part of a proper noun.">
          <div style={{ textAlign: "center" }}>
            <h3>Submitting adjournment Pre-Court</h3>
          </div>
        </DoDont>
      </GoabGrid>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="capital-case">Capital case</h2>
      <GoabText size="body-m" mt="l" mb="l">
        When displaying information pulled from legacy systems there may be information that must
        remain in capital case due to limitations with integration.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Use this style only where necessary by the legacy system, since capital case is less
        readable, less accessible, and has the perception of emphasis.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Example:</strong>
        <br />
        Display the following information in sentence case when possible for better readability.
      </GoabText>

      <GoabBlock mt="xl" mb="xl">
        <DoDont type="generic">
          <div style={{ textAlign: "center" }}>
            <img src="/images/capitalization/capital-case-example.png" width="80%"></img>
          </div>
        </DoDont>
      </GoabBlock>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="references">References</h2>
      <GoabText size="body-m" mt="l" mb="l">
        <a
          href="https://medium.com/@jsaito/making-a-case-for-letter-case-19d09f653c98 "
          target="_blank">
          Making a case for letter case - Medium
        </a>
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <a
          href="https://uxplanet.org/why-letter-casing-is-important-to-consider-during-design-decisions-50402acd0a4e"
          target="_blank">
          Why letter casing is important to consider during design decisions - Medium
        </a>
      </GoabText>
    </ComponentContent>
  );
}
