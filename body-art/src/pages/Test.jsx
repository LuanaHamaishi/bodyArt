import React from "react";
import { SubTitle, Title, TitleBox } from "../components/Title";
import Header from "../components/Header";
import { Content } from "../components/Content";
import PopUpRx from "../components/PopUpRx";
import InputLabelRx from "../components/inputs/InputLabelRx";
import DescriptionRx from "../components/inputs/DescriptionRx";
import SelectRx from "../components/inputs/SelectRx";
import TitleRx from "../components/inputs/TitleRx";
import FileUploadPage from "../components/ImportTeste";
import TabsDemo from "../components/LabelComponenciarAinda";

export default function ParaEmpresa() {
  return (
    <>
      <Header headerTransparent={true} />
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
          <SelectRx></SelectRx>
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
            <TabsDemo></TabsDemo>

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
      </Content>
    </>
  );
}
