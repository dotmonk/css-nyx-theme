import {colors, cssSelectorsToString} from "./common";

export default {
  spinnerColorStyle: color => cssSelectorsToString({
    [`.nyx-loading-${color}`]: {
      animationName: "nyx-loading",
      animationDuration: "1s",
      animationIterationCount: "infinite",
      color: colors[color],
    }
  }),
  default: `
    @keyframes nyx-loading {
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
