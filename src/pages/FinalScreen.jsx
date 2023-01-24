import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { Box } from "@mui/system";
import ButtonComp from "../components/form/Button";
import TextComp from "../components/form/Text";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoRows: "4em",
        gap: 1,
        bgcolor: "#234",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Box className="firework"></Box>
      <TextComp
        variant="h3"
        fontWeight="bold"
        color="#D4C5E2"
        value={`Final Score ${score}`}
      ></TextComp>
      <ButtonComp
        id="start"
        className="button"
        type="button"
        value="back to settings!"
        onClick={handleBackToSettings}
      ></ButtonComp>
    </Box>
  );
};

export default FinalScreen;
