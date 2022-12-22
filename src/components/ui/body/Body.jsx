import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FinalScreen from '../../../pages/FinalScreen';
import Questions from '../../../pages/Questions';
import Settings from '../../../pages/Settings';
function Body() {

  return (
   <div className='body'>
    <Router>
      <Routes>
        <Route path="/" element={<Settings/>}>
        </Route>
        <Route path="/questions" element={<Questions/>}>
        </Route>
        <Route path="/score" element={<FinalScreen/>}>
        </Route>
      </Routes>
    </Router>
   </div>
  );
}

export default Body;