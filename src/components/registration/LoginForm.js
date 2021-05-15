// Importing react
import React from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, Input, MutedLink, BoldLink, SubmitButton } from './CommonItems';

function LoginForm(props)
{
    return(
        <MinorBoxContainer>
            <FormContainer>

                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

            </FormContainer>

            <MutedLink href="#">Forgot your password?</MutedLink>
            <SubmitButton type="submit">Login</SubmitButton>
            <MutedLink href="#">
                Don't have an account? <BoldLink href="#">Signup</BoldLink>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default LoginForm;