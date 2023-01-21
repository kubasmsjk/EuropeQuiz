import { Button} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import TextFieldComp from "../components/form/TextField";
import { handleAmountChange, handleScoreChange } from '../redux/actions';
import {useState} from 'react';

const FirstScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleChange = (e) => {
    setNickname(e.target.value);
  }
  
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(5));
    navigate(`/settings/${nickname}`);
  }

  const handleGoToAdminPanel = () => {
    navigate('/admin');
  }

  return (
    <Box sx={{display: 'grid', gridAutoRows: '5em',
    gap: 1,bgcolor: "rgba(255,255,255, 0.95)",borderRadius: 1, p: 2}}>
      <TextFieldComp type="text" value = { nickname } label="Nickname" id="nickname" name = "nickname" onChange = {handleChange}/>
      <Button sx={{ "&:hover": {bgcolor: "#F5CE00" },fontSize: 20,color:'white', backgroundColor: '#FFD700'}} onClick={handleBackToSettings}>
        Start game!
      </Button>
      <Button sx={{ "&:hover": {bgcolor: "#F44200" }, fontSize: 20, color:'white', backgroundColor: '#FF4500'}} onClick={handleGoToAdminPanel}>
        Admin!
      </Button>
    </Box>
  );
};

export default FirstScreen;