import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios'
import { handleScoreChange } from '../redux/actions';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/results?_limit=${amount_of_question}`;
  if(question_category) {
    switch(question_category){
      case 1:
        apiUrl = apiUrl.concat(`&category=Geography`);
      break;
      case 2:
        apiUrl = apiUrl.concat(`&category=History`);
      break;
      case 3:
        apiUrl = apiUrl.concat(`&category=Vehicles`);
      break;
      default:
        return;
    }
    
  }
  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  
  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(response?.length){
      const question = response[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
        setOptions(answers);
    }
  }, [response, questionIndex]);

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response[questionIndex];
    if(e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if(questionIndex +1 < response.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/score');
    }
  };
 
  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{response[questionIndex].question}</Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">
              {data}
            </Button>
          </Box>
        ))}
        <Box mt={5}>
          <Typography>Score: {score}/{response.length}</Typography>
        </Box>
    </Box>
  );
};

export default Questions;