import { GoADivider, GoAContainer, GoATable, GoASpacer, GoAIcon, GoABlock, GoAGrid } from "@abgov/react-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DeviceWidthContext } from "../../contexts/DeviceWidthContext";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function IconographyPage() {
  const { isDesktop } = useContext(DeviceWidthContext);
  const renderDesktop = () => {
    return (
      <GoATable width="100%" variant="relaxed">
        <thead>
          <tr>
            <th>Example</th>
            <th>Icon size</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/images/iconography/Icon-small.png"></img></td>
            <td>Small: icon-size-s</td>
            <td>Used in compact spaces</td>
          </tr>
          <tr>
            <td><img src="/images/iconography/Icon-Medium.jpg"></img></td>
            <td>Medium: icon-size-m</td>
            <td>Suitable for slightly larger spaces</td>
          </tr>
          <tr>
            <td><img src="/images/iconography/Icon-Large.jpg"></img></td>
            <td>Large: icon-size-l</td>
            <td>Used in dense spaces where an icon is required</td>
          </tr>
        </tbody>
      </GoATable>
    );  
  };
  const renderMobile = () => {
    return (
      <GoAGrid minChildWidth="22rem" gap="xs">
        <GoAContainer>
          <dl className="design-tokens">
            <dd><img src="/images/iconography/Icon-small.png"></img></dd>
            <dt>Icon size</dt><dd>Small: icon-size-s</dd>
            <dt>Description</dt><dd>Used in compact spaces</dd>
          </dl>
        </GoAContainer>
        <GoAContainer>
          <dl className="design-tokens">
            <dd><img src="/images/iconography/Icon-Medium.jpg"></img></dd>
            <dt>Icon size</dt><dd>Medium: icon-size-m</dd>
            <dt>Description</dt><dd>Suitable for slightly larger spaces</dd>
          </dl>
        </GoAContainer>
        <GoAContainer>
          <dl className="design-tokens">
            <dd><img src="/images/iconography/Icon-Large.jpg"></img></dd>
            <dt>Icon size</dt><dd>Large: icon-size-l</dd>
            <dt>Description</dt><dd>Used in dense spaces where an icon is required</dd>
          </dl>
        </GoAContainer>
      </GoAGrid>
    );
  };

  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Iconography</h1>
        <h3>Icons are simple and universal graphic symbols that communicate and enhance both the aesthetic and functional aspects of our products. While they can be used with descriptors, they can also be self-expressive and convey meaning where words cannot. </h3>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>

        <div className="max-width-72ch">
          <h2 id="style">Style</h2>
          <p>Our icon style is simple, rounded, featuring thin line strokes, or filled shapes. They are designed to scale proportionally, ensuring that they integrate seamlessly into various interface sizes. They are divided into three categories: Core, Extended and Logo icon set.</p>

          <h3>Core icon set</h3>
          <p>Our core icon set is the main icon library in the design system, helping you maintain visual consistency across all our digital products.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="s" minChildWidth="250px">
            <GoAContainer mb="3xs">
              <div style={{ textAlign: "center" }}>
                <GoABlock>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="information-circle" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="warning" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="alert-circle" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="checkmark-circle" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                </GoABlock>
                  <p style={{ font: "var(--goa-typography-body-xs)", margin:"16px 0 0" }}>Alert and messaging</p>
              </div>
            </GoAContainer>

            <GoAContainer mb="3xs">
              <div style={{ textAlign: "center" }}>
                <GoABlock>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="close" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="checkmark" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="add" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="remove" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                </GoABlock>
                  <p style={{ font: "var(--goa-typography-body-xs)", margin:"16px 0 0" }}>Basic</p>
              </div>
            </GoAContainer>
            
            <GoAContainer mb="3xs">
            <div style={{ textAlign: "center" }}>
                <GoABlock>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="chevron-down" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="arrow-up" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="caret-back" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="arrow-forward" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                </GoABlock>
                  <p style={{ font: "var(--goa-typography-body-xs)", margin:"16px 0 0" }}>Direction</p>
                </div>
            </GoAContainer>
            
            <GoAContainer mb="3xs">
                <div style={{ textAlign: "center" }}>
                <GoABlock>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="reload" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="open" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="eye" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="notifications" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                </GoABlock>
                  <p style={{ font: "var(--goa-typography-body-xs)", margin:"16px 0 0" }}>Interactions</p>
                </div>
            </GoAContainer>
          
            <GoAContainer mb="3xs">
                <div style={{ textAlign: "center" }}>
                <GoABlock>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="person-circle" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="settings" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="mail" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                  <GoAIcon type="call" opacity={1}></GoAIcon>
                  <GoASpacer hSpacing="s"></GoASpacer>
                </GoABlock>
                  <p style={{ font: "var(--goa-typography-body-xs)", margin:"16px 0 0" }}>Accounts</p>
                </div>
            </GoAContainer>
          </GoAGrid>

          <GoASpacer vSpacing="l"></GoASpacer>
          <p>Explore core icons set and their properties <Link to="/components/icons">on the component page</Link>.</p>

          <h3>Extended icon set</h3>
          <h4>Ionicons</h4>
          <p>We use the open-source icon library, <a href="https://ionic.io/ionicons" target="_blank">Ionicons</a>, which provides a wide variety of high-quality icons. Use these icons when you need options beyond the core icon set.</p>

          <GoAContainer mt="xl" mb="m">
              <div style={{ textAlign: "center" }}>
                <img src="/images/iconography/IonIcons.jpg" width="100%"></img>
              </div>
          </GoAContainer>

          <h4>Icon generator</h4>
          <p>Alberta.ca uses an <a href="https://corporateidentity.alberta.ca/goaaccess/icongen/" target="_blank">icon generator</a> that is accessible to all Government of Alberta employees. Staff and contractors can access this library using their government credentials.</p>

          <GoAContainer mt="xl" mb="m">
              <div style={{ textAlign: "center" }}>
                <img src="/images/iconography/IonIcons.jpg" width="100%"></img>
              </div>
          </GoAContainer>

          <h3>Logo icons</h3>
          <p>This icon set, located in our Figma Component library contains popular logos and are kept in accordance with their respective logo usage guidelines. When using any of these brand logos, please make sure to refer to their brand guideline to ensure compliance with their usage standards.</p>

          <GoAContainer mt="xl" mb="m">
              <div style={{ textAlign: "center" }}>
                <img src="/images/iconography/Logo-Icons.jpg" width="100%"></img>
              </div>
          </GoAContainer>

          <h2 id="icon-size">Icon size</h2>
          <GoASpacer vSpacing="m"></GoASpacer>
          {isDesktop ? renderDesktop() : renderMobile()}
          <GoASpacer vSpacing="l"></GoASpacer>
          <p>You can access the <Link to="/design-tokens/icon-size">design tokens for icon sizes here</Link>.</p>
          
          <p>When icons are interactive, it's best to make it 24 x 24 CSS pixels to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html" target="_blank">WCAG guidelines</a>.</p>

          <h2 id="best-practices">Best practices</h2>
          <ul>
            <li>Whenever possible, combine icons with text for clear communication.</li>
            <li>When placing icons next to text elements, ensure they are vertically aligned to create visual balance.</li>
            <li>Do not create icons that are overly complex.</li>
            <li>Apply color to an icon using our <Link to="/design-tokens/color">design tokens</Link>. Ensure color combinations meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank">WCAG standards</a> of at least a 3:1 contrast ratio between foreground and background.</li>
          </ul>

          <h2 id="creating-icons">Creating icons</h2>
          <p>Before creating an icon, check if it already exists in the icon library. If not, you can follow these steps:</p>
          <ul>
            <li>Consult the do's and don'ts section in best practices.</li>
            <li>Ensure the icon aligns to the style of our icon sets.</li>
            <li>Choose a clear and descriptive name.</li>
          </ul>
        </div>
      </ComponentContent>
  );
}
