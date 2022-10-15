import React from "react";
import styled from "styled-components";
import { Button } from "./inputs/Buttons";

export default function Header({ btn1, btn2 }) {
  return (
    <StyledHeader>
      <div style={{ marginLeft: "48px" }}>LOGO AQUI</div>
      <div>
        <button>{btn1}</button>
        <button style={{ marginLeft: "40px", marginRight: "48px" }}>
          {btn2}
        </button>
      </div>
      <Button themeButton="primary">PARA EMPRESAS</Button>
      <Button themeButton="secondary">PARA EMPRESAS</Button>
      <Button themeButton="confirm">PARA EMPRESAS</Button>
      <Button themeButton="cancel">PARA EMPRESAS</Button>
      <Button> PARA EMPRESAS </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  width: 100;
  background-color: #00000050;
`;
