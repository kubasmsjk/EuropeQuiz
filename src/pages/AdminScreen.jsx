import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import TextFieldComp from "../components/form/TextField";
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const AdminScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate('/');
  }

  return (
    <Box sx={{display: 'grid', gridAutoRows: '4em',
    gap: 1,bgcolor: "#fdd835",borderRadius: 1, p:3}}>
      <TextFieldComp type="text" label="Login"/>
      <TextFieldComp type="text" label="Password"/>
      <Button onClick={handleBackToSettings} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default AdminScreen;