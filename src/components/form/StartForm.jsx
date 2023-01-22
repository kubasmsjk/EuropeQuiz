import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../redux/actions";
import useForm from "./useForm";
import TextFieldComp from "./TextField";
import ButtonComp from "./Button";
import { Box } from "@mui/system";
import validate from './validateInfo'

const StartForm = ({ submitForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const ustawImie = (e) => {
    setNickname(e.target.value);
  };



  const handleGoToAdminPanel = () => {
    navigate("/admin");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event)
    if(errors.nickname){
      handleGoToSettings(event);
    }
  };

  
  const handleGoToSettings = () => {
    
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate(`/settings/${nickname}`);
  };
  


  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridAutoRows: "7em",
      }}
    >
      <form id="startForm" onSubmit={handleSubmit} noValidate>
        <TextFieldComp
          type="text"
          label="Nickname"
          helperText={!errors.nickname ? "" : "Nickname required"}
          id="nickname"
          name="nickname"
          error={!!errors.nickname}
          onChange={(e) => {
            ustawImie(e);
            handleChange(e);
          }}
        />
        
        <ButtonComp
          id="start"
          className="button-54"
          type="submit"
          value="Start game!"
          disabled={false}
        ></ButtonComp>
        
      </form>
      <ButtonComp
        id="admin"
        className="button-54"
        role="button"
        type="button"
        value="Admin!"
        disabled={false}
        onClick={handleGoToAdminPanel}
      ></ButtonComp>
    </Box>
  );
};

export default StartForm;
