import React from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import "./Home.css";
import imgHome from "../assets/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import Corousel from "../components/corousel/Corousel";
import calendario from "../assets/images/calendario.png";
import { SubTitle, Title, TitleBox } from "../components/Title";
import Footer from "../components/Footer";
import LoginRegistration from "../components/form/LoginRegistration";
import { Button } from "../components/inputs/Buttons";

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
        <div style={{height: "fit-content", display: "flex", justifyContent: "space-between" }}>
          <TitleBox style={titleBoxFormating}>
            <Title style={titleFormating}>Faça seus agendamentos</Title>
            <SubTitle style={subTitleBoxFormating}>Reserve agora os procedimentos que você quer fazer com o profissional de sua escolha</SubTitle>
            <LoginRegistration buttonText="AGENDAR AGORA"/>
          </TitleBox>

          <TitleBox style={titleBoxFormating}>
            <Title style={titleFormating}>Para o seu negócio</Title>
            <SubTitle style={subTitleBoxFormating}>Comece a usar agora a nossa plataforma para você conseguir administrar seu negócio com mais facilidade e praticidade. <br /> Agendamentos, Mais relevância, Pagamentos, tudo em um só lugar</SubTitle>
            <Button themeButton="primary" style={{alignSelf:"unset"}}>EXPANDIR MEU NEGÓCIO</Button>
          </TitleBox>
        </div>

        
      </Content>

      <Content contentSmaller={true} disabledTop={true} style={{display: "flex", flexDirection:"row", padding: "50px"}}>
      <TitleBox className="mt-5">
          <Title>Reserve com os melhores profissionais mais próximos de você.</Title>
          <SubTitle style={{marginTop:"20px"}}>Os melhores profissionais para cuidar da sua beleza estão aqui na BodyArt</SubTitle> <br></br>
          <SubTitle style={{marginTop:"20px"}}>Confira as postagens dos profissionais em seus respectivos portifólios</SubTitle>
          <br></br>
          <SubTitle style={{marginTop:"20px"}}>Escolha o profissional com que você mais se identificar</SubTitle> <br></br>
        </TitleBox>

        <img
          src={calendario}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "50vh" }}
        />
      </Content>

      <Content contentSmaller={true} disabledTop={true}>
        <Title className="mb-5" style={{textAlign:"center"}}>Encontre um profissional mais perto de você</Title>
        <Corousel />
      </Content>


      <Footer />
    </div>


  );
}

const titleBoxFormating = {
  border: "1px solid #0000ff", 
  width: "48%",
  padding: "50px 10px"
  
}

const titleFormating = {
  textAlign: "center",
  padding: "20px 0px 100px"
}

const subTitleBoxFormating = { 
  textAlign: "center",
  width: "95%",
  alignSelf: "center",
  height: "250px",
  paddingBottom: "50px"
}