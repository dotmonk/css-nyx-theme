import { colors, cssSelectorsToString, brightness } from "./common";

export default {
  checkboxColorStyle: (color) =>
    cssSelectorsToString({
      [`input[type=checkbox].nyx-checkbox-${color}:checked:after, input[type=checkbox].nyx-checkbox-${color}:after`]:
        {
          content: "' '",
          visibility: "visible",
          padding: "5px",
          lineHeight: "1.4",
          display: "inline-block",
          cursor: "pointer",
          color: colors[color],
          border: `solid 1px ${colors[color]}`,
        },
      [`input[type=checkbox].nyx-checkbox-${color}:checked:after`]: {
        backgroundColor: colors.brightness(colors[color], brightness.lightest),
      },
      [`input[type=checkbox].nyx-checkbox-${color}:after`]: {
        backgroundColor: colors.brightness(colors[color], brightness.dark),
      },
    }),
  default: `${cssSelectorsToString({
    "input[type=checkbox]": {
      visibility: "hidden",
    },
    "input[type=checkbox]:checked:after, input[type=checkbox]:after": {
      content: "' '",
      visibility: "visible",
      padding: "5px",
      lineHeight: "1.4",
      display: "inline-block",
      cursor: "pointer",
      color: colors.standard,
      border: `solid 1px ${colors.standard}`,
    },
    "input[type=checkbox]:checked:after": {
      backgroundColor: colors.brightness(colors.standard, brightness.lightest),
    },
    "input[type=checkbox]:after": {
      backgroundColor: colors.brightness(colors.standard, brightness.dark),
    },
  })}
  @-moz-document url-prefix() {
    input[type=checkbox] {
      visibility: visible;
    };
  }
  `,
};
