const colors = require("./colors");

module.exports = {
  panelColorStyle: color => `
    .nyx-panel-${color} {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 4px;
      padding-right: 4px;
      border-width: 1px;
      border-style: solid;
      margin: 2px;    
      background-color: ${colors.opacity(
        colors.brightness(colors[color], -50),
        0.2
      )};
      border-color: ${colors.brightness(colors[color], -150)};
      color: ${colors[color]};
    }
    .nyx-panel-${color} > a, .nyx-panel-${color} > a:visited, .nyx-panel-${color} > a:active {
      color: ${colors.brightness(colors[color], 50)};
    }
    .nyx-panel-${color} > a:hover {
      color: ${colors.brightness(colors[color], 80)};
    }

  `
};
