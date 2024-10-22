import { GoADivider, GoATable, GoAGrid, GoABlock } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsColorPage() {
  return (
      <ComponentContent>
        <h1>Color</h1>
        <h3>Colors play a big role in how the Government of Alberta communicates. They serve as a tool to convey clarity, express emotions, and promote inclusivity.</h3>
        <GoADivider mt="xl" mb="xl"></GoADivider>
        <p>Our palette is divided into these categories: brand, interactive, text, status, greyscale, extended colors, to ensure flexibility and consistency in our digital services.</p>
        <p>Grab our tokens <a href="https://design.alberta.ca/design-tokens/color">here</a> to start using our colors.</p>
        <h2>Brand colors</h2>
        <p>These colors represent our identity and are aligned to the Alberta.ca brand guidelines.</p>

        <GoAGrid gap="s" minChildWidth="150px">
          <GoABlock>
            <div
              style={{
                backgroundColor: "#0081A2",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Brand - Default</div>
            <div>#0081A2</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#005072",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Brand - Dark</div>
            <div>#005072</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#C8EEFA",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Brand - Light</div>
            <div>#C8EEFA</div>
          </GoABlock>
        </GoAGrid>
        
        <h2>Interactive colors</h2>
        <p>Assigned to specific actions and states such as buttons and links, these colors are used to enhance usability and promote user engagement in our digital services.</p>
        
        <GoAGrid gap="s" minChildWidth="150px">
          <GoABlock>
            <div
              style={{
                backgroundColor: "#0070C4",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Default</div>
            <div>#0070C4</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#004F84",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Hover</div>
            <div>#004F84</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#FEBA35",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Focus</div>
            <div>#FEBA35</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#EC040B",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Error</div>
            <div>#EC040B</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#80B7E1",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Disabled</div>
            <div>#80B7E1</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#BA0000",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Error Hover</div>
            <div>#BA0000</div>
          </GoABlock>
          <GoABlock>
            <div
              style={{
                backgroundColor: "#F58185",
                height: "35px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <div>Interactive - Error Disabled</div>
            <div>#F58185</div>
          </GoABlock>
        </GoAGrid>
        
        <h2>Text colors</h2>
        <p>Headings, body text, and labels adopt these colours to ensure visual hierarchy in our layouts and readability across various contexts.</p>

        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>
                Sample
              </th>
              <th>
                Color type
              </th>
              <th>
                Hex code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#333333",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Text - Default 
              </td>
              <td>
                #333333
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#666666",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Text - Secondary
              </td>
              <td>
                #666666
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Text - Light
              </td>
              <td>
                #FFFFFF
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#666666",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Text - Disabled
              </td>
              <td>
                #666666
              </td>
            </tr>
          </tbody>
        </GoATable>
        
        <h2>Status colors</h2>
        <p>These colors are used to show various states such as success, warning, error and critical, helping users easily interpret the messages in our services.</p>

        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>
                Sample
              </th>
              <th>
                Color type
              </th>
              <th>
                Hex code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#004A8F",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Info - Default 
              </td>
              <td>
                #004A8F
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#AAC9E7",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Info - Light
              </td>
              <td>
                #AAC9E7
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#003B70",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Info - Dark
              </td>
              <td>
                #003B70
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#EFF8FF",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Info - Background
              </td>
              <td>
                #EFF8FF
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#F9CE2D",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Warning - Default 
              </td>
              <td>
                #F9CE2D
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FFEAB6",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Warning - Light
              </td>
              <td>
                #FFEAB6
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#BF8D23",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Warning - Dark
              </td>
              <td>
                #BF8D23
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FFF6E5",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Warning - Background
              </td>
              <td>
                #FFF6E5
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#DA291C",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Emergency - Default 
              </td>
              <td>
                #DA291C
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FBD1CE",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Emergency - Light
              </td>
              <td>
                #FBD1CE
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#A91A10",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Emergency - Dark
              </td>
              <td>
                #A91A10
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FFF1F2",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Emergency - Background
              </td>
              <td>
                #FFF1F2
              </td>
            </tr>
             <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#006F4C",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Success - Default 
              </td>
              <td>
                #006F4C
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#CCE4DC",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Success - Light
              </td>
              <td>
                #CCE4DC
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#00563A",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Success - Dark
              </td>
              <td>
                #00563A
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#EEF9F3",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Success - Background
              </td>
              <td>
                #EEF9F3
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#171D23",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Critical
              </td>
              <td>
                #171D23
              </td>
            </tr>
          </tbody>
        </GoATable>

        <h2>Greyscale</h2>
        <p>Ranging from black to white, these neutral colors provide a base for accents, backgrounds and layouts.</p>

        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>
                Sample
              </th>
              <th>
                Color type
              </th>
              <th>
                Hex code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Greyscale - White 
              </td>
              <td>
                #FFFFFF
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#F1F1F1",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - 100
              </td>
              <td>
                #F1F1F1
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#DCDCDC",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - 200
              </td>
              <td>
                #DCDCDC
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#ADADAD",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - 400
              </td>
              <td>
                #ADADAD
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#949494",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                    border: "1px solid #DCDCDC",
                  }}
                />
              </td>
              <td>
                Greyscale - 500
              </td>
              <td>
                #949494
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#858585",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - 600
              </td>
              <td>
                #858585
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#666666",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - 800
              </td>
              <td>
                #666666
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#333333",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Greyscale - Black
              </td>
              <td>
                #333333
              </td>
            </tr>
          </tbody>
        </GoATable>

         <h2>Extended colors</h2>
        <p>These colors are designated for data visualization to differentiate between data categories in charts.</p>

        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>
                Sample
              </th>
              <th>
                Color type
              </th>
              <th>
                Hex code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#4046CA",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#575CC3",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#7F84EB",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Cerulean - Default<br/>
                Cerulean - Mid<br/>
                Cerulean - Light<br/>
              </td>
              <td>
                #4046CA<br/>
                #575CC3<br/>
                #7F84EB<br/>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#F68511",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F89F45",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#FFC76D",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Orange - Default<br/>
                Orange - Mid<br/>
                Orange - Light<br/>
              </td>
              <td>
                #F68511<br/>
                #F89F45<br/>
                #FFC76D<br/>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#DE3D82",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#E5679D",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#FF8FC5",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Pink - Default<br/>
                Pink - Mid<br/>
                Pink - Light<br/>
              </td>
              <td>
                #DE3D82<br/>
                #E5679D<br/>
                #FF8FC5<br/>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#72E06A",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#8CFA84",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#BBFCB4",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Go-Green - Default<br/>
                Go-Green - Mid<br/>
                Go-Green - Light<br/>
              </td>
              <td>
                #72E06A<br/>
                #8CFA84<br/>
                #BBFCB4<br/>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#7E84FA",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#9A9EFB",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#C2C6FF",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Violet - Default<br/>
                Violet - Mid<br/>
                Violet - Light<br/>
              </td>
              <td>
                #7E84FA<br/>
                #9A9EFB<br/>
                #C2C6FF<br/>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#0FB5AE",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px 4px 0 0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#29CFC8",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#7FEBE6",
                    height: "35px",
                    width: "35px",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
              </td>
              <td>
                Turquoise - Default<br/>
                Turquoise - Mid<br/>
                Turquoise - Light<br/>
              </td>
              <td>
                #0FB5AE<br/>
                #29CFC8<br/>
                #7FEBE6<br/>
              </td>
            </tr>
          </tbody>
        </GoATable>
    
        <h2>Color usage</h2>
        <p>All government of Alberta products are designed to meet the Web Content and Accessibility Guidelines (WCAG) standards. Level AA compliance is the minimum requirement for accessible design.</p>

        <ul className="goa-unordered-list">
          <li>Use a light background on dark text and vice versa, with a <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#dfn-contrast-ratio" target="_blank">contrast ratio</a> of at least 4.5:1 for normal text. </li>
          <li>When a text is 18 points or larger, it must have a contrast ratio of at least 3:1.</li>
          <li>Check color combinations using an accessibility checker. Logos, decorative objects, disabled form fields, and disabled buttons should be excluded from this test and don't need to be tested for contrast.</li>
          <li>Refer to our guide on good color combinations.</li>
        </ul>

        <h3>Accessible combinations</h3>
      </ComponentContent>
  );
}
