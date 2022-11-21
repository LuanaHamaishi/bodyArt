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
export function AddButton() {
  return (
    <>
      <RoundedButton>+</RoundedButton>
    </>
  );
}
const RoundedButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid #000;
  color: #000;
  background-color: transparent;
  font-weight: 600;
  font-size: large;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
`;
