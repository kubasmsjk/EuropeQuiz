import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../../redux/actions";

const SelectField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <FormControl
      sx={{
        pb: 2,
      }}
      size="small"
      fullWidth
    >
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {options.map(({ id, name }) => (
          <MenuItem value={id} key={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default SelectField;
