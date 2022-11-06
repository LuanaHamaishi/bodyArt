import React from "react";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Description = ({ children, ...props }) => (
  <StyledDescription {...props}>{children}</StyledDescription>
);

export default Description;
