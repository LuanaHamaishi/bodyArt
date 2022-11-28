import styled from "styled-components";
import { color } from "../assets/colors";

export const Card = ({
  children,
  titlePrice,
  title,
  address,
  description,
  image,
  maxChildren,
  icon,
  hours,
  price,
  width,
  noShadow,
}) => {
  const StyledCard = styled.div`
    color: ${color.bluePrimary};
    border: 1px solid ${color.blueSecondary};
    box-shadow: ${noShadow ? null : `1px 1px 1px 1px ${color.blue}`};
    display: flex;
    padding: 0.6rem;
    border-radius: 3px;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const Label = styled.label`
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
    line-height: ${({ nolineHeight }) => (nolineHeight ? null : "2px")};
    display: block;
    color: ${color.bluePrimary};
    text-align: left;
  `;

  const StyledContainerDescription = styled.div`
    width: ${address ? "100%" : null};
    display: flex;
    flex-direction: ${address ? "row" : "column"};
    align-items: center;
    justify-content: ${address ? "space-between" : "center"};
  `;

  const StyledContainerImageIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledImg = styled.img`
    border: 1px solid ${color.blueSecondary};
    border-radius: 5px;
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
  `;

  const StyledIcon = styled.div`
    border: 1px solid ${color.blueSecondary};
    border-radius: 5px;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledContainerOthers = styled.div`
    @media (max-width: 641px) {
      width: 100%;
      margin: 0.2rem 0.2rem 1rem 0.2rem;
    }
    width: ${maxChildren ? "100%" : null};
    display: flex;
    justify-content:/*  ${maxChildren
      ? "space-between"
      : "space-evenly"} */ space-evenly;
    align-items: center;
    gap: 1.3rem;
    flex-wrap: wrap;
  `;

  const StyledContainerPhotoDescription = styled.div`
    @media (max-width: 641px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      margin: 0.5rem;
      padding: 0.5rem 0px;
    }
    width: ${address ? "100%" : null};
    margin: 0px 0.3rem;
    display: flex;
  `;

  const StyledPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  `;

  const StyledHours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  `;

  const StyledOthers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  `;

  const StyledContainer = styled.div`
    display: flex;
    width: ${maxChildren || width ? (width ? width : "100%") : null};
    flex-direction: column;
    gap: 1rem;
  `;

  const ContainerTitle = styled.div`
    margin-left: 1rem;
    display: flex;
    width: 100%;
  `;

  const ContainerDescription = styled.div`
    margin-left: 1rem;
    display: flex;
    width: 100%;
  `;

  return (
    <StyledContainer>
      <StyledCard>
        <StyledContainerPhotoDescription>
          {!address ? (
            image || icon ? (
              image ? (
                <StyledContainerImageIcon>
                  <StyledImg src={image} />
                </StyledContainerImageIcon>
              ) : (
                <StyledContainerImageIcon>
                  <StyledIcon>{icon}</StyledIcon>
                </StyledContainerImageIcon>
              )
            ) : null
          ) : null}
          <StyledContainerDescription>
            {address ? (
              image || icon ? (
                image ? (
                  <StyledContainerImageIcon>
                    <StyledImg src={image} />
                  </StyledContainerImageIcon>
                ) : (
                  <StyledContainerImageIcon>
                    <StyledIcon>{icon}</StyledIcon>
                  </StyledContainerImageIcon>
                )
              ) : null
            ) : null}
            {title ? (
              <ContainerTitle>
                <Label nolineHeight fontWeight="500" fontSize="1rem">
                  {title}
                </Label>
              </ContainerTitle>
            ) : null}
            {address ? (
              <Label nolineHeight fontWeight="500" fontSize="1rem">
                {address}
              </Label>
            ) : null}
            {description ? (
              <ContainerDescription>
                <Label nolineHeight>{description}</Label>
              </ContainerDescription>
            ) : null}
          </StyledContainerDescription>
        </StyledContainerPhotoDescription>
        <StyledContainerOthers>
          {price ? (
            <StyledPrice>
              {titlePrice ? <Label>Preço</Label> : null}
              <Label fontWeight="400" fontSize="1rem">
                {price}
              </Label>
            </StyledPrice>
          ) : null}
          {hours ? (
            <StyledHours>
              <Label>Horário</Label>
              <Label fontWeight="400" fontSize="1rem">
                {hours}
              </Label>
            </StyledHours>
          ) : null}
          <StyledOthers>{children}</StyledOthers>
        </StyledContainerOthers>
      </StyledCard>
    </StyledContainer>
  );
};
