import React from "react";
import styled from "styled-components";
// import { AddButton } from "./inputs/Buttons";
import { Title } from "./Title";

export default function Cards({ cardTitle, cardDescription, btnCard, imagem }) {
  return (
    <Card className="card">
      <img
        style={{ height: "190px", objectFit: "cover" }}
        src={imagem}
        className="card-img-top"
        alt="imagem"
      />
      <CardBody className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <button className="btn btn-primary">{btnCard}</button>
      </CardBody>
    </Card>
  );
}



const Card = styled.div`
  height: 400px;
  width: 18rem;
  object-fit: cover;
  margin-right: 2rem;
  border: solid 1px #678c99;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;


