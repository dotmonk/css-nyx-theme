import basic from "./basic";
import label from "./label";
import button from "./button";
import input from "./input";
import loading from "./loading";
import flashing from "./flashing";
import panel from "./panel";
import tooltip from "./tooltip";
import textarea from "./textarea";
import checkbox from "./checkbox";
import link from "./link";
import radio from "./radio";
import hr from "./hr";

const themeColors = ["standard", "bright", "success", "error"];

console.log(
  [
    basic,
    checkbox.default,
    link.default,
    radio.default,
    hr.default,
    loading.default,
    flashing.default,
    textarea.default,
    button.default,
    input.default,
    themeColors.map((color) => checkbox.checkboxColorStyle(color)).join("\n"),
    themeColors.map((color) => link.linkColorStyle(color)).join("\n"),
    themeColors.map((color) => radio.radioColorStyle(color)).join("\n"),
    themeColors.map((color) => button.buttonColorStyle(color)).join("\n"),
    themeColors.map((color) => input.inputColorStyle(color)).join("\n"),
    themeColors.map((color) => label.labelColorStyle(color)).join("\n"),
    themeColors.map((color) => loading.spinnerColorStyle(color)).join("\n"),
    themeColors.map((color) => flashing.spinnerColorStyle(color)).join("\n"),
    themeColors.map((color) => panel.panelColorStyle(color)).join("\n"),
    themeColors.map((color) => tooltip.tooltipColorStyle(color)).join("\n"),
    themeColors.map((color) => textarea.textareaColorStyle(color)).join("\n"),
    themeColors.map((color) => hr.hrColorStyle(color)).join("\n"),
  ].join("\n")
);
