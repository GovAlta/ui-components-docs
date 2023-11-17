import {useState} from "react";
import {ComponentBinding, Sandbox} from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import {Category, ComponentHeader} from "@components/component-header/ComponentHeader";
import {GoABadge, GoAGrid, GoATab, GoATabs} from "@abgov/react-components";

export default function GridPage() {
  const [gridProps, setGridProps] = useState({
    minChildWidth: "320px",
  });
  const [gridBindings, setGridBindings] = useState<ComponentBinding[]>([
    {
      label: "Gap",
      type: "list",
      name: "gap",
      options: ["", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "m",
    },
    {
      label: "Minimum width",
      type: "string",
      name: "minChildWidth",
      value: "320px",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "gap",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Gap between child items",
      defaultValue: "m",
    },
    {
      name: "minChildWidth",
      type: "string",
      description: "Minimum width of the child elements",
      required: true,
      lang: "react",
    },
    {
      name: "minchildwidth",
      type: "string",
      description: "Minimum width of the child elements",
      required: true,
      lang: "angular",
    },
  ];

  function onSandboxChange(gridBindings: ComponentBinding[], props: Record<string, unknown>) {
    setGridBindings(gridBindings);
    setGridProps(props as {minChildWidth: string; gap: string; [key: string]: unknown});
  }

  return (
    <>
      <ComponentHeader
        name="Grid"
        category={Category.UTILITIES}
        description="The grid helps to arrange a number of components into a responsive grid pattern."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Grid sandbox*/}
          <Sandbox properties={gridBindings} onChange={onSandboxChange} fullWidth>
            <GoAGrid {...gridProps}>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}>
                1
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}>
                2
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}>
                3
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}>
                4
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}>
                5
              </div>
            </GoAGrid>
          </Sandbox>
          {/*Grid component properties*/}
          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }></GoATab>
      </GoATabs>
    </>
  );
}
