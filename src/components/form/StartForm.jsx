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

  const handleGoToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate(`/settings/${values.nickname}`);
  };

  const onSubmit = (event) => {
    if (!!values.nickname) {
      handleGoToSettings(event);
    }
  };
  return (
    <Box
      sx={{
        display: "grid",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(255,255,255, 0.95)",
        borderRadius: 2,
        border: 1,
        p: 2,
      }}
    >
      <form
        id="form"
        onSubmit={(e) => {
          handleSubmit(e);
          onSubmit(e);
        }}
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
    </Box>
  );
};
export default StartForm;
