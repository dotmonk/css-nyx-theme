const colors = require("./colors");
const fonts = require("./fonts");

module.exports = {
  textareaColorStyle: (color) => `
    textarea.nyx-textarea-${color} {
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: ${fonts.default};
      text-shadow: 0px 0px 3px ${colors.background};
      margin: 2px;
      padding: 6px;
      border-radius: 3px;
      border-width: 1px;
      font-size: 10px;
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
      background-color: ${colors.brightness(colors[color], -240)};
      border-color: ${colors[color]};
      color: ${colors[color]};
    }

    textarea.nyx-textarea-${color}:hover {
      background-color: ${colors.brightness(colors[color], -210)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
    }

    textarea.nyx-textarea-${color}:focus {
      outline: none;
      color: ${colors.brightness(colors[color], 100)};
      background-color: ${colors.brightness(colors[color], -180)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors[color], -10)};
    }
  `,
  default: `
    textarea {
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: ${fonts.default};
      text-shadow: 0px 0px 3px ${colors.background};
      margin: 2px;
      padding: 6px;
      border-radius: 3px;
      border-width: 1px;
      font-size: 10px;
      box-shadow: inset 0 0 5px ${colors.brightness(colors.standard, -10)};
      background-color: ${colors.brightness(colors.standard, -240)};
      border-color: ${colors.standard};
      color: ${colors.standard};
    }

    textarea:hover {
      background-color: ${colors.brightness(colors.standard, -210)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors.standard, -10)};
    }

    textarea:focus {
      outline: none;
      color: ${colors.brightness(colors.standard, 100)};
      background-color: ${colors.brightness(colors.standard, -180)};
      box-shadow: inset 0 0 5px ${colors.brightness(colors.standard, -10)};
    }
  `,
};
