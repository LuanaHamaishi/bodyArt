import React from "react";
import { Content } from "../components/Content";
import Header from "../components/Header";
import imgHome from "../assets/images/chris-knight.png";
import cabelereira from "../assets/images/cabelereira.png";
import { SubTitle, Title, TitleBox } from "../components/Title";
import { color } from "../assets/colors";
import { Button } from "../components/inputs/Buttons";

export default function ParaEmpresa() {
  return (
    <>
      <Header
        headerTransparent={true}
        button1="LOGIN"
        button2="TESTE GRATUITAMENTE"
      />
      <Content headerTransMarginAuto={true} imgUrl={imgHome}>
        <TitleBox>
          <Title style={{ color: `${color.shineWhite}` }}>
            Todo talento é único
          </Title>
          <SubTitle style={{ color: `${color.shineWhite}` }}>
            E nós queremos o seu!
          </SubTitle>
          <Button
            style={{ width: "10rem", fontWeight: "600" }}
            className="mt-2"
          >
            SER BODY ART
          </Button>
        </TitleBox>
      </Content>
      <Content style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <TitleBox className="mt-5">
          <Title>Gerir o seu negócio ficou bem mais fácil,</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            trabalhe com a BodyArt.
          </SubTitle>
          <SubTitle>Exponha seu produto para todos</SubTitle>
          <SubTitle>Acompanhe o do desempenho da sua empresa</SubTitle>
          <SubTitle>Simplifique seus agendamentos</SubTitle>
          <SubTitle>Receba notificações de novos agendamentos</SubTitle>
          <SubTitle>Deixe seu contato para o cliente se comunicar</SubTitle>
        </TitleBox>
        <img
          src={cabelereira}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>
      <Content style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <TitleBox className="mt-5">
          <Title>Gerir o seu negócio ficou bem mais fácil,</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            trabalhe com a BodyArt.
          </SubTitle>
          <SubTitle>Exponha seu produto para todos</SubTitle>
          <SubTitle>Acompanhe o do desempenho da sua empresa</SubTitle>
          <SubTitle>Simplifique seus agendamentos</SubTitle>
          <SubTitle>Receba notificações de novos agendamentos</SubTitle>
          <SubTitle>Deixe seu contato para o cliente se comunicar</SubTitle>
        </TitleBox>
        <img
          src={cabelereira}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>
      <Content style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <TitleBox className="mt-5">
          <Title>Gerir o seu negócio ficou bem mais fácil,</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            trabalhe com a BodyArt.
          </SubTitle>
          <SubTitle>Exponha seu produto para todos</SubTitle>
          <SubTitle>Acompanhe o do desempenho da sua empresa</SubTitle>
          <SubTitle>Simplifique seus agendamentos</SubTitle>
          <SubTitle>Receba notificações de novos agendamentos</SubTitle>
          <SubTitle>Deixe seu contato para o cliente se comunicar</SubTitle>
        </TitleBox>
        <img
          src={cabelereira}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>
      <Content
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          marginBottom: "0",
        }}
      >
        <TitleBox className="mt-5">
          <Title>Gerir o seu negócio ficou bem mais fácil,</Title>
          <SubTitle style={{ fontWeight: "600", marginBottom: "10px" }}>
            trabalhe com a BodyArt.
          </SubTitle>
          <SubTitle>Exponha seu produto para todos</SubTitle>
          <SubTitle>Acompanhe o do desempenho da sua empresa</SubTitle>
          <SubTitle>Simplifique seus agendamentos</SubTitle>
          <SubTitle>Receba notificações de novos agendamentos</SubTitle>
          <SubTitle>Deixe seu contato para o cliente se comunicar</SubTitle>
        </TitleBox>
        <img
          src={cabelereira}
          className="img-fluid"
          alt="Pictograma Cabelereira"
          style={{ height: "40vh" }}
        />
      </Content>
    </>
  );
}
