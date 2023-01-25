import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const TextComp = (props) => {
  const { variant, fontWeight, color, value } = props;
  return (
    <Typography variant={variant} fontWeight={fontWeight} color={color}>
      {value}
    </Typography>
  );
};

TextComp.propTypes = {
  variant: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
};

export default TextComp;
