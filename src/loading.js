const colors = require("./colors");

module.exports = {
  spinnerColorStyle: color => `
    .nyx-loading-${color} {
      animation-name: nyx-loading;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      color: ${colors[color]};
    }
  `,
  default: `
    @keyframes nyx-loading {
      0% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.5;
      }
    }
  `
};
