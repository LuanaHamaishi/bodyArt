import React from "react";
import { styled } from "@stitches/react";
import { color } from "../../assets/colors";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: color.bluePrimary,
  fontSize: 17,
});

const DialogTitle = StyledTitle;

const Title = ({ children, ...props }) => (
  <DialogTitle {...props}>{children}</DialogTitle>
);

export default Title;
