import styled from "styled-components";

export const Content = styled.div`
  height: ${(props) =>
    props.headerTransDisabled || props.contentSmaller ? "87.8vh" : "100vh"};
  width: 100%;
  display: flex;
  flex-direction: column;

  // PADDING-Top
  ${(props) =>
    props.disabledTop
      ? null
      : `padding-top: ${
          props.headerTransMarginAuto ? "96px" : "48px"
        } !important;`}

  // PADDING-Bottom
  ${(props) =>
    props.disabledBottom ? null : `padding-bottom: 48px !important;`}

  // PADDING-Left
  ${(props) => (props.disabledLeft ? null : `padding-left: 96px !important;`)}

  // PADDING-Right
  ${(props) => (props.disabledRight ? null : `padding-right: 96px !important;`)}

  // IMAGEM
  ${(props) =>
    props.imgUrl
      ? `background-image: url(${props.imgUrl}); background-size: cover;`
      : null}
`;
