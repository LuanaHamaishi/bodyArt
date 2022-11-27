import React from "react";
import { styled } from "@stitches/react";
import { color } from "../../assets/colors";

const StyledTitle = styled("label", {
  margin: 0,
  fontWeight: 500,
  color: color.bluePrimary,
  fontSize: 17,
});

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

export default Title;
