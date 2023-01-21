import { Button, CircularProgress, FormControl, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams  } from 'react-router-dom';
import SelectField from '../components/form/SelectField'
import TextFieldComp from '../components/form/TextField';
import useAxios from '../hooks/useAxios';
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

const Settings = () => {
    const {response, error, loading} = useAxios ({ url : "/db"});
    const navigate = useNavigate();
    const { nickname } = useParams();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
      };

    if(loading){
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

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/questions');
    };
    
  return (
        <Box>
            <Typography variant="h3" fontWeight="bold" mb={3}>
            Welcome { nickname }
            </Typography>
            <FormControl sx={{display: 'grid', gridAutoRows: '4em',
            gap: 1,bgcolor: "rgba(255,255,255, 0.95)",borderRadius: 1, p:3}}>
                <SelectField options={response.categories} label = "Category" />
                <SelectField options ={difficultyOptions} label = "Difficulty" />
                <SelectField options ={typeOptions}  label = "Type" />
                <TextFieldComp type="number" label="Amount of Questions" onChange = {handleChange}/>
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit" className={Settings.submit} onClick={handleSubmit}>
                        Get Started
                    </Button>
                </Box>
            </FormControl>
        </Box>
  );
};

export default Settings;