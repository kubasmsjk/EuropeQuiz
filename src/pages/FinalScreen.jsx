import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score} = useSelector(state => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate('/');
  }

  return (
    <div>
      <h3>Final Score: {score} </h3>
      <button onClick={handleBackToSettings}>Back to settings!</button>
    </div>
  )
}

export default FinalScreen