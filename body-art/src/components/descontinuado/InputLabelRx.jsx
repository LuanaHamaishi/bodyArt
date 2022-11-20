import React from "react";
import { styled } from "@stitches/react";
import { color } from "../../assets/colors";

const InputLabel = ({
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
  errorMessage,
  ...props
}) => {
  const Fieldset = styled(
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

  const Label = styled(
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

  const Input = styled(
    "input",
    noColum
      ? {
          all: "unset",
          width: "100%",
          flex: "1",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          padding: "0 10px",
          fontSize: 15,
          lineHeight: 1,
          color: color.bluePrimary,
          boxShadow: `0 0 0 1px ${color.blueSecondary}`,
          height: 35,

          "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
        }
      : {
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
          width: width ? width : null,
          "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
        }
  );

  const Span = styled(
    "span",
    {
      color: color.redSaturated,
      fontSize: 12
      
    } 
  )

  return (
    <Fieldset>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name} // MELHOR DEIXAR ID AO INVES DE NAME
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        defaultValue={defaultValue}
        {...props}
      />
      <Span>{errorMessage}</Span>
    </Fieldset>
  );
};

export default InputLabel;