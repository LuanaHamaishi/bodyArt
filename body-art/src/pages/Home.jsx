import React from "react";
import Container from "../components/Container";
import "./Home.css"
export default function Home() {
  return (
    <div>
      <Container>
       <h2>
        Recomendado
       </h2>
       <div className="caroussel" >
        <div className="quadrado">
          <h3 className="text">qqcoisa</h3>

        </div>
        <div className="quadrado">
          <h3 className="text">qqcoisa</h3>

        </div>
        <div className="quadrado">
          <h3 className="text">qqcoisa</h3>
        </div>
       </div>

       <div className="optCard">
        <div className="card">
          oi
        </div>
        <div className="card">
          oi
        </div>
       </div>

      </Container>
    </div>
  );
}
