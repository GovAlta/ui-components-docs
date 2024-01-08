import { GoABlock, GoADivider, GoAFormItem, GoAGrid, GoASideMenu } from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont";
export default function CapitalizationPage() {
  return (
    <>
      <h1>Capitalization</h1>
      <h3>Use sentence case for all headings, labels, and content.</h3>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h3>On this page</h3>
      <GoAGrid minChildWidth={"30ch"} gap="xs">
        <a href="#sentence-case">Sentence case</a>
        <a href="#title-case">Title case</a>
        <a href="#capital-case">Capital case</a>
        <a href="#references">References</a>
      </GoAGrid>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="sentence-case">Sentence case</h2>
      <p>
        Sentence case means everything is lowercase except for the first word in a label, phrase, or
        sentence. Sentence case follows the natural patterns of written language, which makes text
        easier to scan and comprehend.
      </p>
      <p>
        Use sentence case in most titles and headings. Only capitalize the first word of a sentence
        or title.
      </p>

      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
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
        </GoAGrid>
      </div>

      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="title-case">Title case</h2>
      <p>
        Title case may be used in certain situations including: proper nouns, brands, products, and
        service names.
      </p>
      <p>
        A proper noun is the name of a particular person, place, organization, or thing. <br />
        eg. “Margaret”, “Calgary”, “Government of Alberta”, or “Community Initiatives Program”
      </p>
      <p>
        If a title, label, or heading includes a colon or ampersand, capitalize the first word after
        it.
      </p>
      <GoAGrid minChildWidth="30ch" gap="2xl" mt="xl">
        <DoDont
          type="do"
          description="Use title case when words are joined by a slash, capitalize the word after the slash if the word before the slash is capitalized.">
          <div style={{ textAlign: "center", height: "176px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <GoAFormItem label="Country/Region" mb="2xl" />
            <GoAFormItem label="On/Off" />
          </div>
        </DoDont>
        <DoDont type="do" description="Capitalize the first word after a colon or ampersand.">
          <div style={{ margin: "0 auto", maxWidth: "250px" }}>
            <GoASideMenu>
              <a href="">Personal: Employment</a>
              <a href="">Personal: Education</a>
              <a href="">Other cases</a>
              <a href="">Related areas</a>
            </GoASideMenu>
          </div>
        </DoDont>
      </GoAGrid>

      <GoAGrid minChildWidth="30ch" gap="2xl" mt="2xl" mb="3xl">
        <DoDont
          type="dont"
          description="Don’t use internal capitalization (such as AutoScale or e-Book) unless it’s part of a proper noun.">
          <div style={{ textAlign: "center" }}>
            <h3>Submitting adjournment Pre-Court</h3>
          </div>
        </DoDont>
      </GoAGrid>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="capital-case">Capital case</h2>
      <p>
        When displaying information pulled from legacy systems there may be information that must
        remain in capital case due to limitations with integration.
      </p>
      <p>
        Use this style only where necessary by the legacy system, since capital case is less
        readable, less accessible, and has the perception of emphasis.
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Display the following information in sentence case when possible for better readability.
      </p>
      <GoABlock mt="xl" mb="xl">
        <DoDont type="generic">
          <div style={{ textAlign: "center" }}>
            <img src="/images/capitalization/capital-case-example.png" width="80%"></img>
          </div>
        </DoDont>
      </GoABlock>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="references">References</h2>
      <p>
        <a
          href="https://medium.com/@jsaito/making-a-case-for-letter-case-19d09f653c98 "
          target="_blank">
          Making a case for letter case - Medium
        </a>
      </p>
      <p>
        <a
          href="https://uxplanet.org/why-letter-casing-is-important-to-consider-during-design-decisions-50402acd0a4e"
          target="_blank">
          Why letter casing is important to consider during design decisions - Medium
        </a>
      </p>
    </>
  );
}
