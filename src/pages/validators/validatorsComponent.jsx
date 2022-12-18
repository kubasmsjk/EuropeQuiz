import React, { Component } from "react";
import Error from "./error";

class ValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameHasFirstCapitalLetter: false,
            nameContainsOnlyLetters: false,
            loginContainsCapitalLetter: false,
            loginContainsFourToTenCharacters: false,
            passwordValidator: false
        };
    }

    render() {
        const { nameHasFirstCapitalLetter, nameContainsOnlyLetters, loginContainsCapitalLetter, loginContainsFourToTenCharacters, passwordValidator} = this.state;
        return (
        <div>
            <div>Name: <input type="text" id="name" onChange={(e) => this.validateUserNameData(e)}/>
            <Error status={nameHasFirstCapitalLetter} info="Name has to start with capital letter." ></Error>
            <Error status={nameContainsOnlyLetters} info="Name must contain only letters." ></Error>
    
            </div>

            <div>Login:<input type="text" id="login" onChange={(e) => this.validateUserNameData(e)}/>
            <Error status={loginContainsCapitalLetter} info="Login must contain minimum one capital letter." ></Error>
            <Error status={loginContainsFourToTenCharacters} info="Login must contain between 4 and 10 characters." ></Error>
            </div>
             
            <div>Password<input type="password" id="password" onChange={(e) => this.validateUserNameData(e)}/>
            <Error status={passwordValidator} info="Password must contain at least minimum eight characters, at least one uppercase letter, one lowercase letter and one number and one special character." ></Error>
            </div>
        </div>
        );
    }
    validateUserNameData(event) {
        let id = event.target.id;
        let data = event.target.value;
        var letters = /^[A-Za-z]+$/;
        var fourToTenCharacters = /^[a-zA-Z0-9_.-]{4,10}$/;
        var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(id==='name'){
            if (data.length >= 1) {
                if (data[0] === data[0].toUpperCase()) {
                    this.setState({
                        [id + "HasFirstCapitalLetter"]: true 
                    });
                } else { 
                    this.setState({ 
                        [id + "HasFirstCapitalLetter"]: false 
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
        if(id==='login'){
            if (data === data.toLowerCase()) {
                this.setState({
                    [id + "ContainsCapitalLetter"]: false 
                });
            } else { 
                this.setState({ 
                    [id + "ContainsCapitalLetter"]: true 
                });
            }

            if (data.match(fourToTenCharacters)) {
                this.setState({
                    [id + "ContainsFourToTenCharacters"]: true 
                });
            } else { 
                this.setState({ 
                    [id + "ContainsFourToTenCharacters"]: false 
                });
            }
        }
        if(id === 'password'){

            if (data.match(passwordCheck)) {
                this.setState({
                    [id + "Validator"]: true 
                });
            } else { 
                this.setState({ 
                    [id + "Validator"]: false 
                });
            }
        }
        
    }
}
export default ValidationComponent;