import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import TextFieldComp from "../components/form/TextField";
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FirstScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector(state => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate('/settings');
  }

  return (
    <Box sx={{ display: 'grid',gridAutoRows: '5em',
    gap: 1 }}>
      <TextFieldComp type="text" label="Nickname"/>
      <Button sx={{ backgroundColor: 'white'}} onClick={handleBackToSettings} variant="outlined">
        Start game!
      </Button>
      <Button onClick={handleBackToSettings} variant="outlined">
        Admin!
      </Button>
    </Box>
  );
};

export default FirstScreen;