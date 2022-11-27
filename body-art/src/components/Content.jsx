import styled from "styled-components";

export const Content = ({
  headerTransDisabled,
  headerTransMarginAuto,
  contentSmaller,
  padding,
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
      : `padding-top: ${headerTransMarginAuto ? "96px" : "48px"};`}

    // PADDING-Bottom
  ${disabledBottom ? null : `padding-bottom: 48px;`}

  // PADDING-Left
  ${disabledLeft ? null : `padding-left: 96px;`}

  // PADDING-Right
  ${disabledRight ? null : `padding-right: 96px;`}

  ${padding ? `padding: ${padding};` : null}

  // IMAGEM
  ${imgUrl ? `background-image: url(${imgUrl}); background-size: cover;` : null}
  `;

  return (
    <>
      <StyledContent {...props}></StyledContent>
    </>
  );
};

export const CardContent = ({ imgUrl, ...props }) => {
  const StyledContent = styled.div`
    display: inline-flexbox;
    width: min-content;
    ${imgUrl
      ? `background-image: url(${imgUrl}); background-size: cover;`
      : null}
  `;

  return (
    <>
      <StyledContent {...props}></StyledContent>
    </>
  );
};
