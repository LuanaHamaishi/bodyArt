import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "../assets/colors";
import { Card } from "../components/Card";
import { Content } from "../components/Content";
import { PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
import api from "../api";

export default function Professionals() {
  const params = useParams("/profissional/:id/:nome");
  const { id } = params;
  const [profissionais, setProfissionais] = useState([]);
  const [services, setServices] = useState([]);
  const [addServices, setAddServices] = useState([]);

  useEffect(() => {
    if (services.length === 0) {
      api
        .get(`/itens-procedimentos/ordenacao?idProfissional=${id}`)
        // axios
        //   .get("https://63795bc67419b414df8dedcf.mockapi.io/api/services")
        .then((res) => {
          setProfissionais(res.data.vetor[0].profissional);

          setServices(res.data.vetor);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });

  function addService(id) {
    console.log(id);
    let service = services.filter((s) => s.id === id);
    setAddServices([...addServices, service[0]]);
    setServices(services.filter((s) => s.id !== id));
  }

  function removeService(id) {
    let service = addServices.filter((s) => s.id === id);
    setServices([...services, service[0]]);
    setAddServices(addServices.filter((s) => s.id !== id));
  }

  function clear() {
    let mem = [...services];
    addServices.map((s) => {
      mem = [...mem, s];
      return <></>;
    });
    setServices(mem);
    setAddServices([]);
  }

  function toSchedule() {
    if (addServices.length === 0) {
      toast.warning("Você não tem nenhum serviço adicionado!");
    }
  }

  function renderDuracaoServico(duracao) {
    let horas = duracao[0];
    let minutos = duracao[1];

    return `
    ${horas === 0 ? " " : `${horas}h `}${minutos === 0 ? " " : `${minutos}min`}
    `;
  }

  return (
    <div>
      <Content contentSmaller padding="20px 85px">
        <Card
          image={profissionais.fotoPerfilProfissional}
          title={profissionais.nomeProfissional}
          address={`
            ${profissionais.ruaProfissional} ${profissionais.numeroProfissional}, ${profissionais.bairroProfissional} 
            `}
        />

        <ContainerService>
          <ContainerCards>
            <Title>Serviços</Title>
            <Cards>
              {services.map((s, i) => {
                return (
                  <Card
                    title={s.nomeItemProcedimento}
                    description={renderDuracaoServico(
                      s.duracaoItemProcedimento
                    )}
                    price={"R$" + s.valorItemProcedimento}
                    key={s.id}
                    children={
                      <PlusCircledIcon
                        height={20}
                        width={20}
                        color={color.darkBlue}
                        style={{ cursor: "pointer" }}
                        onClick={() => addService(s.id)}
                      />
                    }
                  />
                );
              })}
            </Cards>
          </ContainerCards>
          <ContainerCards>
            <Title>Serviços adicionados</Title>
            <Cards>
              {addServices.map((as) => {
                return (
                  <Card
                    title={as.nomeItemProcedimento}
                    description={renderDuracaoServico(
                      as.duracaoItemProcedimento
                    )}
                    price={"R$" + as.valorItemProcedimento}
                    key={as.id}
                    children={
                      <TrashIcon
                        height={20}
                        width={20}
                        color={color.darkBlue}
                        style={{ cursor: "pointer" }}
                        onClick={() => removeService(as.id)}
                      />
                    }
                  />
                );
              })}
            </Cards>
            <Card
              maxChildren
              children={
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between"
                >
                  <StyledButton className="mx-5" onClick={() => clear()}>
                    Limpar
                  </StyledButton>
                  <StyledButton className="mx-5" onClick={() => toSchedule()}>
                    Agendar
                  </StyledButton>
                </div>
              }
            />
          </ContainerCards>
        </ContainerService>
      </Content>
    </div>
  );
}

const ContainerService = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const ContainerCards = styled.div`
  /* background-color: #3eefef; */
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  height: 485px;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 5px;
`;
const Cards = styled.div`
  border: solid 2px ${color.blueSecondary};
  border-radius: 9px;
  padding: 2% 2%;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${color.bluePrimary};
    border-radius: 20px;
    border: 3px solid ${color.blue};
  }
  ::-webkit-scrollbar-track {
    border-radius: 0px 5px 5px 0px;
    background: ${color.blue};
  }
`;

const Title = styled.h2`
  position: none;
`;

const StyledButton = styled.button`
  background-color: ${color.bluePrimary};
  color: ${color.beigeEmphasis};
  font-weight: 600;
  font-size: 18px;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.2s;
  :hover {
    background-color: ${color.beigeEmphasis};
    color: ${color.bluePrimary};
  }
`;
