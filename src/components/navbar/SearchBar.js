// Import react
import React from 'react';
// Import the styling
import styled from 'styled-components';
// Importing the search icon
import { Search } from '@styled-icons/heroicons-outline/Search'

// Styling the entire search bar container
const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
`;

// Styling the input text field
const SearchBarInput = styled.input`
    border: 0;
    padding: 0;
    width: 0px;
    height: 35px;
    border-radius: 3px
    position: relative;

    &.active{
        width: 250px;
        padding: 0 10px;
        transition: all .5s .2s ease;
    }
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
    transition: all .5 .5s ease;

    &.active{
        background: beige;
        transition: all .3s ease;
    }
`;

const SearchIcon = styled(Search)`
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

// Creating the search bar
function SearchBar(props) {
    return(
        <SearchBarContainer>
            <SearchBarInput />
            <SearchIconContainer>
                <a href="#"><SearchIcon /></a>
            </SearchIconContainer>
        </SearchBarContainer>
    );
}

export default SearchBar;