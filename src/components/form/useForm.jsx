import React, { useEffect, useState } from 'react'
import {omit} from 'lodash'

const useForm = () => {

    const [values, setvalues] = useState({});

    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {

        switch(name) {
            case 'nickname':
                if(value.length <= 3){
                    setErrors({
                        ...errors,
                        nickname:'Nazwa użytkownika musi być dluższa niz 3 znaki'
                    })
                }else{
                    let newObj = omit(errors, "nickname");
                    setErrors(newObj);
                }
                break;

            default:
                break;

        }
    }

    const a = (event) => {

        event.persist();
        //console.log("elo", event.target.name);
        //console.log("elo1", event.target.value);

        let name = event.target.name;
        let val = event.target.value
        
        validate(event, name, val);

        setvalues({
            ...values,
            [name]:val,
        })
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
        }else {
            alert('Wpisz nickname')
        }

    }
    


    return {
        values,
        errors,
        a,
        handleSubmit
        
    }
}

export default useForm;