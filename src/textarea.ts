import {colors, fonts, cssSelectorsToString, brightness} from "./common";

export default {
  textareaColorStyle: (color) => cssSelectorsToString({
    [`textarea.nyx-textarea-${color}`]: {
      borderStyle: "solid",
      display: "inline-block",
      letterSpacing: "1.5px",
      fontFamily: fonts.default,
      textShadow: `0px 0px 3px ${colors.background}`,
      margin: "2px",
      padding: "6px",
      borderRadius: "3px",
      borderWidth: "1px",
      fontSize: "10px",
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`,
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      borderColor: colors[color],
      color: colors[color],
    },

    [`textarea.nyx-textarea-${color}:hover`]: {
      backgroundColor: colors.brightness(colors[color], brightness.dark),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`
    },

    [`textarea.nyx-textarea-${color}:focus`]: {
      outline: "none",
      color: colors.brightness(colors[color], brightness.lightest),
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`
    },
  }),
  default: cssSelectorsToString({
    textarea: {
      borderStyle: "solid",
      display: "inline-block",
      letterSpacing: "1.5px",
      fontFamily: fonts.default,
      textShadow: `0px 0px 3px ${colors.background}`,
      margin: "2px",
      padding: "6px",
      borderRadius: "3px",
      borderWidth: "1px",
      fontSize: "10px",
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, brightness.dim)}`,
      backgroundColor: colors.brightness(colors.standard, brightness.darkest),
      borderColor: colors.standard,
      color: colors.standard,
    },
    "textarea:hover": {
      backgroundColor: colors.brightness(colors.standard, brightness.dark),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, brightness.dim)}`
    },

    "textarea:focus": {
      outline: "none",
      color: colors.brightness(colors.standard, brightness.lightest),
      backgroundColor: colors.brightness(colors.standard, brightness.darkest),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, brightness.dim)}`
    },
  })
};
