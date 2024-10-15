import { GoADivider, GoATable } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsColorPage() {
  return (
      <ComponentContent>
        <h1>Color</h1>
        <h3>Colors play a big role in how the Government of Alberta communicates. They serve as a tool to convey clarity, express emotions, and promote inclusivity.</h3>
        <GoADivider mt="xl" mb="xl"></GoADivider>
        <p>Our palette is divided into these categories: brand, interactive, text, status, greyscale, extended colors, to ensure flexibility and consistency in our digital services. Grab our tokens <a href="https://design.alberta.ca/design-tokens/color">here</a> to start using our colors.</p>
        <h2>Brand colors</h2>
        <p>These colors represent our identity and are aligned to the Alberta.ca brand guidelines.</p>

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
                    backgroundColor: "#0081A2",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Brand (Default) 
              </td>
              <td>
                #0081A2
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#005072",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Brand (Dark) 
              </td>
              <td>
                #005072
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    backgroundColor: "#C8EEFA",
                    height: "35px",
                    width: "35px",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>
                Brand (Light)
              </td>
              <td>
                #C8EEFA
              </td>
            </tr>
          </tbody>
        </GoATable>
      </ComponentContent>
  );
}
