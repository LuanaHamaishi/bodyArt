import React from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/images/delfina-pan.png";
import img2 from "../../assets/images/joshua-rawson.png";
import img3 from "../../assets/images/tim-mossholder.png";

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
      <ContentCorousel imgUrl={img1} description={"Roberto Barba e Corte"} />
      <ContentCorousel imgUrl={img2} description={"Layla Cabellos"} />
      <ContentCorousel imgUrl={img3} description={"Edvaldo Cabelereiro"} />
      <ContentCorousel imgUrl={img1} />
      <ContentCorousel imgUrl={img2} />
      <ContentCorousel imgUrl={img3} />
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
