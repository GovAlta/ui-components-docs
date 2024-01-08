export function getCssVarValue(tokenName: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(tokenName).trim();
}
export function resetScrollbars() {
  document.body.style.overflow = "";
  document.body.style.borderRight = "";
}
