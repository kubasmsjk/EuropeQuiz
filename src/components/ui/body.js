import '../../assets/styles/globalStyles.css';
import React, { useState } from 'react'
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/signUp/register";
function Body() {

  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
   <div className='body'>
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
   </div>
  );
}

export default Body;