export type ComponentBinding =
  | BooleanBinding
  | StringBinding
  | ListBinding
  | ComboboxBinding
  | DropdownBinding
  | RadioBinding
  | NumberBinding
  | DateBinding
  | EmptyBinding;

interface BaseBinding {
  name: string;
  label: string;
  requirement?: string;
  helpText?: string;
  dynamic?: boolean; // If the value is dynamic, it will be displayed to bind with a variable under code snippet
  hidden?: boolean; // if the value is true, it will hide the property field at sandbox properties
}

export interface EmptyBinding extends BaseBinding {
  type: "";
  value: null;
}

export interface BooleanBinding extends BaseBinding {
  type: "boolean";
  value: boolean;
}

export interface NumberBinding extends BaseBinding {
  type: "number";
  value?: number;
}

export interface StringBinding extends BaseBinding {
  type: "string";
  value: string;
  width?: string;
}

export interface ListBinding extends BaseBinding {
  type: "list";
  options: string[];
  value: string;
  defaultValue?: string;
}

export interface ComboboxBinding extends BaseBinding {
  type: "combobox";
  options: string[];
  value: string;
  defaultValue?: string;
}

export interface DropdownBinding extends BaseBinding {
  type: "dropdown";
  options: string[];
  value: string;
  defaultValue?: string;
}

export interface RadioBinding extends BaseBinding {
  type: "radio";
  options: string[];
  value: string;
  defaultValue?: string;
}

export interface DateBinding extends BaseBinding {
  type: "date",
  value?: Date|string;
}
