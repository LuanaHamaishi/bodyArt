import React from "react";
import { Content } from "../components/Content";
import Header from "../components/Header";
import "./Home.css";
import imgHome from "../assets/images/hair-spies.png";
import Corousel from "../components/corousel/Corousel";
export default function Home() {
  return (
    <div>
      <Header headerTransparent={true} />
      <Content headerTransMarginAuto={true} imgUrl={imgHome} />
      <Content>
        <h2 className="mb-5">Recomendado </h2>
        <Corousel />
      </Content>
    </div>
  );
}
