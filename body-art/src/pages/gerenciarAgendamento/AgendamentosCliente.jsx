import React, { useState } from "react";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../api";
import { color } from "../../assets/colors";
import { Card } from "../../components/Card";
import { Content } from "../../components/Content";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
import DropdownRx from "../../components/Dropdown/DropdownRx";
import { Button } from "../../components/inputs/Buttons";
// import api from "../api";
// import PopUp from "../components/PopUpRx";
// import { Button } from "../components/inputs/Buttons";
// import { useForm } from "react-hook-form";
// import InputLabel, { Label } from "../components/inputs/InputLabel";
// import { Input } from "../components/inputs/Inputs";

export default function AgendamentosCliente() {
  const [servicesData, setServicesData] = useState([]);
  const [clienteData, setClienteData] = useState({});

  useEffect(() => {
    if (servicesData.length === 0) {
      api
        .get(`/agendamentos/${sessionStorage.getItem("id")}`)
        .then((res) => {
          setServicesData(res.data);
          setClienteData(res.data[0].cliente);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });

  function removeService(idTeste) {
    api
      .delete(`/agendamentos/${idTeste}`)
      .then((res) => {
        setServicesData(servicesData.filter((s) => s.id !== idTeste));
        toast.success("Serviço removido com sucesso!");
      })
      .catch((err) => {
        toast.warning("Erro na remoção!");
        console.error(err);
      });
  }

  return (
    <div>
      <Content contentSmaller padding="20px 85px">
        <Card
          //   image={cliente}
          title={clienteData.nomeCliente}
          description={`CPF: ${clienteData.cpfCliente} - E-mail: ${clienteData.emailCliente}`}
          //   address={`
          //     ${cliente} ${profissionais.numeroProfissional}, ${profissionais.bairroProfissional}
          //     `}
        />

        <ContainerService>
          <ContainerCards>
            <Title>Agendamentos</Title>
            <Cards>
              {servicesData
                .map((s) => {
                  let dataAgendamento = `${s.dataHoraCheckin[2]}/${s.dataHoraCheckin[1]}/${s.dataHoraCheckin[0]}`;
                  let horaAgendamento = `${
                    s.dataHoraCheckin[3] ? `${s.dataHoraCheckin[3]}h` : ""
                  } ${s.dataHoraCheckin[4] ? `${s.dataHoraCheckin[4]}m` : ""}`;

                  let status = `${
                    s.status === "A" ? "Agendado" : "Finalizado"
                  }`;

                  let descricao = `${dataAgendamento} - Status: ${status}`;

                  let price = `R$${s.itemProcedimento.valorItemProcedimento},00`;

                  return (
                    <Card
                      title={s.nomeItemProcedimento}
                      description={descricao}
                      titlePrice
                      price={price}
                      hours={horaAgendamento}
                      key={s.id}
                      children={
                        <DropdownRx
                          icon={
                            <TrashIcon
                              height={20}
                              width={20}
                              color={color.bluePrimary}
                            />
                          }
                        >
                          <Button
                            themeButton="primary"
                            className="btn-sm"
                            onClick={() => removeService(s.id)}
                          >
                            Remover
                          </Button>
                        </DropdownRx>
                      }
                    />
                  );
                })
                .reverse()}
            </Cards>
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
  max-width: 100%;
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
