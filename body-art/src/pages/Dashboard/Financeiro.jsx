import React, { useState, useEffect } from "react";

export default function Financeiro() {
  const [teste, setTeste] = useState();

  useEffect(() => {
    console.log("teste");
  }, []);

  return <>Financeiro</>;
}