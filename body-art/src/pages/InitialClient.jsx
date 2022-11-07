import React from "react";
import { Content } from "../components/Content";
import Header from "../components/Header";
import { Title } from "../components/Title";
import { color } from "../assets/colors";
import Cards from "../components/Cards";

export default function InitialClient() {
  return (
    <div>
      <Header style={{ backgroundColor: `${color.beigeDark}` }} />
      <div className="d-flex flex-column align-items-center mt-4">
        <Title>O que você está buscando hoje?</Title>
      </div>
      <div className="d-flex mx-5 mt-4 justify-content-center">
        <Cards
          cardTitle="Cabelereiros"
          cardDescription="Os melhores profissionais para cuidar do seu cabelo estão aqui"
        />
        <Cards
          cardTitle="Manicure"
          cardDescription="Para que você sempre tenha suas unhas sempre belas e perfeitas para qualquer situação"
        />
        <Cards
          cardTitle="Barbearia"
          cardDescription="Sua elegância e aparência sempre em dia com os melhores barbeiros da sua região"
        />
        <Cards
          cardTitle="Maquiagem"
          cardDescription="Não importa para qual ocasião você esteja se arrumando, uma maquiagem bem feita pode fazer você ser o destaque"
        />
      </div>
    </div>
  );
}
