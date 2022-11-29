import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgLogo from "../assets/icons/logoW.svg";
import LoginRegistrationProfissional from "./form/LoginRegistrationProfissional";
import { Button } from "./inputs/Buttons";

export default function Header({
  role,
  headerTransparent,
  backgroundColor,
  logoDark,
  homeEnabled,
  company,
}) {
  const [pageDisabled, setPageDisabled] = useState("");

  const HomeEnabled = () => {
    return (
      <>
        {homeEnabled ? (
          <>
            <Link to={"/empresa"} style={{ textDecoration: "none" }}>
              <Button themeButton="primary" className="fw-semibold">
                PARA EMPRESAS
              </Button>
            </Link>
            <Button themeButton="transparent" className="fw-semibold">
              SOBRE
            </Button>
          </>
        ) : null}
      </>
    );
  };
  const Company = () => {
    return (
      <>
        {company ? (
          <>
            <LoginRegistrationProfissional
              buttonText="REGISTRAR"
              themeButton="primary"
              className="fw-semibold"
            />
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
          {/* <Button themeButton="transparent" className="fw-semibold">
            SOBRE
          </Button> */}
          <HomeEnabled />
          <Company />
        </HeaderOption>
      );
    }

    if (role === "cliente") {
      return (
        <HeaderOption>
          <Link to="/agendamentos-cliente">
            <Button
              themeButton="headeButton"
              className="fw-semibold"
              onClick={() => {
                setPageDisabled("agendamentos-cliente");
              }}
              disabled={pageDisabled === "agendamentos-cliente"}
            >
              AGENDAMENTOS
            </Button>
          </Link>

          <Link to="/inicio-cliente">
            <Button
              themeButton="headeButton"
              className="fw-semibold"
              onClick={() => {
                setPageDisabled("inicio-cliente");
              }}
              disabled={pageDisabled === "inicio-cliente"}
            >
              AGENDAR
            </Button>
          </Link>
          <HomeEnabled />
          {/* SIDE BAR DO CLIENTE */}
        </HeaderOption>
      );
    }

    if (role === "profissional") {
      return (
        <HeaderOption>
          <Link to="/dashboard">
            <Button
              themeButton="headeButton"
              className="fw-semibold"
              onClick={() => {
                setPageDisabled("dashboard");
              }}
              disabled={pageDisabled === "dashboard"}
            >
              DASHBOARD
            </Button>
          </Link>
          <Link to="/agendamentos">
            <Button
              themeButton="headeButton"
              className="fw-semibold"
              onClick={() => {
                setPageDisabled("agendamentos");
              }}
              disabled={pageDisabled === "agendamentos"}
            >
              AGENDAMENTOS
            </Button>
          </Link>
          <Company />
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
    gap: 1rem;
    display: flex;
    flex-direction: row-reverse;
  `;

  return (
    <StyledHeader>
      <Link to="/">
        <LogoHeader />
      </Link>
      <ContainerButtons>
        <HeaderRole />
      </ContainerButtons>
    </StyledHeader>
  );
}
