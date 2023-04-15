export interface CssAttributes {
  [attributeName: string]: string;
}

export interface CssSelectors {
  [selector: string]: CssAttributes;
}

export default (selectors: CssSelectors): string => {
  return Object.keys(selectors)
    .map(
      (selectorName) =>
        `${selectorName} {\n${Object.keys(selectors[selectorName])
          .map(
            (attributeName) =>
              `  ${attributeName.replace(
                /[A-Z][a-z]*/g,
                (str) => "-" + str.toLowerCase()
              )}: ${selectors[selectorName][attributeName]};\n`
          )
          .join("")}}\n\n`
    )
    .join("");
};
