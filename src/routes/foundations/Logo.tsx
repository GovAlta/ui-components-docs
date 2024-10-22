import { GoADivider, GoABlock, GoAGrid } from "@abgov/react-components"
import { DoDont } from "@components/do-dont/DoDont";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function LogoPage() {
  return (
      <ComponentContent>
        <h1>Logo</h1>
        <h3>Our logo is an important part of our brand identity and serves as a symbol that distinguishes our digital services from others. To keep our brand consistent and recognizable, we encourage following the guidelines for proper usage.</h3>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>

        <h2>Anatomy</h2>
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/logo-anatomy.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>

        <p>The Alberta logo consists of two elements— the Wordmark and symbol.</p>

        <h3>Primary Usage</h3>
        <p>The primary Alberta logo is the preferred choice for all our digital services. The default colour combination for the signature is the grey (stone) and blue (sky) colour.</p>
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/logo.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>
        <p>The Alberta signature should be placed in prominent positions in the interface, such as the header and footer.</p>
        
        <h3>Alternate Usage</h3>
        <p>Alternate versions of the logo may be used in contexts where the default version isn’t suitable. These are the only alternate usage allowed:</p>
        <GoAGrid gap="s" minChildWidth="150px">
          <GoABlock>
            <DoDont type="generic">
              <div style={{ textAlign: "center" }}>
                <img src="/images/logo/reverse-version.png" width="80%"></img>
              </div>
            </DoDont>
            <div>Reverse version (Dark)</div>
            <div>When the logo is placed on a darker background, the reversed version of the wordmark can be used while still retaining the blue (sky) colour of the symbol.</div>
          </GoABlock>
          <GoABlock>
            <DoDont type="generic">
              <div style={{ textAlign: "center" }}>
                <img src="/images/logo/white-version.png" width="80%"></img>
              </div>
            </DoDont>
            <div>White version</div>
            <div>This version can be used in cases where simplicity is needed. The chosen background colour must be one of the official brand colours. </div>
          </GoABlock>
          <GoABlock>
            <DoDont type="generic">
              <div style={{ textAlign: "center" }}>
                <img src="/images/logo/black-version.png" width="80%"></img>
              </div>
            </DoDont>
            <div>Black version</div>
            <div>For cases where colour usage is limited, such as lo-fi prototyping, the black version of the logo can be used.</div>
          </GoABlock>
        </GoAGrid>

        <h2>Alberta Service Logo</h2>
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/logo-service-name.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>

        <p>When the Alberta Logo is accompanied by a service name, a protective space is applied around it to enhance its impact. This space indicated by x below is equal to the height and the width of the period symbol. When adding text or other elements, it is important to stay outside of this space.</p>
        
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/alberta-service-logo.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>

        <p>For accuracy and consistency, refer to the component in the Figma Asset library.</p>

        <h2>Variations</h2>
        <p>The Alberta logo includes a few variations to suit different design requirements and spacing constraints. Each version maintains our brand identity while adapting to its specific use case.</p>
        
        <h3>Circle</h3>
        <p>The circular logo is used in place of our primary logo when space is limited, such as on mobile devices. This ensures that our services are branded and remains identifiable.</p>
        
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/circle.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>
        
        <h3>Favicon</h3>
        <p>The favicon is a simplified version of our logo. Often used in browser tabs, it helps users identify our service when multiple tabs are open.  </p>
        
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/logo/favicon.png" width="80%"></img>
            </div>
          </DoDont>
        </GoABlock>

        <h2>Best Practices</h2>
        <ul>
          <li>Avoid modifying the logo and always use the appropriate version from our asset library.</li>
          <li>Do not alter the spacing around the ‘wordmark’ and the ‘wordmark and service name’. This spacing ensures that sufficient protective space is kept around them to maintain their impact.</li>
          <li>Use the provided logo variations only for their specific purposes.</li>
          <li>Do not use the logo for commercial purposes unless granted permission. Please see the Government Identity Policy <a href="https://open.alberta.ca/publications/government-identity-policy" target="_blank">here</a>.</li>
        </ul>
        
      </ComponentContent>
  );
}
