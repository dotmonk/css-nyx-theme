import {colors, cssSelectorsToString} from "./common";

export default {
  linkColorStyle: (color) => cssSelectorsToString({
    [`a.nyx-link-${color}, a.nyx-link-${color}:visited, a.nyx-link-${color}:active`]: {
      color: colors[color],
      textDecoration: "underline",
    },
    [`a.nyx-link-${color}:hover`]: {
      color: colors.brightness(colors[color], 50),
    },
  }),
  default: cssSelectorsToString({
    "a, a:visited, a:active": {
      cursor: "pointer",
      color: colors.standard,
      textDecoration: "underline",
    },
    "a:hover": {
      color: colors.brightness(colors.standard, 50),
    }
  }),
};
