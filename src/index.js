const basic = require("./basic");
const label = require("./label");
const button = require("./button");
const input = require("./input");
const loading = require("./loading");
const panel = require("./panel");
const tooltip = require("./tooltip");
const textarea = require("./textarea");
const checkbox = require("./checkbox");
const link = require("./link");
const radio = require("./radio");
const hr = require("./hr");

const themeColors = ["standard", "bright", "success", "error"];

console.log(`
  ${basic}
  ${checkbox.default}
  ${link.default}
  ${radio.default}
  ${hr.default}
  ${loading.default}
  ${textarea.default}
  ${button.default}
  ${input.default}
  ${themeColors.map(color => checkbox.checkboxColorStyle(color)).join("\n")}
  ${themeColors.map(color => link.linkColorStyle(color)).join("\n")}
  ${themeColors.map(color => radio.radioColorStyle(color)).join("\n")}
  ${themeColors.map(color => button.buttonColorStyle(color)).join("\n")}
  ${themeColors.map(color => input.inputColorStyle(color)).join("\n")}
  ${themeColors.map(color => label.labelColorStyle(color)).join("\n")}
  ${themeColors.map(color => loading.spinnerColorStyle(color)).join("\n")}
  ${themeColors.map(color => panel.panelColorStyle(color)).join("\n")}
  ${themeColors.map(color => tooltip.tooltipColorStyle(color)).join("\n")}
  ${themeColors.map(color => textarea.textareaColorStyle(color)).join("\n")}
  ${themeColors.map(color => hr.hrColorStyle(color)).join("\n")}
`);
