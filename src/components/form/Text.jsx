import { Typography } from "@mui/material";
import React from "react";

const TextComp = (props) => {
  const { variant, fontWeight, color, value } = props;
  return (
    <Typography variant={variant} fontWeight={fontWeight} color={color}>
      {value}
    </Typography>
  );
};

export default TextComp;
