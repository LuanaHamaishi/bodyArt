import { ScissorsIcon, TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api";
import { color } from "../../assets/colors";
import CalendarComponent from "../../components/Calendar";
import { Card } from "../../components/Card";
import { Content } from "../../components/Content";
import { Button } from "../../components/inputs/Buttons";
import moment from "moment";
import { Label } from "../../components/inputs/InputLabel";
import DropdownRx from "../../components/Dropdown/DropdownRx";
import { toast } from "react-toastify";

export default function Agendamentos() {
  const [dataCalendar, setDataCalendar] = useState(null);
  const [dataSelected, setDataSelected] = useState();
  const [deleteEfetuado, setDeleteEfetuado] = useState();

  useEffect(() => {
    if (dataCalendar === null) {
      api
        .get(`/agendamentos/profissional/${sessionStorage.getItem("id")}`)
        .then((res) => {
          setDataCalendar(res.data);
        })
        .catch((erro) => {
          console.log(erro);
          toast.warning(`Error`);
        });
      setTimeout(() => {
        setDataSelected(
          document.querySelectorAll(".ant-picker-cell-selected")[0].title
        );
      }, 50);
    }
  }, [deleteEfetuado]);

  useEffect(() => {
    console.log(dataSelected);
  }, [dataSelected]);

  const ContainerPage = styled.div`
    display: flex;
    max-width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  `;

  const Calendar = styled.div`
    border: solid 1px ${color.blueSecondary};
    border-radius: 9px;
    padding: 1% 1%;
    background-color: white;
  `;

  const Cards = styled.div`
    border: solid 1px ${color.blueSecondary};
    border-radius: 1px 1px 8px 8px;
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

  const ContainerCards = styled.div`
    /* background-color: #3eefef; */
    display: flex;
    max-width: 600px;
    width: 100%;
    height: 485px;
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
    flex-direction: column;
  `;

  const ContainerCalendar = styled.div`
    /* background-color: #3300ff; */
    display: flex;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
  `;

  function removerAgendamento(idDel, nameDel) {
    api
      .delete(`/agendamentos/${idDel}`)
      .then((res) => {
        setDeleteEfetuado(dataCalendar.filter((e) => e.id === idDel));
        setDataCalendar(dataCalendar.filter((e) => e.id !== idDel));
        toast.success(`${nameDel} removido com sucesso!`);
      })
      .catch((erro) => {
        toast.warning(`Error na remoção!`);
        console.log(erro);
      });
  }

  return (
    <Content contentSmaller padding="20px 85px">
      <ContainerPage>
        <ContainerCalendar>
          <Calendar
            onClick={() => {
              setTimeout(() => {
                setDataSelected(
                  document.querySelectorAll(".ant-picker-cell-selected")[0]
                    .title
                );
              }, 50);
            }}
          >
            <CalendarComponent
              dataSelected={dataSelected}
              dataCalendar={dataCalendar}
            />
          </Calendar>
        </ContainerCalendar>
        <ContainerCards>
          <Card
            title="Agendamentos"
            width="100%"
            noShadow
            children={
              <Button themeButton="transparentColorBlue" disabled>
                {dataSelected}
              </Button>
            }
          />
          <Cards>
            {dataCalendar !== null
              ? dataCalendar.map((e, i) => {
                  let ano = e.dataHoraCheckin[0];
                  let mes = e.dataHoraCheckin[1];
                  let dia = e.dataHoraCheckin[2];
                  let horas = e.dataHoraCheckin[3];
                  let minutos = e.dataHoraCheckin[4];
                  let mesZeroAEsquerda = "";

                  if (mes !== 10 && mes !== 11 && mes !== 12) {
                    mesZeroAEsquerda = "0";
                  }
                  let dataAtualMap = `${ano}-${mesZeroAEsquerda}${mes}-${dia}`;
                  let horaAtualMap = `${horas}:${minutos}`;

                  // STATUS==A (AGENDADO)
                  // STATUS==C (CANCELADO) Excluido nem aparece/vou tirar o if
                  // STATUS==F (FINALIZADO)
                  let status = "";
                  if (e.status === "A") {
                    status = "Agendado";
                  } else {
                    status = "Finalizado";
                  }

                  if (dataAtualMap !== dataSelected) {
                    return;
                  }
                  // console.log("horas", horaAtualMap);
                  return (
                    <Card
                      title={`Nome: ${e.cliente.nomeCliente}`}
                      description={`Serviço: ${e.itemProcedimento.nomeItemProcedimento}`}
                      image={e.itemProcedimento.fotoItemProcedimento}
                      icon={
                        <ScissorsIcon
                          height={30}
                          width={30}
                          color={color.darkBlue}
                        />
                      }
                      key={e.id}
                      titlePrice
                      price={`R$${e.itemProcedimento.valorItemProcedimento},00`}
                      hours={horaAtualMap}
                      status={status}
                    >
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
                          onClick={() =>
                            removerAgendamento(
                              e.id,
                              e.itemProcedimento.nomeItemProcedimento
                            )
                          }
                        >
                          Remover
                        </Button>
                      </DropdownRx>
                    </Card>
                  );
                })
              : null}
          </Cards>
        </ContainerCards>
      </ContainerPage>
    </Content>
  );
}
