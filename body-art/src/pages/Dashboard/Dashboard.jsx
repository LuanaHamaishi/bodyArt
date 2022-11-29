import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Content } from "../../components/Content";
import { Tabs, TabsContent, TabsItem, TabsList } from "../../components/TabsRx";
import Servicos from "./Servicos";

export default function Dashboard() {
  const [teste, setTeste] = useState();

  useEffect(() => {
    console.log("teste");
  }, []);

  const ContainerTabs = styled.div`
    background-color: red;
    width: 100%;
    height: 100%;
  `;

  const ContainerServicos = styled.div`
    /* background-color: #15ff00; */
    width: 100%;
    height: 100%;
  `;

  const ContainerFinanceiro = styled.div`
    background-color: #5500ff;
    width: 100%;
    height: 100%;
  `;

  const ContainerFrequencia = styled.div`
    background-color: #ff00c8;
    width: 100%;
    height: 100%;
  `;

  return (
    <Content contentSmaller padding="20px 85px">
      <ContainerTabs>
        <Tabs pageDefault={1} width="100%" height="100%">
          <TabsList>
            <TabsItem page={1}>Serviços</TabsItem>
            {/* <TabsItem page={2}>Financeiro</TabsItem>
            <TabsItem page={3}>Frequência</TabsItem> */}
          </TabsList>

          <TabsContent page={1} height="100%">
            <ContainerServicos>{<Servicos />}</ContainerServicos>
          </TabsContent>

          <TabsContent page={2} height="100%">
            <ContainerFinanceiro>{"PAGE2"}</ContainerFinanceiro>
          </TabsContent>

          <TabsContent page={3} height="100%">
            <ContainerFrequencia>{"PAGE3"}</ContainerFrequencia>
          </TabsContent>
        </Tabs>
      </ContainerTabs>
    </Content>
  );
}
