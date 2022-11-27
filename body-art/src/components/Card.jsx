import styled from "styled-components";
import { color } from "../assets/colors";

export const Card = ({
  children,
  titlePrice,
  title,
  address,
  description,
  image,
  icon,
  hours,
  price,
}) => {
  const StyledCard = styled.div`
    color: ${color.bluePrimary};
    border: 1px solid ${color.blueSecondary};
    box-shadow: 1px 1px 1px 1px ${color.blue};
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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
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
    gap: 0.6rem;
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

  return (
    <div style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
      <StyledCard>
        <StyledContainerPhotoDescription>
          {image || icon ? (
            image ? (
              <StyledContainerImageIcon>
                <StyledImg src={image} />
              </StyledContainerImageIcon>
            ) : (
              <StyledContainerImageIcon>
                <StyledIcon>{icon}</StyledIcon>
              </StyledContainerImageIcon>
            )
          ) : null}
          <StyledContainerDescription>
            {title ? (
              <Label nolineHeight fontWeight="500" fontSize="1rem">
                {title}
              </Label>
            ) : null}
            {address ? (
              <Label nolineHeight fontWeight="500" fontSize="1rem">
                {address}
              </Label>
            ) : null}
            {description ? <Label nolineHeight>{description}</Label> : null}
          </StyledContainerDescription>
        </StyledContainerPhotoDescription>
        <StyledContainerOthers>
          {price ? (
            <StyledPrice>
              {titlePrice ? <Label>Preço</Label> : null}
              <Label fontWeight="400" fontSize="1.5rem">
                {price}
              </Label>
            </StyledPrice>
          ) : null}
          {hours ? (
            <StyledHours>
              <Label>Horário</Label>
              <Label fontWeight="400" fontSize="1.5rem">
                {hours}
              </Label>
            </StyledHours>
          ) : null}
          <StyledOthers>{children}</StyledOthers>
        </StyledContainerOthers>
      </StyledCard>
    </div>
  );
};
