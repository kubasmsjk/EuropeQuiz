import React from "react";
import { Box } from "@mui/system";
import "./headerStyle.css";

class Header extends React.Component {
  render() {
    return (
      <Box className="header">
        <h1>
          <span>Euro</span>
          <span>quiz</span>
        </h1>
      </Box>
    );
  }
}

export default Header;
