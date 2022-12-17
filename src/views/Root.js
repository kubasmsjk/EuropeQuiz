import '../assets/styles/globalStyles.css';
import Body from '../components/ui/body';
import Footer from '../components/ui/footer';
import Header from '../components/ui/header';
import React from 'react'

function Root() {
  return (
   <div className='root'>
      <Header/>
      <Body/>
      <Footer/>
   </div>
  );
}

export default Root;
