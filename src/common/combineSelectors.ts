export default (prefixes, suffix) =>
  prefixes.map(p => `${p}${suffix}`).join(", ");
