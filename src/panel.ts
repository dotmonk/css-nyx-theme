import {colors, cssSelectorsToString, brightness} from "./common";

export default {
  panelColorStyle: color => cssSelectorsToString({
    [`.nyx-panel-${color}`]: {
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "10px",
      paddingRight: "10px",
      borderWidth: "1px",
      borderStyle: "solid",
      margin: "7px",
      backgroundColor: colors.opacity(
        colors.brightness(colors[color], brightness.dim),
        0.2
      ),
      borderColor: colors.brightness(colors[color], brightness.dark),
      color: colors[color],
    },
    [`.nyx-panel-${color} > a, .nyx-panel-${color} > a:visited, .nyx-panel-${color} > a:active`]: {
      color: colors.brightness(colors[color], brightness.light)
    },
    [`.nyx-panel-${color} > a:hover`]: {
      color: colors.brightness(colors[color], brightness.lightest)
    },
  })
};
