import {colors, fonts} from "./common";

export default {
  labelColorStyle: color => `
    .nyx-label-${color} {
      background-color: ${colors.brightness(colors[color], -200)};
      border-color: ${colors[color]};
      color: ${colors[color]};
      padding-top: 2px;
      padding-bottom: 2px;
      padding-left: 2px;
      padding-right: 2px;
      text-align: center;
      border-radius: 3px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: ${fonts.default};
      font-size: 10px;
      text-shadow: 0px 0px 3px ${colors.background};
      margin-right: 2px;
      margin-left: 2px;
      margin-top: -2px;
      margin-bottom: -2px;
    }
  `
};
