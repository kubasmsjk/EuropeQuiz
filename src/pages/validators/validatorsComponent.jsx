import React, { Component } from "react";
import Error from "./error";

class ValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailContainsAt: false,
            emailEndsWithDomainEnding: false,
            passwordContainsMinEightLetters: false,
            passwordContainsCapitalLetter: false,
            passwordContainsSpecialCharacters: false,
            passwordContainsMinOneNumber: false
        };
    }

    render() {
        const { emailContainsAt, emailEndsWithDomainEnding, passwordContainsMinEightLetters, passwordContainsCapitalLetter, passwordContainsSpecialCharacters, passwordContainsMinOneNumber } = this.state;
        return (
        <div>
            <div><input type="email" id="email"/>
            <Error status={emailContainsAt} info="Email must contain @" ></Error>
            <Error status={emailEndsWithDomainEnding} info="Emial must have correct domain ending." ></Error>
            </div>
             
            <div><input type="password" id="password" />
            <Error status={passwordContainsMinEightLetters} info="Password must contain at least 8 letters." ></Error>
            <Error status={passwordContainsCapitalLetter} info="Password must contain at least one capital letter." ></Error>
            <Error status={passwordContainsSpecialCharacters} info="Password must contain at least one special character." ></Error>
            <Error status={passwordContainsMinOneNumber} info="Password must contain at least one number." ></Error>
            </div>
        </div>
        );
    }
    validateUserData(event) {
        let id = event.target.id;
        let data = event.target.value;
        var letters = /^[A-Za-z]+$/;
         
        if (data.length >= 1) {
            if (data[0] == data[0].toUpperCase()) {
                this.setState({
                    [id + "HasFirstLetterUppercase"]: true 
                });
            } else { 
                this.setState({ 
                    [id + "HasFirstLetterUppercase"]: false 
                });
            }
            
            if (data.match(letters)) {
                this.setState({
                    [id + "ContainsOnlyLetters"]: true
                });
            } else {
                this.setState({
                    [id + "ContainsOnlyLetters"]: false
                });
            }
        } 
    }
}