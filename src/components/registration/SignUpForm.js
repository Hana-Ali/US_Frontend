// Importing react
import React from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, SignupInput, MutedLink, SubmitButton } from './CommonItems';
// Importing link
import { Link } from 'react-router-dom';

function SignUpForm(props) {
    

    const BoldLink = {
        fontSize: "12px",
        color: "#fff",
        fontWeight: "500",
        textDecoration: "none"
    };

    return (
        <MinorBoxContainer>
            
            <FormContainer>

                <SignupInput type="text" placeholder="Most Powerful Alias (username)" />
                <SignupInput type="text" placeholder="First Name" />
                <SignupInput type="text" placeholder="Last Name" />
                <SignupInput type="text" placeholder="Phone Number" />
                <SignupInput type="text" placeholder="Address" />
                <SignupInput type="email" placeholder="Email" />
                <SignupInput type="password" placeholder="Password" />

            </FormContainer>


            <SubmitButton type="submit" style={{marginTop: "25px"}}>Signup</SubmitButton>

            <MutedLink href="#">
                Already have an account? <Link to='/login' style={BoldLink}>Login</Link>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default SignUpForm;