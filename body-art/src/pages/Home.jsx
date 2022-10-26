import React from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import Header from "../components/Header";
import "./Home.css";
import imgHome from "../assets/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import Corousel from "../components/corousel/Corousel";
import { SubTitle, Title, TitleBox } from "../components/Title";

export const ModalPrimary = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 1.2rem;
`;

export const ModalSecondary = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 1.2rem;
`;

export default function Home() {
  return (
    <div>
      <Header headerTransparent={true} />

      <Content
        headerTransMarginAuto={true}
        contentSmaller={true}
        imgUrl={imgHome}
      >
        <ModalPrimary>
          <TitleBox>
            <Title>Trabalhe com o que você ama</Title>
            <SubTitle>e nunca mais precisará trabalhar na vida.</SubTitle>
          </TitleBox>
        </ModalPrimary>
      </Content>

      <Content contentSmaller={true}>
        <Title className="mb-5">Recomendado</Title>
        <Corousel />
      </Content>

      <Content contentSmaller={true} disabledTop={true}>
        {/* <ModalSecondary>
        </ModalSecondary> */}
      </Content>
    </div>
  );
}
