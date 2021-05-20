// Importing react
import React, { useState } from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './CommonItems';
// Importing link
import { Link } from 'react-router-dom';

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function LoginForm(props)
{
    // "initial", "sending", "successful", "unsuccessful"
    const [state, setState] = useState("initial");

    // Declare undefined variables for later assignment (ref props)
    let userNameField;
    let passwordField;

    // To instantiate a FormData object
    const formData = new FormData();

    const login = () => {

        const errors = [];

        // 1. Validate the fields
        if (!validatePassword(passwordField.value)) {
            errors.push("Please enter a valid password");
        }

        // 1.1 If there are errors, set the state to "validation error"
        if (errors.length > 0) {
            setState("validation error");
        }
        // 1.2 If there are no errors, set the state to "sending"
        else {
            setState("sending");

            formData.append('userName', userNameField.value);
            formData.append('password', passwordField.value);

            fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, {
                method: 'POST',
                // headers: {"Content-Type": "application/json"},
                body: formData
            })
                // 2.1 If the submission is successful, set the state "successful"
                .then((backendResponse) => backendResponse.json())
                .then((theJson) => {
                    console.log(theJson);
                    setState("successful");
                })
                // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
                .catch((error) => {
                    console.log(error);
                    setState("unsuccessful");
                });
        }
    }

    const BoldLink = {
        fontSize: "12px",
        color: "rgb(241, 196, 15)",
        fontWeight: "500",
        textDecoration: "none"
    };

    return(
        <MinorBoxContainer>
            <FormContainer>

                <Input ref={(elem) => userNameField = elem} type="text" placeholder="Username" />
                <Input ref={(elem) => passwordField = elem} type="password" placeholder="Password" />

            </FormContainer>

            {
                state !== "sending" && state !== "successful" &&
                <SubmitButton onClick={login}
                    type="submit" style={{ marginTop: "25px" }}>Login</SubmitButton>
            }

            { 
                state === "validation error" &&
                <div className="alert alert-danger" role="alert">
                    Incorrect email or password.
                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success" role="alert">
                    You have logged in successfully!
                </div>
            }

            {
                state === "unsuccessful" &&
                <div className="alert alert-danger" role="alert">
                    Internal error. Please try again later.
                </div>
            }

            {
                state === "sending" &&
                <p>Loading...</p>
            }

            <MutedLink href="#">Forgot your password?</MutedLink>
            
            <MutedLink href="#">
                Don't have an account? <Link to='/register' style={BoldLink}>Signup</Link>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default LoginForm;