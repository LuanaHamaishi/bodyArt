import React from "react";
import { SubTitle, Title, TitleBox } from "../components/Title";
import Header from "../components/Header";

export default function ParaEmpresa() {
  return (
    <>
      <Header headerTransparent={true} />
      <TitleBox>
        <Title>Trabalhe com o que você ama</Title>
        <SubTitle>e nunca mais precisará trabalhar na vida.</SubTitle>
      </TitleBox>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <TitleBox>
        <Title>Gerir o seu negócio ficou bem mais fácil, </Title>
        <SubTitle>trabalhe com a BodyArt.</SubTitle>
      </TitleBox>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <TitleBox>
        <Title>Já imaginou?</Title>
        <SubTitle>Alguns cliques e BOOM, está pronto!</SubTitle>
      </TitleBox>
    </>
  );
}
