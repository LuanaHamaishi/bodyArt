import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  let theme;

  const themes = [
    {
      name: "primary",
      enabledBg: "blue",
      enabledColor: "yellow",
      disabledBg: "blue",
      disabledColor: "yellow",
      hoverBg: "blue",
      hoverColor: "yellow",
      activeBg: "blue",
      activeColor: "yellow",
    },
    {
      name: "secondary",
      enabledBg: "black",
      enabledColor: "red",
      disabledBg: "black",
      disabledColor: "red",
      hoverBg: "black",
      hoverColor: "red",
      activeBg: "black",
      activeColor: "red",
    },
    {
      name: "confirm",
      enabledBg: "green",
      enabledColor: "white",
      disabledBg: "green",
      disabledColor: "white",
      hoverBg: "green",
      hoverColor: "white",
      activeBg: "green",
      activeColor: "white",
    },
    {
      name: "cancel",
      enabledBg: "red",
      enabledColor: "white",
      disabledBg: "red",
      disabledColor: "white",
      hoverBg: "red",
      hoverColor: "white",
      activeBg: "red",
      activeColor: "white",
    },
  ];

  function themeSelector() {
    theme = themes.filter((theme) => theme.name === props.theme)[0];
  }
  themeSelector();

  const ButtonArt = styled.button.attrs({ className: "btn" })`
    :enabled {
      background-color: ${theme.enabledBg ? theme.enabledBg : "black"};
      color: ${theme.enabledColor ? theme.enabledColor : "white"};
    }
    :disabled {
      background-color: ${theme.disabledBg ? theme.disabledBg : "black"};
      color: ${theme.disabledColor ? theme.disabledColor : "white"};
    }
    :hover {
      background-color: ${theme.hoverBg ? theme.hoverBg : "black"};
      color: ${theme.hoverColor ? theme.hoverColor : "white"};
    }
    :active {
      background-color: ${theme.activeBg ? theme.activeBg : "black"} !important;
      color: ${theme.activeColor ? theme.activeColor : "white"} !important;
    }
  `;
  return <ButtonArt>{props.children}</ButtonArt>;
};
