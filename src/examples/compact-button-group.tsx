import { useContext } from "react";
import { Sandbox } from "@components/sandbox";
import { GoabButtonGroup, GoabButton } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

function onClick() {
  console.log('clicked');
}

export const CompactButtonGroup = () => {
    const { version } = useContext(LanguageVersionContext); 

    return (
        <Sandbox fullWidth skipRender>

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        function onClick() {
                            console.log('clicked');
                        }
                    `}
                />
            )}

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        <GoAButtonGroup alignment="center">
                            <GoAButton onClick={onClick}  size="compact" type="primary">
                                Button
                            </GoAButton>
                            <GoAButton onClick={onClick}  size="compact" type="secondary">
                                Button
                            </GoAButton>
                            <GoAButton onClick={onClick}  size="compact" type="tertiary">
                                Button
                            </GoAButton>
                        </GoAButtonGroup>
                    `}
                />
            )}

            {version === "new" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        function onClick() {
                            console.log('clicked');
                        }
                    `}
                />
            )}
            
            {version === "new" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        <GoabButtonGroup alignment="center">
                            <GoabButton onClick={onClick}  size="compact" type="primary">
                                Button
                            </GoabButton>
                            <GoabButton onClick={onClick}  size="compact" type="secondary">
                                Button
                            </GoabButton>
                            <GoabButton onClick={onClick}  size="compact" type="tertiary">
                                Button
                            </GoabButton>
                        </GoabButtonGroup>
                    `}
                />
            )}

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                        export class SomeOtherComponent {
                            onClick() {
                                console.log('clicked');
                            }
                        }
                    `}
                />
            )}

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                        <goa-button-group alignment="center">
                            <goa-button (_click)="onClick($event)" size="compact" type="primary">
                                Button
                            </GoAButton>
                            <goa-button (_click)="onClick($event)" size="compact" type="secondary">
                                Button
                            </GoAButton>
                            <goa-button (_click)="onClick($event)" size="compact" type="tertiary">
                                Button
                            </GoAButton>
                        </goa-button-group>
                    `}
                />
            )}

            {version === "new" && (
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                        export class SomeOtherComponent {
                            onClick() {
                                console.log('clicked');
                            }
                        }
                    `}
                />
            )}

            {version === "new" && (
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                        <goab-button-group alignment="center">
                            <goab-button (_click)="onClick($event)" size="compact" type="primary">
                                Button
                            </GoAButton>
                            <goab-button (_click)="onClick($event)" size="compact" type="secondary">
                                Button
                            </GoAButton>
                            <goab-button (_click)="onClick($event)" size="compact" type="tertiary">
                                Button
                            </GoAButton>
                        </goab-button-group>
                    `}
                />
            )}

      <GoabButtonGroup alignment="center">
        <GoabButton onClick={onClick}  size="compact" type="primary">
            Button
        </GoabButton>
        <GoabButton onClick={onClick}  size="compact" type="secondary">
            Button
        </GoabButton>
        <GoabButton onClick={onClick}  size="compact" type="tertiary">
            Button
        </GoabButton>
      </GoabButtonGroup>
    </Sandbox>
  )
}

export default CompactButtonGroup;
