import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../../redux/actions'

const TextFieldComp = props => {
  const { label, type } = props;
    const dispatch = useDispatch();
    const handleChange = (e) => {
      dispatch(handleAmountChange(e.target.value));
    };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange = {handleChange}
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