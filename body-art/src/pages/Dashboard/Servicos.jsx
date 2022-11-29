import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../assets/colors";
import { Card } from "../../components/Card";
import {
  PlusCircledIcon,
  TrashIcon,
  Pencil2Icon,
  ScissorsIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button } from "../../components/inputs/Buttons";
import PopUp from "../../components/PopUpRx";
import DropdownRx from "../../components/Dropdown/DropdownRx";
import { useForm } from "react-hook-form";
import api from "../../api";
import InputLabel from "../../components/inputs/InputLabel";
import { Input, Option, Select } from "../../components/inputs/Inputs";
import { toast } from "react-toastify";

export default function Servicos() {
  const [procedimentosData, setProcedimentosData] = useState([]);
  const [servicosData, setServicosData] = useState([]);
  const { register, handleSubmit, setValue, getValues, reset } = useForm();

  useEffect(() => {
    if (procedimentosData.length === 0) {
      api
        .get(`/procedimentos`)
        .then((res) => {
          setProcedimentosData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [procedimentosData]);

  useEffect(() => {
    if (servicosData.length === 0) {
      api
        .get(
          `/itens-procedimentos/ordenacao?idProfissional=${sessionStorage.getItem(
            "id"
          )}`
        )
        .then((res) => {
          setServicosData(res.data.vetor);
          console.log(res.data.vetor);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [servicosData]);

  const ContainerTwoInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;

  const ContainerService = styled.div`
    display: flex;
    max-width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  `;

  const ContainerSideBar = styled.div`
    /* background-color: #b8ab22; */
    display: flex;
    flex-direction: column;
    max-width: 280px;
    width: 100%;
    height: 450px;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 5px;
    gap: 0.5rem;
  `;

  const ContainerCards = styled.div`
    /* background-color: #1bbdbd; */
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    height: 450px;
    justify-content: center;
    align-items: flex-start;
    padding: 5px 5px;
    gap: 0.5rem;
  `;

  const ButtonAdd = styled(Button)`
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  const Cards = styled.div`
    border: solid 1px ${color.blueSecondary};
    border-radius: 0px 0px 9px 9px;
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

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 420px;
  `;

  function AddProcedimento() {
    const onSubmitProcedimento = (data) => {
      let dataApi = {
        nomeProcedimento: data.nomeProcedimento,
        descricaoProcedimento: data.descricaoProcedimento,
      };
      console.log("dataApi: ", JSON.stringify(dataApi));
      api
        .post(`/procedimentos`, dataApi)
        .then((res) => {
          toast.success("Procedimento cadastrado com sucesso!");
          setProcedimentosData([]);
        })
        .catch((erro) => {
          toast.warning("Cadastro inválido!");
          console.error("error: ", erro);
        });
    };

    return (
      <PopUp
        dropClose
        trigger={
          <ButtonAdd
            className="btn-sm rounded"
            themeButton="transparentColorBlue"
          >
            {/* <span style={{ marginRight: "0.7rem" }}></span> */}
            <PlusCircledIcon width={20} height={20} />
          </ButtonAdd>
        }
      >
        <Form
          id="form-procedimento"
          onSubmit={handleSubmit(onSubmitProcedimento)}
        >
          <InputLabel
            label="Procedimento"
            input={
              <Input
                name="nomeProcedimento"
                placeholder="Ex: Design de sobrancelhas"
                {...register("nomeProcedimento")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            // errorLabel={errorsMessage?.email}
          />
          <InputLabel
            label="Descrição"
            input={
              <Input
                name="descricaoProcedimento"
                placeholder="Ex: Sobrancelhas"
                {...register("descricaoProcedimento")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            // errorLabel={errorsMessage?.email}
          />
          <Button style={{ marginTop: "1rem" }} themeButton="confirm">
            Confirmar
          </Button>
        </Form>
      </PopUp>
    );
  }

  function RemoveProcedimento(idTeste) {
    api
      .delete(`/procedimentos/${idTeste}`)
      .then((res) => {
        toast.success("Procedimento removido com sucesso!");
        setProcedimentosData(procedimentosData.filter((e) => e.id !== idTeste));
      })
      .catch((erro) => {
        toast.warning("Remoção inválida!");
        console.error("error: ", erro);
      });
  }

  const Procedimentos = () => {
    return procedimentosData.map((e) => {
      return (
        <Card
          // title="Serviços"
          description={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Nome: {e.nomeProcedimento}</span>
              <span>Descrição: {e.descricaoProcedimento}</span>
            </div>
          }
          key={e.id}
          children={
            <DropdownRx
              icon={
                <TrashIcon
                  cursor="pointer"
                  width={20}
                  height={20}
                  color={color.bluePrimary}
                />
              }
            >
              <Button
                themeButton="primary"
                className="btn-sm"
                onClick={() => RemoveProcedimento(e.id)}
              >
                Remover
              </Button>
            </DropdownRx>
          }
        />
      );
    });
  };

  function AddServico() {
    const onSubmitServico = (data) => {
      //   console.log("data do form: ", data);
      let dataApi = {
        nomeItemProcedimento: data.nomeItemProcedimento,
        fotoItemProcedimento: null,
        valorItemProcedimento: data.valorItemProcedimento,
        duracaoItemProcedimento: `${data.duracaoItemProcedimento}:00`,
        categoria: data.categoriaItemProcedimento,
        especialidade: data.especialidadeItemProcedimento,
        procedimento: {
          id: data.idProcedimento,
        },
        profissional: {
          id: sessionStorage.getItem("id"),
        },
      };
      console.log("dataApi: ", JSON.stringify(dataApi));
      api
        .post(
          `/itens-procedimentos?idProfissional=${sessionStorage.getItem(
            "id"
          )}&idProcedimento=${dataApi.procedimento.id}`,
          dataApi
        )
        .then((res) => {
          toast.success("Serviço cadastrado com sucesso!");
          setServicosData([]);
        })
        .catch((erro) => {
          toast.warning("Cadastro inválido!");
          console.error("error: ", erro);
        });
    };
    return (
      <PopUp
        dropClose
        trigger={
          <ButtonAdd className="btn-sm" themeButton="primary">
            <span style={{ marginRight: "0.7rem" }}>Adicionar</span>
            <PlusCircledIcon width={20} height={20} color={color.shineWhite} />
          </ButtonAdd>
        }
      >
        <Form id="form-servico" onSubmit={handleSubmit(onSubmitServico)}>
          <InputLabel
            label="Serviço"
            input={
              <Input
                name="nomeItemProcedimento"
                placeholder="Ex: MicroP/Brasileiro"
                {...register("nomeItemProcedimento")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            // errorLabel={errorsMessage?.email}
          />
          <ContainerTwoInput>
            <InputLabel
              label="Valor"
              style={{ width: "98%" }}
              input={
                <Input
                  name="valorItemProcedimento"
                  placeholder="Ex: 120"
                  type="number"
                  style={{ width: "98%", marginRight: "1rem" }}
                  {...register("valorItemProcedimento")}
                  autoComplete="off"
                  autoFocus="off"
                />
              }
              // errorLabel={errorsMessage?.email}
            />
            <InputLabel
              label="Duração"
              style={{ width: "85%" }}
              input={
                <Input
                  name="duracaoItemProcedimento"
                  placeholder="Ex: 01:30 (1h 30m)"
                  type="time"
                  style={{ width: "85%", marginRight: "1rem" }}
                  {...register("duracaoItemProcedimento")}
                  autoComplete="off"
                  autoFocus="off"
                />
              }
              // errorLabel={errorsMessage?.email}
            />
          </ContainerTwoInput>

          <InputLabel
            label="Categoria"
            input={
              <Input
                name="categoriaItemProcedimento"
                placeholder="Ex: Sobrancelhas"
                {...register("categoriaItemProcedimento")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            // errorLabel={errorsMessage?.email}
          />
          <InputLabel
            label="Procedimento"
            input={
              <Select name="idProcedimento" {...register("idProcedimento")}>
                <Option value="">Selecione</Option>
                {procedimentosData.map((e) => {
                  return (
                    <Option key={e.id} value={e.id}>
                      {e.nomeProcedimento}
                    </Option>
                  );
                })}
              </Select>
            }
            // errorLabel={errorsMessage?.email}
          />
          <InputLabel
            label="Especialidade"
            input={
              <Input
                name="especialidadeItemProcedimento"
                placeholder="Ex: Micropigmentação"
                {...register("especialidadeItemProcedimento")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            // errorLabel={errorsMessage?.email}
          />
          <Button style={{ marginTop: "1rem" }} themeButton="confirm">
            Confirmar
          </Button>
        </Form>
      </PopUp>
    );
  }

  const Servicos = () => {
    return servicosData
      .map((e) => {
        let horas = e.duracaoItemProcedimento[0];
        let minutos = e.duracaoItemProcedimento[1];
        if (horas === 0) {
          horas = "";
        } else {
          horas = horas + "h ";
        }
        if (minutos === 0) {
          minutos = "";
        } else {
          minutos = minutos + "m";
        }

        let horaAtualMap = `${horas}${minutos}`;

        return (
          <Card
            title={`${e.nomeItemProcedimento}`}
            description={`Categoria: ${e.categoria}, Especialidade: ${e.especialidade}`}
            hours={`${horaAtualMap}`}
            titlePrice
            key={e.id}
            price={`R$${e.valorItemProcedimento},00`}
            icon={
              <ScissorsIcon height={30} width={30} color={color.darkBlue} />
            }
            // children={
            //   <DropdownRx
            //     icon={
            //       <HamburgerMenuIcon
            //         cursor="pointer"
            //         width={20}
            //         height={20}
            //         color={color.bluePrimary}
            //       />
            //     }
            //     backgroundColor={color.blue}
            //     borderRadius="30px"
            //     gap="0.3rem"
            //     display="flex"
            //   >
            //     <DropdownRx
            //       icon={
            //         <Pencil2Icon
            //           cursor="pointer"
            //           width={20}
            //           height={20}
            //           color={color.bluePrimary}
            //         />
            //       }
            //     ></DropdownRx>
            //     <DropdownRx
            //       icon={
            //         <TrashIcon
            //           cursor="pointer"
            //           width={20}
            //           height={20}
            //           color={color.bluePrimary}
            //         />
            //       }
            //     ></DropdownRx>
            //   </DropdownRx>
            // }
          />
        );
      })
      .reverse();
  };

  //   function EditarServico() {
  //     return (
  //       <PopUp
  //         dropClose
  //         trigger={
  //           <ButtonAdd className="btn-sm" themeButton="primary">
  //             <span style={{ marginRight: "0.7rem" }}>Adicionar</span>
  //             <PlusCircledIcon width={20} height={20} color={color.shineWhite} />
  //           </ButtonAdd>
  //         }
  //       >
  //         <Form>HELLOOO</Form>
  //       </PopUp>
  //     );
  //   }

  return (
    <ContainerService>
      <ContainerSideBar>
        <Card
          title="Procedimentos"
          width="100%"
          noShadow
          children={AddProcedimento()}
        />
        <Cards>{Procedimentos()}</Cards>
      </ContainerSideBar>
      <ContainerCards>
        <Card title="Serviços" width="100%" noShadow children={AddServico()} />
        <Cards>{Servicos()}</Cards>
      </ContainerCards>
    </ContainerService>
  );
}
