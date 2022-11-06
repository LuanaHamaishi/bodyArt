import React from "react";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const DialogTitle = StyledTitle;

const Title = ({ children, ...props }) => (
  <DialogTitle {...props}>{children}</DialogTitle>
);

export default Title;
