import React from "react";
import styled from "styled-components";
import { color } from "../../assets/colors";
import { styled as styledStitches } from "@stitches/react";

export const SelectLabel = ({
  name,
  label,
  value,
  noColum,
  labelAlign,
  placeholder,
  width,
  type,
  onChange,
  defaultValue,
  children,
  ...props
}) => {
  const Fieldset = styledStitches(
    "fieldset",
    noColum
      ? {
          all: "unset",
          display: "flex",
          gap: 20,
          alignItems: "center",
          marginBottom: 15,
        }
      : {
          all: "unset",
          marginBottom: 15,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }
  );

  const Label = styledStitches(
    "label",
    noColum
      ? {
          fontSize: 15,
          color: color.bluePrimary,
          width: 90,
          textAlign: `${labelAlign ? labelAlign : "right"}`,
        }
      : {
          fontSize: 13,
          lineHeight: 1,
          marginBottom: 10,
          color: color.bluePrimary,
          display: "block",
        }
  );

  const StyledSelect = styled.select.attrs({
    className: "form-select",
  })`
    width: ${width ? width : "300px"};
    color: ${color.bluePrimary};
    border: none;
    box-shadow: 0 0 0 1px ${color.blueSecondary};
    :focus {
      border: none;
      box-shadow: 0 0 0 2px ${color.blueSecondary};
    }
  `;

  return (
    <Fieldset>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect
        name={name}
        id={name} // MELHOR DEIXAR ID AO INVES DE NAME
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        defaultValue={defaultValue}
        {...props}
        autoFocus="off"
      >
        {children}
      </StyledSelect>
    </Fieldset>
  );
};

export const Option = styled.option``;
