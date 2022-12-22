import React from 'react'
import { useNavigate  } from 'react-router-dom';
import SelectField from '../components/form/SelectField'
import TextField from '../components/form/TextField';
import useAxios from '../hooks/useAxios';

const Settings = () => {
    const {response, error, loading} = useAxios ({ url : "/db"})
    const navigate = useNavigate();
    if(loading){
        return (
            <div>
                <p>Twoja Stara będzie się tu kręcić</p>
            </div>
            )
    };

    //if(error){
    //    return (
    //        <div>
    //            <p>Twój stary poszedł nie tak, spróbuj później</p>
    //        </div>
    //        )
    //};

    const difficultyOptions =
    [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" }
    ];

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/questions');
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <SelectField options={response.categories} label = "Category" />
            <SelectField options ={difficultyOptions} label = "Difficulty" />
            <SelectField options ={typeOptions}  label = "Type" />
            <TextField />
            <div><button type ="submit">Get Started</button></div>
        </form>
    </div>
  )
}

export default Settings;