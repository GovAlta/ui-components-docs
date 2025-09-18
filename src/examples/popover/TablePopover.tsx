import { useContext, useState } from "react";
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
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const popoverValues = [
        { key: 1, type: "success", status: "Open" },
        { key: 2, type: "midtone", status: "Closed" },
        { key: 3, type: "midtone", status: "Closed" },
        { key: 4, type: "midtone", status: "Closed" },
        { key: 5, type: "success", status: "Open" },
        { key: 6, type: "midtone", status: "Closed" },
    ];

    const target = (
        <GoabButton type="tertiary" leadingIcon="funnel" size="compact" aria-label="Filter table">
            Filter
        </GoabButton>
    );

    function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
        setSelectedFilter(event.value);
    }

    const filteredData = selectedFilter ? popoverValues.filter((item) =>
        item.status === selectedFilter
    ) : popoverValues;

    return (
        <>
        <Sandbox fullWidth skipRender allow={["h3", "div"]}>
            {/*============= React code ==============*/}

            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

                    const popoverValues = [
                        {
                            key: 1,
                            type: "success",
                            status: "Open"
                        },
                        {
                            key: 2,
                            type: "midtone",
                            status: "Closed"
                        },
                        {
                            key: 3,
                            type: "midtone",
                            status: "Closed"
                        },
                        {
                            key: 4,
                            type: "midtone",
                            status: "Closed"
                        },
                        {
                            key: 5,
                            type: "success",
                            status: "Open"
                        },
                        {
                            key: 6,
                            type: "midtone",
                            status: "Closed"
                        },
                    ];

                    const target = (
                        <GoabButton type="tertiary" leadingIcon="funnel" size="compact" aria-label="Filter table">
                            Filter
                        </GoabButton>
                    );

                    function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
                        setSelectedFilter(event.value);
                    }

                    const filteredData = selectedFilter ? popoverValues.filter((item) =>
                        item.status === selectedFilter
                    ) : popoverValues;
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
                                    <GoabRadioGroup name="item" onChange={radioGroupOnChange} value={selectedFilter ?? ""}>
                                        <GoabRadioItem value="Open" label="Open" />
                                        <GoabRadioItem value="Closed" label="Closed" />
                                    </GoabRadioGroup>
                                </GoabFormItem>
                                <GoabButton
                                    type="tertiary"
                                    mt="m"
                                    onClick={() => setSelectedFilter(null)}
                                    aria-label="Remove filter"
                                >
                                    Remove filter
                                </GoabButton>
                            </form>
                        </GoabPopover>
                    </div>
                    {selectedFilter && (
                        <div>
                            <GoabText tag="span" color="secondary" mb="xs" mr="xs">
                                Filter:
                            </GoabText>
                            <GoabFilterChip
                                content={selectedFilter}
                                mb="xs"
                                mr="xs"
                                onClick={() => setSelectedFilter(null)}
                            />
                            <GoabButton
                                type="tertiary"
                                size="compact"
                                mb="xs"
                                onClick={() => setSelectedFilter(null)}
                            >
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
                            {filteredData.map((u) => (
                                <tr key={u.key}>
                                <td>
                                    <GoabBadge type={u.type as GoabBadgeType} content={u.status} />
                                </td>
                                <td>Lorem ipsum</td>
                                <td className="goa-table-number-column">1234567890</td>
                                <td>
                                    <GoabButton type="tertiary">Action</GoabButton>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </GoabTable>
                `}
            />
            )}

            {/*================ Angular code ==================*/}

            {version === "new" && (
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    interface PopoverValue {
                        key: number;
                        type: string;
                        status: string;
                    }

                    @Component({
                        selector: 'app-table-popover',
                        templateUrl: './table-popover.component.html',
                    })

                    export class TablePopoverComponent {
                        selectedFilter = new FormControl<string | null>(null);

                        popoverValues: PopoverValue[] = [
                            { 
                                key: 1, 
                                type: 'success', 
                                status: 'Open' 
                            },
                            { 
                                key: 2, 
                                type: 'midtone', 
                                status: 'Closed' 
                            },
                            { 
                                key: 3, 
                                type: 'midtone', 
                                status: 'Closed' 
                            },
                            { 
                                key: 4, 
                                type: 'midtone', 
                                status: 'Closed' 
                            },
                            { 
                                key: 5, 
                                type: 'success', 
                                status: 'Open' 
                            },
                            { 
                                key: 6, 
                                type: 'midtone', 
                                status: 'Closed' 
                            },
                        ];

                        get filteredData(): PopoverValue[] {
                            const filter = this.selectedFilter.value;
                            return filter
                            ? this.popoverValues.filter(item => item.status === filter)
                            : this.popoverValues;
                        }

                        clearFilter() {
                            this.selectedFilter.setValue(null);
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
                <div class="goa-table-heading-container">
                    <h3>Table with a filter</h3>
                    <goab-popover [target]="filterTarget">
                        <form>
                            <goab-form-item label="Status">
                                <goab-radio-group [formControl]="selectedFilter" name="item">
                                    <goab-radio-item value="Open" label="Open"></goab-radio-item>
                                    <goab-radio-item value="Closed" label="Closed"></goab-radio-item>
                                </goab-radio-group>
                            </goab-form-item>
                            <goab-button type="tertiary" mt="m" (_click)="onClick()">Remove filter</goab-button>
                        </form>
                        <ng-template #filterTarget>
                            <goab-button
                                type="tertiary"
                                leadingIcon="funnel"
                                size="compact"
                            >
                                Filter  
                            </goab-button>
                        </ng-template>
                    </goab-popover>
                </div>

                <div *ngIf="selectedFilter.value">
                    <goab-text tag="span" color="secondary" mb="xs" mr="xs">
                        Filter:
                    </goab-text>
                    <goab-filter-chip
                        [content]="selectedFilter.value"
                        mb="xs"
                        mr="xs"
                        (click)="clearFilter()"
                    ></goab-filter-chip>
                    <goab-button
                        type="tertiary"
                        size="compact"
                        mb="xs"
                        (click)="clearFilter()"
                    >
                        Clear all
                    </goab-button>
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
                            <GoabRadioGroup name="item" onChange={radioGroupOnChange} value={selectedFilter ?? ""}>
                                <GoabRadioItem value="Open" label="Open" />
                                <GoabRadioItem value="Closed" label="Closed" />
                            </GoabRadioGroup>
                        </GoabFormItem>
                        <GoabButton
                            type="tertiary"
                            mt="m"
                            onClick={() => setSelectedFilter(null)}
                        >
                            Remove filter
                        </GoabButton>
                    </form>
                </GoabPopover>
            </div>
            {selectedFilter && (
                <div>
                    <GoabText tag="span" color="secondary" mb="xs" mr="xs">
                        Filter:
                    </GoabText>
                    <GoabFilterChip
                        content={selectedFilter}
                        mb="xs"
                        mr="xs"
                        onClick={() => setSelectedFilter(null)}
                    />
                    <GoabButton
                        type="tertiary"
                        size="compact"
                        mb="xs"
                        onClick={() => setSelectedFilter(null)}
                        aria-label="Clear all filters"
                    >
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
                    {filteredData.map((u) => (
                        <tr key={u.key}>
                        <td>
                            <GoabBadge type={u.type as GoabBadgeType} content={u.status} />
                        </td>
                        <td>Lorem ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                            <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </GoabTable>
        </Sandbox>
        </>
    );
};
