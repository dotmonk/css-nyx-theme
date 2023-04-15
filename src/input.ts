import {colors, fonts} from "./common";

export default {
  inputColorStyle: (color) => `
    input[type='text'].nyx-input-${color}, input[type='password'].nyx-input-${color}, input:not([type]).nyx-input-${color} {
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
      background-color: ${colors.brightness(colors[color], -240)};
      border-color: ${colors[color]};
      color: ${colors[color]};
    }
    input[type='text'].nyx-input-${color}:hover, input[type='password'].nyx-input-${color}:hover, input:not([type]).nyx-input-${color}:hover {
      background-color: ${colors.brightness(colors[color], -210)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
    }
    input[type='text'].nyx-input-${color}:focus, input[type='password'].nyx-input-${color}:focus, input:not([type]).nyx-input-${color}:focus {
      color: ${colors.brightness(colors[color], 100)};
      background-color: ${colors.brightness(colors[color], -180)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
    }
    input[type='text'].nyx-input-disabled-${color}, input[type='password'].nyx-input-disabled-${color}, input:not([type]).nyx-input-disabled-${color} {
      background-color: ${colors.brightness(colors[color], -180)};
      border-color: ${colors.brightness(colors[color], -80)};
      color: ${colors.brightness(colors[color], -80)};
      box-shadow: none;
      outline: none;
    }
  `,
  default: `
    input[type='text'], input[type='password'], input:not([type]) {
      padding: 6px;
      border-radius: 3px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: ${fonts.default};
      font-size: 10px;
      text-shadow: 0px 0px 3px ${colors.background};
      margin: 2px;
      box-shadow: inset 0 0 5px ${colors.brightness(colors.standard, -10)};
      background-color: ${colors.brightness(colors.standard, -240)};
      border-color: ${colors.standard};
      color: ${colors.standard};
    }

    input:not([type]):focus, input[type='text']:focus, input[type='password']:focus {
      outline: none;
      color: ${colors.brightness(colors.standard, 100)};
      background-color: ${colors.brightness(colors.standard, -180)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors.standard, -10)};
    }

    input:not([type]):hover, input[type='text']:hover, input[type='password']:hover {
      background-color: ${colors.brightness(colors.standard, -210)};
      box-shadow: inset 0 0 10px ${colors.brightness(colors.standard, -10)};
    }
  `,
};
