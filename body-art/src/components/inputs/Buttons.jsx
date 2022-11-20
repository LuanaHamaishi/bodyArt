import styled from "styled-components";
import { themes } from "../../assets/themes";

export const Button = styled.button.attrs({ className: "btn" })`
  :enabled {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].enabledBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].enabledColor};
  }
  :disabled {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].disabledBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].disabledColor};
  }
  :hover {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].hoverBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].hoverColor};
  }
  :active {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeBg} !important;
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeColor} !important;
    border-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeBg} !important;
  }
`;
