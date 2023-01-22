import { TextField } from "@mui/material";
import React from "react";

const TextFieldComp = (props) => {
  const { value, label, name, type, onChange } = props;

  return (
    <TextField
      sx={{
        width: "100%",
        pb: "8px",
      }}
      label={label}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      size="small"
      variant="standard"
    />
  );
};

export default TextFieldComp;
