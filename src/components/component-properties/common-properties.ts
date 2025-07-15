import { ComponentProperty } from "@components/component-properties/ComponentProperties.tsx";

export const LegacyMarginProperty: ComponentProperty = {
  name: "mt,mr,mb,ml",
  type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
  description: "Apply margin to the top, right, bottom, and/or left of the component.",
};
export const MarginProperty: ComponentProperty = {
  name: "mt,mr,mb,ml",
  type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
  description: "Apply margin to the top, right, bottom, and/or left of the component.",
};
export const TestIdProperty: ComponentProperty = {
  name: "testId",
  type: "string",
  description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
};
export const LegacyTestIdProperties: ComponentProperty[] = [
  {
    name: "testId",
    type: "string",
    lang: "react",
    description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
  },
  {
    name: "testid",
    type: "string",
    lang: "angular",
    description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
  },
];
