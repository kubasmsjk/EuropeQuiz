import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ButtonComp = (props) => {
  const { id, className, type, value, onClick } = props;

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: 16,
            fontFamily: ['"Open Sans"', "sans-serif"].join(","),
            letterSpacing: 2,
            textDecoration: "none",
            textTransform: "uppercase",
            color: "#000",
            cursor: "pointer",
            border: "3px solid",
            p: "0.25em 0.5em",
            boxShadow:
              "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
            position: "relative",
            userSelect: "none",
            touchAction: "manipulation",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button id={id} className={className} type={type} onClick={onClick}>
        {value}
      </Button>
    </ThemeProvider>
  );
};

ButtonComp.propTypes = {
  id: PropTypes.string, 
  className: PropTypes.string, 
  type: PropTypes.string, 
  value: PropTypes.string, 
  onClick: PropTypes.func,
}

export default ButtonComp;
