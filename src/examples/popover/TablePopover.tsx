import { useContext, useState, useEffect, useCallback } from "react";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBadge,
  GoabFilterChip,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
  GoabButton,
  GoabPopover,
  GoabTable,
  GoabText
} from "@abgov/react-components";
import "./popover-page-examples.css";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

export const TablePopover = () => {
    const { version } = useContext(LanguageVersionContext);
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const [filter, setFilter] = useState('All');
    const popoverValues = [
        {
        key: 1,
        type: "success",
        status: "Open",
        },
        {
        key: 2,
        type: "midtone",
        status: "Closed",
        },
        {
        key: 3,
        type: "midtone",
        status: "Closed",
        },
        {
        key: 4,
        type: "midtone",
        status: "Closed",
        },
        {
        key: 5,
        type: "success",
        status: "Open",
        },
        {
        key: 6,
        type: "midtone",
        status: "Closed",
        },
    ];

    const [dataFiltered, setDataFiltered] = useState(popoverValues);

    const target = (
        <GoabButton type="tertiary" leadingIcon="funnel" size="compact">
            Filter
        </GoabButton>
    );

    function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
        setSelectedChips([...selectedChips, event.value]);
        return;
    };

    const checkNested = useCallback((obj: object, chip: string): boolean => {
        return Object.values(obj).some(value =>
            typeof value === "object" && value !== null
            ? checkNested(value, chip)
            : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase())
        );
    }, []);

    const removeFilter = (chip: string) => {
        setSelectedChips(selectedChips.filter(c => c !== chip));
    };

    const getFilteredData = useCallback ((selectedChips: string[]) => {
            if (selectedChips.length === 0) {
                return popoverValues;
            }
            const filteredData = popoverValues.filter((item: object) =>
                selectedChips.every(chip => checkNested(item, chip))
            );

            return filteredData;
        }, 
        [checkNested, popoverValues]
    );

    useEffect(() => {
        setDataFiltered(getFilteredData(selectedChips));
    }, [getFilteredData, selectedChips]);
    
    return (
        <>
        <Sandbox fullWidth skipRender allow={["h3", "div"]}>
            {/*============= React code ==============*/}
            {version === "old" && (
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    function onChange(name: string, value: string) {
                        console.log("onChange", name, value);
                    }

                    const target = (
                        <GoAButton type="tertiary" leadingIcon="funnel" size="compact">
                            Filter
                        </GoAButton>
                    );

                    const popoverValues = [
                        {
                            key: 1,
                            type: "success",
                            status: "Open",
                        },
                        {
                            key: 2,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 3,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 4,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 5,
                            type: "success",
                            status: "Open",
                        },
                        {
                            key: 6,
                            type: "midtone",
                            status: "Closed",
                        },
                    ];
                `}
            />
            )}
    
            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
                        console.log("onChange", event.name, event.value);
                    }

                    const target = (
                        <GoabButton type="tertiary" leadingIcon="funnel" size="compact">
                            Filter
                        </GoabButton>
                    );

                    const popoverValues = [
                        {
                            key: 1,
                            type: "success",
                            status: "Open",
                        },
                        {
                            key: 2,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 3,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 4,
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            key: 5,
                            type: "success",
                            status: "Open",
                        },
                        {
                            key: 6,
                            type: "midtone",
                            status: "Closed",
                        },
                    ];
                `}
            />
            )}
    
            {version === "old" && (
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <div className="goa-table-heading-container">
                        <h3>Table with a filter</h3>
                        <GoAPopover target={target}>
                            <form>
                                <GoAFormItem label="Status">
                                    <GoARadioGroup name="item" onChange={onChange}>
                                        <GoARadioItem value="1" label="Open"></GoARadioItem>
                                        <GoARadioItem value="2" label="Closed"></GoARadioItem>
                                    </GoARadioGroup>
                                </GoAFormItem>
                                <GoAButton type="tertiary" mt="m">Remove filter</GoAButton>
                            </form>
                        </GoAPopover>
                    </div>
                    <GoATable width="100%" mb="xl">
                        <thead>
                            <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popoverValues.map(u => (
                            <tr key={u.key}>
                                <td><GoABadge type={u.type as GoABadgeType} content={u.status} /></td>
                                <td>Lorem ipsum</td>
                                <td className="goa-table-number-column">1234567890</td>
                                <td><GoAButton type="tertiary">Action</GoAButton></td>
                            </tr>
                            ))}
                        </tbody>
                    </GoATable>
                `}
            />
            )}
    
            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={` 
                    <div className="goa-table-heading-container">
                        <h3>Table with a filter</h3>
                        <GoabPopover target={target}>
                            <form>
                                <GoabFormItem label="Status">
                                    <GoabRadioGroup name="item" onChange={radioGroupOnChange}>
                                        <GoabRadioItem value="1" label="Open"></GoabRadioItem>
                                        <GoabRadioItem value="2" label="Closed"></GoabRadioItem>
                                    </GoabRadioGroup>
                                </GoabFormItem>
                                <GoabButton type="tertiary" mt="m">Remove filter</GoabButton>
                            </form>
                        </GoabPopover>
                    </div>
                    <GoabTable width="100%" mb="xl">
                        <thead>
                            <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popoverValues.map(u => (
                            <tr key={u.key}>
                                <td><GoabBadge type={u.type as GoabBadgeType} content={u.status} /></td>
                                <td>Lorem ipsum</td>
                                <td className="goa-table-number-column">1234567890</td>
                                <td><GoabButton type="tertiary">Action</GoabButton></td>
                            </tr>
                            ))}
                        </tbody>
                    </GoabTable>
                `}
            />
            )}
    
            {/*================ Angular code ==================*/}
            {version === "old" && (
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    onClick($event: Event) {
                        console.log("clicked");
                    }

                    popoverValues = [
                        {
                            type: "success",
                            status: "Open",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            type: "success",
                            status: "Open",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                    ];
                `}
            />
            )}
    
            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    onClick() {
                        console.log("clicked");
                    }

                    popoverValues: {type: GoabBadgeType, content: string}[] = [
                        {
                            type: "success",
                            status: "Open",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                        {
                            type: "success",
                            status: "Open",
                        },
                        {
                            type: "midtone",
                            status: "Closed",
                        },
                    ];
                `}
            />
            )}
    
            {version === "old" && (
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <div class="goa-table-heading-container">
                    <h3>Table with a filter</h3>
                    <goa-popover [target]="target">
                        <form>
                            <goa-form-item label="Status">
                                <goa-radio-group name="selectOne" formControlName="selectOne">
                                    <goa-radio-item value="1" label="Open"></goa-radio-item>
                                    <goa-radio-item value="2" label="Closed"></goa-radio-item>
                                </goa-radio-group>
                            </goa-form-item>
                            <goa-button type="tertiary" mt="m" (_click)="onClick($event)">Remove filter</goa-button>
                        </form>
                        <div slot="target">
                            <goa-button type="tertiary" leadingicon="funnel" size="compact">Filter</goa-button>
                        </div>
                    </goa-popover>
                </div>
                <goa-table width="100%" mb="xl">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tr *ngFor="let u of popoverValues">
                            <td><goa-badge [type]="u.type" [content]="u.status" /></td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td><goa-button type="tertiary" (_click)="onClick($event)">Action</goa-button></td>
                        </tr>
                    </tbody>
                </goa-table>
                `}
            />
            )}
    
            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <div class="goa-table-heading-container">
                    <h3>Table with a filter</h3>
                    <goab-popover [target]="target">
                        <form>
                            <goab-form-item label="Status">
                                <goab-radio-group name="selectOne" formControlName="selectOne">
                                    <goab-radio-item value="1" label="Open"></goab-radio-item>
                                    <goab-radio-item value="2" label="Closed"></goab-radio-item>
                                </goab-radio-group>
                            </goab-form-item>
                            <goab-button type="tertiary" mt="m" (_click)="onClick()">Remove filter</goab-button>
                        </form>
                        <div slot="target">
                            <goab-button type="tertiary" leadingIcon="funnel" size="compact">Filter</goab-button>
                        </div>
                    </goab-popover>
                </div>
                <goab-table width="100%" mb="xl">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tr *ngFor="let u of popoverValues">
                            <td><goab-badge [type]="u.type" [content]="u.status" /></td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td><goab-button type="tertiary" (_click)="onClick()">Action</goab-button></td>
                        </tr>
                    </tbody>
                </goab-table>
                `}
            />
            )}
            <div className="goa-table-heading-container">
                <h3>Table with a filter</h3>
                <GoabPopover target={target}>
                    <form>
                        <GoabFormItem label="Status">
                            <GoabRadioGroup name="item" onChange={radioGroupOnChange}>
                                <GoabRadioItem value="Open" checked={filter === '1'} label="Open"></GoabRadioItem>
                                <GoabRadioItem value="Closed" checked={filter === '2'} label="Closed"></GoabRadioItem>
                            </GoabRadioGroup>
                        </GoabFormItem>
                    </form>
                </GoabPopover>
            </div>
             {selectedChips.length > 0 && (
                <div>
                <GoabText tag="span" color="secondary" mb="xs" mr="xs">
                    Filter:
                </GoabText>
                {selectedChips.length > 0 &&
                    selectedChips.map((selectedChip, index) => (
                    <GoabFilterChip
                        key={index}
                        content={selectedChip}
                        mb="xs"
                        mr="xs"
                        onClick={() => removeFilter(selectedChip)}
                    />
                    ))}
                <GoabButton type="tertiary" size="compact" mb="xs" onClick={() => setSelectedChips([])}>
                    Clear all
                </GoabButton>
                </div>
            )}
            <GoabTable width="100%" mb="xl">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFiltered.map(u => (
                    <tr key={u.key}>
                        <td><GoabBadge type={u.type as GoabBadgeType} content={u.status} /></td>
                        <td>Lorem ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td><GoabButton type="tertiary">Action</GoabButton></td>
                    </tr>
                    ))}
                </tbody>
            </GoabTable>
        </Sandbox>
        </>
    );
}
