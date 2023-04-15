import {colors} from "./common";

export default {
  hrColorStyle: color => `
    hr.nyx-hr-${color} {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, ${colors.opacity(
        colors[color],
        0,
      )}, ${colors[color]}, ${colors.opacity(colors[color], 0)});
    }
  `,
  default: `
    hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, ${colors.opacity(
        colors.text,
        0,
      )}, ${colors.text}, ${colors.opacity(colors.text, 0)});
    }
  `
};
