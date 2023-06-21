import { GoACheckbox, GoADropdown, GoADropdownItem, GoAFormItem, GoAInput } from "@abgov/react-components";
import { ComponentBinding } from "./ComponentBinding";

interface Props {
  properties: ComponentBinding[];
  onChange: (props: ComponentBinding[]) => void
}

export function SandboxProperties({ properties = [], onChange }: Props) {

  function onListChange(name: string, value: string | string[]) {
    const prop = properties.find(p => p.type === "list" && p.name === name);
    if (!prop || prop.type !== "list") return;
    prop.value = !value ? "" : typeof value === "string" ? value : value[0];
    onChange([...properties])
  }

  function onTextChange(name: string, value: string) {
    const prop = properties.find(p => p.type === "string" && p.name === name);
    if (!prop || prop.type !== "string") return;
    prop.value = value;
    onChange([...properties])
  }

  function onNumberChange(name: string, value: string) {
    const prop = properties.find(p => p.type === "number" && p.name === name);
    if (!prop || prop.type !== "number") return;
    prop.value = parseFloat(value);
    onChange([...properties])
  }

  function onCheckboxChange(name: string, checked: boolean, _value: string): void {
    const prop = properties.find(p => p.type === "boolean" && p.name === name);
    if (!prop || prop.type !== "boolean") return;
    prop.value = checked;
    onChange([...properties])
  }

  function renderProps(p: ComponentBinding) {
    switch (p.type) {
      case "list":
        return (
          <GoADropdown name={p.name} value={p.value} onChange={onListChange}>
            {p.options.map(option =>
              <GoADropdownItem value={option || ""} key={option} label={option || "-"} />
            )}
          </GoADropdown>
        )
      case "boolean":
        return <GoACheckbox name={p.name} checked={p.value} onChange={onCheckboxChange} />
      case "string":
        return <GoAInput name={p.name} value={p.value} onChange={onTextChange} />
      case "number":
        return <GoAInput type="number" name={p.name} value={`${p.value}`} onChange={onNumberChange} />
    }
  }

  return (
    <>
      {["list", "boolean", "string", "number"].map(t =>
        <div style={{display: "flex", gap: "2rem", flexWrap: "wrap"}} key={t}>
          {properties.filter(p => p.type === t && !p.hidden ).map(p => (
            <GoAFormItem key={p.name} label={p.label || ""}>
              {renderProps(p)}
            </GoAFormItem>
          ))}
        </div>
      )}
    </>
  )
}

export default SandboxProperties;