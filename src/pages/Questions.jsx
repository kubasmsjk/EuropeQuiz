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
    score
  } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/results?_limit=${amount_of_question}`;
  if(question_category){
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if(question_difficulty){
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if(question_type){
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  
  const { response, loading} = useAxios({ url: apiUrl });
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
      <div>Ładuje się</div>
    )
  }
  const handleClickAnswer = (e) => {
    const question = response[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score + 1));
    }
    if(questionIndex +1 < response.length){
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/score');
    }
  };

  return (
    <div>
      <h4>Questions {questionIndex + 1}</h4>
      <p>{response[questionIndex].question}</p>
        {options.map((data, id) => (
          <div key = {id}><button onClick={handleClickAnswer}>{data}</button></div>
        ))}
        <div>
          <p>Score: {score}/{response.length}</p>
        </div>

    </div>
  )
}

export default Questions