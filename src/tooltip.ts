import {colors, cssSelectorsToString, brightness} from "./common";

export default {
  tooltipColorStyle: color => cssSelectorsToString({
    [`.nyx-tooltip-${color}`]: {
      position: "relative",
      color: colors[color]
    },
    [`.nyx-tooltip-${color}>.nyx-tooltip-bubble::after`]: {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: `${colors[color]} transparent transparent transparent`,
    },
    [`.nyx-tooltip-${color}:hover>.nyx-tooltip-bubble`]: {
      visibility: "visible !important",
      opacity: "1 !important",
    },
    [`.nyx-tooltip-${color}>.nyx-tooltip-bubble`]: {
      borderRadius: "3px",
      borderWidth: "1px",
      borderStyle: "solid",
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "10px",
      paddingRight: "10px",
      visibility: "hidden",
      textAlign: "center",
      position: "absolute",
      zIndex: "1",
      bottom: "125%",
      left: "50%",
      opacity: "0.1",
      transition: "opacity 0.3s",
      backgroundColor: colors.brightness(colors[color], brightness.darkest),
      borderColor: colors[color],
      color: colors[color],
    },
  })
};
