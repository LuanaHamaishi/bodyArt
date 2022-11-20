import React from "react";
import styled from "styled-components";
import { color } from "../../assets/colors";
import { styled as styledStitches } from "@stitches/react";
import MaskedInput from "react-text-mask";

export const Select = styled.select.attrs({
  className: "form-select",
})`
  width: ${({ width }) => (width ? width : null)};
  color: ${color.bluePrimary};
  border: none;
  box-shadow: 0 0 0 1px ${color.blueSecondary};
  :focus {
    border: none;
    box-shadow: 0 0 0 2px ${color.blueSecondary};
  }
`;

export const Option = styled.option``;

export const Input = styledStitches("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: "1rem",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  color: color.bluePrimary,
  boxShadow: `0 0 0 1px ${color.blueSecondary}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
});

export const InputMask = styledStitches(MaskedInput, {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: "1rem",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  color: color.bluePrimary,
  boxShadow: `0 0 0 1px ${color.blueSecondary}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
});
