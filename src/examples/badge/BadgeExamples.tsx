import { GoABadge, GoABlock, GoAContainer, GoAButton, GoATable } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";

const noop = () => {};
export default function CheckboxExamples () {
    return (
        <> 
        {/* Examples*/}
        <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

        <h3 id="component-example-show-status-table">Show status in a table</h3>
        <Sandbox fullWidth>
            <GoATable width="100%">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th className="goa-table-number-header">File number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><GoABadge type="important" content="Pending"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                  <tr>
                    <td><GoABadge type="emergency" content="Failed"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                  <tr>
                    <td><GoABadge type="success" content="Complete"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                  <tr>
                    <td><GoABadge type="information" content="In progress"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                  <tr>
                    <td><GoABadge type="midtone" content="Closed"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                  <tr>
                    <td><GoABadge type="success" content="Complete"/></td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>1234567890</td>
                    <td className="goa-table-number-column">
                        <GoAButton type="tertiary" onClick={noop}>
                            Assign
                        </GoAButton>
                    </td>
                  </tr>
                </tbody>
            </GoATable>
        </Sandbox>

        <h3 id="component-example-multiple-tags-together">Show multiple tags together</h3>
        <Sandbox>
            <GoABlock>
                <GoABadge type="information" content="In progress"/>
                <GoABadge type="important" content="Priority"/>
                <GoABadge type="emergency" content="Past deadline"/>
            </GoABlock>
        </Sandbox>

        <h3 id="component-example-show-status-card">Show a status on a card</h3>
        <Sandbox fullWidth skipRender>
            
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-container type="non-interactive" accent="thick">
                    <div slot="title">Heading</div>
                    <div slot="actions">
                        <goa-badge type="important" content="Priority"></goa-badge>
                    </div>
                    Content
                </goa-container>     
                `}
            />

            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <GoAContainer
                        type="non-interactive"
                        accent="thick"
                        heading="Heading"
                        actions={<GoABadge type="important" content="Priority"/>}>
                        Content
                    </GoAContainer>
                 `}
            />

          <GoAContainer
            type="non-interactive"
            accent="thick"
            heading="Heading"
            actions={<GoABadge type="important" content="Priority"/>}>
            Content
          </GoAContainer>
        </Sandbox>
        </>
    )
}