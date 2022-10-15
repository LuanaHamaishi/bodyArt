import React from "react";
import Container from "../components/Container";
import { SubTitle, Title, TitleBox } from "../components/Title";

export default function ParaEmpresa() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
