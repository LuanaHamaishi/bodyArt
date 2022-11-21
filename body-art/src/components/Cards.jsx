import React from "react";
import styled from "styled-components";
import { AddButton } from "./inputs/Buttons";
import { SubTitle, Title, TitleBox } from "./Title";

export default function Cards({ cardTitle, cardDescription, btnCard, imagem }) {
  return (
    <Card className="card" style={{ width: "18rem", marginTop: "0px" }}>
      <img src={imagem} className="card-img-top" alt="imagem" />
      <CardBody className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <button className="btn btn-primary">{btnCard}</button>
      </CardBody>
    </Card>
  );
}

export function CardServices() {
  return (
    <CardService>
      <Title>Serviços:</Title>
      <CardServiceContainer>
        <TitleBox>
          <Title>Nome serviço</Title>
          <SubTitle>Duração serviço</SubTitle>
        </TitleBox>
        <div className="d-flex w-25 justify-content-evenly align-items-center">
          <Title>R$00,00</Title>
          <AddButton />
        </div>
      </CardServiceContainer>
    </CardService>
  );
}

const Card = styled.div`
  width: 18rem;
  margin-right: 2rem;
  border: solid 1px #678c99;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardService = styled.div`
  height: 500px;
  max-width: 500px;
  border: solid 2px #678c99;
  border-radius: 5px;
  overflow-y: hidden;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const CardServiceContainer = styled.div`
  height: 75px;
  width: 100%;
  border: solid 2px #678c99;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
