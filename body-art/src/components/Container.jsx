import React from "react";
import styled from "styled-components";

export default function Container() {
  return <Conteudo></Conteudo>;
}

const Conteudo = styled.div`
  height: 100vh;
  width: 100;
  display: flex;
  flex-direction: column;
  padding-left: 48px;
  padding-right: 48px !important;
  background-color: #ddcea6;
`;
