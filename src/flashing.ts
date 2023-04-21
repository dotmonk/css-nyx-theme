import {colors, cssSelectorsToString, brightness} from "./common";

export default {
  spinnerColorStyle: color => cssSelectorsToString({
    [`.nyx-flashing-${color}`]: {
      animationName: "nyx-flashing",
      animationDuration: "0.25s",
      animationIterationCount: "infinite",
      color: colors.brightness(colors[color], brightness.light),
    }
  }),
  default: `
    @keyframes nyx-flashing {
      0% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.5;
      }
    }
  `
};
