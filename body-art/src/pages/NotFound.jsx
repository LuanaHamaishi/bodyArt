import React from "react";
import { useNavigate } from "react-router-dom";
import { Content } from "../components/Content";
import { Button } from "../components/inputs/Buttons";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: "#fff" }}>NOTI FAUNDI</h1>
      <Button onClick={() => navigate(-1)}>Voltar para a salvação</Button>
    </>
  );
}
