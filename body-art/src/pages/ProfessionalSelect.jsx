import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { color } from "../assets/colors";
import Cards from "../components/Cards";
import { Content } from "../components/Content";

export default function ProfessionalSelect() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setProfissionais(res.data.reverse());
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <Content>
        <div className="row d-flex align-items-center">
          {profissionais.map((prof) => (
            <div className="col-sm-3 mb-4">
              <Link
                to={`/profissional/${prof.id}/${prof.nome}`}
                style={{
                  textDecoration: "none",
                  color: `${color.darkBlue}`,
                }}
              >
                <Cards
                  key={prof.id}
                  imagem={prof.foto}
                  btnCard="Ver"
                  cardTitle={prof.nome}
                  cardDescription={prof.endereco}
                />
              </Link>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}
