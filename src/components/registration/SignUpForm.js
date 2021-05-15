// Importing react
import React from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, Input, MutedLink, BoldLink } from './CommonItems';

function SignUpForm(props) {
    
    return (
        <MinorBoxContainer>
            <FormContainer>

                <Input type="text" placeholder="Most Powerful Alias (username)" />
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="Phone Number" />
                <Input type="text" placeholder="Address" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

            </FormContainer>

            <MutedLink href="#">
                Already have an account? <BoldLink href="#">Login</BoldLink>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default SignUpForm;