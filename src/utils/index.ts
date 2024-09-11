export function toKebabCase(str: string) {
  return str
  .replace(/\s+/g, '-')        // Replace spaces with -
  .replace(/_/g, '-')          // Replace underscores with -
  .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
  .toLowerCase();              // Convert to lowercase
}

export function getQueryParam(param: string): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function setQueryParam(param: string, value: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.replaceState({}, '', url.toString());
}

