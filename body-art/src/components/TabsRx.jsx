import React from "react";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { color } from "../assets/colors";

export const Tabs = ({ width, children, pageDefault, ...props }) => {
  const StyledTabs = styled(TabsPrimitive.Root, {
    display: "flex",
    flexDirection: "column",
    width: `${width ? width : "300px"}`,
    // boxShadow: `0 2px 10px ${blackA.blackA4}`,
  });
  return (
    <StyledTabs defaultValue={pageDefault} {...props}>
      {children}
    </StyledTabs>
  );
};

export const TabsList = ({ children, ...props }) => {
  const StyledList = styled(TabsPrimitive.List, {
    flexShrink: 0,
    display: "flex",
    borderBottom: `1px solid ${mauve.mauve6}`,
  });
  return <StyledList {...props}>{children}</StyledList>;
};

export const TabsTrigger = ({ page, children, ...props }) => {
  const StyledTrigger = styled(TabsPrimitive.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    backgroundColor: "white",
    padding: "0 20px",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    color: color.blueSecondary,
    userSelect: "none",
    "&:first-child": { borderTopLeftRadius: 6 },
    "&:last-child": { borderTopRightRadius: 6 },
    "&:hover": { color: color.bluePrimary },
    '&[data-state="active"]': {
      color: color.bluePrimary,
      boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
    },
    "&:focus": {
      position: "relative",
      // , boxShadow: `0 0 0 2px black`
    },
  });
  return (
    <StyledTrigger value={page} {...props}>
      {children}
    </StyledTrigger>
  );
};

export const TabsContent = ({ page, children, ...props }) => {
  const StyledContent = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: "none",
    // "&:focus": { boxShadow: `0 0 0 2px black` },
  });
  return (
    <StyledContent value={page} {...props}>
      {children}
    </StyledContent>
  );
};
