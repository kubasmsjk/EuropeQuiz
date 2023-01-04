import '../assets/styles/globalStyles.css';
import Body from '../components/ui/body/Body';
import Footer from '../components/ui/footer/Footer';
import Header from '../components/ui/header/Header';
import React from 'react';
import { Box } from '@mui/system';




function Root() {
  return (
    <Box>
      <header><Header/></header>
      <main><Body/></main>
      <footer><Footer/></footer>
    </Box>
  );
}

export default Root;
