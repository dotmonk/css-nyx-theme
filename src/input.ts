import {colors, fonts, cssSelectorsToString} from "./common";

export default {
  inputColorStyle: (color) => cssSelectorsToString({
    [`input[type='text'].nyx-input-${color}, input[type='password'].nyx-input-${color}, input:not([type]).nyx-input-${color}`]: {
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`,
      backgroundColor: colors.brightness(colors[color], -240),
      borderColor: colors[color],
      color: colors[color],
    },
    [`input[type='text'].nyx-input-${color}:hover, input[type='password'].nyx-input-${color}:hover, input:not([type]).nyx-input-${color}:hover`]: {
      backgroundColor: colors.brightness(colors[color], -210),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`
    },
    [`input[type='text'].nyx-input-${color}:focus, input[type='password'].nyx-input-${color}:focus, input:not([type]).nyx-input-${color}:focus`]: {
      color: colors.brightness(colors[color], 100),
      backgroundColor: colors.brightness(colors[color], -180),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors[color], -10)}`
    },
    [`input[type='text'].nyx-input-disabled-${color}, input[type='password'].nyx-input-disabled-${color}, input:not([type]).nyx-input-disabled-${color}`]: {
      backgroundColor: colors.brightness(colors[color], -180),
      borderColor: colors.brightness(colors[color], -80),
      color: colors.brightness(colors[color], -80),
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
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, -10)}`,
      backgroundColor: colors.brightness(colors.standard, -240),
      borderColor: colors.standard,
      color: colors.standard,
    },
    [`input:not([type]):focus, input[type='text']:focus, input[type='password']:focus`]: {
      outline: "none",
      color: colors.brightness(colors.standard, 100),
      backgroundColor: colors.brightness(colors.standard, -180),
      boxShadow: `inset 0 0 5px ${colors.brightness(colors.standard, -10)}`,
    },
    [`input:not([type]):hover, input[type='text']:hover, input[type='password']:hover`]: {
      backgroundColor: colors.brightness(colors.standard, -210),
      boxShadow: `inset 0 0 10px ${colors.brightness(colors.standard, -10)}`,
    }
  })
};
