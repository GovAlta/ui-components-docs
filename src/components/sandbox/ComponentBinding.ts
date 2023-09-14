export type ComponentBinding =
  | BooleanBinding
  | StringBinding
  | ListBinding
  | NumberBinding
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
  checkboxValue?: string; // value dispatched to binding components can be a string
}

export interface NumberBinding extends BaseBinding {
  type: "number";
  value: number;
}

export interface StringBinding extends BaseBinding {
  type: "string";
  value: string;
}

export interface ListBinding extends BaseBinding {
  type: "list";
  options: string[];
  value: string;
  defaultValue?: string;
}
