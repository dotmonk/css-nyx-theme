module.exports = (prefixes, suffix) =>
  prefixes.map(p => `${p}${suffix}`).join(", ");
