import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate  } from 'react-router-dom';
import SelectField from '../components/form/SelectField'
import TextFieldComp from '../components/form/TextField';
import useAxios from '../hooks/useAxios';

const Settings = () => {
    const {response, error, loading} = useAxios ({ url : "/db"});
    const navigate = useNavigate();

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
        <form onSubmit={handleSubmit}>
            <SelectField options={response.categories} label = "Category" />
            <SelectField options ={difficultyOptions} label = "Difficulty" />
            <SelectField options ={typeOptions}  label = "Type" />
            <TextFieldComp type="number" label="Amount of Questions"/>
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
            </Box>
        </form>
  );
};

export default Settings;