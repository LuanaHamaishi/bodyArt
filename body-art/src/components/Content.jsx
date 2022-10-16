import styled from "styled-components";

export const Content = styled.div`
  height: ${(props) => (props.headerTransDisabled ? "87.8vh" : "100vh")};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${(props) =>
    props.headerTransMarginAuto ? "96px" : "48px"} !important;
  padding-bottom: 48px !important;
  padding-left: 96px !important;
  padding-right: 96px !important;
  ${(props) =>
    props.imgUrl
      ? `background-image: url(${props.imgUrl}); background-size: cover;`
      : null}
`;
