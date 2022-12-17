import '../assets/styles/globalStyles.css';
import Body from '../components/ui/body/body';
import Footer from '../components/ui/footer/footer';
import Header from '../components/ui/header/header';
import React from 'react'

function Root() {
  return (
   <div className='root'>
      <header><Header/></header>
      <main><Body/></main>
      <footer><Footer/></footer>
   </div>
  );
}

export default Root;
