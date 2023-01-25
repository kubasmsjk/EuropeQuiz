import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "../hooks/useAxios";
import SelectField from "../components/form/SelectField";
import TextFieldComp from "../components/form/TextField";
import ButtonComp from "../components/form/Button";
import TextComp from "../components/form/Text";
import useForm from "../components/form/useForm";
import validate from "../components/form//validateInfo";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nickname } = useParams();
  const { response, error, loading } = useAxios({ url: "/db" });
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

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

  const handleGoToQuestions = (e) => {
    e.preventDefault();
    dispatch(handleAmountChange(values.amountOfQuestions));
    navigate("/questions");
  };

  const onSubmit = (event) => {
    if (
      !!values.amountOfQuestions &&
      errors.amountOfQuestions !== "Amount of Questions is invalid , try 1-10"
    ) {
      handleGoToQuestions(event);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "40%",
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
        <TextComp
          variant="h6"
          fontWeight="550"
          color="black"
          value={
            nickname.toUpperCase() +
            ", before starting set desired paramerers below"
          }
        ></TextComp>
        <SelectField options={response.categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldComp
          type="number"
          label="Amount of Questions"
          helperText={!errors.amountOfQuestions ? "" : errors.amountOfQuestions}
          id="amountOfQuestions"
          name="amountOfQuestions"
          error={!!errors.amountOfQuestions}
          onChange={handleChange}
        />
        <ButtonComp
          id="start"
          className="button"
          type="submit"
          value="Get Started!"
        ></ButtonComp>
      </form>
    </Box>
  );
};

export default Settings;
