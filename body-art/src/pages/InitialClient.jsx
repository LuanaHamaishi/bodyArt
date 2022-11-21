import React, { useState } from "react";
import { Title } from "../components/Title";
import Cards from "../components/Cards";
import { Content } from "../components/Content";
import { useEffect } from "react";
import axios from "axios";
import { color } from "../assets/colors";
import { Link } from "react-router-dom";

export default function InitialClient() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = () => {
    axios
      .get("https://63795bc67419b414df8dedcf.mockapi.io/api/categoria")
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Content contentSmaller={true}>
      <div className="d-flex flex-column align-items-center mt-4">
        <Title>O que você está buscando hoje?</Title>
      </div>
      <div className="d-flex mx-5 mt-4 justify-content-center">
        {categorias.map((cat) => (
          <>
            <Link
              to={`/profissionais/${cat.nome}`}
              style={{
                textDecoration: "none",
                color: `${color.darkBlue}`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Cards
                key={cat.id}
                imagem={cat.imagem}
                btnCard="Ver Profissionais"
                cardTitle={cat.nome}
                cardDescription={cat.descricao}
              />
            </Link>
          </>
        ))}
      </div>
    </Content>
  );
}
