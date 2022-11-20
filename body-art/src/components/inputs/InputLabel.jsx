import React from "react";
import { styled as styledStitches } from "@stitches/react";
import styled from "styled-components";
import { color } from "../../assets/colors";

export const Label = styledStitches("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  variants: {
    color: {
      red: { color: color.redDesaturated },
      blue: { color: color.bluePrimary },
    },
  },
  display: "block",
});

const InputLabel = ({ label, errorLabel, input, children }) => {
  const Fieldset = styledStitches("fieldset", {
    all: "unset",
    marginBottom: 15,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  });

  const LabelAndError = styled.div`
    display: flex;
    gap: 0.5rem;
  `;

  return (
    <Fieldset>
      <LabelAndError>
        <Label color="blue">{label}</Label>
        {errorLabel ? <Label color="red">({errorLabel})</Label> : null}
      </LabelAndError>
      {input ? input : children}
    </Fieldset>
  );
};

export default InputLabel;
