// Import react
import React from 'react';
// Import the styling
import styled from 'styled-components';
// importing the account icon
import { UserAccount } from '@styled-icons/boxicons-solid/UserAccount';
// importing link from router-dom
import { Link } from 'react-router-dom';

// Styling the entire search bar container
const LogoutContainer = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
    left: -50px;
`;

// Styling the container for the search icon
const LogoutButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    width: 35px;
    height: 100%;
    background: black;
    border-radius: 3px;
    color: black;
`;

const LogoutClickOnMeNavbar = styled.button`
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

const AccountIcon = styled(UserAccount)`
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50%;
    left: 50%;
    color: black;
    transform: translate(110%, -50%);
    cursor: pointer;
`;

const clearing = () => {
    localStorage.clear();
}
// Creating the search bar
// -------------------------- TOGGLE NOT WORKING
function LogoutButtonNavbar(props) {

    return (
        <LogoutContainer>
            <LogoutButtonContainer>
                <span><Link to='/'><LogoutClickOnMeNavbar onClick={clearing}>Logout</LogoutClickOnMeNavbar></Link></span>
                <span><Link to='/user'><AccountIcon /></Link></span>
            </LogoutButtonContainer>
        </LogoutContainer>
    );
}

export default LogoutButtonNavbar;