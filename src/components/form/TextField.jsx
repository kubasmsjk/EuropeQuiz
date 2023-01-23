import { TextField } from "@mui/material";
import React from "react";

const TextFieldComp = (props) => {
  const { value, label, helperText, name, type, error, onChange } = props;

  return (
    <TextField
      sx={{
        width: "100%",
        pb: "8px",
      }}
      label={label}
      helperText={helperText}
      type={type}
      value={value}
      name={name}
      error={error}
      onChange={onChange}
      size="small"
      variant="standard"
    />
  );
};

export default TextFieldComp;
