import { handleAmountChange, handleScoreChange } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import TextFieldComp from "./TextField";
import ButtonComp from "./Button";
import useForm from "./useForm";
import validate from "./validateInfo";

const StartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  const handleGoToAdminPanel = () => {
    navigate("/admin");
  };

  const onSubmit = (event) => {
    if (!!values.nickname && values.nickname !== "Nickname required") {
      handleGoToSettings(event);
    }
  };

  const handleGoToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate(`/settings/${values.nickname}`);
  };

  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        gridAutoRows: "7em",
      }}
    >
      <form
        id="startForm"
        onSubmit={(e) => {
          handleSubmit(e);
          onSubmit(e);
        }}
        noValidate
      >
        <TextFieldComp
          type="text"
          label="Nickname"
          helperText={!errors.nickname ? "" : "Nickname required"}
          id="nickname"
          name="nickname"
          error={!!errors.nickname}
          onChange={handleChange}
        />

        <ButtonComp
          id="start"
          className="button"
          type="submit"
          value="Start game!"
        ></ButtonComp>
      </form>
      <ButtonComp
        id="admin"
        className="button"
        role="button"
        type="button"
        value="Admin!"
        onClick={handleGoToAdminPanel}
      ></ButtonComp>
    </Box>
  );
};

export default StartForm;
