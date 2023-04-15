import { colors, fonts, cssSelectorsToString } from "./common";

export default cssSelectorsToString({
  ":root": {
    "--nyx-color-text": colors.text,
    "--nyx-color-standard": colors.standard,
    "--nyx-background-standard": colors.brightness(colors.standard, -150),
    "--nyx-color-bright": colors.bright,
    "--nyx-background-bright": colors.brightness(colors.bright, -150),
    "--nyx-color-success": colors.success,
    "--nyx-background-success": colors.brightness(colors.success, -150),
    "--nyx-color-error": colors.error,
    "--nyx-background-error": colors.brightness(colors.error, -150),
    "--nyx-background-color": colors.background,
  },
  ".nyx-color-text": {
    color: colors.text,
  },
  ".nyx-color-standard": {
    color: colors.standard,
  },
  ".nyx-background-standard": {
    background: colors.brightness(colors.standard, -150),
  },
  ".nyx-color-bright": { color: colors.bright },
  ".nyx-background-bright": {
    background: colors.brightness(colors.bright, -150),
  },
  ".nyx-color-success": { color: colors.success },
  ".nyx-background-success": {
    background: colors.brightness(colors.success, -150),
  },
  ".nyx-color-error": { color: colors.error },
  ".nyx-background-error": {
    background: colors.brightness(colors.error, -150),
  },
  ".nyx-background-color": { background: colors.background },

  body: {
    background: colors.background,
    color: colors.text,
    fontFamily: fonts.default,
    letterSpacing: "0.03em",
    fontWeight: "100",
  },

  "*": {
    boxSizing: "border-box",
  },

  "h1, h2, h3, h4, h5, h5, h6": {
    fontWeight: "normal",
    letterSpacing: "0.05em",
  },
});
