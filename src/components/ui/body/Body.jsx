import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FinalScreen from '../../../pages/FinalScreen';
import FirstScreen from '../../../pages/FirstScreen';
import AdminScreen from '../../../pages/AdminScreen';
import Questions from '../../../pages/Questions';
import Settings from '../../../pages/Settings';

function Body() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box>
          <Routes>
            <Route path="/" element={<FirstScreen/>}>
            </Route>
            <Route path="/settings/:nickname" element={<Settings/>}>
            </Route>
            <Route path="/admin" element={<AdminScreen/>}>
            </Route>
            <Route path="/questions" element={<Questions/>}>
            </Route>
            <Route path="/score" element={<FinalScreen/>}>
            </Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default Body;