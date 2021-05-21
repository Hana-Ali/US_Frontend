// Import react
import React from 'react';
// Import the styling
import styled from 'styled-components';
// Importing the search icon
import { Search } from '@styled-icons/heroicons-outline/Search'
// importing the account icon
import { UserAccount } from '@styled-icons/boxicons-solid/UserAccount';
// importing link from router-dom
import { Link } from 'react-router-dom';

// Styling the entire search bar container
const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
    left: -50px;
`;

// Styling the input text field
const SearchBarInput = styled.input`
    padding: 0;
    height: 35px;
    border-radius: 3px;
    border: 2px solid black;
    position: relative;
    width: 200px;
    padding: 0 10px;
    background-color: transparent;
`;

// Styling the container for the search icon
const SearchIconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    width: 35px;
    height: 100%;
    background: black;
    border-radius: 3px;
    color: black;
`;

const SearchIcon = styled(Search)`
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background: black;
`;



const LoginButtonNavbar = styled.button`
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

// Creating the search bar
// -------------------------- TOGGLE NOT WORKING
function RightSideNavbar(props) {

    return (
        <SearchBarContainer>
            <SearchIconContainer  >
                <span><Link to='/login'><LoginButtonNavbar>Login</LoginButtonNavbar></Link></span>
                <span><Link to='/user'><AccountIcon /></Link></span>
            </SearchIconContainer>
        </SearchBarContainer>
    );
}

export default RightSideNavbar;