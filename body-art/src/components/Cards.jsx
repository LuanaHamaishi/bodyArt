import React from "react";
import styled from "styled-components";
// import { AddButton } from "./inputs/Buttons";
import { Title } from "./Title";

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

export function CardServices({ services }) {
  /*  const getServices = () => {
   
  }; */

  /*  function handleService({ services }) {
    console.log(res);
  } */
  return (
    <CardService>
      <Title>Serviços:</Title>
      {/*   {services.map((s) => (
        <CardServiceContainer>
          <TitleBox>
            <Title>{s.procedimento}</Title>
            <SubTitle>Duração serviço {s.duracao}</SubTitle>
          </TitleBox>
          <div className="d-flex w-25 justify-content-evenly align-items-center">
            <Title>R${s.preco}</Title>

            <PlusCircledIcon height={20} width={20} color={color.darkBlue} />
          </div>
        </CardServiceContainer>
      ))} */}
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
  overflow-y: scroll;
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
  margin-bottom: 10px;
`;
