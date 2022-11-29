import React from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/images/delfina-pan.png";
import img2 from "../../assets/images/joshua-rawson.png";
import img3 from "../../assets/images/tim-mossholder.png";
import img4 from "../../assets/images/chris-knight.png";
import img5 from "../../assets/images/adam-winger.png";
import img6 from "../../assets/images/hair-spies.png";
import img7 from "../../assets/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg";

export default function Corousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 40,
    },
  });

  return (
    <ContainerCorousel ref={sliderRef}>
      <ContentCorousel imgUrl={img5} description={"Guarulhos cortes"} />
      <ContentCorousel imgUrl={img4} description={"Cabeleireiros da Leste"} />
      <ContentCorousel imgUrl={img1} description={"Roberto Barba e Corte"} />
      <ContentCorousel imgUrl={img2} description={"Layla Cabellos"} />
      <ContentCorousel imgUrl={img3} description={"Edvaldo Cabelereiro"} />
      <ContentCorousel imgUrl={img6} description={"Paulista cortes"} />
      <ContentCorousel imgUrl={img7} description={"Tatuapé tesouras"} />
    </ContainerCorousel>
  );
}

const ContentCorousel = (props) => {
  return (
    <div>
      <ImgCorousel img={props.imgUrl}>
        {props.description ? (
          <Description>{props.description}</Description>
        ) : null}
      </ImgCorousel>
    </div>
  );
};

const Description = styled.div`
  background: #6969698e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  height: 80px;
`;

const ContainerCorousel = styled.div.attrs({ className: `keen-slider` })``;

const ImgCorousel = styled.div.attrs({ className: `keen-slider__slide` })`
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 450px;
  max-height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
