import { GoabDivider, GoabGrid, GoabContainer, GoabSpacer, GoabTable } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsColorPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        
        <h1>Color</h1>
        <h3>Colors play a major role in how the Government of Alberta communicates. They serve as a tool to convey clarity, express emotions, and promote inclusivity.</h3>
        <GoabDivider mt="2xl" mb="2xl"></GoabDivider>
        <div className="max-width-72ch">
          <p>Our palette is divided into these categories:</p>
          <ul>
            <li>Brand colors</li>
            <li>Interactive colors</li>
            <li>Text colors</li>
            <li>Status colors</li>
            <li>Greyscale colors</li>
            <li>Additional colors</li>
          </ul>
          <p>For more information about how to use our colors in your digital product, see <a href="https://design.alberta.ca/design-tokens/color">design tokens</a>.</p>
          <h2 id="brand">Brand colors</h2>
          <p>Brand colors represent our identity and are aligned to the Alberta.ca brand guidelines.</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px">
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#0081A2",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Brand - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#005072",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Brand - Dark</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#C8EEFA",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Brand - Light</strong></div>
            </GoabContainer>
          </GoabGrid>
          
          <h2 id="interactive">Interactive colors</h2>
          <p>Interactive colors are used to assign colors to specific actions and states, such as buttons and links. This helps in enhancing usability and promoting user engagement in our digital products.</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px">
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#0070C4",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#004F84",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Hover</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FEBA35",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Focus</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#EC040B",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Error</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#80B7E1",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Disabled</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#BA0000",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Error Hover</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#F58185",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Interactive - Error Disabled</strong></div>
            </GoabContainer>
          </GoabGrid>
          
          <h2 id="text">Text colors</h2>
          <p>Headings, body text, and labels adopt our text colors to ensure visual hierarchy in our layouts and readability across various contexts.</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px">
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#333333",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Text - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#666666",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Text - Secondary</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  border: "1px solid #DCDCDC",
                }}
              />
              <div><strong>Text - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#666666",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Text - Disabled</strong></div>
            </GoabContainer>
          </GoabGrid>
          
          <h2 id="status">Status colors</h2>
          <p>Status colors are used to show various states such as success, warning, error and critical, helping users easily interpret the messages in our products.</p>
          <h3 id="info">Info</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px">     
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#004A8F",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Info - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#AAC9E7",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Info - Light</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#003B70",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Info - Dark</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#EFF8FF",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Info - Background</strong>
              </div>
            </GoabContainer>
          </GoabGrid> 
          <h3 id="warning">Warning</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#F9CE2D",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Warning - Default</strong> 
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFEAB6",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Warning - Light</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#BF8D23",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Warning - Dark</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFF6E5",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Warning - Background</strong>
              </div>
            </GoabContainer>
          </GoabGrid> 
          <h3 id="emergency">Emergency</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#DA291C",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Emergency - Default</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FBD1CE",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Emergency - Light</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#A91A10",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  border: "1px solid #DCDCDC",
                }}
              />
              <div>
                <strong>Emergency - Dark</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFF1F2",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Emergency - Background</strong>
              </div>
            </GoabContainer>
          </GoabGrid> 
          <h3 id="success">Success</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#006F4C",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Success - Default</strong> 
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#CCE4DC",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Success - Light</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#00563A",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  border: "1px solid #DCDCDC",
                }}
              />
              <div>
                <strong>Success - Dark</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#EEF9F3",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Success - Background</strong>
              </div>
            </GoabContainer>
          </GoabGrid> 
          <h3 id="critical">Critical</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px"> 
            <GoabContainer maxWidth="150px" accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#171D23",
                  height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              />
              <div>
                <strong>Critical</strong>
              </div>
            </GoabContainer>
          </GoabGrid>          
          <h2 id="greyscale">Greyscale colors</h2>
          <p>Greyscale are neutral colors that range from black to white and provide a base for accents, backgrounds and layouts.</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px">  
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              <div>
                <strong>Greyscale - White</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#F1F1F1",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - 100</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#DCDCDC",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - 200</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#ADADAD",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - 400</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#949494",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              <div>
                <strong>Greyscale - 500</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#858585",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - 600</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#666666",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - 800</strong>
              </div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
                <div
                  style={{
                    backgroundColor: "#333333",height: "85px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  }}
                />
              <div>
                <strong>Greyscale - Black</strong>
              </div>
            </GoabContainer>
          </GoabGrid>

          <h2 id="extended">Extended colors</h2>
          <p>Extended colors can be used If you need more badge colours or need colours to differentiate between data categories in charts.</p>
          <GoabSpacer vSpacing="l"></GoabSpacer>
          <GoabGrid gap="m" minChildWidth="150px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#7FEBE6",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#DCFBF8",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Aqua</strong></div>
              <div><strong>Aqua - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#333333",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#E7E7E7",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Black</strong></div>
              <div><strong>Black - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#AAC9E7",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#DDEFFF",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Blue</strong></div>
              <div><strong>Blue - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#BBFCB4",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#CCE2D9",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Green</strong></div>
              <div><strong>Green - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFC76D",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#FCD6C3",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Orange</strong></div>
              <div><strong>Orange - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FF8FC5",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F9E1EB",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Pink</strong></div>
              <div><strong>Pink - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#ED948D",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F4CDC6",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Red</strong></div>
              <div><strong>Red - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#D4C2FF",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#EFE2FB",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Violet</strong></div>
              <div><strong>Violet - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  height: "90px",
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "24px",
                  border: "1px solid #DCDCDC",
                }}
              />
              <div><strong>White</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#FCE796",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#FFF7BF",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  marginBottom: "24px",
                }}
              />
              <div><strong>Yellow</strong></div>
              <div><strong>Yellow - Light</strong></div>
            </GoabContainer>
          </GoabGrid>
      
          <h2 id="usage">Color usage</h2>
          <p>All government of Alberta products are designed to meet the Web Content and Accessibility Guidelines (WCAG) standards. Level AA compliance is the minimum requirement for accessible design.</p>

          <GoabTable width="100%" variant="relaxed" mt="l" mb="xl">
            <thead>
              <tr>
                <th>
                  Type of content 
                </th>
                <th>
                  Minimum ratio (AA rating) 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Body text - 18px
                </td>
                <td>
                  4.5:1
                </td>
              </tr>
              <tr>
                <td>
                  Large-scale text - 24px
                </td>
                <td>
                  3:1
                </td>
              </tr>
            </tbody>
          </GoabTable>

          <p><em style={{color: "var(--goa-color-greyscale-black)", fontSize: "var(--goa-font-size-3)"}}>Use an <a href="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility" target="_blank">accessibility contrast checker</a> to check color combinations or use our guide below. Logos, decorative objects, disabled form fields, and disabled buttons should be excluded from this test and don't need to be tested for contrast.</em></p>

          <h3 id="accessible">Accessible combinations</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>

          <GoabGrid gap="m" minChildWidth="250px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Default passes the minimum color contrast ratio with 4.5:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Dark.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Dark passes the minimum color contrast ratio with of 8.78:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Dark</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-hover.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and interactive Hover passes the minimum color contrast ratio with 8.56:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Interactive - Hover</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Info-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and info default passes the minimum color contrast ratio with 8.84:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Info - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Interactive-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and interactive default passes the minimum color contrast ratio with 5.1:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Interactive - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Interactive-Hover.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Greyscale Black passes the minimum color contrast ratio with 8.84:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Greyscale - Black</strong></div>
            </GoabContainer>
          </GoabGrid>
          
          <h3 id="inaccessible">Inaccessible combinations</h3>
          <GoabSpacer vSpacing="l"></GoabSpacer>

          <GoabGrid gap="m" minChildWidth="250px"> 
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Light.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Light fails the minimum color contrast ratio with 1.23:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Info-Light.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Info light fails the minimum color contrast ratio with 1.72:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Info - Light</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Warning.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Warning Dark fails the minimum color contrast ratio with 2.97:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Warning - Dark</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-warning-def.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Warning Default fails the minimum color contrast ratio with 1.51:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Warning - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-Light-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Brand Light and Warning Default fails the minimum color contrast ratio with 1.23:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Brand - Light</strong></div>
              <div><strong>Warning - Default</strong></div>
            </GoabContainer>
            <GoabContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-Dark-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Brand Default and Brand Dark fails the minimum color contrast ratio with 1.95:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Brand - Default</strong></div>
              <div><strong>Brand - Dark</strong></div>
            </GoabContainer>
          </GoabGrid>

        </div>
      </ComponentContent>
  );
}