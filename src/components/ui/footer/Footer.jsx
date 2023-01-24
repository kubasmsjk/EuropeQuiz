import React from "react";
import { Box } from "@mui/material";
import "./footerStyle.css";

class Footer extends React.Component {
  render() {
    return (
      <Box className="footer">
        <h1>&copy;Copyright 2023 All rights reserved</h1>
      </Box>
    );
  }
}

export default Footer;
