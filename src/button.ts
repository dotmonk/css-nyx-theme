import {colors, fonts, combineSelectors} from "./common";

const selectors = [
  "a",
  "button",
  "input[type='submit']",
  "input[type='button']"
];

export default {
  buttonColorStyle: color => `
    ${combineSelectors(selectors, `.nyx-button-${color}`)} {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: Helvetica, Arial;
      font-size: 12px;
      text-shadow: 0px 0px 3px ${colors.background};
      cursor: pointer;
      margin: 2px;
      user-select: none;
      text-decoration: none;
      outline: none;
      background-color: ${colors.brightness(colors[color], -200)};
      border-color: ${colors[color]};
      color: ${colors.brightness(colors[color], 40)};
    }

    ${combineSelectors(selectors, `.nyx-button-${color}:hover`)} {
      color: ${colors.brightness(colors[color], 40)};
      background-color: ${colors.brightness(colors[color], -175)};
    }

    ${combineSelectors(selectors, `.nyx-button-${color}:active`)} {
      background-color: ${colors.brightness(colors[color], -150)};
      color: ${colors.brightness(colors[color], 40)};
    }

    ${combineSelectors(selectors, `.nyx-button-active-${color}`)} {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: Helvetica, Arial;
      font-size: 12px;
      text-shadow: 0px 0px 3px ${colors.background};
      cursor: pointer;
      margin: 2px;
      user-select: none;
      text-decoration: none;
      outline: none;
      border-color: ${colors[color]};
      background-color: ${colors.brightness(colors[color], -150)};
      color: ${colors.brightness(colors[color], 40)};
    }

    ${combineSelectors(selectors, `.nyx-button-active-${color}:hover`)} {
      color: ${colors.brightness(colors[color], 40)};
      background-color: ${colors.brightness(colors[color], -125)};
    }

    ${combineSelectors(selectors, `.nyx-button-active-${color}:active`)} {
      background-color: ${colors.brightness(colors[color], -100)};
      border-color: ${colors[color]};
      color: ${colors.brightness(colors[color], 80)};
    }

    ${combineSelectors(selectors, `.nyx-button-disabled-${color}`)} {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: Helvetica, Arial;
      font-size: 12px;
      text-shadow: 0px 0px 3px ${colors.background};
      margin: 2px;
      cursor: default;
      user-select: none;
      text-decoration: none;
      outline: none;
      background-color: ${colors.brightness(colors[color], -200)};
      border-color: ${colors.brightness(colors[color], -100)};
      color: ${colors.brightness(colors[color], -100)};
    }

    ${combineSelectors(selectors, `.nyx-button-disabled-${color}:hover`)} {
      color: ${colors.brightness(colors[color], -100)};
    }
  `,
  default: `
    button, input[type='submit'], input[type='button'] {
      color: ${colors.brightness(colors.standard, 40)};
      background-color: ${colors.brightness(colors.standard, -200)};
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      letter-spacing: 1.5px;
      font-family: ${fonts.default};
      font-size: 12px;
      text-shadow: 0px 0px 3px ${colors.background};
      cursor: pointer;
      margin: 2px;
      user-select: none;
      text-decoration: none;
      outline: none;
      border-color: ${colors.standard};
    }

    button:hover, input[type='submit']:hover, input[type='button']:hover {
      color: ${colors.brightness(colors.standard, 40)};
      background-color: ${colors.brightness(colors.standard, -175)};
    }

    button:active, input[type='submit']:active, input[type='button']:active {
      background-color: ${colors.brightness(colors.standard, -150)};
      color: ${colors.brightness(colors.standard, 40)};
    }
  `
};
