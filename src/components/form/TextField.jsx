import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react'



const TextFieldComp = props => {
  const { label, type } = props;

   

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          variant = "outlined"
          label = {label}
          type = {type}
          size = "small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;