import React from "react";
import { SubTitle, Title, TitleBox } from "../components/Title";
import { Content } from "../components/Content";
import PopUpRx from "../components/PopUpRx";
import InputLabelRx from "../components/inputs/InputLabelRx";
import DescriptionRx from "../components/inputs/DescriptionRx";
import TitleRx from "../components/inputs/TitleRx";
import FileUploadPage from "../components/ImportTeste";
// import TabsDemo from "../components/LabelComponenciarAinda";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/TabsRx";
// import App from "../components/Calendar";
import LoginRegistration from "../components/form/LoginRegistration";
// import AppTwo from "../components/CalendarComInfo.jsx";

export default function ParaEmpresa() {
  return (
    <>
      <Content headerTransMarginAuto={true}>
        <div
          style={{ border: "solid 1px red", margin: "20px", padding: "10px" }}
        >
          <TitleBox>
            <Title>Trabalhe com o que você ama</Title>
            <SubTitle>e nunca mais precisará trabalhar na vida.</SubTitle>
          </TitleBox>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <TitleBox>
            <Title>Gerir o seu negócio ficou bem mais fácil, </Title>
            <SubTitle>trabalhe com a BodyArt.</SubTitle>
          </TitleBox>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <TitleBox>
            <Title>Já imaginou?</Title>
            <SubTitle>Alguns cliques e BOOM, está pronto!</SubTitle>
          </TitleBox>
        </div>

        <div
          style={{ border: "solid 1px red", margin: "20px", padding: "10px" }}
        >
          <FileUploadPage></FileUploadPage>
        </div>

        <div
          style={{ border: "solid 1px red", margin: "20px", padding: "10px" }}
        >
          <PopUpRx trigger={<button>Oi meu amigo</button>} dropClose>
            {/* EXEMPLO 1 DO QUE ELE RECEBE */}
            {/* <TabsDemo></TabsDemo> */}

            <Tabs pageDefault="tab1" width="500px">
              <TabsList>
                <TabsTrigger page="tab1">Acessar</TabsTrigger>
                <TabsTrigger page="tab2">Registrar</TabsTrigger>
              </TabsList>
              <TabsContent page="tab1">
                <TitleRx>Luana Hamaishi</TitleRx>
                <DescriptionRx>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat earum eos ad at necessitatibus quibusdam nihil delectus
                  ex reiciendis repellendus eveniet quod sequi magni saepe
                  architecto aperiam, aliquid ullam velit.
                </DescriptionRx>
                <InputLabelRx
                  labelAlign={"right"}
                  noColum={true}
                  label="Idade"
                />
              </TabsContent>
              <TabsContent page="tab2">
                <TitleRx>Erick Lindo</TitleRx>
                <DescriptionRx>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat earum eos.
                </DescriptionRx>
                <InputLabelRx label="Nome" />
              </TabsContent>
            </Tabs>

            {/* EXEMPLO 2 DO QUE ELE RECEBE */}
            {/* <div style={{ width: "550px", padding: "30px" }}>
            <TitleRx>Luana Hamaishi</TitleRx>
            <DescriptionRx>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              earum eos ad at necessitatibus quibusdam nihil delectus ex
              reiciendis repellendus eveniet quod sequi magni saepe architecto
              aperiam, aliquid ullam velit.
            </DescriptionRx>
            <InputLabelRx labelAlign={"center"} noColum={true} label="Idade" />
          </div> */}
          </PopUpRx>
        </div>

        {/* CALENDARIO */}
        {/* <div
          style={{
            border: "solid 1px red",
            margin: "20px",
            padding: "10px",
            // width: "500px",
            background: "#00000050",
          }}
        >
          <App heightCell="180px" />
        </div> */}

        <div
          style={{
            border: "solid 1px red",
            margin: "20px",
            padding: "10px",
          }}
        >
          <LoginRegistration />
        </div>
      </Content>
    </>
  );
}
