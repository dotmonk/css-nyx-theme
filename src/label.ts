import {colors, fonts, cssSelectorsToString} from "./common";

export default {
  labelColorStyle: color => cssSelectorsToString({
    [`.nyx-label-${color}`]: {
      backgroundColor: colors.brightness(colors[color], -200),
      borderColor: colors[color],
      color: colors[color],
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "10px",
      paddingRight: "10px",
      textAlign: "center",
      borderRadius: "3px",
      borderWidth: "1px",
      borderStyle: "solid",
      display: "inline-block",
      letterSpacing: "1.5px",
      fontFamily: fonts.default,
      fontSize: "10px",
      textShadow: `0px 0px 3px ${colors.background}`,
      marginRight: "2px",
      marginLeft: "2px",
      marginTop: "-2px",
      marginBottom: "-2px",
    }
  })
};
