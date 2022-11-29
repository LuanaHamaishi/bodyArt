// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
// import api from "../api";
import { color } from "../assets/colors";
import Cards from "../components/Cards";
import { Content } from "../components/Content";

export default function ProfessionalSelect() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    if (profissionais.length === 0) {
      api
        .get("/profissionais")
        // axios
        //   .get("https://63795bc67419b414df8dedcf.mockapi.io/api/profissionais")
        .then((res) => {
          console.log(res);
          setProfissionais(res.data);
        })
        .catch((erro) => {
          console.error(erro);
        });
    }
  }, []);

  return (
    <div>
      <Content>
        <div className="row d-flex align-items-center">
          {profissionais.map((prof) => (
            <div className="col-sm-3 mb-4">
              <Link
                to={`/profissional/${prof.id}/${prof.nomeProfissional}`}
                style={{
                  textDecoration: "none",
                  color: `${color.darkBlue}`,
                }}
              >
                <Cards
                  key={prof.id}
                  imagem={prof.fotoPerfilProfissional}
                  btnCard="Ver"
                  cardTitle={prof.nomeProfissional}
                  cardDescription={`${prof.ruaProfissional} ${prof.numeroProfissional}, ${prof.bairroProfissional}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}
