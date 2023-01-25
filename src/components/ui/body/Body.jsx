import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import FinalScreen from "../../../pages/FinalScreen";
import FirstScreen from "../../../pages/FirstScreen";
import Questions from "../../../pages/Questions";
import Settings from "../../../pages/Settings";

class Body extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<FirstScreen />}></Route>
              <Route path="/settings/:nickname" element={<Settings />}></Route>
              <Route path="/questions" element={<Questions />}></Route>
              <Route path="/score" element={<FinalScreen />}></Route>
            </Routes>
          </Box>
        </Container>
      </Router>
    );
  }
}

export default Body;
