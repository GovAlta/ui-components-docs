export function getCssVarValue(tokenName: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(tokenName).trim();
}
