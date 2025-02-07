export function toKebabCase(str: string) {
  return str
  .replace(/\s+/g, '-')        // Replace spaces with -
  .replace(/_/g, '-')          // Replace underscores with -
  .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
  .toLowerCase();              // Convert to lowercase
}
