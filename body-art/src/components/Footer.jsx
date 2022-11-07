import React from "react";
import styled from "styled-components";
import icon from "../assets/icons/logoB.svg";
export default function Footer() {
  return (
    <StyledFooter className="px-5">
      <div className="d-flex flex-column justify-content-space-arround align-items-start mt-4">
        <span>Sobre nós</span>
        <span>Para Clientes</span>
        <span>Acessar</span>
      </div>
      <div className="d-flex flex-column">
        <img src={icon} alt="icone" style={{ height: "100px" }} />
        <span>© 2022 BodyArt</span>
      </div>
      <div className="d-flex flex-column align-items-end mt-4">
        <span>Contato</span>
        <span>bodyart@bodyart.com.br</span>
        <span>(11)94035-2505</span>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  height: 20vh;
  width: 100%;
  background-color: #fff1cf;
  display: flex;
  justify-content: space-between;
`;
