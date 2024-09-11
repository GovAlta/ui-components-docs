import {
  GoabCheckbox,
  GoabDatePicker,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
import { ComponentBinding } from "./ComponentBinding";
import {
  GoabCheckboxOnChangeDetail, GoabDatePickerOnChangeDetail,
  GoabDropdownOnChangeDetail,
  GoabFormItemRequirement,
  GoabRadioGroupOnChangeDetail
} from "@abgov/ui-components-common";

interface Props {
  properties?: ComponentBinding[];
  onChange: (props: ComponentBinding[]) => void;
}

export function SandboxProperties({ properties = [], onChange }: Props) {
  function onListChange(event: GoabDropdownOnChangeDetail) {
    const prop = properties.find(p => ["list", "dropdown"].includes(p.type) && p.name === event.name);
    if (!prop || !["list", "dropdown"].includes(prop.type)) return;
    prop.value = !event.value ? "" : event.value;
    onChange([...properties]);
  }

  function onRadioChange(event: GoabRadioGroupOnChangeDetail) {
    const prop = properties.find(p => p.type === "radio" && p.name === event.name);
    if (!prop || prop.type !== "radio") return;
    prop.value = !event.value ? "" : event.value;
    onChange([...properties]);
  }

  function onComboboxChange(event: GoabDropdownOnChangeDetail) {
    const prop = properties.find(p => p.type === "combobox" && p.name === event.name);
    if (!prop || prop.type !== "combobox") return;
    prop.value = !event.value ? "" : event.value;
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

  function onCheckboxChange(event: GoabCheckboxOnChangeDetail): void {
    const prop = properties.find(p => p.type === "boolean" && p.name === event.name);
    if (!prop || prop.type !== "boolean") return;
    prop.value = event.checked;
    onChange([...properties]);
  }

  function onDateChange(event: GoabDatePickerOnChangeDetail): void {
    const prop = properties.find(p => p.type === "date" && p.name === event.name);
    if (!prop || prop.type !== "date") return;
    prop.value = event.value;
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
          <GoabDropdown key={p.name} name={p.name} value={p.value} onChange={onListChange}>
            {p.options.map(option => (
              <GoabDropdownItem
                value={option || ""}
                key={option}
                label={toUpperCase(option) || "-"}
              />
            ))}
          </GoabDropdown>
        );
      case "combobox":
        return (
          <GoabDropdown
            key={p.name}
            name={p.name}
            filterable
            leadingIcon="search"
            value={p.value}
            onChange={onComboboxChange}
          >
            {p.options.map(option => (
              <GoabDropdownItem
                value={option || ""}
                key={option}
                label={toUpperCase(option) || "-"}
              />
            ))}
          </GoabDropdown>
        );
      case "radio":
        return (
          <GoabRadioGroup name={p.name} value={p.value} onChange={onRadioChange}>
            {p.options.map(option => {
              return <GoabRadioItem value={option} label={toUpperCase(option) || "None (default)"} key={option} />;
            })}
          </GoabRadioGroup>
        );
      case "boolean":
        return (
          <GoabCheckbox
            name={p.name}
            checked={p.value}
            onChange={onCheckboxChange}
            mt="xs"
            text="Yes"
          />
        );
      case "string":
        return <GoabInput name={p.name} value={p.value} width={p.width} onChange={(event) => onTextChange(p.name, event.value)} />;
      case "number":
        return (
          <GoabInput type="number" name={p.name} value={`${p.value}`} onChange={(event) => onNumberChange(p.name, event.value)} />
        );
      case "date":
        return (
          <GoabDatePicker onChange={onDateChange} name={p.name} value={p.value as Date|undefined} />
        )
    }
  }

  return (
    <div className="sandbox-container">
      {properties.filter(p => !p.hidden).map(p => (
        <GoabFormItem key={p.name} label={p.label || ""} requirement={p.requirement as GoabFormItemRequirement || null} helpText={p.helpText}>
          {renderProps(p)}
        </GoabFormItem>
      ))}
    </div>
  );
}

export default SandboxProperties;
