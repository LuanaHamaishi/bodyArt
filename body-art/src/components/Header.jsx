import React from "react";
import styled from "styled-components";
import { Button } from "./inputs/Buttons";
import imgLogo from "../assets/icons/logoW.svg";

export default function Header(props) {
  return (
    <StyledHeader headerTrans={props.headerTransparent}>
      <LogoHeader />
      <ContainerButtons>
        <Button themeButton="transparent" className="fw-semibold">
          {props.button1 ? props.button1 : null}
        </Button>
        <Button
          themeButton="primary"
          className="fw-semibold"
          style={{ marginRight: 10, marginLeft: 10 }}
        >
          {props.button2 ? props.button2 : null}
        </Button>
      </ContainerButtons>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 12.2vh;
  width: 100%;
  background-color: #00000050;
  position: ${(props) => (props.headerTrans ? "absolute" : null)};
`;

const ContainerButtons = styled.div`
  margin-right: 48px;
  display: flex;
`;

const LogoHeader = styled.div`
  margin-left: 48px;
  background-image: url(${imgLogo});
  background-size: contain;
  border: none;
  width: 60px;
  height: 80px;
`;
