import React from "react";
import styled from "styled-components";
import imagem from "../assets/images/calendario.png";

export default function Cards({ cardTitle, cardDescription }) {
  return (
    <Card className="card" style={{ width: "18rem", marginTop: "0px" }}>
      <img src={imagem} className="card-img-top" alt="imagem" />
      <CardBody className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <button className="btn btn-primary">Ver Profissionais</button>
      </CardBody>
    </Card>
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
