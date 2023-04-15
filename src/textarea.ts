import {colors, fonts, cssSelectorsToString} from "./common";

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
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`,
      backgroundColor: colors.brightness(colors[color], -240),
      borderColor: colors[color],
      color: colors[color],
    },

    [`textarea.nyx-textarea-${color}:hover`]: {
      backgroundColor: colors.brightness(colors[color], -210),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`
    },

    [`textarea.nyx-textarea-${color}:focus`]: {
      outline: "none",
      color: colors.brightness(colors[color], 100),
      backgroundColor: colors.brightness(colors[color], -180),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`
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
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, -10)}`,
      backgroundColor: colors.brightness(colors.standard, -240),
      borderColor: colors.standard,
      color: colors.standard,
    },
    "textarea:hover": {
      backgroundColor: colors.brightness(colors.standard, -210),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, -10)}`
    },

    "textarea:focus": {
      outline: "none",
      color: colors.brightness(colors.standard, 100),
      backgroundColor: colors.brightness(colors.standard, -180),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, -10)}`
    },
  })
};
