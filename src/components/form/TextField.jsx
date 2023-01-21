import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react'
import {useState} from 'react';


const TextFieldComp = props => {
  const { value, label, name, type, onChange  } = props;

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          label = { label }
          type={ type }
          value={ value }
          name={ name }
          className="form-control"
          onChange={onChange}
          variant = "outlined"
          size = "small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;