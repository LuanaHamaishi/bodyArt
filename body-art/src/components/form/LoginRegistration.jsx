import React, { useState } from "react";
import PopUp from "../PopUpRx";
import Description from "../inputs/DescriptionRx";
import Title from "../inputs/TitleRx";
import InputLabel from "../inputs/InputLabelRx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../TabsRx";
import styled from "styled-components";
import { Button } from "../inputs/Buttons";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import {setUserProfile} from "../../hooks/userProfile";
import Validate from "./Validation";

export default function LoginRegistration({rota}) {

  const navegacao = rota == "clientes" ? "/inicio-cliente" : "/empresa"

  const navigate = useNavigate();

  const [errorsMessage, setErrorsMessage] = useState({

  })

  function setProfile(data) {
    return rota === "clientes" ? {
      id: data.id,
      nome: data.nomeCliente,
      userRole: "cliente"
    } : {
      id: data.id,
      nome: data.nomeProfissional,
      type: "pro",
      userRole: "profissional"
    }
  }

  function cadastrar(event) {

    event.preventDefault()

    const data = rota === "clientes" ? {
      nomeCliente: event.target.nomeCliente.value,
      cpfCliente: event.target.cpfCliente.value,
      generoCliente: event.target.generoCliente.value,
      emailCliente: event.target.emailCliente.value,
      senhaCliente: event.target.senhaCliente.value,
      dataNascCliente: event.target.dataNascCliente.value
      
    } : {
      nomeProfissional: event.target.nomeProfissional.value,
      cpfProfissional: event.target.cpfProfissional.value,
      generoProfissional: event.target.generoProfissional.value,
      emailProfissional: event.target.emailProfissional.value,
      senhaProfissional: event.target.senhaProfissional.value,
      dataNascProfissional: event.target.dataNascProfissional.value
      
    };

    api.post(`/${rota}`, data)
    .then(res => {

      setUserProfile(setProfile(res.data))
      navigate(navegacao);

    }).catch(erro =>{
      
      if(erro.response.status===400){
        console.log(erro)

        setErrorsMessage(Validate(erro.response.data.errors))
    
      }
    } )

  }

  function logar(event){
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      senha: event.target.senha.value
    };

    api.post(`/${rota}/autenticar`, data)
    .then(res => {
      setUserProfile(setProfile(res.data))
      navigate(navegacao);
    }).catch(erro =>{
      console.log(erro)

      setErrorsMessage(Validate(erro.response.data.errors))
    } )
  }

  const ContainerTwoInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `;

  const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ gap }) => (gap ? gap : "2rem")};
  `;

  return (
    <PopUp textButton="Acessar/Registrar" themeButton="cancel" dropClose>
      <Tabs pageDefault="tab1" width="350px">
        <TabsList>
          <TabsTrigger page="tab1">Acessar</TabsTrigger>
          <TabsTrigger page="tab2">Registrar</TabsTrigger>
        </TabsList>
        <TabsContent page="tab1">
          <Title>Acesso</Title>
          <Description>Faça seu login</Description>
          <form onSubmit={logar}>
            <InputLabel name="email" label="Email" errorMessage={errorsMessage["email"]}/>
            <InputLabel name="senha" label="Senha" type="password" errorMessage={errorsMessage["senha"]}/>
            <ContainerButton gap="1rem">
              <Button themeButton="confirm">Logar</Button>
            </ContainerButton>
          </form>
        </TabsContent>
        <TabsContent page="tab2">
          <Title>Registro</Title>
          <Description>Faça seu registro</Description>
          <form onSubmit={cadastrar}>
            <InputLabel name={rota === "clientes" ? "nomeCliente" : "nomeProfissional"} label="Nome" placeholder="Maria José" errorMessage={errorsMessage[rota === "clientes" ? "nomeCliente" : "nomeProfissional"]}/>
            <ContainerTwoInput>
              <InputLabel
                name={rota === "clientes" ? "dataNascCliente" : "dataNascProfissional"}
                width={115}
                label="Data Nascimento"
                type="date"
                errorMessage={errorsMessage[rota === "clientes" ? "dataNascCliente" : "dataNascProfissional"]}
              />
              <InputLabel
                name={rota === "clientes" ? "cpfCliente" : "cpfProfissional"}
                width={140}
                label="CPF"
                placeholder="xxx.xxx.xxx-xx"
                errorMessage={errorsMessage[rota === "clientes" ? "cpfCliente" : "cpfProfissional"]}
              />
            </ContainerTwoInput>
            <InputLabel name={rota === "clientes" ? "generoCliente" : "generoProfissional"} errorMessage={errorsMessage[rota === "clientes" ? "generoCliente" : "generoProfissional"]} label="Genêro" />
            <InputLabel
              name={rota === "clientes" ? "emailCliente" : "emailProfissional"}
              label="Email"
              placeholder="example@example.com"
              errorMessage={errorsMessage[rota === "clientes" ? "emailCliente" : "emailProfissional"]}
            />
            <InputLabel name={rota === "clientes" ? "senhaCliente" : "senhaProfissional"} label="Senha" type="password" errorMessage={errorsMessage[rota === "clientes" ? "senhaCliente" : "senhaProfissional"]}/>
            <ContainerButton gap="1rem">
              <Button themeButton="confirm">Registrar</Button>
            </ContainerButton>
          </form>
        </TabsContent>
      </Tabs>
    </PopUp>
  );
}
