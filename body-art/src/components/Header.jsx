import React from "react";
import styled from "styled-components";
import { Button } from "./inputs/Buttons";

export default function Header({ btn1, btn2 }) {
  return (
    <StyledHeader>
      <div style={{ marginLeft: "48px" }}>LOGO AQUI</div>
      <div style={{  marginRight: "48px" }}>
      <Button themeButton="transparent" className="fw-semibold">SOBRE</Button>
      <Button themeButton="primary" className="fw-semibold ml-5">PARA EMPRESAS</Button>
      </div>
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
