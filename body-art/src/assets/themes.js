import { color } from "./colors";
export const themes = {
  DEFAULT: {
    // DEFAULT
    name: "DEFAULT",
    enabledBg: color.bluePrimary,
    enabledColor: color.shineWhite,
    disabledBg: color.bluePrimary,
    disabledColor: color.shineWhite,
    hoverBg: color.blueSecondary,
    hoverColor: color.shineWhite,
    activeBg: color.bluePrimary,
    activeColor: color.shineWhite,
  },
  primary: {
    // AZUL
    name: "primary",
    enabledBg: color.bluePrimary,
    enabledColor: color.shineWhite,
    disabledBg: color.bluePrimary,
    disabledColor: color.shineWhite,
    hoverBg: color.brownLight,
    hoverColor: color.shineWhite,
    activeBg: color.beigeDark,
    activeColor: color.shineWhite,
  },
  secondary: {
    // DOURADO
    name: "secondary",
    enabledBg: color.brownLight,
    enabledColor: color.shineWhite,
    disabledBg: color.brownLight,
    disabledColor: color.shineWhite,
    hoverBg: color.bluePrimary,
    hoverColor: color.shineWhite,
    activeBg: color.blueSecondary,
    activeColor: color.shineWhite,
  },
  confirm: {
    // CONFIRMAÇÕES / SALVAR
    name: "confirm",
    enabledBg: color.greenSaturated,
    enabledColor: color.shineWhite,
    disabledBg: color.greenSaturated,
    disabledColor: color.shineWhite,
    hoverBg: color.greenDesaturared,
    hoverColor: color.shineWhite,
    activeBg: color.greenSaturated,
    activeColor: color.shineWhite,
  },
  cancel: {
    // DESATIVAÇÕES / CANCELAR
    name: "cancel",
    enabledBg: color.redSaturated,
    enabledColor: color.shineWhite,
    disabledBg: color.redSaturated,
    disabledColor: color.shineWhite,
    hoverBg: color.redDesaturated,
    hoverColor: color.shineWhite,
    activeBg: color.redSaturated,
    activeColor: color.shineWhite,
  },
  transparent: {
    name: "transparent",
    enabledBg: color.transparent,
    enabledColor: color.beigeEmphasis,
    disabledBg: color.transparent,
    disabledColor: color.beigeDark,
    hoverBg: color.transparent,
    hoverColor: color.shineWhite,
    activeBg: color.transparent,
    activeColor: color.beigeDark,
  },
};
