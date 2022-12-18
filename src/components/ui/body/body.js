import React from 'react'
//import { Login } from "../../../pages/login/login";
//import { Register } from "../../../pages/signUp/register";
import ValidationComponent from '../../../pages/validators/validatorsComponent';
function Body() {

  //const [currentForm, setCurrentForm] = useState('login');
  //const toggleForm = (formName) => {
  //  setCurrentForm(formName);
  //}

  return (
   <div className='body'>
    <ValidationComponent/>
   </div>
  );
}

export default Body;