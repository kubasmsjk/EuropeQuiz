import {
  CircularProgress,
  FormControl,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import SelectField from "../components/form/SelectField";
import TextFieldComp from "../components/form/TextField";
import useAxios from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";
import { useState } from "react";
import ButtonComp from "../components/form/Button";
import TextComp from "../components/form/Text";
import useForm from "../components/form/useForm";
import validate from '../components/form//validateInfo'

const Settings = ({submitForm}) => {
  const { response, error, loading } = useAxios({ url: "/db" });
  const navigate = useNavigate();
  const { nickname } = useParams();
  const dispatch = useDispatch();
  const [amountOfQuestions, setAmountOfQuestions] = useState("");
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const ustawLiczbePytan = (e) => {
    setAmountOfQuestions(e.target.value)
  };

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    
    
    if(errors.amountOfQuestions != isNaN && (errors.amountOfQuestions != 'Email required' || errors.amountOfQuestions != 'Email address is invalid')){
      handleGoToQuestions(event);
        }
    
    
  };

  const handleGoToQuestions = e => {
    e.preventDefault();
    dispatch(handleAmountChange(amountOfQuestions));
    navigate('/questions');
};

  return (
    <Box>
      <TextComp
        variant="h4"
        fontWeight="bold"
        color="white"
        value={"Hello " + nickname}
      ></TextComp>
      <FormControl
        sx={{
          display: "grid",
          gridAutoRows: "3.5em",
          gap: 1,
          bgcolor: "rgba(255,255,255, 0.95)",
          borderRadius: 1,
          p: 2,
        }}
      >
        <SelectField options={response.categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldComp
          type="number"
          value={amountOfQuestions}
          label="Amount of Questions"
          id="amountOfQuestions"
          name="amountOfQuestions"
          onChange={(e) => {
            ustawLiczbePytan(e);
            handleChange(e);
          }}
        />
        <ButtonComp
          id="start"
          className="button-54 ${Settings.submit}"
          type="submit"
          value="Get Started!"
          disabled={false}
          onClick={(e) => {handleSubmit(e); onSubmit(e)}}
        ></ButtonComp>
      </FormControl>
    </Box>
  );
};

export default Settings;
