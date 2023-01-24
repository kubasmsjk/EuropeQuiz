import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/actions";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "../hooks/useAxios";
import TextComp from "../components/form/Text";
import ButtonComp from "../components/form/Button";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/results?_limit=${amount_of_question}`;
  if (question_category) {
    switch (question_category) {
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
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.length) {
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

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "35%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(255,255,255, 0.95)",
        borderRadius: 2,
        border: 1,
        p: 2,
      }}
    >
      <TextComp
        variant="h4"
        value={"Questions " + `${questionIndex + 1}`}
      ></TextComp>
      <TextComp
        variant="h6"
        fontWeight="400"
        value={`${response[questionIndex].question}`}
      ></TextComp>
      {options.map((data, id) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 0.5,
          }}
          key={id}
        >
          <ButtonComp
            id="answer"
            className="button"
            type="button"
            value={data}
            onClick={handleClickAnswer}
          ></ButtonComp>
        </Box>
      ))}
      <Box mt={4}>
        <TextComp value={"Score:" + `${score}/${response.length}`}></TextComp>
      </Box>
    </Box>
  );
};

export default Questions;
