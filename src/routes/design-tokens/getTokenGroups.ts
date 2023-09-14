/**
 * Split tokens into cards of 2 per row
 * @param tokens
 */
export function getTokenGroups(tokens: any[]) {
  const tokenGroups = [];
  for (let i = 0; i < tokens.length; i += 2) {
    tokenGroups.push(tokens.slice(i, i + 2));
  }
  return tokenGroups;
}
