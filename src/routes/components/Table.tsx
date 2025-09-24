import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import { GoabBadge, GoabButton, GoabTab, GoabTable, GoabTabs } from "@abgov/react-components";
import { GoabTableProps } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabTableOnSortDetail } from "@abgov/ui-components-common";
import { omit } from "lodash";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { TablesExamples } from "@examples/tables/TablesExamples.tsx";

type ComponentPropsType = Omit<GoabTableProps, "onSort"> & {
  onSort?: (sortBy: string, sortDir: number) => void;
};

export default function TablePage() {
  const [tableProps, setTableProps] = useState<ComponentPropsType>({
    width: "100%",
  });
  const FIGMA_LINK =
    "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=3785-18038";
  const [tableBindings, setTableBindings] = useState<ComponentBinding[]>([
    {
      label: "Width",
      type: "string",
      name: "width",
      value: "100%",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "relaxed"],
      defaultValue: "normal",
      value: "",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "width",
      type: "string",
      description: "Width of the table. By default it will fit the enclosed content.",
    },
    {
      name: "variant",
      type: "normal | relaxed",
      description: "A relaxed variant of the table with more vertical padding for the cells",
      defaultValue: "normal",
    },
    {
      name: "_sort",
      lang: "angular",
      type: "CustomEvent({detail: {sortBy: string: sortDir: number}})",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "onSort",
      lang: "react",
      type: "(sortBy: string, sortDir: number) => void",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "width",
      type: "string",
      description: "Width of the table. By default it will fit the enclosed content.",
    },
    {
      name: "variant",
      type: "GoabTableVariant (normal | relaxed)",
      description: "A relaxed variant of the table with more vertical padding for the cells",
      defaultValue: "normal",
    },
    {
      name: "onSort",
      type: "(event: GoabTableOnSortDetail) => void",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
  ];

  function onSandboxChange(tableBindings: ComponentBinding[], props: Record<string, unknown>) {
    setTableBindings(tableBindings);
    setTableProps(props as ComponentPropsType);
  }

  return (
    <>
      <ComponentHeader
        name="Table"
        category={Category.CONTENT_AND_LAYOUT}
        description="A set of structured data that is easy for a user to scan, examine, and compare."
        relatedComponents={[
          { link: "/components/button", name: "Button" },
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/filter-chip", name: "Filter chip" },
          { link: "/components/pagination", name: "Pagination" },
          { link: "/components/tabs", name: "Tabs" },
        ]}
        githubLink="Table"
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={tableBindings} onChange={onSandboxChange} fullWidth>
              <GoabTable
                {...omit(tableProps, "onSort")}
                onSort={(detail: GoabTableOnSortDetail) => {
                  if (tableProps.onSort) {
                    tableProps.onSort(detail.sortBy, detail.sortDir);
                  }
                }}>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                </tbody>
              </GoabTable>
            </Sandbox>

            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
          </GoabTab>
          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }>
            <TablesExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
