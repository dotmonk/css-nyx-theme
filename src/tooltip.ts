import {colors} from "./common";

export default {
  tooltipColorStyle: color => `
    .nyx-tooltip-${color} {
      position: relative;
      color: ${colors[color]};
    }

    .nyx-tooltip-${color}>.nyx-tooltip-bubble::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${colors[color]} transparent transparent transparent;
    }

    .nyx-tooltip-${color}:hover>.nyx-tooltip-bubble {
      visibility: visible !important;
      opacity: 1 !important;
    }

    .nyx-tooltip-${color}>.nyx-tooltip-bubble {
      border-radius: 3px;
      border-width: 1px;
      border-style: solid;
      padding-top: 2px;
      padding-bottom: 2px;
      padding-left: 5px;
      padding-right: 5px;
      visibility: hidden;
      text-align: center;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      opacity: 0.1;
      transition: opacity 0.3s;
      background-color: ${colors.brightness(colors[color], -200)};
      border-color: ${colors[color]};
      color: ${colors[color]};
    }
  `
};
