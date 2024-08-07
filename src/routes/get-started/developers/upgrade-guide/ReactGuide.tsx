import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoATable } from "@abgov/react-components";
import { InlineCode } from "@components/inline-code/InlineCode.tsx";
import { components } from "@routes/get-started/developers/upgrade-guide/components.ts";

export const ReactGuide = () => {
  const componentNames = components.filter(x => x.react);
  return (
    <>
      <h2 id="react">Migrating a React app</h2>
      <p>
        The React components for the DDD Design System are still located in the{" "}
        <InlineCode>@abgov/react-components</InlineCode> package. However, starting with version 6,
        component properties should be imported from{" "}
        <InlineCode>@abgov/ui-components-common</InlineCode> instead of{" "}
        <InlineCode>@abgov/react-components</InlineCode>.
      </p>

      <h4>1. Update dependencies</h4>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          npm i @abgov/web-components@latest
          npm i @abgov/react-components@latest
          npm i @abgov/ui-components-common@latest
        `}
      />

      <h4>
        2. Rename all components name from <InlineCode>GoAName</InlineCode> to{" "}
        <InlineCode>GoabName</InlineCode>
      </h4>
      <p>
        After updating your packages, use your preferred code editor to perform a find/replace
        operation. Replace the prefix <InlineCode>GoA--</InlineCode> with{" "}
        <InlineCode>Goab--</InlineCode> for all component names. For example:
      </p>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          // Before
          import {GoAAccordion, GoAButton, GoACallout, GoAHeadingSize } from '@abgov/react-components';
          
          // After
          import {GoabAccordion, GoabButton, GoabCallout} from '@abgov/react-components';
          import {GoabAccordionHeadingSize} from '@abgov/ui-components-common';
        `}
      />

      <h4>3. Update components' props that have changed</h4>
      <p>
        In v6, some of our properties have changed, go through the following table and make changes as necessary in your codebase.
      </p>
      <GoATable width={"100%"} mb={"m"}>
        <thead>
          <th>Component Name</th>
          <th>v5(lts)</th>
          <th>v6(latest)</th>
        </thead>
        <tbody>
          {componentNames.map((component, index) => (
            <tr key={index}>
              <td>{component.name}</td>
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
      </GoATable>
    </>
  );
};
