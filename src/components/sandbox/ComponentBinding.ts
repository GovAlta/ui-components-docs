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
  dynamic?: boolean;
  hidden?: boolean;
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
  value?: Date;
}
