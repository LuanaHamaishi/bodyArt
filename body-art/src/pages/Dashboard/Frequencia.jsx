import React, { useState, useEffect } from "react";

export default function Frequencia() {
  const [teste, setTeste] = useState();

  useEffect(() => {
    console.log("teste");
  }, []);

  return <>Frequencia</>;
}
