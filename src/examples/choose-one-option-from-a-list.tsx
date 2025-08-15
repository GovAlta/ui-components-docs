import { GoabDropdown, GoabDropdownItem, GoabFormItem } from "@abgov/react-components";
import { useContext } from "react";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ChooseOneOptionFromList = () => {
    const {version} = useContext(LanguageVersionContext);
    const noop = () => {}
    return (
        
        <Sandbox flags={["event"]} skipRender>

            {version === "old" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    export class SomeOtherComponent {
                        dropdownOnChange(event: GoabDropdownOnChangeDetail) {
                            console.log(event);
                        }
                    }
                `}
            />}
            
            {version === "old" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    <goa-form-item label="Basic dropdown">
                        <goa-dropdown (_change)="onChange($event) name="item" value="" placeholder="--Select--">
                            <goa-dropdown-item value="add" label="Add"></goa-dropdown-item>
                            <goa-dropdown-item value="remove" label="Remove"></goa-dropdown-item>
                            <goa-dropdown-item value="modify" label="Modify"></goa-dropdown-item>
                        </goa-dropdown>
                    </goa-form-item>
                `}
            />}

            {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    <goab-form-item label="Basic dropdown">
                        <goab-dropdown (onChange)="dropdownOnChange($event)" name="item" value="" placeholder="--Select--">
                            <goab-dropdown-item value="add" label="Add"></goab-dropdown-item>
                            <goab-dropdown-item value="remove" label="Remove"></goab-dropdown-item>
                            <goab-dropdown-item value="modify" label="Modify"></goab-dropdown-item>
                        </goab-dropdown>
                    </goab-form-item>
                `}
            />}

            {version === "old" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    function onChange(name: string, value: Date) {
                        console.log(name, value);
                    }
                `}
            />}

            {version === "old" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <GoAFormItem label="Basic dropdown">
                        <GoADropdown onChange={onChange} name="item" value="" placeholder="--Select--">
                            <GoADropdownItem value="add" label="Add"></GoADropdownItem>
                            <GoADropdownItem value="remove" label="Remove"></GoADropdownItem>
                            <GoADropdownItem value="modify" label="Modify"></GoADropdownItem>
                        </GoADropdown>
                    </GoAFormItem>
                `}
            />}

            {version === "new" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    function dropdownOnChange(event: GoabDropdownOnChangeDetail)) {
                        console.log(event.value);
                    }
                `}
            />}
            
            {version === "new" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <GoabFormItem label="Basic dropdown">
                        <GoabDropdown onChange={dropdownOnChange} name="item" value="" placeholder="--Select--">
                            <GoabDropdownItem value="add" label="Add"></GoabDropdownItem>
                            <GoabDropdownItem value="remove" label="Remove"></GoabDropdownItem>
                            <GoabDropdownItem value="modify" label="Modify"></GoabDropdownItem>
                        </GoabDropdown>
                    </GoabFormItem>
                `}
            />}

            <GoabFormItem label="Basic dropdown">
                <GoabDropdown onChange={noop} name="item" value="" placeholder="--Select--">
                    <GoabDropdownItem value="add" label="Add"></GoabDropdownItem>
                    <GoabDropdownItem value="remove" label="Remove"></GoabDropdownItem>
                    <GoabDropdownItem value="modify" label="Modify"></GoabDropdownItem>
                </GoabDropdown>
            </GoabFormItem>
        </Sandbox>
    );
}

export default ChooseOneOptionFromList;
