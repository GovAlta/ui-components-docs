import { GoADivider, GoAGrid, GoAContainer, GoASpacer, GoATable } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsColorPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        
        <h1>Color</h1>
        <h3>Colors play a big role in how the Government of Alberta communicates. They serve as a tool to convey clarity, express emotions, and promote inclusivity.</h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <div className="max-width-72ch">
          <p>Our palette is divided into these categories:</p>
          <ul>
            <li>Brand colors</li>
            <li>Interactive colors</li>
            <li>Text colors</li>
            <li>Status colors</li>
            <li>Greyscale colors</li>
            <li>Extended colors</li>
          </ul>
          <p>For more information about how to use our colors in your service, see <a href="https://design.alberta.ca/design-tokens/color">design tokens</a>.</p>
          <h2>Brand colors</h2>
          <p>These colors represent our identity and are aligned to the Alberta.ca brand guidelines.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="150px">
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#0081A2</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#005072</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#C8EEFA</div>
            </GoAContainer>
          </GoAGrid>
          
          <h2 id="interactive">Interactive colors</h2>
          <p>Assigned to specific actions and states such as buttons and links, these colors are used to enhance usability and promote user engagement in our digital services.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="150px">
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#0070C4</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#004F84</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#FEBA35</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#EC040B</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#80B7E1</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#BA0000</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#F58185</div>
            </GoAContainer>
          </GoAGrid>
          
          <h2 id="text">Text colors</h2>
          <p>Headings, body text, and labels adopt these colours to ensure visual hierarchy in our layouts and readability across various contexts.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="150px">
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#333333</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#666666</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#FFFFFF</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#666666</div>
            </GoAContainer>
          </GoAGrid>
          
          <h2 id="status">Status colors</h2>
          <p>These colors are used to show various states such as success, warning, error and critical, helping users easily interpret the messages in our services.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="150px">     
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>#004A8F</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #AAC9E7
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #003B70
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #EFF8FF
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #F9CE2D
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #FFEAB6
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #BF8D23
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #FFF6E5
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #DA291C
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #FBD1CE
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #A91A10
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #FFF1F2
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #006F4C
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #CCE4DC
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #00563A
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #EEF9F3
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #171D23
              </div>
            </GoAContainer>
          </GoAGrid>          
          <h2 id="greyscale">Greyscale</h2>
          <p>Ranging from black to white, these neutral colors provide a base for accents, backgrounds and layouts.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="150px">  
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #FFFFFF
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #F1F1F1
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #DCDCDC
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #ADADAD
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #949494
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #858585
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #666666
              </div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
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
              <div>
                #333333
              </div>
            </GoAContainer>
          </GoAGrid>

          <h2 id="extended">Extended colors</h2>
          <p>These colors are designated for data visualization to differentiate between data categories in charts.</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoAGrid gap="m" minChildWidth="220px"> 
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#4046CA",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#575CC3",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#7F84EB",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Cerulean - Default</strong></div>
              <div>#4046CA</div><br/>
              <div><strong>Cerulean - Mid</strong></div>
              <div>#575CC3</div><br/>
              <div><strong>Cerulean - Light</strong></div>
              <div>#7F84EB</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#F68511",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F89F45",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#FFC76D",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Orange - Default</strong></div>
              <div>#F68511</div><br/>
              <div><strong>Orange - Mid</strong></div>
              <div>#F89F45</div><br/>
              <div><strong>Orange - Light</strong></div>
              <div>#FFC76D</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#DE3D82",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#E5679D",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#FF8FC5",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Pink - Default</strong></div>
              <div>#DE3D82</div><br/>
              <div><strong>Pink - Mid</strong></div>
              <div>#E5679D</div><br/>
              <div><strong>Pink - Light</strong></div>
              <div>#FF8FC5</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#72E06A",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#8CFA84",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#BBFCB4",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Go-Green - Default</strong></div>
              <div>#72E06A</div><br/>
              <div><strong>Go-Green - Mid</strong></div>
              <div>#8CFA84</div><br/>
              <div><strong>Go-Green - Light</strong></div>
              <div>#BBFCB4</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#7E84FA",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#9A9EFB",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#C2C6FF",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Violet - Default</strong></div>
              <div>#7E84FA</div><br/>
              <div><strong>Violet - Mid</strong></div>
              <div>#9A9EFB</div><br/>
              <div><strong>Violet - Light</strong></div>
              <div>#C2C6FF</div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div
                style={{
                  backgroundColor: "#0FB5AE",
                  height: "45px",
                  width: "100%",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#29CFC8",
                  height: "45px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />
              <div
                style={{
                  backgroundColor: "#7FEBE6",
                  height: "45px",
                  width: "100%",
                  marginBottom: "24px",
                  borderRadius: "0 0 4px 4px",
                }}
              />
              <div><strong>Turquoise - Default</strong></div>
              <div>#0FB5AE</div><br/>
              <div><strong>Turquoise - Mid</strong></div>
              <div>#29CFC8</div><br/>
              <div><strong>Turquoise - Light</strong></div>
              <div>#7FEBE6</div>
            </GoAContainer>
          </GoAGrid>
      
          <h2 id="usage">Color usage</h2>
          <p>All government of Alberta products are designed to meet the Web Content and Accessibility Guidelines (WCAG) standards. Level AA compliance is the minimum requirement for accessible design.</p>

          <GoATable width="100%" variant="relaxed" mt="l" mb="xl">
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
          </GoATable>

          <p><em style={{color: "var(--goa-color-greyscale-black)", fontSize: "var(--goa-font-size-3)"}}>Use an <a href="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility" target="_blank">accessibility contrast checker</a> contrast checker to check color combinations or use our guide below. Logos, decorative objects, disabled form fields, and disabled buttons should be excluded from this test and don't need to be tested for contrast.</em></p>

          <h3 id="accessible">Accessible combinations</h3>
          <GoASpacer vSpacing="l"></GoASpacer>

          <GoAGrid gap="m" minChildWidth="250px"> 
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Default passes the minimum color contrast ratio with 4.5:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Default</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Dark.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Dark passes the minimum color contrast ratio with of 8.78:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Dark</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-hover.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and interactive Hover passes the minimum color contrast ratio with 8.56:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Interactive - Hover</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Info-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and info default passes the minimum color contrast ratio with 8.84:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Info - Default</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Interactive-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and interactive default passes the minimum color contrast ratio with 5.1:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Interactive - Default</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Accessible-White-Interactive-Hover.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Greyscale Black passes the minimum color contrast ratio with 8.84:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Greyscale - Black</strong></div>
            </GoAContainer>
          </GoAGrid>
          
          <h3 id="inaccessible">Inaccessible combinations</h3>
          <GoASpacer vSpacing="l"></GoASpacer>

          <GoAGrid gap="m" minChildWidth="250px"> 
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Light.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Brand Light fails the minimum color contrast ratio with 1.23:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Brand - Light</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Info-Light.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Info light fails the minimum color contrast ratio with 1.72:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Info - Light</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-Warning.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Warning Dark fails the minimum color contrast ratio with 2.97:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Warning - Dark</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-White-warning-def.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Greyscale White and Warning Default fails the minimum color contrast ratio with 1.51:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Greyscale - White</strong></div>
              <div><strong>Warning - Default</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-Light-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Brand Light and Warning Default fails the minimum color contrast ratio with 1.23:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Brand - Light</strong></div>
              <div><strong>Warning - Default</strong></div>
            </GoAContainer>
            <GoAContainer accent="filled" padding="relaxed" width="full">
              <div style={{ textAlign: "center" }}>
                <img src="/images/color/Inaccessible-Dark-Default.png" style={{margin: "0 0 24px" }} width="100%" alt="The combination of two colors, Brand Default and Brand Dark fails the minimum color contrast ratio with 1.95:1 as per Level AA compliance."></img>
              </div>
              <div><strong>Brand - Default</strong></div>
              <div><strong>Brand - Dark</strong></div>
            </GoAContainer>
          </GoAGrid>

        </div>
      </ComponentContent>
  );
}
