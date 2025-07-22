import { GoabDivider, GoabGrid, GoabContainer, GoabSpacer, GoabText } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function LogoPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <GoabText size="heading-xl" mb="m" mt="xl">
          Logo
        </GoabText>
        <GoabText size="heading-m" mb="xl">
          Our logo is an important part of our brand identity and serves as a symbol that distinguishes our digital
          products
          from others. To keep our brand consistent and recognizable, we encourage following the guidelines for proper
          usage.
        </GoabText>
        <GoabDivider mt="2xl" mb="2xl"></GoabDivider>
          <h2 id="anatomy">Anatomy</h2>
            <div style={{ width: "100%", textAlign: "center", padding:"var(--goa-space-l) 0" }}>
              <img src="/images/logo/logo-anatomy.png" width="60%"></img>
            </div>

          <p>The Alberta logo consists of two elements — the wordmark and symbol.</p>

          <h3 id="primary">Primary usage</h3>
          <p>The primary Alberta logo is the preferred choice for all our digital products. The default color combination for the signature is the grey (stone) and blue (sky) color.</p>
              <div style={{ width: "100%", textAlign: "center", padding:"var(--goa-space-l) 0" }}>
                <img src="/images/logo/logo.png" width="50%" style={{minWidth: "270px"}}></img>
              </div>
          <p>The Alberta logo should be prominently displayed in the interface, particularly in the header and footer. As a product team utilizing our design system, you will find that the Alberta logo is already integrated into our design components and readily available for your use.</p>
          
          <h3 id="alternate">Alternate usage</h3>
          <p>Alternate versions of the logo may be used in contexts where the default version isn't suitable. These are the only alternate usage allowed:</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="l" minChildWidth="150px">
            <GoabContainer>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img src="/images/logo/reverse-version.png" width="100%"></img>
                </div>
              <div style={{ margin: "12px 0" }}><strong>Reverse version (Dark)</strong></div>
              <div>When the logo is placed on a darker background, the reversed version of the wordmark can be used while still retaining the blue (sky) color of the symbol.</div>
            </GoabContainer>
            <GoabContainer>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img src="/images/logo/white-version.png" width="100%"></img>
                </div>
              <div style={{ margin: "12px 0" }}><strong>White version</strong></div>
              <div>This version can be used in cases where simplicity is needed. The chosen background color must be one of the official brand colors. </div>
            </GoabContainer>
            <GoabContainer>
                <div style={{ textAlign: "center"}}>
                  <img src="/images/logo/black-version.png" width="100%"></img>
                </div>
              <div style={{ margin: "12px 0" }}><strong>Black version</strong></div>
              <div>For cases where color usage is limited, such as lo-fi prototyping, the black version of the logo can be used.</div>
            </GoabContainer>
          </GoabGrid>

          <h2 id="alberta-service-logo">Alberta service logo</h2>
          <div style={{ textAlign: "center", padding:"var(--goa-space-l) 0"  }}>
            <img src="/images/logo/logo-service-name.png" width="100%" style={{maxWidth: "400px"}}></img>
          </div>

          <p>When the Alberta Logo is accompanied by a service name, a protective space is applied around it to enhance its impact. This space indicated by x below is equal to the height and the width of the period symbol. When adding text or other elements, it is important to stay outside of this space.</p>
          
          <div style={{ textAlign: "center", padding:"var(--goa-space-l) 0"  }}>
            <img src="/images/logo/alberta-service-logo.png" width="100%" style={{maxWidth: "400px"}}></img>
          </div>
          
          <h2 id="circle">Circular symbol</h2>
          <p>The circular symbol is used in place of our primary logo when space is limited, such as on mobile devices. This ensures that our products are branded and remain identifiable. It also acts as a favicon, an icon that is commonly used in browser tabs to help users easily identify our product when multiple tabs are open.</p>
          
          <div style={{  width: "auto", textAlign: "left", padding:"var(--goa-space-l) 0" }}>
            <img src="/images/logo/circle.png" width="60px"></img>
          </div>

          <p>For accuracy and consistency, refer to our logo components in the <a href="https://www.figma.com/design/ylmHeuDMfxnDBnP1VaQYz8/%E2%9D%96-Styles-and-Guidelines-%7C-DDD?node-id=12132-379669" target="_blank">Figma Asset library</a>.</p>

          <h2 id="best-practices">Logo usage guidelines</h2>
          <ul>
            <li>Avoid modifying the logo and always use the appropriate version from our asset library.</li>
            <li>Do not alter the spacing around the 'wordmark' and the 'wordmark and service name'. This spacing ensures that sufficient protective space is kept around them to maintain their impact.</li>
            <li>Use the provided logo variations only for their specific purposes.</li>
            <li>Do not use the logo for commercial purposes unless granted permission. For more information, please review the <a href="https://open.alberta.ca/publications/government-identity-policy" target="_blank">Government Identity Policy</a>.</li>
          </ul>
      </ComponentContent>
  );
}