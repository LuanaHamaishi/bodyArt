import React from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";

const InputLabel = ({
  name,
  label,
  value,
  noColum,
  labelAlign,
  placeholder,
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
          color: violet.violet11,
          width: 90,
          textAlign: `${labelAlign ? labelAlign : "right"}`,
        }
      : {
          fontSize: 13,
          lineHeight: 1,
          marginBottom: 10,
          color: violet.violet12,
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
          color: violet.violet11,
          boxShadow: `0 0 0 1px ${violet.violet7}`,
          height: 35,

          "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
        }
      : {
          all: "unset",
          flex: "1 0 auto",
          borderRadius: 4,
          padding: "0 10px",
          fontSize: 15,
          lineHeight: 1,
          color: violet.violet11,
          boxShadow: `0 0 0 1px ${violet.violet7}`,
          height: 35,
          "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
        }
  );

  return (
    <Fieldset>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name} // MELHOR DEIXAR ID AO INVES DE NAME
        defaultValue={value}
        placeholder={placeholder}
        {...props}
      />
    </Fieldset>
  );
};

export default InputLabel;
