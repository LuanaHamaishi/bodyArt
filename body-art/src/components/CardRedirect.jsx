import React from "react";
import styled from "styled-components";

export default function CardRedirect() {
  return (
    <>
      <CardClient />
    </>
  );
}

function CardClient() {
  return (
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic error veniam
      quae impedit, deserunt reiciendis, itaque consequatur ad iure delectus
      maiores. Tenetur sed quas provident commodi nulla vel quos dolor! lorem
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatum
      asperiores ad quia, soluta rem reiciendis, autem laborum cumque dolorum,
      eos debitis quis illum est provident. Error ratione quia saepe! Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Recusandae asperiores
      exercitationem deserunt? Nobis sit nemo dicta accusantium earum
      repellendus eligendi fuga animi. Laudantium id eum placeat! Consequuntur
      illo exercitationem omnis.
      <button>IR</button>
    </CardContent>
  );
}

const CardContent = styled.div`
  height: auto;
  width: 35vw;
  border: #309482 solid 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 20px;
`;
