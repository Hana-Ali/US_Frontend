// Import react
import React from 'react';
// Import the styling
import styled from 'styled-components';
// importing link from router-dom
import { Link } from 'react-router-dom';

// Styling the entire search bar container
const LoginNavbarContainer = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
    left: -50px;
`;

// Styling the container for the search icon
const LoginButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    width: 35px;
    height: 100%;
    background: black;
    border-radius: 3px;
    color: black;
`;

const LoginClickOnMeNavbar = styled.button`
    position: absolute;
    background-color: black;
    border: none;
    width: 100px;
    height: 35px;
    top: -17px;
    left: -60px;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;

    &:hover {
        cursor: pointer;
        background-color: #25252A;
    }
`;

function LoginButtonNavbar(props) {

    return (
        <LoginNavbarContainer>
            <LoginButtonContainer>
                <span><Link to='/login'><LoginClickOnMeNavbar>Login</LoginClickOnMeNavbar></Link></span>
            </LoginButtonContainer>
        </LoginNavbarContainer>
    );
}

export default LoginButtonNavbar;