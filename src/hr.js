const colors = require("./colors");

module.exports = {
  hrColorStyle: color => `
    hr.nyx-hr-${color} {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, ${colors.opacity(
        colors[color],
        0,
        0.75
      )}, ${colors[color]}, ${colors.opacity(colors[color], 0, 0.75)});
    }
  `,
  default: `
    hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, ${colors.opacity(
        colors.text,
        0,
        0.75
      )}, ${colors.text}, ${colors.opacity(colors.text, 0, 0.75)});
    }
  `
};
