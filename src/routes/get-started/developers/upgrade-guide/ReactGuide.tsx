import { GoabText } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabTable } from "@abgov/react-components";
import { InlineCode } from "@components/inline-code/InlineCode.tsx";
import { components } from "@routes/get-started/developers/upgrade-guide/components.ts";

export const ReactGuide = () => {
  const componentNames = components.filter(x => x.react);
  return (
    <>
      <h2 id="react">Migrating a React app</h2>
      <GoabText size="body-m" mt="l" mb="l">
        The React components for the DDD Design System are still located in the{" "}
        <InlineCode>@abgov/react-components</InlineCode> package.
      </GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">
        1. Update dependencies
      </GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          npm i @abgov/web-components@latest
          npm i @abgov/react-components@latest
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">
        2. Rename all components name from <InlineCode>GoAName</InlineCode> to{" "}
        <InlineCode>GoabName</InlineCode>
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        After updating your packages, use your preferred code editor to perform a find/replace
        operation. Replace the prefix <InlineCode>GoA--</InlineCode> with{" "}
        <InlineCode>Goab--</InlineCode> for all component names. For example:
      </GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          // Before
          import {GoAAccordion, GoAButton, GoACallout, GoAHeadingSize } from '@abgov/react-components';
          
          // After
          import {GoabAccordion, GoabButton, GoabCallout, GoabAccordionHeadingSize} from '@abgov/react-components';
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">
        3. Update components' props that have changed
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In v6, some of our properties have changed, go through the following table and make changes
        as necessary in your codebase.
      </GoabText>
      <GoabTable width={"100%"} mb={"3xl"}>
        <thead>
          <th>Component</th>
          <th>v5(LTS)</th>
          <th>v6(latest)</th>
        </thead>
        <tbody>
          {componentNames.map((component, index) => (
            <tr key={index}>
              <td>
                <b>{component.name}</b>
              </td>
              <td>
                <ul>
                  {component.react?.map((prop, propsIndex) => (
                    <li key={propsIndex}>
                      {prop.name}: {prop.v5 && <span>{prop.v5}</span>} {prop.v5 == null && "N/A"}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {component.react?.map((prop, propsIndex) => (
                    <li key={propsIndex}>
                      {prop.name}: {prop.v6 && <span>{prop.v6}</span>}{" "}
                      {prop.v6 == null && <strong>Removed</strong>}{" "}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </GoabTable>
    </>
  );
};
