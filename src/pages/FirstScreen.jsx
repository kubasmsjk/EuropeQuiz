import React from "react";
import StartForm from "../components/form/StartForm";
import { Box } from "@mui/system";

class FirstScreen extends React.Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StartForm />
      </Box>
    );
  }
}

export default FirstScreen;
