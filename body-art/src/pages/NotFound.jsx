import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/inputs/Buttons";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="mt-5">Página não encontrada</h1>
      <Button className="mt-5" onClick={() => navigate(-1)}>
        Voltar para a salvação
      </Button>
    </>
  );
}
