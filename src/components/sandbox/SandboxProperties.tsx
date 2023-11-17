import {
  GoACheckbox,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
} from "@abgov/react-components";
import {ComponentBinding} from "./ComponentBinding";

interface Props {
  properties: ComponentBinding[];
  onChange: (props: ComponentBinding[]) => void;
}

export function SandboxProperties({properties = [], onChange}: Props) {
  function onListChange(name: string, value: string | string[]) {
    const prop = properties.find(p => p.type === "list" && p.name === name);
    if (!prop || prop.type !== "list") return;
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

  function toUpperCase(label: string) {
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  function renderProps(p: ComponentBinding) {
    switch (p.type) {
      case "list":
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
            value={p.value}
            onChange={onComboboxChange}>
            {p.options.map(option => (
              <GoADropdownItem
                value={option || ""}
                key={option}
                label={toUpperCase(option) || "-"}
              />
            ))}
          </GoADropdown>
        );
      case "boolean":
        return (
          <GoACheckbox name={p.name} checked={p.value} onChange={onCheckboxChange} text={p.label} />
        );
      case "string":
        return <GoAInput name={p.name} value={p.value} onChange={onTextChange} />;
      case "number":
        return (
          <GoAInput type="number" name={p.name} value={`${p.value}`} onChange={onNumberChange} />
        );
    }
  }

  return (
    <>
      {["combobox", "list", "boolean", "string", "number"].map(t => {
        const propertiesOfTypeT = properties.filter(p => p.type === t && !p.hidden);
        // Not render when there is no properties of type T (e.g. no type string, shouldn't render div)
        if (propertiesOfTypeT.length === 0) {
          return null;
        }

        return (
          <div className="sandbox-container" key={t}>
            {propertiesOfTypeT.map(p => (
              <GoAFormItem key={p.name} label={p.type === "boolean" ? "" : p.label || ""}>
                {renderProps(p)}
              </GoAFormItem>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default SandboxProperties;
