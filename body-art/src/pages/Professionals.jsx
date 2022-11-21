import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardServices } from "../components/Cards";
import { Content } from "../components/Content";
import { SubTitle, Title } from "../components/Title";
import api from "../api";
import { useParams } from "react-router-dom";

export default function Professionals() {
  const params = useParams("/profissinal/:id/:nome");
  const { nome } = params;
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setProfissionais(res.data.reverse());
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);
  return (
    <div className="d-flex">
      <Content>
        <div>
          {profissionais.map((prof) => {
            if (prof.nome === nome) {
              return (
                <>
                  {/* IMAGEM AQUI */}
                  <ProfessionalImg imgUrl={prof.foto} />
                  {/* NOME DO PROFISSIONAL AQUI */}
                  <div className="d-flex flex-diretion-row justify-content-between align-items-center mb-4 mt-4">
                    <Title> {prof.nome} </Title>
                    {/* ENDEREÇO DO PROFISSIONAL AQUI */}
                    <SubTitle> {prof.endereco} </SubTitle>
                  </div>
                </>
              );
            }
            return <></>;
          })}

          {/* SERVIÇOS */}
          <CardServices />
        </div>
      </Content>
      <Container>
        {/* BOX DE INFORMAÇÕES */}
        <SideInfo>
          {/* Endereço */}
          {/*   {profissionais.map((prof) =>{
            if(prof.nome === nome){
              return()
            }
          })} */}
          <ProfessionalImg
            imgUrl={`https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202206/20220627/chevrolet-corvette-6.2-stingray-conversivel-v8-gasolina-2p-automatico-wmimagem09462020626.jpg?s=fill&w=1920&h=1440&q=75`}
          />
          <Title>Nome do profissional</Title>

          <SubTitle>Endereço profissional</SubTitle>
          <SubTitle>Horário de atendimento</SubTitle>
          <SubTitle>Endereço profissional</SubTitle>
          <SubTitle>Endereço profissional</SubTitle>
          <SubTitle>Endereço profissional</SubTitle>
          <SubTitle>Endereço profissional</SubTitle>
        </SideInfo>
      </Container>
    </div>
  );
}

const SideInfo = styled.div`
  height: 100vh;
  width: 40vw;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 2px solid #678c99;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfessionalImg = ({ imgUrl, ...props }) => {
  const Image = styled.div`
    height: 40vh;
    width: 100%;
    background-color: violet;

    ${imgUrl
      ? `background-image: url(${imgUrl}); background-size: cover ;`
      : null}
  `;

  return (
    <>
      <Image></Image>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 96px !important;
  padding-right: 96px !important;
  padding-top: 48px !important;
`;
