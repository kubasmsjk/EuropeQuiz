import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

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

TextFieldComp.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TextFieldComp;
