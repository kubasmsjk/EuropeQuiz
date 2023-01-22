import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../redux/actions";
import useForm from "./useForm";
import TextFieldComp from "./TextField";
import ButtonComp from "./Button";
import { Box } from "@mui/system";

const StartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const { handleSubmit, values, errors } = useForm();

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleGoToSettings = (event) => {
    event.currentTarget.disabled = true;
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate(`/settings/${nickname}`);
  };

  const handleGoToAdminPanel = () => {
    navigate("/admin");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(nickname);
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridAutoRows: "7em",
      }}
    >
      <form id="startForm" onSubmit={onSubmit}>
        <TextFieldComp
          type="text"
          label="Nickname"
          id="nickname"
          name="nickname"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors.nickname && <p>{errors.nickname}</p>}
        <ButtonComp
          id="start"
          className="button-54"
          type="submit"
          value="Start game!"
          disabled={false}
          onClick={(e) => {
            // handleGoToSettings(e);
          }}
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
