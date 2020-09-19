const colors = require("./colors");
const fonts = require("./fonts");

module.exports = {
  linkColorStyle: (color) => `
  a.nyx-link-${color},
  a.nyx-link-${color}:visited,
  a.nyx-link-${color}:active {
    color: ${colors[color]};
    text-decoration: underline;
  }

  a.nyx-link-${color}:hover {
    color: ${colors.brightness(colors[color], 50)};
  }
`,
  default: `

    a,
    a:visited,
    a:active {
      cursor: pointer;
      color: ${colors.standard};
      text-decoration: underline;
    }
  
    a:hover {
      color: ${colors.brightness(colors.standard, 50)};
    }
      
  `,
};
