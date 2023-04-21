import {colors, cssSelectorsToString, brightness} from "./common";

export default {
  radioColorStyle: color => cssSelectorsToString({
    [`input[type=radio].nyx-radio-${color}:checked:after, input[type=radio].nyx-radio-${color}:after`]: {
      content: "' '",
      visibility: "visible",
      padding: "5px",
      borderRadius: "5px",
      lineHeight: "1.4",
      display: "inline-block",
      cursor: "pointer",
      color: colors[color],
      border: `solid 1px ${colors[color]}`
    },
    [`input[type=radio].nyx-radio-${color}:checked:after`]: {
      backgroundColor: colors.brightness(colors[color], brightness.lightest)
    },
    [`input[type=radio].nyx-radio-${color}:after`]: {
      backgroundColor: colors.brightness(colors[color], brightness.dark)
    }  
  }),
  default: `${cssSelectorsToString({
    "input[type=radio]": {
      visibility: "hidden",
    },
    "input[type=radio]:checked:after, input[type=radio]:after": {
      content: "' '",
      visibility: "visible",
      padding: "5px",
      borderRadius: "5px",
      lineHeight: "1.4",
      display: "inline-block",
      cursor: "pointer",
      color: colors.standard,
      border: `solid 1px ${colors.standard}`,
    },
    "input[type=radio]:checked:after": {
      backgroundColor: colors.brightness(colors.standard, brightness.lightest)
    },
    "input[type=radio]:after": {
      backgroundColor: colors.brightness(colors.standard, brightness.dark)
    }
  })}
  /* Firefox */
  @-moz-document url-prefix() {
    input[type=radio]{
      visibility: visible;
    }
  }
  `
};
