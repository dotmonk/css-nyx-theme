const colors = require("./colors");
const fonts = require("./fonts");

module.exports = `
  :root {
    --nyx-color-text: ${colors.text};
    --nyx-color-standard: ${colors.standard};
    --nyx-background-standard: ${colors.brightness(colors.standard, -150)};
    --nyx-color-bright: ${colors.bright};
    --nyx-background-bright: ${colors.brightness(colors.bright, -150)};
    --nyx-color-success: ${colors.success};
    --nyx-background-success: ${colors.brightness(colors.success, -150)};
    --nyx-color-error: ${colors.error};
    --nyx-background-error: ${colors.brightness(colors.error, -150)};
    --nyx-background-color: ${colors.background};
  }

  .nyx-color-text { color: ${colors.text}; }
  .nyx-color-standard { color: ${colors.standard}; }
  .nyx-background-standard { background: ${colors.brightness(
    colors.standard,
    -150
  )}; }
  .nyx-color-bright { color: ${colors.bright}; }
  .nyx-background-bright { background: ${colors.brightness(
    colors.bright,
    -150
  )}; }
  .nyx-color-success { color: ${colors.success}; }
  .nyx-background-success { background: ${colors.brightness(
    colors.success,
    -150
  )}; }
  .nyx-color-error { color: ${colors.error}; }
  .nyx-background-error { background: ${colors.brightness(
    colors.error,
    -150
  )}; }
  .nyx-background-color { background: ${colors.background}; }

  body {
    background: ${colors.background};
    color: ${colors.text};
    font-family: ${fonts.default};
    letter-spacing: 0.03em;
    font-weight: 100;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h5, h6 {
    font-weight: normal;
    letter-spacing: 0.05em;
  }

`;
