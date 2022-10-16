import React from "react";
import { Content } from "../components/Content";
import Header from "../components/Header";
import "./Home.css";
import imgHome from "../assets/images/hair-spies.png";
export default function Home() {
  return (
    <div>
      <Header headerTransparent={true} />
      <Content headerTransMarginAuto={true} imgUrl={imgHome} />
      <Content>
        <h2>Recomendado</h2>
        <div className="caroussel">
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

        {/* <div className="optCard">
          <div className="card">oi</div>
          <div className="card">oi</div>
        </div> */}
      </Content>
    </div>
  );
}
