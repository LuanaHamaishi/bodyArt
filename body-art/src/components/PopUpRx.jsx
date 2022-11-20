import React from "react";
import { styled as styledStitches, keyframes } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { color } from "../assets/colors";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "./inputs/Buttons";
import styled from "styled-components";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styledStitches(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styledStitches(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "90vw",
  maxWidth: "85vw",
  maxHeight: "85vh",
  // padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

function Content({ overlayClose, children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay onClick={overlayClose ? overlayClose : null} />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogClose = DialogPrimitive.Close;

const IconButton = styledStitches("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: color.bluePrimary,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: color.blueSecondary },
  // "&:focus": { boxShadow: `0 0 0 2px ${color.bluePrimary}` },
});

const DropClose = styled.div`
  all: unset;
  border-radius: 5px;
  height: 45px;
  width: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: -50px;
  background-color: white;
`;

const PopUp = ({
  open,
  children,
  trigger,
  themeButton,
  textButton,
  dropClose,
  handleClose,
}) => (
  <Dialog open={open}>
    <DialogTrigger asChild>
      {/* O TEMA E NOME DO BOTÃO RECEBE VIA PROPS DE QUEM CHAMA O POPUP */}

      {trigger ? (
        trigger
      ) : (
        <Button themeButton={themeButton}>{textButton}</Button>
      )}
    </DialogTrigger>
    <DialogContent overlayClose={handleClose}>
      {/* O CHILDREN QUE ESTÁ VINDO É OS FORM'S */}
      {children}
      <DialogClose asChild>
        {dropClose ? (
          <DropClose onClick={handleClose ? handleClose : null}>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DropClose>
        ) : (
          <IconButton
            aria-label="Close"
            onClick={handleClose ? handleClose : null}
          >
            <Cross2Icon />
          </IconButton>
        )}
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default PopUp;
