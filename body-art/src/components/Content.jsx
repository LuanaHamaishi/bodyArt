import styled from "styled-components";

export const Content = ({
  headerTransDisabled,
  headerTransMarginAuto,
  contentSmaller,
  disabledTop,
  disabledBottom,
  disabledLeft,
  disabledRight,
  imgUrl,
  ...props
}) => {
  const StyledContent = styled.div`
    height: ${headerTransDisabled || contentSmaller ? "87.8vh" : "100vh"};
    width: 100%;
    display: flex;
    flex-direction: column;

    // PADDING-Top
    ${disabledTop
      ? null
      : `padding-top: ${headerTransMarginAuto ? "96px" : "48px"} !important;`}

    // PADDING-Bottom
  ${disabledBottom ? null : `padding-bottom: 48px !important;`}

  // PADDING-Left
  ${disabledLeft ? null : `padding-left: 96px !important;`}

  // PADDING-Right
  ${disabledRight ? null : `padding-right: 96px !important;`}

  // IMAGEM
  ${imgUrl ? `background-image: url(${imgUrl}); background-size: cover;` : null}
  `;

  return (
    <>
      <StyledContent {...props}></StyledContent>
    </>
  );
};
