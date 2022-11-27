import React from "react";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";

const StyledDescription = styled("label", {
  // margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Description = ({ children, ...props }) => (
  <StyledDescription {...props}>{children}</StyledDescription>
);

export default Description;
