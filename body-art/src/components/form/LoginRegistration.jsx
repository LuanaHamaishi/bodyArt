import React, { useState } from "react";
import PopUp from "../PopUpRx";
import Description from "../inputs/DescriptionRx";
import Title from "../inputs/TitleRx";
import InputLabel from "../inputs/InputLabelRx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../TabsRx";
import styled from "styled-components";
import { Button } from "../inputs/Buttons";

export default function LoginRegistration(props) {
  const [login, setLogin] = useState({});
  const [registration, setRegistration] = useState({});

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
          <InputLabel label="Email" />
          <InputLabel label="Senha" />
        </TabsContent>
        <TabsContent page="tab2">
          <Title>Registro</Title>
          <Description>Faça seu registro</Description>
          <InputLabel name="name" label="Nome" placeholder="Maria José" />
          <ContainerTwoInput>
            <InputLabel
              name="date-nasc"
              width={115}
              label="Data Nascimento"
              type="date"
            />
            <InputLabel
              name="cpf"
              width={140}
              label="CPF"
              placeholder="xxx.xxx.xxx-xx"
            />
          </ContainerTwoInput>
          <InputLabel name="gender" label="Genêro" />
          <InputLabel
            name="email"
            label="Email"
            placeholder="example@example.com"
          />
          <InputLabel name="password" label="Senha" />
          <ContainerButton gap="1rem">
            <Button themeButton="confirm">Registrar</Button>
            <Button themeButton="cancel">Cancelar</Button>
          </ContainerButton>
        </TabsContent>
      </Tabs>
    </PopUp>
  );
}
