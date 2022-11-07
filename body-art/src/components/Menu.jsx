import React from "react";
import styled from "styled-components";
import imgLogo from "../assets/icons/logoB.svg";
import imgAvatar from "../assets/icons/avatar-homem.webp";

export default function Menu() {
    return (
        <StyledMenu>
            <LogoMenu />
            <Title>Portifólio</Title>
            <AvatarMenu />
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 12.2vh;
  width: 100%;
  background-color: #FFF1CF;
  position: absolute;
`;

const LogoMenu = styled.div`
  margin-left: 48px;
  background-image: url(${imgLogo});
  background-size: contain;
  border: none;
  width: 60px;
  height: 80px;
`;

const AvatarMenu = styled.div`
  margin-right: 48px;
  background-image: url(${imgAvatar});
  background-size: contain;
  border: none;
  width: 80px;
  height: 80px;
`;

const Title = styled.span`
  text-align: left;
  font-size: 1.5em;
  font-weight: 500;
`;