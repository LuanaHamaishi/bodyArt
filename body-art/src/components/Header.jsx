import React from "react";
import styled from "styled-components";
import imgLogo from "../assets/icons/logoW.svg";
import { Button } from "./inputs/Buttons";

export default function Header({
  role,
  headerTransparent,
  backgroundColor,
  logoDark,
  homeEnabled,
}) {
  const HomeEnabled = () => {
    return (
      <>
        {homeEnabled ? (
          <>
            <Button themeButton="primary" className="fw-semibold">
              PARA EMPRESAS
            </Button>
            <Button themeButton="transparent" className="fw-semibold">
              SOBRE
            </Button>
          </>
        ) : null}
      </>
    );
  };

  const HeaderRole = () => {
    if (!role) {
      return (
        <HeaderOption>
          <HomeEnabled />
        </HeaderOption>
      );
    }

    if (role === "cliente") {
      return (
        <HeaderOption>
          <HomeEnabled />
          {/* SIDE BAR DO CLIENTE */}
        </HeaderOption>
      );
    }

    if (role === "profissional") {
      return (
        <HeaderOption>
          <HomeEnabled />
          {/* SIDE BAR DO PROFISSIONAL */}
        </HeaderOption>
      );
    }
  };

  const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 12.2vh;
    width: 100%;
    background-color: ${backgroundColor ? backgroundColor : "#00000050"};
    position: ${headerTransparent ? "absolute" : null};
  `;

  const ContainerButtons = styled.div`
    gap: 1rem;
    margin-right: 2rem;
    display: flex;
  `;

  const LogoHeader = styled.div`
    ${logoDark ? "filter: invert(1);" : null}
    margin-left: 48px;
    background-image: url(${imgLogo});
    background-size: contain;
    border: none;
    width: 60px;
    height: 80px;
  `;

  const HeaderOption = styled.div`
    display: flex;
    flex-direction: row-reverse;
  `;

  return (
    <StyledHeader>
      <LogoHeader />
      <ContainerButtons>
        <HeaderRole />
      </ContainerButtons>
    </StyledHeader>
  );
}
