// Import react
import React, { useState } from 'react';
// Import the styling
import styled from 'styled-components';
// Importing the search icon
import { Search } from '@styled-icons/heroicons-outline/Search'

// Styling the entire search bar container
const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
`;

// Styling the input text field
const SearchBarInput = styled.input`
    padding: 0;
    height: 35px;
    border-radius: 3px;
    border: 2px solid black;
    position: relative;
    width: 250px;
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

// Creating the search bar
// -------------------------- TOGGLE NOT WORKING
function SearchBar(props) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
        <SearchBarContainer>
            <SearchBarInput className={isActive ? 'active1' : null} />
            <SearchIconContainer className={isActive ? 'active1' : null} onClick={toggleClass} >
                <a href="#"><SearchIcon /></a>
            </SearchIconContainer>
        </SearchBarContainer>
    );
}

export default SearchBar;