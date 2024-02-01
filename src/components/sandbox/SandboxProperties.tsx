import {
  GoACheckbox,
  GoADatePicker,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoARadioGroup,
  GoARadioItem,
} from "@abgov/react-components";
import { ComponentBinding } from "./ComponentBinding";
import { GoAFormItemRequirement } from "@abgov/react-components/lib/form/form-item";

interface Props {
  properties?: ComponentBinding[];
  onChange: (props: ComponentBinding[]) => void;
}

export function SandboxProperties({ properties = [], onChange }: Props) {
  function onListChange(name: string, value: string | string[]) {
    const prop = properties.find(p => ["list", "dropdown"].includes(p.type) && p.name === name);
    if (!prop || !["list", "dropdown"].includes(prop.type)) return;
    prop.value = !value ? "" : typeof value === "string" ? value : value[0];
    onChange([...properties]);
  }

  function onRadioChange(name: string, value: string | string[]) {
    const prop = properties.find(p => p.type === "radio" && p.name === name);
    if (!prop || prop.type !== "radio") return;
    prop.value = !value ? "" : typeof value === "string" ? value : value[0];
    onChange([...properties]);
  }

  function onComboboxChange(name: string, value: string | string[]) {
    const prop = properties.find(p => p.type === "combobox" && p.name === name);
    if (!prop || prop.type !== "combobox") return;
    prop.value = !value ? "" : typeof value === "string" ? value : value[0];
    onChange([...properties]);
  }

  function onTextChange(name: string, value: string) {
    const prop = properties.find(p => p.type === "string" && p.name === name);
    if (!prop || prop.type !== "string") return;
    prop.value = value;
    onChange([...properties]);
  }

  function onNumberChange(name: string, value: string) {
    const prop = properties.find(p => p.type === "number" && p.name === name);
    if (!prop || prop.type !== "number") return;
    prop.value = parseFloat(value);
    onChange([...properties]);
  }

  function onCheckboxChange(name: string, checked: boolean, _value: string): void {
    const prop = properties.find(p => p.type === "boolean" && p.name === name);
    if (!prop || prop.type !== "boolean") return;
    prop.value = checked;
    onChange([...properties]);
  }

  function onDateChange(name: string, value: Date): void {
    const prop = properties.find(p => p.type === "date" && p.name === name);
    if (!prop || prop.type !== "date") return;
    prop.value = value;
    onChange([...properties]);
  }

  function toUpperCase(label: string) {
    return label?.length > 0 ? label.charAt(0).toUpperCase() + label.slice(1): "";
  }

  function renderProps(p: ComponentBinding) {
    switch (p.type) {
      case "list":
      case "dropdown":
        return (
          <GoADropdown key={p.name} name={p.name} value={p.value} onChange={onListChange}>
            {p.options.map(option => (
              <GoADropdownItem
                value={option || ""}
                key={option}
                label={toUpperCase(option) || "-"}
              />
            ))}
          </GoADropdown>
        );
      case "combobox":
        return (
          <GoADropdown
            key={p.name}
            name={p.name}
            filterable
            leadingIcon="search"
            value={p.value}
            onChange={onComboboxChange}
          >
            {p.options.map(option => (
              <GoADropdownItem
                value={option || ""}
                key={option}
                label={toUpperCase(option) || "-"}
              />
            ))}
          </GoADropdown>
        );
      case "radio":
        return (
          <GoARadioGroup name={p.name} value={p.value} onChange={onRadioChange}>
            {p.options.map(option => {
              return <GoARadioItem value={option} label={toUpperCase(option) || "None (default)"} key={option} />;
            })}
          </GoARadioGroup>
        );
      case "boolean":
        return (
          <GoACheckbox
            name={p.name}
            checked={p.value}
            onChange={onCheckboxChange}
            mt="xs"
            text="Yes"
          />
        );
      case "string":
        return <GoAInput name={p.name} value={p.value} width={p.width} onChange={onTextChange} />;
      case "number":
        return (
          <GoAInput type="number" name={p.name} value={`${p.value}`} onChange={onNumberChange} />
        );
      case "date":
        return (
          <GoADatePicker onChange={onDateChange} name={p.name} value={p.value} />
        )
    }
  }

  return (
    <div className="sandbox-container">
      {properties.map(p => (
        <GoAFormItem key={p.name} label={p.label || ""} requirement={p.requirement as GoAFormItemRequirement || null}>
          {renderProps(p)}
        </GoAFormItem>
      ))}
    </div>
  );
}

export default SandboxProperties;
