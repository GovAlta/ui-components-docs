import { GoabDropdown, GoabDropdownItem, GoabFormItem } from "@abgov/react-components";
import { useContext } from "react";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const FilterItemsInADropdownList = () => {
    const {version} = useContext(LanguageVersionContext);
    
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
                    <goa-form-item label="Filter dropdown">
                        <goa-dropdown (_change)="onChange($event) name="item" leadingIcon="search" filterable="true">
                            <goa-dropdown-item value="bus" label="Bus" />
                            <goa-dropdown-item value="elephant" label="Elephant" />
                            <goa-dropdown-item value="key" label="Key" />
                            <goa-dropdown-item value="pen" label="Pen" />
                            <goa-dropdown-item value="watch" label="Watch" />
                            <goa-dropdown-item value="truck" label="Truck" />
                            <goa-dropdown-item value="pencil" label="Pencil" />
                            <goa-dropdown-item value="television" label="Television" />
                            <goa-dropdown-item value="vehicle" label="Vehicle" />
                        </goa-dropdown>
                    </goa-form-item>
                `}
            />}

            {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    <goab-form-item label="Filter dropdown">
                        <goab-dropdown (onChange)="dropdownOnChange($event)" name="item" leadingIcon="search" [filterable]="true">
                            <goab-dropdown-item value="bus" label="Bus" />
                            <goab-dropdown-item value="elephant" label="Elephant" />
                            <goab-dropdown-item value="key" label="Key" />
                            <goab-dropdown-item value="pen" label="Pen" />
                            <goab-dropdown-item value="watch" label="Watch" />
                            <goab-dropdown-item value="truck" label="Truck" />
                            <goab-dropdown-item value="pencil" label="Pencil" />
                            <goab-dropdown-item value="television" label="Television" />
                            <goab-dropdown-item value="vehicle" label="Vehicle" />
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
                    <GoAFormItem label="Filter dropdown">
                        <GoADropdown onChange={onChange} name="item" value="" leadingIcon="search" filterable={true}>
                            <GoADropdownItem value="bus" label="Bus" />
                            <GoADropdownItem value="elephant" label="Elephant" />
                            <GoADropdownItem value="key" label="Key" />
                            <GoADropdownItem value="pen" label="Pen" />
                            <GoADropdownItem value="watch" label="Watch" />
                            <GoADropdownItem value="truck" label="Truck" />
                            <GoADropdownItem value="pencil" label="Pencil" />
                            <GoADropdownItem value="television" label="Television" />
                            <GoADropdownItem value="vehicle" label="Vehicle" />
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
                    <GoabFormItem label="Filter dropdown">
                        <GoabDropdown onChange={dropdownOnChange} name="item" value="" leadingIcon="search" filterable={true}>
                            <GoabDropdownItem value="bus" label="Bus" />
                            <GoabDropdownItem value="elephant" label="Elephant" />
                            <GoabDropdownItem value="key" label="Key" />
                            <GoabDropdownItem value="pen" label="Pen" />
                            <GoabDropdownItem value="watch" label="Watch" />
                            <GoabDropdownItem value="truck" label="Truck" />
                            <GoabDropdownItem value="pencil" label="Pencil" />
                            <GoabDropdownItem value="television" label="Television" />
                            <GoabDropdownItem value="vehicle" label="Vehicle" />
                        </GoabDropdown>
                    </GoabFormItem>
                `}
            />}

            <GoabFormItem label="Filter dropdown">
                <GoabDropdown name="item" value="" leadingIcon="search" filterable={true}>
                    <GoabDropdownItem value="bus" label="Bus" />
                    <GoabDropdownItem value="elephant" label="Elephant" />
                    <GoabDropdownItem value="key" label="Key" />
                    <GoabDropdownItem value="pen" label="Pen" />
                    <GoabDropdownItem value="watch" label="Watch" />
                    <GoabDropdownItem value="truck" label="Truck" />
                    <GoabDropdownItem value="pencil" label="Pencil" />
                    <GoabDropdownItem value="television" label="Television" />
                    <GoabDropdownItem value="vehicle" label="Vehicle" />
                </GoabDropdown>
            </GoabFormItem>
        </Sandbox>
    );
}

export default FilterItemsInADropdownList;
