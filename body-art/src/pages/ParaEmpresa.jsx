import React from "react";
import { Content } from "../components/Content";
import imgHome from "../assets/images/christin-hume.jpg";
import cabelereira from "../assets/images/cabelereira.png";
import corteCrianca from "../assets/images/corteCrianca.png";
import cabelereiros from "../assets/images/cabelereiros.png";
import barbeiro from "../assets/images/barbeiro.png";
import { SubTitle, Title, TitleBox } from "../components/Title";
import { ModalPrimary } from "./Home";
import Footer from "../components/Footer";
import LoginRegistrationProfissional from "../components/form/LoginRegistrationProfissional";

export default function ParaEmpresa() {
  return (
    <>
      <Content
        className="img-fluid"
        headerTransMarginAuto={true}
        contentSmaller={true}
        imgUrl={imgHome}
      >
        <ModalPrimary className="d-flex flex-column-reverse">
          <TitleBox>
            <Title>Todo talento é único</Title>
            <SubTitle>E nós queremos o seu!</SubTitle>
          </TitleBox>
        </ModalPrimary>
      </Content>

      <Content
        contentSmaller={true}
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TitleBox className="mt-5">
          <Title>Gerir o seu negócio ficou bem mais fácil,</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            trabalhe com a BodyArt.
          </SubTitle>
          <SubTitle>Exponha seu produto para todos</SubTitle> <br></br>
          <SubTitle>Acompanhe o do desempenho da sua empresa</SubTitle>
          <br></br>
          <SubTitle>Simplifique seus agendamentos</SubTitle> <br></br>
          <SubTitle>Receba notificações de novos agendamentos</SubTitle>
          <br></br>
          <SubTitle>Deixe seu contato para o cliente se comunicar</SubTitle>
          <br></br>
        </TitleBox>
        <img
          src={cabelereira}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>

      <Content
        contentSmaller={true}
        style={{ justifyContent: "space-around", flexDirection: "row" }}
      >
        <img
          src={corteCrianca}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
        <TitleBox className="mt-5">
          <Title>Trabalhe com o que você ama</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            e nunca mais precisará trabalhar na vida.
          </SubTitle>
          <SubTitle>
            Além de trabalhar com o que você gosta, poder gerenciar
            <br></br>e controlar de forma simples e fácil o seu negócio.
          </SubTitle>
          <br></br>
          <SubTitle>
            Ter um bom planejamento e uma ampla visão financeira
            <br></br>
            sobre o seu caixa.
          </SubTitle>
          <br></br>
          <SubTitle>
            Com alguns cliques, visualizar sua programação semanal
            <br></br>e seus agendamentos marcados.
          </SubTitle>
          <br></br>
        </TitleBox>
      </Content>

      <Content
        contentSmaller={true}
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          height: "50vw !important",
        }}
      >
        <TitleBox className="mt-5">
          <Title>Já imaginou?</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            Alguns cliques e BOOM, está pronto
          </SubTitle>
          <SubTitle>Notificação de um agendamento</SubTitle> <br></br>
          <SubTitle>Agendamento marcado</SubTitle>
          <br></br>
          <SubTitle>Cliente vai até você</SubTitle>
          <br></br>
          <SubTitle>Cliente efetua a avaliação</SubTitle>
          <br></br>
        </TitleBox>
        <img
          src={cabelereiros}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>

      <Content
        contentSmaller={true}
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          marginBottom: "0",
        }}
      >
        <img
          src={barbeiro}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
        <TitleBox className="mt-5">
          <Title>O seu próximo passo</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            Pode ser a maior descoberta
          </SubTitle>
          <SubTitle>
            Nosso objetivo é impulsionar sua carreira e o seu negócio, <br></br>
            te proporcionando uma forma de gerir e fazer <br></br>o marketing do
            seu produto da melhor forma.<br></br>
          </SubTitle>
          <br></br>
          <SubTitle>A evolução do seu négocio está á alguns cliques!</SubTitle>
          <div className="d-flex justify-content-start mt-4">
            <LoginRegistrationProfissional buttonText="JUNTE-SE A NÓS" />
          </div>
        </TitleBox>
      </Content>
      <Footer />
    </>
  );
}
