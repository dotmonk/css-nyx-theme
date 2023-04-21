import {colors, fonts, cssSelectorsToString, brightness} from "./common";

export default {
  inputColorStyle: (color) => cssSelectorsToString({
    [`input[type='text'].nyx-input-${color}, input[type='password'].nyx-input-${color}, input:not([type]).nyx-input-${color}`]: {
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`,
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      borderColor: colors[color],
      color: colors[color],
    },
    [`input[type='text'].nyx-input-${color}:hover, input[type='password'].nyx-input-${color}:hover, input:not([type]).nyx-input-${color}:hover`]: {
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`
    },
    [`input[type='text'].nyx-input-${color}:focus, input[type='password'].nyx-input-${color}:focus, input:not([type]).nyx-input-${color}:focus`]: {
      color: colors.brightness(colors[color], brightness.lightest),
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], brightness.dim)}`
    },
    [`input[type='text'].nyx-input-disabled-${color}, input[type='password'].nyx-input-disabled-${color}, input:not([type]).nyx-input-disabled-${color}`]: {
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      borderColor: colors.brightness(colors[color], brightness.dimest),
      color: colors.brightness(colors[color], brightness.dimest),
      boxShadow: "none",
      outline: "none",
    }
  }),
  default: cssSelectorsToString({
    [`input[type='text'], input[type='password'], input:not([type])`]: {
      padding: "6px",
      borderRadius: "3px",
      borderWidth: "1px",
      borderStyle: "solid",
      display: "inline-block",
      letterSpacing: "1.5px",
      fontFamily: fonts.default,
      fontSize: "10px",
      textShadow: `0px 0px 3px ${colors.background}`,
      margin: "2px",
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, brightness.dim)}`,
      backgroundColor: colors.brightness(colors.standard, brightness.darkest),
      borderColor: colors.standard,
      color: colors.standard,
    },
    [`input:not([type]):focus, input[type='text']:focus, input[type='password']:focus`]: {
      outline: "none",
      color: colors.brightness(colors.standard, brightness.lightest),
      backgroundColor: colors.brightness(colors.standard, brightness.darkest),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, brightness.dim)}`,
    },
    [`input:not([type]):hover, input[type='text']:hover, input[type='password']:hover`]: {
      backgroundColor: colors.brightness(colors.standard, brightness.darkest),
      boxShadow: `inset 0 0 10px ${colors.brightness(colors.standard, brightness.dim)}`,
    }
  })
};
