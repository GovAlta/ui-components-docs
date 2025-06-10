import { GoabDivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function BrandGuidelinesPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Brand guidelines</h1>
        <h3>Communications and Public Engagement (CPE) plays an important role in providing and maintaining brand identity guidelines across the Government of Alberta. These guidelines ensure all digital products are consistent and easily recognizable, building trust with users.</h3>
        <GoabDivider mt="2xl" mb="2xl"></GoabDivider>
        <div className="max-width-72ch">
          
          <h2 id="brand-guideslines-resources">Brand guidelines resources</h2>
          <p>The DDD design system follows brand guidelines defined by Communications and Public Engagement. Additional guidelines and resources offered by CPE should also be followed and designers within DDD should use these resources as needed.</p>
          <p>For more details on additional guidelines and styles adopted from CPE, please explore the following links:</p>
          
          <h3 id="iconography">Iconography</h3>
          <p>Besides the icon guidelines and sets provided by DDD's design system, designers can use CPE's <a href="https://corporateidentity.alberta.ca/goaaccess/icongen/" target="_blank">icon generator</a>. This is particularly useful when icons need a more detailed or illustrative style.</p>
          
          <h3 id="photography">Photography</h3>
          <p>Government of Alberta digital products must follow the photography guidelines set by CPE. For guidance, please see the photography section in <a href="https://open.alberta.ca/dataset/ed5f57ac-9484-4f8c-94ed-99a808fa2248/resource/24dc41ac-5a8e-46ea-8e67-12c568d4a654/download/cpe-visual-identity-manual-edition-26-2024.pdf" target="_blank">CPE's visual identity manual</a>.</p>
          
          <h3 id="content">Content</h3>
          <p>When creating content for web interfaces, refer to the content guidelines provided in the <a href="https://www.alberta.ca/digital-experience-standard" target="_blank">content guides</a> section on the digital experience standards page on Alberta.ca.</p>
          
          <h3 id="digital-experience">Digital experience standard compliance and policies</h3>
          <p>CPE's digital experience standard helps ensure that digital products meet required governance and standards. Refer to the links below to ensure your digital products comply with Government of Alberta policies:</p>

          <ul>
            <li><a href="https://www.alberta.ca/design-standards-checklist" target="_blank">Design standards checklist</a></li>
            <li><a href="https://open.alberta.ca/dataset/9445cded-704a-430b-85e9-bdbbeacda221/resource/42414d03-9ded-4031-aa79-c9cd3568138f/download/goa-web-governance-policy-final-2022.pdf" target="_blank">Web governance policy</a></li>
            <li><a href="https://open.alberta.ca/dataset/6c3579d7-b44a-4cc9-bdaa-a00f38c06aad/resource/cef159d1-520e-4f4b-a4b0-40e1e90cd0b0/download/communications-policy.pdf" target="_blank">Communications policy</a></li>
            <li><a href="https://open.alberta.ca/dataset/afb907e6-eb1b-4bb6-a4bc-659582a1038e/resource/3a1b9758-d3b2-46ef-be59-cc07351ee59c/download/cpe-goa-identitypolicy-2019-reissue.pdf" target="_blank">Government identity policy</a></li>
          </ul>

          <p>For questions regarding brand guidelines or information in the above links, please reach out to CPE at <a href="mailto:visual@gov.ab.ca" target="_blank">visual@gov.ab.ca</a>.</p>

        </div>
      </ComponentContent>
  );
}